import React, { Component } from 'react';
import './app.scss';
import Guitar from './components/Guitar/Guitar';

export default class App extends Component {
    state = {
        frets: 12,
        chords: [
            {
                tone: 'E',
                frequency: 82.41,
                color: 'gold',
            },
            {
                tone: 'A',
                frequency: 110.00,
                color: 'gold',
            },
            {
                tone: 'D',
                frequency: 146.83,
                color: 'gold',
            },
            {
                tone: 'G',
                frequency: 196.00,
                color: 'silver',
            },
            {
                tone: 'B',
                frequency: 246.94,
                color: 'silver',
            },
            {
                tone: 'E',
                frequency: 329.63,
                color: 'silver',
            }
        ]
    };

    onChangeFrequency = (e) => {
        const index = e.currentTarget.getAttribute('data-index');
        const value = Number.parseFloat(e.currentTarget.value);
        this.setState(prevState => {
            const chords = prevState.chords;
            chords[index].frequency = value;
            return { chords };
        })
    };

    render() {
        return (
            <div className="app">
                <h1>Guitar App</h1>
                <a
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    href="https://github.com/mbfassnacht/react-guitar">
                    <img
                        width="149"
                        height="149"
                        src="https://github.blog/wp-content/uploads/2008/12/forkme_left_white_ffffff.png?resize=149%2C149"
                        className="attachment-full size-full"
                        alt="Fork me on GitHub"
                        data-recalc-dims="1" />
                </a>
                <Guitar frets={this.state.frets} chords={this.state.chords}/>
                <form>
                    <label htmlFor="6th">
                        6th Chord
                        <input onChange={this.onChangeFrequency} data-index={0} type="number" value={this.state.chords[0].frequency} id="6th" />
                    </label>
                    <label htmlFor="5th">
                        5th Chord
                        <input onChange={this.onChangeFrequency} data-index={1} type="number" value={this.state.chords[1].frequency} id="5th" />
                    </label>
                    <label htmlFor="4th">
                        4th Chord
                        <input onChange={this.onChangeFrequency} data-index={2} type="number" value={this.state.chords[2].frequency} id="4th" />
                    </label>
                    <label htmlFor="3rd">
                        3rd Chord
                        <input onChange={this.onChangeFrequency} data-index={3} type="number" value={this.state.chords[3].frequency} id="3rd" />
                    </label>
                    <label htmlFor="2nd">
                        2nd Chord
                        <input onChange={this.onChangeFrequency} data-index={4} type="number" value={this.state.chords[4].frequency} id="2nd" />
                    </label>
                    <label htmlFor="1st">
                        1st Chord
                        <input onChange={this.onChangeFrequency} data-index={5} type="number" value={this.state.chords[5].frequency} id="1st" />
                    </label>
                </form>
            </div>
        );
    }
}
