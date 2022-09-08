import React from 'react';

export const themes = {
    blue: {
        primaryColor: 'rgb(11, 68, 121)'
    },
    green: {
        primaryColor: 'rgb(9, 67, 31)'
    }
};

export const ThemeContext = React.createContext(themes.blue);