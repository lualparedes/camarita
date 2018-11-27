import * as React from 'react';

export const context = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
export const Provider = context.Provider;
export const Consumer = context.Consumer;
