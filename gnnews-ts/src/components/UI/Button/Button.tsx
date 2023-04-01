import React from 'react';

import classes from './Button.module.scss';

const Button: React.FC<{ children: React.ReactNode, type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"], onClick: () => void }> = props => {
    return (
        <button
            className={classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
