import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { ActionCreators } from './state/index'

const Shop = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2 className='my-2'>Deposit/Widthdraw Money</h2>
            <button className='btn btn-primary mx-2' onClick={ () => {dispatch(ActionCreators.widthdrawMoney(100)) }}>-</button>
            Add This Item To Cart
            <button className='btn btn-primary mx-2'onClick={ ()=> {dispatch(ActionCreators.depositeMoney(100))}}>+</button>
        </div>
    )
}

export default Shop