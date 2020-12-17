const initialState = '';

//  reducer
export default function filterTracks (state = initialState, action) {
    if (action.type === 'FIND_TRACK') {
        return action.payload; }
    return state;
}