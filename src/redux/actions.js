export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data
  }
}

export const searchFiltersChange = (text) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text
  }
}
