const initialState = {
  todos:[]
};

//acciones
const ADD_TODO = 'todos/ADD_TODO';

//Crear el store
export function addTodo(text){
  return {
    type: ADD_TODO,
    text: text
  };
}

function reducer (state = initialState, action){
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text
          }
        ]
      }
      break;
    default:
      return state;
      break;
  }
}

export default reducer;
