import React from 'react';

function Header(props) {
    return (
        <header className='Header main'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </header>
    )
}

export default Header;