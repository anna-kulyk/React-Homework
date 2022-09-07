import React from 'react';
import './Icon.scss';
import { icons } from '../../assets/icons';

const Icon = (props) => {
    const icon = icons[props.type];
    if(!icon) {
        return null
    };
    
    const { color, size, ...rest } = props;
    const style = { color };

    return (
        <svg
            className={icon.className}
            height={size || icon.height}
            width={size || icon.width}
            viewBox={icon.viewBox}
            style={style}
            {...rest}
        >
            {icon.body}
        </svg>
    );
};

export default Icon;
