import React, { useState } from "react";
import Movie from "./component/Movie";
//import Search from "./component/Search";
import "./App.css";
import "./Reset.css";
import { data } from "./static/data"; //왜 중괄호로 이름을 감싸야 되는지 모르겠다
import Search from "./component/Search";

function App({ btnClick }) {
  //검색 키워드를 담은 state
  const [searchKeyword, setSearchKeyword] = useState("");
  //검색 리스트를 담은 state
  const [movieList, setMovieList] = useState(data.results);

  //검색 텍스트가 포함된 리스트만 필터링해주는 함수
  const movieListFilter = (value) => {
    //set 친구들은 =이 아니라 ()함수 안에 넣어줘야 저거 리턴해줌 (?)(?)분명배웠는데,,
    setMovieList(
      data.results.filter((userKeyWord) => {
        return userKeyWord.title.toUpperCase().includes(searchKeyword);
      })
    );
  };

  //입력한 검색어를 저장, 대소문자 구분 없이 검색하기 위해 toUpperCase()추가
  const searchTest = (keyWord) => {
    setSearchKeyword(keyWord.target.value.toUpperCase());
  };

  return (
    <div className="movie_app">
      <Search movieListFilter={movieListFilter} searchTest={searchTest} />
      <div className="movie_list_wrap">
        <ul className="movie_list_container">
          {movieList.map((m) => (
            <Movie movie={m} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
