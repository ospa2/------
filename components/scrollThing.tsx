import React, { useState, useEffect } from 'react';

const HorizontalScroll: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      // Получаем текущее положение прокрутки

      setScrollPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Привязываем обработчик к событию прокрутки
    window.addEventListener('mousemove', handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('mousemove', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',   // Фиксированное положение
        top: `${scrollPosition.y/10}px`,          // Расположим элемент вертикально посередине
        left: `${scrollPosition.x/10}px`,  // Горизонтальное движение зависит от позиции прокрутки
        transition: 'left 0.1s ease-out',  // Плавное движение
        backgroundColor: 'magenta',
        padding: '20px',
        borderRadius: '8px',
        zIndex: 10
      }}
    >
      Движущийся элемент
    </div>
  );
};

export default HorizontalScroll;
