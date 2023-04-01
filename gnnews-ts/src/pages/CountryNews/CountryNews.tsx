import {useEffect} from "react";
import {useParams, useLoaderData} from "react-router-dom";
import NewsList from "../../components/Layout/NewsList/NewsList";
import News from "../../models/news";
import {useDispatch,} from "react-redux";
import {AppDispatch} from "../../store/store";
import {newsActions} from "../../store/slices/newsSlice";

const API_KEY = '423d9af569e34ba19921ebb7a6f6af55';

const CountryNewsPage = () => {

    const fetchedNews = useLoaderData() as News[]
    const params = useParams()
    const dispatch: AppDispatch = useDispatch()
    const articlesCount = fetchedNews.length;
    dispatch(newsActions.setArticlesDisplayed(articlesCount))
    useEffect(() => {
    }, [params.countryId]);

    return <article>
        {fetchedNews && <NewsList news={[...fetchedNews]}/>}
    </article>
}

export default CountryNewsPage

export async function loader({params}: any) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${params.countryId}&apiKey=${API_KEY}`)
    if (!response.ok) {

    } else {
        const resData = await response.json();
        return resData.articles
    }
}