import { createSlice } from '@reduxjs/toolkit';

const desiredTaskSlice = createSlice({
    name: 'desiredTasks',
    initialState: {
        value: []
    },
    reducers: {
        addDesiredTask: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeDesiredTask: (state, action) => {
            state.value = state.value.filter((task) => {
                return task !== action.payload;
            })
        }
    }
});

export const { addDesiredTask, removeDesiredTask } = desiredTaskSlice.actions;

export default desiredTaskSlice.reducer;