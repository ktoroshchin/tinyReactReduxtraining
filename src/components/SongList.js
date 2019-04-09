import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions';

class SongList extends Component {

    renderList = () => {
        return this.props.songs.map(song => {
            return (
                <div className="item">
                    <div className="right floated content">
                        <button onClick={() => this.props.selectedSong(song)} className="ui primary button ">Select</button>
                    </div>
                    <div className="content">{song.name}</div>
                </div>
            )
        })
    }

    render(){
        return(
           <div className="ui divided list">
                {this.renderList()}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        songs: state.songs
    }
}

export default connect(mapStateToProps, { selectedSong })(SongList);