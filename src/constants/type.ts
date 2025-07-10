import { store } from "@/store/store";

export interface Task {
    name : string,
    tag : string,
    completed?: boolean;
};
export interface TaskState {
    list : Task[],
};
export type RootState = ReturnType<typeof store.getState>;
