import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import Button from '../Button/Button';
import classes from './Modal.module.scss';

const Backdrop: React.FC<{ onConfirm: () => void }> = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>;
};

const ModalOverlay: React.FC<{ title: string, children: any, onConfirm: () => void, footer?: string, onCloseText?: string }> = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                {props.children}
            </div>
            <footer className={classes.footer}>
                <Button type="button" onClick={props.onConfirm}>{props.onCloseText ?? 'Close'} </Button>
            </footer>


        </Card>
    );
};
const portalOverlay = document.getElementById('overlay-root') as HTMLElement
const portalBackdrop = document.getElementById('backdrop-root') as HTMLElement

const Modal: React.FC<{ actionHandler: () => void, title: string, children: any, footer?: string, onCloseText?: string }> = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.actionHandler}/>,
                portalBackdrop
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    onConfirm={props.actionHandler}
                    footer={props.footer!}
                    onCloseText={props.onCloseText!}
                >{props.children}</ModalOverlay>,
                portalOverlay
            )}
        </React.Fragment>
    );
};

export default Modal;
