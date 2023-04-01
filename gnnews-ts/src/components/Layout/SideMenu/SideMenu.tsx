import classes from './SideMenu.module.scss'
import CountriesList from "../CountriesList/CountriesList";
import COUNTRIES_LIST from "../../../assets/countries";

const SideMenu = () => {

    return <nav className={classes['side-menu']}>
        <CountriesList countries={[...COUNTRIES_LIST]}/>

    </nav>
}

export default SideMenu