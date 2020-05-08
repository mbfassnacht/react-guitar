import React, { Component } from 'react';


export default class AcusticBox extends Component {
    state = {
        sounding: false,
    };

    componentDidMount() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        this.oscillator = ctx.createOscillator();

        let real = new Float32Array(2);
        let imag = new Float32Array(2);
        let ac = new AudioContext();

        real[0] = 0;
        imag[0] = 0;
        real[1] = 10;
        imag[1] = 10;

        const wave = ac.createPeriodicWave(real, imag, {disableNormalization: true});

        this.oscillator.setPeriodicWave(wave);

        this.oscillator.connect(ctx.destination);
        this.oscillator.frequency.value = null;
        this.oscillator.start();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.frequency !== prevProps.frequency) {
            if (this.props.frequency === null) {
                this.oscillator.frequency.value = null;
                this.setState({ sounding: false });
            } else {
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
