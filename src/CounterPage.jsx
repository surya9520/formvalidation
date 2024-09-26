import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './store/counterSlice'


const CounterPage = () => {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    console.log(count)
  return (
    <>
    <div className='container w-fit flex-col justify-center align-middle text-center m-auto mt-40'>
    <button className='bg-green-600 p-2 text-white mb-3'onClick={()=>dispatch(increment())}>Increment</button>
    <h1 className='text-5xl'>{count}</h1>
    <button className='bg-red-600 w-fit p-2 text-white mt-4'onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    </>
  )
}

export default CounterPage