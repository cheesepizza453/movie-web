import React, { useState } from "react";
import Movie from "./component/Movie";
//import Search from "./component/Search";
import "./App.css";
import "./Reset.css";
import { data } from "./static/data"; //왜 중괄호로 이름을 감싸야 되는지 모르겠다

function App() {
  let searchKeyword = "";
  let [movieList, setMovieList] = useState(data.results);

  const searchTest = (keyWord) => {
    searchKeyword = keyWord.target.value.toUpperCase();
  };

  const btnClick = (e) => {
    alert(searchKeyword);

    setMovieList = data.results.filter((userKeyWord) => {
      return userKeyWord.title.toUpperCase().includes(searchKeyword);
    });
    console.log(setMovieList + "`tlqktlqks ");
  };

  return (
    <div className="movie_app">
      <div className="search_wrap">
        <form className="search">
          <input
            onKeyUp={searchTest}
            type="text"
            id="search_box"
            placeholder="Search"
          />
          <button id="search_btn" onClick={btnClick} type="button">
            Search
          </button>
        </form>
      </div>
      <div className="movie_list_wrap">
        <ul className="movie_list_container">
          {movieList.map(
            (m) => (console.log(setMovieList + "`안쪽 "), (<Movie movie={m} />))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
