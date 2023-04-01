import {NavLink} from "react-router-dom";
import Country from "../../../models/country";
import classes from './CountryItem.module.scss'
import translate from "../../../i18n";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const CountryItem: React.FC<Country> = (props) => {
    const language: string = useSelector((state: RootState) => state.language.language)

    return <li className={classes.countryItem}><NavLink className={({isActive, isPending}) =>
        isActive ? classes.active : ""
    } to={`/country/${props.id}`}><img src={props.flag_url}/> {translate(props.id, language)}</NavLink></li>
}

export default CountryItem