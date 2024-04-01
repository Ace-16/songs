import { combineReducers } from 'redux'

export const songsReducer = () => {
    return [
        { title: 'Right Now', duration: '4:00' },
        { title: 'Everything I need', duration: '3:20' },
        { title: 'Blue skies', duration: '3:26' },
        { title: 'Keep you', duration: '4:49' }
    ];
};

export const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});