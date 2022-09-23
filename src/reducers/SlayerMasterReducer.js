import { createSlice } from '@reduxjs/toolkit';
import { SLAYER_MASTER_KEY, readFromStorageOrDefault, writeToStorage } from '../LocalStorage/LocalStorage';

const slayerMasterSlice = createSlice({
    name: 'slayerMaster',
    initialState: {
        value: readFromStorageOrDefault(SLAYER_MASTER_KEY, '')
    },
    reducers: {
        setMaster: (state, action) => {
            writeToStorage(SLAYER_MASTER_KEY, action.payload);
            state.value = action.payload;
        },
        clearMaster: (state) => {
            state.value = '';
        }
    }
});

export const { setMaster, clearMaster } = slayerMasterSlice.actions;

export default slayerMasterSlice.reducer;