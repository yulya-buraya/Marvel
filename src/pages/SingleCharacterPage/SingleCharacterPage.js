import './singleCharacterPage.scss';

const SingleCharacterPage = ({data}) => {
    const {thumbnail, title, description} = data;
    return (
        <div className="single-character">
        <img src={thumbnail} alt={title} className="single-character__img"/>
        <div className="single-character__info">
            <h2 className="single-character__name">{title}</h2>
            <p className="single-character__descr">{description}</p>
        </div>
    </div>
    )
}

export default SingleCharacterPage;