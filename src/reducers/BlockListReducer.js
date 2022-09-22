import { createSlice } from '@reduxjs/toolkit';

const blockListSlice = createSlice({
    name: 'blockList',
    initialState: {
        value: []
    },
    reducers: {
        addBlockList: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeBlockList: (state, action) => {
            state.value = state.value.filter((task) => {
                return task !== action.payload;
            })
        }
    }
});

export const { addBlockList, removeBlockList } = blockListSlice.actions;

export default blockListSlice.reducer;