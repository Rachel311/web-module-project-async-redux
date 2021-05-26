import './App.css';
import { connect } from "react-redux";

import { getFilms } from './actions';
import FilmList from './components/filmList';

const App = ({ films, isFetching, error, ...props }) => {

  const handleGetFilms = e => {
    e.preventDefault();
    props.getFilms();
  }

  return (
    <div className="App">
      <h1>Studio Ghibli Films: </h1>
      <p>{films}</p>
      <p>{error}</p>
      <button onClick={handleGetFilms} >Fetch Films</button>
      <h1>Studio Ghibli Films List: </h1>
      {films === null ? error : <FilmList />}
      {isFetching === true ? <p className="fetching">Fetching Films</p> : error}
      <button onClick={handleGetFilms} >Fetch 20 Films</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    films: state.films,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(mapStateToProps, { getFilms })(App);
