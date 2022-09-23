import { createSlice } from '@reduxjs/toolkit';
import { BLOCK_LIST_KEY, readFromStorageOrDefault, writeToStorage } from '../LocalStorage/LocalStorage';

const blockListSlice = createSlice({
    name: 'blockList',
    initialState: {
        value: readFromStorageOrDefault(BLOCK_LIST_KEY, [])
    },
    reducers: {
        addBlockList: (state, action) => {
            const blockList = [...state.value, action.payload];

            writeToStorage(BLOCK_LIST_KEY, blockList);
            state.value = blockList;
        },
        removeBlockList: (state, action) => {
            const blockList = state.value.filter((task) => {
                return task !== action.payload;
            });

            writeToStorage(BLOCK_LIST_KEY, blockList);
            state.value = blockList
        }
    }
});

export const { addBlockList, removeBlockList } = blockListSlice.actions;

export default blockListSlice.reducer;