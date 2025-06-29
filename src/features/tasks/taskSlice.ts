import { Task, TaskState } from "@/constants/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: TaskState = {
    list : [],
}

const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers: {
        addTask: (state, action : PayloadAction<Task>) =>{
            state.list.push(action.payload);
            // when we run this reducer, it receives an "action" object that include a type and a payload where type is made through the name of slice along with the function name in which we are performing a task 
            // here is the action look a like: {type : 'task/addTask', payload : INPUTFIELD.DATA}
            // Now after updating the logic we will get the action in different form we will get a object with another object in it like we create a name and tag now, and in name there's come value form input field and in tag come value from select and option
            // console.log(action);
            // {type : 'task/addTask', payload : {
            //   name : INPUTFIELD.DATA
            //   tag : SELECTFIELD.DATA   
            // }}
        },
        deleteTask : (state, action) =>{
            state.list = state.list.filter((_, i) => i !== action.payload);
            // console.log(action.payload);
            // console.log(action.type);
        },
        editTask: (state, action) =>{
            console.log(state, action);
        },
        clearAll : (state) =>{
            state.list = [];
        },
    },
});

export const {addTask, deleteTask, clearAll} = taskSlice.actions;
export default taskSlice.reducer;