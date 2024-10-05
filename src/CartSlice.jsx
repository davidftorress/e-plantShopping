import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    eraseItem: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if (existingItem && existingItem.quantity >0 ) {
            existingItem.quantity--;
        }else{
            state.items = state.items.filter(item => item.name !== action.payload.name);
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
}
    
    },
  },
});

export const { addItem, removeItem, updateQuantity, eraseItem } = CartSlice.actions;

export default CartSlice.reducer;
