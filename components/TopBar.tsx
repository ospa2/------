import React, { FC, useContext } from 'react'
import { Sin } from './sin'
import Papa from './papa'
export const TopBar= () => {

  const {count}= 12;

  return (
    <>
    <div>
      {/* переменная */}
    </div>
    <div>
      <Papa>
        <Sin/>
      </Papa>
    </div>
    <div>
      <h1>{count}</h1>
    </div>
    </>
  )
}