import Country from "../models/country";
import pl from "./images/flags/pl.svg";
import fr from "./images/flags/fr.svg";
import us from "./images/flags/us.svg";
import gb from "./images/flags/gb.svg";
import it from "./images/flags/it.svg";
import de from "./images/flags/de.svg";

const COUNTRIES_LIST = [
    new Country(
        'pl',
        pl,
    ),
    new Country(
        'fr',
        fr,
    ),
    new Country(
        'us',
        us,
    ),
    new Country(
        'gb',
        gb,
    ),
    new Country(
        'it',
        it,
    ),
    new Country(
        'de',
        de,
    ),
]
export default COUNTRIES_LIST