import classes from './Content.module.scss'

const Content: React.FC<{ children: any }> = (props) => {
    return <main className={classes.main}>
        {props.children}
    </main>
}

export default Content