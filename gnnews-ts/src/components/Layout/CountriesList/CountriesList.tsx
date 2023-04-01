import CountryItem from "../../UI/CountryItem/CountryItem";
import Country from "../../../models/country";
import classes from './CountriesList.module.scss'

const CountriesList: React.FC<{ countries: Country[] }> = (props) => {
    return <ul className={classes.countriesList}>
        {props.countries.map(country => {
            return <CountryItem key={country.id} id={country.id} flag_url={country.flag_url}/>
        })}
    </ul>
}

export default CountriesList;