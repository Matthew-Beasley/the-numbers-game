import React from 'react';

const Numbers = ({ numbers }) => {
    const evens = numbers.filter(even => even % 2 === 0);
    const odds = numbers.filter(odd => odd % 2 !== 0);

    return (
        <div className="numberLists">
            <h5>All Numbers</h5>
            <ul>
                {numbers.map((number, idx) => {
                    return (
                        <li key={idx}>{number}</li>
                    )
                })}
            </ul>
            <h5>Even Numbers</h5>
            <ul>
                {evens.map((number, idx) => {
                    return (<li key={idx}>{number}</li>)
                })}
            </ul>
            <h5>Odd Numbers</h5>
            <ul>
                {odds.map((number, idx) => {
                    return (<li key={idx}>{number}</li>)
                })}
            </ul>
        </div>
    )
}


export default Numbers;