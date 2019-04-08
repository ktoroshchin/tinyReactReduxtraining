import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {name: 'Shalalala', duration: '4:04'},
        {name: 'All Star', duration: '3:10'},
        {name: 'Macarena', duration: '3:00'},
        {name: 'I want it that way', duration: '4:30'}
    ]
}

const selectedSong = (selectedSong = null, action) => {
    if(action.type === 'SELECTED_SONG'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSong
})
