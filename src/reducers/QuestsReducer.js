import { createSlice } from '@reduxjs/toolkit';

const questsSlice = createSlice({
    name: 'quests',
    initialState: {
        value: []
    },
    reducers: {
        addQuest: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeQuest: (state, action) => {
            state.value = state.value.filter((task) => {
                return task !== action.payload;
            })
        }
    }
});

export const { addQuest, removeQuest } = questsSlice.actions;

export default questsSlice.reducer;