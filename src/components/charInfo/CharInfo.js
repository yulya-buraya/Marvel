import "./charInfo.scss";
import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";
import PropTypes from "prop-types";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charID]);

  const updateChar = () => {
    clearError();
    const { charID } = props;
    if (!charID) {
      return;
    }
    getCharacter(charID).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const charInfo = !(loading || error || !char) ? <View char={char} /> : null;
  return (
    <div className="char__info">
      {skeleton}
      {spinner}
      {errorMessage}
      {charInfo}
    </div>
  );
};

const View = ({ char }) => {
  const { id, name, description, thumbnail, homepage, wiki, comics } = char;
  const styleImg =
    thumbnail ==
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ? { objectFit: "contain" }
      : { objectFit: "cover" };
  const items = comics.map((item, i) => {
    if (i > 9) {
      return;
    }
    return (
      <li className="char__comics-item" key={id}>
        {item.name}
      </li>
    );
  });
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={styleImg} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {items.length > 0 ? null : "There is no comics with this character"}
        {items}
      </ul>
    </>
  );
};
export default CharInfo;

CharInfo.propTypes = {
  charID: PropTypes.number,
};
