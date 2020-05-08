import React, { Component } from 'react';


export default class AcusticBox extends Component {
    state = {
        sounding: false,
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
                const hz = this.props.frequency;
                real[0] = hz;
                imag[0] = hz/8;
                real[1] = hz/2;
                imag[1] = hz/4;
                real[2] = hz/4;
                imag[2] = hz/2;
                real[3] = hz/8;
                imag[3] = hz/1;

                const wave = ac.createPeriodicWave(real, imag, {disableNormalization: true});

                this.oscillator.setPeriodicWave(wave);

                this.oscillator.frequency.value = this.props.frequency;
                this.setState({ sounding: true });
            }
        }
    }

    render() {
        return (
            <div className="b-acustic-box" />
        );
    }
}
