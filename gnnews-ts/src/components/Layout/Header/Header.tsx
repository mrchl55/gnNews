import Button from "../../UI/Button/Button";
import list from "../../../assets/images/UI/list.svg"
import tiles from "../../../assets/images/UI/tiles.svg"
import pl from '../../../assets/images/flags/pl.svg'
import en from '../../../assets/images/flags/us.svg'
import {useDispatch, useSelector} from "react-redux";
import {newsActions} from "../../../store/slices/newsSlice";
import {langActions} from "../../../store/slices/languageSlice";
import Modal from "../../UI/Modal/Modal";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {AppDispatch, RootState} from "../../../store/store";
import classes from './Header.module.scss'
import translate from "../../../i18n";

const Header: React.FC = () => {
    const [isPopupOpen, setPopupOpen] = useState(false)
    const actionHandler = () => {
        setPopupOpen(!isPopupOpen)
    }
    const language: string = useSelector((state: RootState) => state.language.language)
    const view: string = useSelector((state: RootState) => state.news.currentView)
    const dispatch: AppDispatch = useDispatch()
    return <header className={classes.header}>
        <NavLink to={'/'}>{translate('home', language)} </NavLink>
        <Button type={'button'} onClick={() => dispatch(newsActions.switchView())}>
            <img className={classes.viewIcon} src={view === 'list' ? list : tiles}/>
        </Button>
        <Button type={'button'} onClick={() => dispatch(langActions.setLanguage(language === 'en' ? 'pl' : 'en'))}>
            <img className={classes.langIcon} src={language === 'en' ? en : pl}/>
        </Button>
        <Button type={'button'} onClick={actionHandler}>Popup</Button>
        {isPopupOpen &&
            <Modal actionHandler={actionHandler} title='This my pop-up' onCloseText='Ok Hired'>Unfortunately i ran out
                of time to make pretty
                UI</Modal>}

    </header>
}

export default Header