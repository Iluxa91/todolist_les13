import axios from 'axios'
import {imageListItemBarClasses} from "@mui/material";

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type GetTaskType = {
    items:Array<TaskType>
    totalCount:number
    error: string
}
type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '7905c906-2fee-4cde-a4cb-5c79d4d4021d'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

// type CreateTaskType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: TaskType
// }
//
// type DeleteTaskType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {  }
// }
// type UpdateTaskType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: TaskType
// }


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
        return promise
    },
    getTodolist() {
        const promise = instance.get<Array<TodolistType>>(`todo-lists/`)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todolistId}`)
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title})
        return promise
    },
    getTasks(todolistId: string) {
        const promise = instance.get<GetTaskType>(`todo-lists/${todolistId}/tasks`)
        return promise
    },
    createTask(todolistId: string, title: string) {
        const promise = instance.post<ResponseType<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks`, {title})
        return promise
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        const promise = instance.put<ResponseType<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
        return promise
    },
    deleteTask(todolistId:string, taskId:string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
        return promise
    }


}

