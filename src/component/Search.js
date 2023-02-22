import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchWrap = styled.div`
  padding: 30px;
  background: #202223;

  > .search {
    display: inline-block;
    background: #616669;
  }
`;

const SearchButton = styled.button`
  border: none;
  padding: 8px;
  background: transparent;
`;

const SearchInput = styled.input`
  border: none;
  padding: 8px 15px;
  border-radius: 0px;
  font-size: 11px;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

function Search({ movieListFilter, searchTest }) {
  //검색 버튼을 클릭하면 부모에 있는 movieListFilter함수 실행
  const btnClick = () => {
    movieListFilter();
  };

  return (
    <SearchWrap>
      <form className="search">
        <SearchInput
          onKeyUp={searchTest}
          //키 업 시 검색어 저장 함수 실행
          onSubmit={false}
          type="text"
          id="search_box"
          placeholder="Search"
        />
        <SearchButton id="search_btn" onClick={btnClick} type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
      </form>
    </SearchWrap>
  );
}

export default Search;
