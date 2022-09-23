import { createSlice } from '@reduxjs/toolkit';
import { COMBAT_LEVEL_KEY, writeToStorage, readIntFromStorageOrDefault } from '../LocalStorage/LocalStorage';

const combatLevelSlice = createSlice({
    name: 'combatLevel',
    initialState: {
        value: readIntFromStorageOrDefault(COMBAT_LEVEL_KEY, '')
    },
    reducers: {
        setCombatLevel: (state, action) => {
            state.value = action.payload;
            writeToStorage(COMBAT_LEVEL_KEY, action.payload);
        }
    }
});

export const { setCombatLevel } = combatLevelSlice.actions;

export default combatLevelSlice.reducer;