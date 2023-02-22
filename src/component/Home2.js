import React, { userState } from "react";
import Movie from "./Movie";

//state는 클래스형 컴포넌트에서 사용할 수 있다.
//클래스형 컴포넌트의 뼈대는 React.Component 클래스를 상속받도록
//extends React.Component 클래스를 붙이는거당
class Home extends React.Component {
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movie_app">
            <div className="search_wrap">
              <form className="search">
                <input type="text" id="search_box" placeholder="Search" />
              </form>
            </div>
            <div className="movie_list_wrap">
              <ul className="movie_list_container">
                {movies.map((m) => {
                  return <Movie key={m.id} title={m.title} rating={m.rating} />;
                })}
              </ul>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
