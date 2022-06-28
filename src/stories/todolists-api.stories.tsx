import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = todolistAPI.createTodolist("newTodolist")
        promise.then((res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '07f24f3e-f6c9-488b-acce-2f78540d0636';
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'ee0acb6e-9639-4849-8daa-5c220fb55aac'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
            .then((res) => {

                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '3b9918f7-ce54-47c0-948a-f6697d72cea5'
        todolistAPI.getTasks(todolistId)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '3b9918f7-ce54-47c0-948a-f6697d72cea5'
        todolistAPI.createTask(todolistId, 'newTask1')
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = 'c2d79e57-dba6-4d8d-bedb-e24aac820e1b'
        const todolistId = '99383b08-8409-4a3d-a2d9-f239d5d74ac5'
        todolistAPI.updateTask(todolistId, taskId, 'task15')
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = '83213d29-aa0f-4e77-81f7-456f38540451'
        const todolistId = '99383b08-8409-4a3d-a2d9-f239d5d74ac5'
        todolistAPI.deleteTask(todolistId, taskId)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}