import classes from './NewsItem.module.scss'
import {useState} from "react";
import Modal from "../Modal/Modal";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import translate from "../../../i18n";

const NewsItem: React.FC<{
    title: string, description: string,
    url: string,
    urlToImage: string,
    content: string,
    source: string,
    author: string,
    publishedAt: Date
}> = (props) => {
    const [isPopupOpen, setPopupOpen] = useState(false)
    const actionHandler = () => {
        setPopupOpen(!isPopupOpen)
    }
    const language: string = useSelector((state: RootState) => state.language.language)

    return <li className={classes.newsItem} onClick={actionHandler}>
        {props.urlToImage && <div className={classes.thumbnail}>
            <img src={props.urlToImage}/>
        </div>}
        <h5 className={classes.title}>{props.title}</h5>
        <div className={classes.details}>
            {props.description && <p className={classes.description}> {props.description}</p>}
            {props.source && <p className={classes.source}>{translate('source', language)}: {props.source}</p>}

            {props.publishedAt &&
                <p className={classes.publishedAt}>{translate('publishedDate', language)}: {props.publishedAt.toLocaleDateString()}</p>}
        </div>

        {isPopupOpen &&
            <Modal actionHandler={actionHandler} title={props.title}>
                {props.content && <p>{props.content}</p>}
                <p>{translate('source', language)}: <a href={props.url ?? '#'}
                                                       target='_blank'>{props.source ?? translate('unknown', language)}</a>
                </p>
                <p>{translate('author', language)}: {props.author ?? translate('unknown', language)}</p>
            </Modal>}
    </li>
}

export default NewsItem