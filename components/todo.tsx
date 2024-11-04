import React, { FC } from 'react'
import { Card } from './card'
import { useTodo } from './hooks/userContext'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { getTodos } from '@/app/api/f2later'

interface Props {
  
}

export const Todo: FC<Props> = ({  }) => {


  const {posts, addPost}=useTodo()

  async function onAdd(){
    addPost('')
  }
    
  return (
    <div className='mt-9 ml-6 mb-8'>
        {posts.map((_, index: number)=>(
            <Card index={index}/>
        ))}
        <Button onClick={onAdd} className='w-16 ml-7 bg-purple-600'><Plus/></Button>
    </div>
  )
}