import './Keypad.css';

const Button = ({ keyParams }) => {
    const { keyTrigger, url } = keyParams;
    const sampleAudio = new Audio(url);

    return <button type='button' onClick={() => sampleAudio.play()}>{keyTrigger}</button>;
};

function Keypad({ sampleSet }) {
    const buttons = sampleSet.map((key, i) => <Button key={i} keyParams={key} />);

    return (
        <div className="keypad">
            {buttons}
        </div>
    );
}

export default Keypad;