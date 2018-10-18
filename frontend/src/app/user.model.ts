import { Todo } from "./todo.model";

export interface User {
    username: String;
    tasks: Array<Todo>;
    _id: String;
}