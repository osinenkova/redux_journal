const initialState =  [
    'My home playlist',
    'My work playlist'
    ]
  
  //  reducer
  export default function playlist (state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.payload
        ];
    } else if (action === 'DELETE_PLAYLIST') {
        return [
            ...state,
            action.payload
        ]
    }
      return state;
  }
  