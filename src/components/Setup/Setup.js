import { useState, useEffect } from 'react';

import './Setup.css';

function Setup({ volume, setVolume, status, setStatus, currSet, setCurrSet }) {

    const switchEr = { marginLeft: 'auto' };

    return (
        <div className='setup'>
            <label className='checkbox'>
                <input type='checkbox' checked={status} onChange={e => setStatus(e.target.checked)} />
                <div style={status ? switchEr : {}} />
            </label>

            <input type='range' value={volume} min={0} max={1} step={0.01} onChange={(e => setVolume(e.target.value))} className='range' />

            <label className='checkbox'>
                <input type='checkbox' checked={currSet} onChange={e => setCurrSet(e.target.checked)} />
                <div style={currSet ? {} : switchEr} />
            </label>
        </div>
    );
}

export default Setup;