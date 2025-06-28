import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name : "task",
    initialState : {
        list : [],
    },
    reducers: {
        addTask: (state, action) =>{
            state.list.push(action.payload);
        },
        deleteTask : (state, action) =>{
            state.list = state.list.filter((task, i) => i !== action.payload);
        },
        clearAll : (state) =>{
            state.list = [];
        }
    },
});

export const {addTask, deleteTask, clearAll} = taskSlice.actions;
export default taskSlice.reducer;