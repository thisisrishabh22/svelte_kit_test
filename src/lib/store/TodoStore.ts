export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}


import { v4 as uuid } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data: Array<Todo> = browser ? JSON.parse(localStorage.getItem('st-todos-list') || '[]') ?? [] : [];

export const todos = writable(data);

todos.subscribe((todos) => {
  if (browser) {
    localStorage.setItem('st-todos-list', JSON.stringify(todos));
  }
});

export const addTodo = (title: string) => {
  todos.update((todos) => [{ id: uuid(), title, completed: false }, ...todos]);
}

export const deleteTodo = (id: string) => {
  todos.update((todos) => todos.filter((todo) => todo.id !== id));
}

export const toggleTodo = (id: string) => {
  todos.update((todos) => todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
}

export const editTodo = (id: string, title: string) => {
  todos.update((todos) => todos.map((todo) => todo.id === id ? { ...todo, title } : todo));
}
