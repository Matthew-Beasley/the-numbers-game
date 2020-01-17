import React from 'react';

const Stats = ({ numbers }) => {
    return (
        <div className="stats">
            <h1>The Numbers Game</h1>
            <h4>We have {numbers.length} numbers</h4>
        </div>
    )
}

export default Stats