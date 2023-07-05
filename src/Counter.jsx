import React, {useEffect, useState} from 'react'
import minusIcon from './images/icon-minus.svg'
import plusIcon from './images/icon-plus.svg'

export default function Counter({count, setCount}) {

    function subtract() {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }

    function add() {
        setCount(prev => prev + 1)
    }

  return (
    <div className='counter'>
      <img src={minusIcon} onClick={subtract} alt="minus sign" />
      <h3>{count}</h3>
      <img src={plusIcon} onClick={add} alt="minus sign" />
    </div>
  )
}
