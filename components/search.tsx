import React, { FC, useEffect, useState } from 'react'
import { Box } from './Box'

interface Props {
  
}

const foods = [
    {
        value: 'banan',
        label: 'Банан',
        calories: 100
    },
    {
        value: 'apple',
        label: 'Яблоко',
        calories: 60
    },
    {
        value: 'orange',
        label: 'Апельсин',
        calories: 50
    },
    {
        value: 'cola',
        label: 'Кола',
        calories: 1
    },
    {
        value: 'watermelon',
        label: 'Арбуз',
        calories: 50
    },
    {
        value: 'grape',
        label: 'Виноград',
        calories: 100
    },
    {
        value: 'gum',
        label: 'Жвачка',
        calories: 20
    }
]

export const Search: FC<Props> = ({  }) => {
    const [n, setN] = useState('')
    const fitems = foods.filter((item =>
        item.value.includes(n)))
  return (
    <>
        <input placeholder='пиши сюда' onChange={(e)=>{setN(e.target.value)}}>
        </input>
        <Box className='text-yellow-200'>        
            {fitems.map((fitem)=>(
                <h1 className='text-white'>{fitem.label}</h1>
            ))}
            <h1>place</h1>
        </Box>
    </>
  )
}