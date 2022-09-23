import { createSlice } from '@reduxjs/toolkit';
import { readIntFromStorageOrDefault, writeToStorage, SLAYER_LEVEL_KEY } from '../LocalStorage/LocalStorage';

const slayerLevelSlice = createSlice({
    name: 'slayerLevel',
    initialState: {
        value: readIntFromStorageOrDefault(SLAYER_LEVEL_KEY, '')
    },
    reducers: {
        setSlayerLevel: (state, action) => {
            writeToStorage(SLAYER_LEVEL_KEY, action.payload);
            state.value = action.payload;
        }
    }
});

export const { setSlayerLevel } = slayerLevelSlice.actions;

export default slayerLevelSlice.reducer;