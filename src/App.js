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
            <Guitar frets={frets} chords={chords}/>
        </div>
    );
}

export default App;
