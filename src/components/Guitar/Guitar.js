import React, { Component } from 'react';
import Chord from '../Chord/Chord';
import PropTypes from 'prop-types';
import './guitar.scss';
import Fret from '../Fret/Fret';

export default class Guitar extends Component {

    static propTypes = {
        frets: PropTypes.number.isRequired,
        chords: PropTypes.arrayOf(PropTypes.shape({
            tone: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            frequency: PropTypes.number.isRequired,
        })),
    };

    renderFrets() {
        const frets = new Array(this.props.frets);
        for (let i = 0; i < this.props.frets; i++) {
            let dots = 0;
            if (i !== 0 && i % 2 === 0 ){
                dots = 1;
            }

            if (i !== 0 &&  i % 11 === 0 ){
                dots = 2;
            }

            frets[i] = {
                dots,
            }
        }

        return(
            <div className="frets">
                {
                    frets.map((fret, index) => <Fret width={100 / this.props.frets} dots={fret.dots} key={index}/>)
                }
            </div>
        );
    }

    render() {
        return (
            <div className='b-guitar'>
                {this.renderFrets()}
                <div className="chords">
                    {this.props.chords.map((chord, index) => <Chord color={chord.color} size={10/(index + 1)} onChordReleased={this.onChordReleased} onChordPressed={this.onChordPressed} key={chord.frequency} frequency={chord.frequency} tone={chord.tone} />)}
                </div>
            </div>
        );
    }
}
