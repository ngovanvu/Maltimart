import { createSlice } from "@reduxjs/toolkit";
//! cài đặt cho header bật ở icon , Ui-carts tắt ở dấu x,layout thay đổi giá trị
const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState:{cartIsVisible:false},
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})
export const cartUiActions = cartUiSlice.actions
export default cartUiSlice.reducer