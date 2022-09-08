import React from 'react';
import Icon from '../Icon/Icon';
import './Button.scss'

const Button = (props) => {
    const { children, className, size, color, iconType, type='button', onClick, ...rest } = props;

    return (
        <button 
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            {...rest}
        >
            {iconType && <Icon type={iconType} size={size} color={color}/>}
            {children || null}
        </button>
    );
};

export default Button;