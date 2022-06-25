import { useState, useEffect } from 'react';

function Setup({ volume, setVolume }) {

    return (
        <div>
            <input type='radio' />
            <h2>DSAD</h2>
            <input type='range' value={volume} min={0} max={1} step={0.01} onChange={(e => setVolume(e.target.value))}/>
            <input type='radio' />
        </div>
    );
}

export default Setup;