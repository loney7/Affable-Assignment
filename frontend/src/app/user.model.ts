import { Todo } from "./todo.model";

// Frontend todo Model
export interface User {
    username: String;
    tasks: Array<Todo>;
    _id: String;
}