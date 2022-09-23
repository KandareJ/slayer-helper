import { createSlice } from '@reduxjs/toolkit';
import { SLAYER_UNLOCKS_KEY, readFromStorageOrDefault, writeToStorage } from '../LocalStorage/LocalStorage';

const slayerUnlocksSlice = createSlice({
    name: 'slayerUnlocks',
    initialState: {
        value: readFromStorageOrDefault(SLAYER_UNLOCKS_KEY, [])
    },
    reducers: {
        addSlayerUnlock: (state, action) => {
            const slayerUnlocks = [...state.value, action.payload];

            writeToStorage(SLAYER_UNLOCKS_KEY, slayerUnlocks);
            state.value = slayerUnlocks;
        },
        removeSlayerUnlock: (state, action) => {
            const slayerUnlocks = state.value.filter((task) => {
                return task !== action.payload;
            });

            writeToStorage(SLAYER_UNLOCKS_KEY, slayerUnlocks);
            state.value = slayerUnlocks;
        }
    }
});

export const { addSlayerUnlock, removeSlayerUnlock } = slayerUnlocksSlice.actions;

export default slayerUnlocksSlice.reducer;