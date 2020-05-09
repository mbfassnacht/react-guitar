import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AcusticBox extends Component {
    state = {
        sounding: false,
    };

    static propTypes = {
        frequency: PropTypes.number.isRequired,
    };

    componentDidMount() {
        this.ctx = null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.frequency !== prevProps.frequency) {
            if (this.props.frequency === null) {
                this.oscillator.frequency.value = null;
                this.setState({ sounding: false });
            } else {
                if (this.ctx === null) {
                    window.AudioContext = window.AudioContext || window.webkitAudioContext;
                    this.ctx = new AudioContext();
                    this.oscillator = this.ctx.createOscillator();
                    this.oscillator.connect(this.ctx.destination);
                    this.oscillator.frequency.value = null;
                    this.oscillator.start();
                }

                let real = new Float32Array(2);
                let imag = new Float32Array(2);
                let ac = new AudioContext();

                real[0] = 0;
                real[1] = 3;
                real[2] = 6;
                real[3] = 9;
                real[4] = 12;
                real[5] = 15;
                real[6] = 18;

                imag[0] = 0;
                imag[1] = 1.5;
                imag[2] = 3;
                imag[3] = 4.5;
                imag[4] = 6;
                imag[5] = 7.5;
                imag[6] = 9;
                imag[7] = 10.5;
                imag[8] = 12;

                const wave = ac.createPeriodicWave(real, imag, {disableNormalization: true});

                this.oscillator.setPeriodicWave(wave);

                this.oscillator.frequency.value = this.props.frequency;
                console.log(this.props.frequency);
                this.setState({ sounding: true });
            }
        }
    }

    render() {
        return (
            <div className="b-acustic-sound" />
        );
    }
}
