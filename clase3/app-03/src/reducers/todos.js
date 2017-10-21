const initialState = {
  todos:[]
};

//Se crean acciones
const ADD_TODO = 'todos/ADD_TODO';

//Luego se crea el action createStore
export function addTodo(text){
  return{
    type: ADD_TODO,
    text: text
  };
}



function reducer(state = initialState, action){
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
  return state;
}

export default reducer;
