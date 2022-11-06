import { createSelector } from "reselect";

export const todoListSelector =  state => state.todoList;

export const searchTodoSelector = state => state.filters.search;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTodoSelector,
  (todoList, searchText) => {
    return todoList.filter(todo => {
      return todo.name.includes(searchText)
    })
})
