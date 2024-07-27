import React from 'react';

function List({ id, body }) {
    return (
        <li key={id}>
            {body}
        </li>
    )
}

export default List;