import React, { useState } from 'react';
import { useStore } from './hooks/userContext';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { count, } = useStore();
  return (
    <div>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>         
        ))}
        {count}
      </ul>
    </div>
  );
};

export default SearchComponent;
