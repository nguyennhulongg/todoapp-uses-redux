import filterReducer from "../components/Filters/FilterSlice";
import todoReducer from "../components/TodoList/TodoSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: filterReducer(state.filters, action),
    todoList: todoReducer(state.todoList, action)
  }
}

export default rootReducer;
