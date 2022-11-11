import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantilty: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantilty++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(existingItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantilty),
        0
      );
    //   console.log(state.totalQuantity);
    //   console.log(state.cartItems);
    //   console.log(newItem);
    },

     //* ======Remove decrease Item=======
     removeItem(state,action){
      const missItem = action.payload;
      const existingItem = state.cartItems.find(
        item => item.id === missItem)
        state.totalQuantity--
      if (existingItem.quantilty === 1) {
          state.cartItems = state.cartItems.filter(item => item.id !== missItem)
        }
        else{
          existingItem.quantilty--
          existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
        }
        //?(item.quantilty),0 vì sao Bỏ 1 số bất kỳ ở sau thì item nó k chạy về âm (0initialvalue)
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantilty),0
        );
    },
    //*======Delete Item========
    deleteItem(state,action){
      const id = action.payload
      const existingItem = state.cartItems.find(
        item => item.id === id)
      if(existingItem){
        state.cartItems = state.cartItems.filter(item => item.id !== id )
        state.totalQuantity = state.totalQuantity - existingItem.quantilty
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantilty) , 0
      );

    }
  },
});
export const cartActions = cartSlice.actions
export default cartSlice.reducer