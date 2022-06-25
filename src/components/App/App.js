import Setup from './../Setup/Setup';
import Keypad from '../Keypad/Keypad';
import { setOne, setTwo } from './../../sampleSet';

import './App.css';

function App() {
    return (
        <div className="app">
            <Keypad sampleSet={setOne}/>
            {/* <Setup /> */}
        </div>
    );
}

export default App;
