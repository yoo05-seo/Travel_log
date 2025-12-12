import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
    name: 'cart',
    initialState : [],  
    reducers:{
        countDown(state, action){
            if(state[action.payload].amount <= 1){
            window.alert('상품 최소 수량은 1입니다.')
            }else{
            state[action.payload].amount -= 1
        }
        },
        countUp(state, action){
            state[action.payload].amount += 1
            
        },
        sortNAme(state){
            state.sort((a,b)=> a.item > b.item ? 1 : -1)
        },
        addItem(state, action){
            state.push(action.payload)
        },
        deleteItem(state, action){
            state.splice(action.payload)
        }
    }
})

export const {countDown, countUp, sortNAme, addItem, deleteItem} = cart.actions

export default cart.reducer