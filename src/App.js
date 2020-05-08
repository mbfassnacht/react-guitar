import React from 'react';
import './app.scss';
import Guitar from './components/Guitar/Guitar';

function App() {
    const chords = [
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
    ];

    const frets = 12;

    return (
        <div className="app">
            <h1>Guitar App</h1>
            <Guitar frets={frets} chords={chords}/>
        </div>
    );
}

export default App;
