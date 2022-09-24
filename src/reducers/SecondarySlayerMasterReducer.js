import { createSlice } from '@reduxjs/toolkit';
import { SECONDARY_SLAYER_MASTER_KEY, readFromStorageOrDefault, writeToStorage } from '../LocalStorage/LocalStorage';

const secondarySlayerMasterSlice = createSlice({
    name: 'secondarySlayerMaster',
    initialState: {
        value: readFromStorageOrDefault(SECONDARY_SLAYER_MASTER_KEY, '')
    },
    reducers: {
        setMaster: (state, action) => {
            writeToStorage(SECONDARY_SLAYER_MASTER_KEY, action.payload);
            state.value = action.payload;
        },
        clearMaster: (state) => {
            writeToStorage(SECONDARY_SLAYER_MASTER_KEY, '');
            state.value = '';
        }
    }
});

export const { setMaster, clearMaster } = secondarySlayerMasterSlice.actions;

export default secondarySlayerMasterSlice.reducer;