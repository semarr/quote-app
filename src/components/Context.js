import React from 'react';

export const MyContext = React.createContext({
    theme: 'dark',
    onChangeTheme: () => {},
    huruf: 'a',
    onChangeFont: () => {}
});
