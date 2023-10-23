import { useParams, Link } from 'react-router-dom';
import {  useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Spinner from "../../components/spinner/Spinner";
import './singleComicPage.scss';
import xMen from '../../resources/img/x-men.png';

const SingleComicPage = () => {
    const {id} = useParams();
    const [comic, setComic] = useState(null);

    const {loading, error, getComics, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
      }, [id]);
    
      const updateComic = () => {
        clearError();

       getComics(id).then(onCharLoaded);
      };
    
      const onCharLoaded = (comic) => {
        setComic(comic);
      };

      const errorMessage = error?<ErrorMessage/>:null;
      const spinner = loading?<Spinner/>:null;
      const comicInfo = !(loading||error||!comic)? <View comic={comic}/>:null; 
    return (
        <>
        {errorMessage}
        {spinner}
        {comicInfo}
        </>
    )
}

const View =({comic})=>{
    const {thumbnail, title, description, price, language, pageCount } = comic;
    return (
        <div className="single-comic">
        <img src={thumbnail} alt={title} className="single-comic__img"/>
        <div className="single-comic__info">
            <h2 className="single-comic__name">{title}</h2>
            <p className="single-comic__descr">{description}</p>
            <p className="single-comic__descr">{pageCount}</p>
            <p className="single-comic__descr">Language: {language}</p>
            <div className="single-comic__price">{price}</div>
        </div>
        <Link to="/comics" className="single-comic__back">Back to all</Link>
    </div>
    )
}

export default SingleComicPage;