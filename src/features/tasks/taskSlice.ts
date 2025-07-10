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
            deleteTask : (state, action : PayloadAction<number>) =>{
                // ✅ What happens here:
                // We're using the `filter` method to create a new array.
                // The `filter` function goes through each item in `state.list` and includes it in the new array only if its index `i` does NOT match `action.payload`.

                // ✅ In simple terms:
                // If `action.payload` is the index of the task we want to delete,
                // this line keeps all other tasks and removes the one at that index.
                state.list = state.list.filter((_, i) => i !== action.payload);
                // ✅ About `action`:
                // The `action` object always has a `type` and a `payload`.
                // In this reducer, the payload is expected to be a `number` (index of the task to delete).
                // Example action:
                // {
                //   type: "task/deleteTask",
                //   payload: 2
                // }
                console.log(action);
            },
             updateTask: (
                state,
                action: PayloadAction<{ index: number; updatedTask: Task }>
                ) => {
                const { index, updatedTask } = action.payload;
                state.list[index] = { ...updatedTask, completed: state.list[index].completed };
                },
                toggleTaskStatus: (state, action: PayloadAction<number>) => {
                const index = action.payload;
                state.list[index].completed = !state.list[index].completed;
            },
            clearAll : (state) =>{
                state.list = [];
            },
        },
    });

    export const {addTask, deleteTask, updateTask, toggleTaskStatus, clearAll} = taskSlice.actions;
    export default taskSlice.reducer;