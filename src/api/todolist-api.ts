import axios from 'axios'
import {imageListItemBarClasses} from "@mui/material";

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'b160086d-ae3b-4782-9337-05b95619c0c6'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title})
        return promise
    },
    getTodolist() {
        const promise = instance.get<Array<TodolistType>>(`todo-lists/`)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
        return promise
    },
    createTodolist(title:string) {
        const promise = instance.post<ResponseType<{item:TodolistType}>>('todo-lists', {title})
        return promise
    }



}

