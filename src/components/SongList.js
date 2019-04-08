import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render(){
        return(
            <div>songs</div>
        )
    }
}

const mapStateToProps = (state, getOwnProps) => {
    console.log(state)
    console.log(getOwnProps)
    return {
        state,
        getOwnProps
    }
}

export default connect(mapStateToProps)(SongList);