import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  //actions and reducers
  reducers: {
    //add action item in the cart
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    //remove action item in the cart
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    //clear action item in the cart
    clearItem: (state, action) => {
      state.items.length = 0;
    },
  },
});

// {
//     actions :{
//         addItem
//     }
//     reducers:{

//     }
// }

//exporting reducers and actions
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
