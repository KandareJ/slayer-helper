import { createSlice } from '@reduxjs/toolkit';

const slayerMasterSlice = createSlice({
    name: 'slayerMaster',
    initialState: {
        value: ''
    },
    reducers: {
        setMaster: (state, action) => {
            state.value = action.payload;
        },
        clearMaster: (state) => {
            state.value = '';
        }
    }
});

export const { setMaster, clearMaster } = slayerMasterSlice.actions;

export default slayerMasterSlice.reducer;