import { useState, useEffect } from 'react';

import './Setup.css';

function Setup({ volume, setVolume, status, setStatus, currSet, setCurrSet, screenText, setScreenText }) {

    const switchEr = { marginLeft: 'auto' };

    useEffect(() => {
        const timer = setTimeout(() => setScreenText(''), 2500);
        return () => clearTimeout(timer);
    }, [screenText]);

    return (
        <div className='setup'>
            <div className='wrapper'>
                <p>Power</p>
                <label className='checkbox'>
                    <input type='checkbox' checked={status} onChange={e => { setStatus(e.target.checked); setScreenText(`Power ${status ? 'Off' : 'On'}`)}} />
                    <div style={status ? switchEr : {}} />
                </label>
            </div>

            <div className='screen'>{screenText}</div>

            <input type='range' value={volume} min={0} max={1} step={0.01} onChange={(e => { setVolume(e.target.value); setScreenText(`Volume: ${Math.round(e.target.value * 100)}`)})} className='range' />

            <div className='wrapper'>
                <p>Set</p>
                <label className='checkbox'>
                    <input type='checkbox' checked={currSet} onChange={e => { setCurrSet(e.target.checked); setScreenText(currSet ? 'Smooth Piano Kit' : 'Heater Kit')}} />
                    <div style={currSet ? {} : switchEr} />
                </label>
            </div>
        </div>
    );
}

export default Setup;