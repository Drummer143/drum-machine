import Setup from './../Setup/Setup';
import Keypad from '../Keypad/Keypad';
import { setOne, setTwo } from './../../sampleSet';

import './App.css';
import { useState } from 'react';

function App() {
    const [volume, setVolume] = useState(0.5);
    return (
        <div className="app">
            <Keypad sampleSet={setOne} volume={volume} />
            <Setup volume={volume} setVolume={setVolume}/>
        </div>
    );
}

export default App;
