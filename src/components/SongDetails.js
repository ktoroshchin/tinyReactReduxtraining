import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({selectedSong}) => {
    if(!selectedSong){
        return <div>Select Song</div>
    }
    return (
        <div>
            <h1>Song name: {selectedSong.name}</h1> 
            <h4> Duration: {selectedSong.duration}</h4>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails)