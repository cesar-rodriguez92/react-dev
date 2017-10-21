const initialState = {
  notes:[]
};

//acciones
const ADD_NOTE = 'todos/ADD_NOTE';

//Action creator
export function addNote(text){
  return {
    type: ADD_NOTE,
    text: text
  };
}

function reducer(state= initialState, action){
  switch (action.type) {
    case ADD_NOTE:
      return{
        ... state,
        notes: [
          ...state.notes,
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
