import classes from './Footer.module.scss'
import Clock from "../../UI/Clock/Clock";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {useEffect} from "react";
import translate from "../../../i18n";

const Footer = () => {
    const language: string = useSelector((state: RootState) => state.language.language)
    const articlesDisplayed: number = useSelector((state: RootState) => state.news.articlesDisplayed)

    useEffect(() => {

    }, [articlesDisplayed])

    return <footer className={classes.footer}>
        <Clock/>
        <div>{translate('articlesCount', language)}: {articlesDisplayed}</div>
    </footer>
}

export default Footer