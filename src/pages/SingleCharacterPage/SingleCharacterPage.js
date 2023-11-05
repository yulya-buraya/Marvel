import { Helmet } from "react-helmet";
import "./singleCharacterPage.scss";

const SingleCharacterPage = ({ data }) => {
  const { thumbnail, name, description } = data;
  return (
    <div className="single-character">
      <Helmet>
        <meta name="description" content={`${name} character info`} />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} className="single-character__img" />
      <div className="single-character__info">
        <h2 className="single-character__name">{name}</h2>
        <p className="single-character__descr">{description}</p>
      </div>
    </div>
  );
};

export default SingleCharacterPage;
