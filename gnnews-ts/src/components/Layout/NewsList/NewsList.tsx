import NewsItem from "../../UI/NewsItem/NewsItem";
import News from "../../../models/news";
import classes from './NewsList.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const NewsList: React.FC<{ news: News[] }> = (props) => {
    const currentView: string = useSelector((state: RootState) => state.news.currentView)
    return <ul className={`${classes.newslist} ${(currentView === 'list') ? classes.listView : classes.tilesView}`}>
        {props.news?.length && props.news.map((n, idx) => {
            const publishedAt = new Date(n.publishedAt);
            return <NewsItem key={idx} title={n.title} description={currentView === 'tiles' ? n.description : ''}
                             url={n.url}
                             urlToImage={currentView === 'tiles' ? n.urlToImage : ''} content={n.content}
                             source={n.source.name} author={n.author} publishedAt={publishedAt}/>
        })}
    </ul>
}
export default NewsList
