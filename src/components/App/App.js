import Setup from './../Setup/Setup';
import Keypad from '../Keypad/Keypad';
import { setOne, setTwo } from './../../sampleSet';

import './App.css';
import { useState } from 'react';

function App() {
    const [volume, setVolume] = useState(0.25);
    const [status, setStatus] = useState(true);
    const [currSet, setCurrSet] = useState(true);

    return (
        <div className="app">
            <Keypad sampleSet={currSet ? setOne : setTwo} volume={volume} status={status} />
            <Setup volume={volume} setVolume={setVolume} status={status} setStatus={setStatus} currSet={currSet} setCurrSet={setCurrSet} />
        </div>
    );
}

export default App;
