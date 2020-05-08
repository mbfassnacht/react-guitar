import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './chord.scss';

export default class Chord extends Component {
    static propTypes = {
        tone: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        frequency: PropTypes.number.isRequired,
        onChordPressed: PropTypes.func.isRequired,
        onChordReleased: PropTypes.func.isRequired,
        size: PropTypes.number.isRequired,
    };

    onMouseDown = (e) => {
        const positionPressed = e.clientX;
        const guitarLength = e.currentTarget.offsetWidth;
        const percentage = (100 * positionPressed) / guitarLength;
        const maxFrequency = this.props.frequency * 2;
        const frequencyGenerated = this.props.frequency + (percentage * maxFrequency / 100);
        this.props.onChordPressed(frequencyGenerated);
    };

    render() {
        return (
            <div
                onMouseUp={this.props.onChordReleased}
                onMouseDown={this.onMouseDown}
                className='b-chord'
            >
                <div className={`effective-chord ${this.props.color}`} style={{height: `${this.props.size}px`}} />
            </div>
        );
    }
}
