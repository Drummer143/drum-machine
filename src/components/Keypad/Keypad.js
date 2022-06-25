import { useEffect } from 'react';
import './Keypad.css';

const Button = ({ keyParams, volume, status }) => {
    const { keyTrigger, url, keyCode } = keyParams;

    const playAudio = () => {
        if (status) {
            const audio = document.getElementById(keyTrigger);
            audio.currentTime = 0;
            audio.volume = volume;
            audio.play();
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === keyCode) {
            playAudio();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    });

    return (
        <button type='button' onClick={playAudio}>
            <audio id={keyTrigger} src={url} />
            {keyTrigger}
        </button>
    );
};

function Keypad({ sampleSet, volume, status }) {

    const buttons = sampleSet.map((key, i) => <Button key={i} keyParams={key} volume={volume} status={status} />);

    return (
        <div className="keypad">
            {buttons}
        </div>
    );
}

export default Keypad;