import { useEffect } from 'react';
import './Keypad.css';

const Button = ({ keyParams, volume }) => {
    const { keyTrigger, url, keyCode } = keyParams;

    const handleKeyPress = (e) => {
        if (e.keyCode === keyCode) {
            const audio = document.getElementById(keyTrigger);
            audio.currentTime = 0;
            audio.volume = volume;
            audio.play();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    });

    return (
        <button type='button' onClick={handleKeyPress}>
            <audio id={keyTrigger} src={url} />
            {keyTrigger}
        </button>
    );
};

function Keypad({ sampleSet, volume }) {

    const buttons = sampleSet.map((key, i) => <Button key={i} keyParams={key} volume={volume} />);

    return (
        <div className="keypad">
            {buttons}
        </div>
    );
}

export default Keypad;