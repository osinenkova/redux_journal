const initialState = [
  'A Horse With No Name',
  'Back to Black'
]

//  reducer
export default function playlist (state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
      return [
        ...state,
        action.payload
      ];
    } else if (action === 'DELETE_TRACK') {
        return [
          ...state,
          action.payload
        ]
      }
    return state;
  }