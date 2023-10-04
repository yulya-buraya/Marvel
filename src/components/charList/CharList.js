import "./charList.scss";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
  };
  marvelService = new MarvelService();

  onCharsLoaded = (chars) => {
    this.setState({
      chars,
      loading: false,
    });
  };

  onCharsLoading = () => {
    this.setState({
      loading: true,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  componentDidMount() {
    this.marvelService
      .getAllCharapters()
      .then(this.onCharsLoaded)
      .catch(this.onError);
  }

  renderItems(arr) {
    const items = arr.map((item) => {
      const imgStyle =
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          ? { objectFit: "contain" }
          : { objectFit: "cover" };
      return (
        <li 
        key={item.id}
        className="char__item"
        onClick={()=> this.props.onCharSelected(item.id)}>
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      )
    });
    return (
        <ul className="char__grid">
            {items}
        </ul>
    )
  }

  render() {
    const { chars, loading, error } = this.state;
    const items = this.renderItems(chars);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;
    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}

        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
