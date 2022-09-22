import { createSlice } from '@reduxjs/toolkit';

const combatLevelSlice = createSlice({
    name: 'combatLevel',
    initialState: {
        value: ''
    },
    reducers: {
        setCombatLevel: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setCombatLevel } = combatLevelSlice.actions;

export default combatLevelSlice.reducer;