import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mood: 'happy'
        }
    }

    handleCLick = () => {
        let moodChange = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({mood: moodChange})
    }

    render(){
        return <div onClick={this.handleCLick}>{this.state.mood}</div>
    }

}

export default SimpleComponent
