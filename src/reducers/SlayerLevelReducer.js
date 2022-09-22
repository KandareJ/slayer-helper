import { createSlice } from '@reduxjs/toolkit';

const slayerLevelSlice = createSlice({
    name: 'slayerLevel',
    initialState: {
        value: ''
    },
    reducers: {
        setSlayerLevel: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSlayerLevel } = slayerLevelSlice.actions;

export default slayerLevelSlice.reducer;