import React from 'react';

export default function Box({value}) {

    return(
        <div>
            <h1>{value}</h1>
            <div className="result" style={{ borderRadius: value }}></div>
        </div>

    )
}