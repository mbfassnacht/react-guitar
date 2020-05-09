import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './chord.scss';
import AcusticSound from '../AcusticSound/AcusticSound';

export default class Chord extends Component {
    static propTypes = {
        tone: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        frequency: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
    };

    state = {
        currentFrequency: null
    };

    onMouseDown = (e) => {
        if (this.state.currentFrequency === null) {
            const positionPressed = e.clientX;
            const guitarLength = e.currentTarget.offsetWidth;
            const percentage = (100 * positionPressed) / guitarLength;
            const maxFrequency = this.props.frequency * 2;
            const frequencyGenerated = this.props.frequency + (percentage * maxFrequency / 100);
            this.setState({currentFrequency: frequencyGenerated});
        } else {
            this.setState({ currentFrequency: null })
        }
    };

    render() {
        return (
            <div
                onMouseUp={this.onMouseUp}
                onMouseDown={this.onMouseDown}
                className='b-chord'
            >
                <div className={`effective-chord ${this.props.color}`} style={{height: `${this.props.size}px`}} />
                <AcusticSound frequency={this.state.currentFrequency} />
            </div>
        );
    }
}
