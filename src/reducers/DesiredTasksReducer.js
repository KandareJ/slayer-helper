import { createSlice } from '@reduxjs/toolkit';

import { DESIRED_TASKS_KEY, readFromStorageOrDefault, writeToStorage } from '../LocalStorage/LocalStorage';

const desiredTaskSlice = createSlice({
    name: 'desiredTasks',
    initialState: {
        value: readFromStorageOrDefault(DESIRED_TASKS_KEY, [])
    },
    reducers: {
        addDesiredTask: (state, action) => {
            const desiredTasks = [...state.value, action.payload];
            writeToStorage(DESIRED_TASKS_KEY, desiredTasks);

            state.value = desiredTasks;
        },
        removeDesiredTask: (state, action) => {
            const desiredTasks = state.value.filter((task) => {
                return task !== action.payload;
            });
            writeToStorage(DESIRED_TASKS_KEY, desiredTasks);

            state.value = desiredTasks;
        }
    }
});

export const { addDesiredTask, removeDesiredTask } = desiredTaskSlice.actions;

export default desiredTaskSlice.reducer;