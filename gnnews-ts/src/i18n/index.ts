import en from './en.json';
import pl from './pl.json';


const translate = (key: string, language: string): string => {
    let langData: { [key: string]: string } = {};

    if(language === 'en') {
        langData = en;
    }else if(language === 'pl') {
        langData = pl;
    }

    return langData[key];
}

export default translate