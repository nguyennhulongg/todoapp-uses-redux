const initState = [
  { name: 'Về quê thăm bố', completed: false, id: 1, priority: 'Medium' },
  { name: 'Learn Redux', completed: true, id: 2, priority: 'High' }
]

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state.todoList, action.payload]
      default:
        return state;
  }
}

export default todoReducer;
