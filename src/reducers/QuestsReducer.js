import { createSlice } from '@reduxjs/toolkit';
import { QUESTS_KEY, readFromStorageOrDefault, writeToStorage } from '../LocalStorage/LocalStorage';

const questsSlice = createSlice({
    name: 'quests',
    initialState: {
        value: readFromStorageOrDefault(QUESTS_KEY, [])
    },
    reducers: {
        addQuest: (state, action) => {
            const quests = [...state.value, action.payload];

            writeToStorage(QUESTS_KEY, quests);
            state.value = quests;
        },
        removeQuest: (state, action) => {
            const quests = state.value.filter((task) => {
                return task !== action.payload;
            });

            writeToStorage(QUESTS_KEY, quests);
            state.value = quests;
        }
    }
});

export const { addQuest, removeQuest } = questsSlice.actions;

export default questsSlice.reducer;