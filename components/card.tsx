import React, { FC, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Check } from 'lucide-react'
import { useTodo } from './hooks/userContext'
import { getTodos, setTodos } from '@/app/api/f2later'
import useDebounce from './hooks/useDebounce'

interface Props {
  index: number
}

export const Card: FC<Props> = ({ index}) => {
    const {posts, deletePost, updatePost}=useTodo()
    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebounce(inputValue, 500);

    function onDelete(){
      deletePost(index)
    }
    
    function update(value: any){
      updatePost(index, value)
      setInputValue(value)
    }
    useEffect(() => {
      if (debouncedInputValue.trim()) {
        console.log('Добавляем пост:', debouncedInputValue);
        setTodos(debouncedInputValue)
        setInputValue(''); // Сброс инпута
        console.log(getTodos())
      }
    }, [debouncedInputValue]);


  return (
    <div className='mt-9 ml-6 mb-8'>     
       <input placeholder='введите текст' value={posts[index]} onChange={(e)=>(update(e.target.value))} />
     <Button onClick={onDelete} className='w-16 ml-7 bg-purple-600'><Check/></Button>
    </div>
  )
}