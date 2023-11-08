import axios from 'axios';

const api = axios.create({ baseURL: "https://dummyjson.com/todos" });

export async function getTasks() {
    return await api.get();
}

export async function deleteTask(taskId) {
    return await api.delete(`/${taskId}`);
}

export async function addTask(task) {
    return await api.post('/add', {
        todo: task,
        completed: false,
        userId: 5
    });
}

export async function editTask(taskId, task, isCompleted, userId) {
    return await api.put(`/${taskId}`, {
        todo: task,
        completed: isCompleted,
        userId: userId
    });
}