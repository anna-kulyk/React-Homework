import React from 'react';
import "./List.scss"

const List = (props) => {
    const namesList = props.names;

    return (
        <ul>
            {namesList.map(item => <li key={item.toString()}>{item}</li>)}
        </ul>
    );
};

export default List;