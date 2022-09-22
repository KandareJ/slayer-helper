import { createSlice } from '@reduxjs/toolkit';

const slayerUnlocksSlice = createSlice({
    name: 'slayerUnlocks',
    initialState: {
        value: []
    },
    reducers: {
        addSlayerUnlock: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeSlayerUnlock: (state, action) => {
            state.value = state.value.filter((task) => {
                return task !== action.payload;
            })
        }
    }
});

export const { addSlayerUnlock, removeSlayerUnlock } = slayerUnlocksSlice.actions;

export default slayerUnlocksSlice.reducer;