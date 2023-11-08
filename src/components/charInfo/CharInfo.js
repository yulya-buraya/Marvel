import "./charInfo.scss";
import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import PropTypes from "prop-types";
import setContent from "../../utils/setContent";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const {process, setProcess, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charID]);

  const updateChar = () => {
    clearError();
    const { charID } = props;
    if (!charID) {
      return;
    }
    getCharacter(charID)
        .then(onCharLoaded)
        .then(()=>setProcess("confirmed"));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };
 
  return (
    <div className="char__info">
      {setContent(process, View, char)}
    </div>
  );
};

const View = ({ data }) => {
  const { id, name, description, thumbnail, homepage, wiki, comics } = data;
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
