import React, {useState} from 'react';
import { FaSistrix } from "react-icons/fa";
import {IconContext} from 'react-icons';

const SearchBar = (props) => {
  // const [keyWord, setWords] = useState('');
  // const handleChange = (word, list) => {
  //   console.log(`${word} has been searched!`);
  //   //console.log(typeof list, list);
  //   console.log(searchReviews(word, list));
  //   if (keyWord.length >= 3) {
  //     props.handleSearch(props.reviews, key)
  //   }
  // }

  return (
    <>
      <input
      className="rev-search"
      type="text"
      onChange={(e) => props.handleSearch(e.target.value)} value={props.keyWords}/>
      <IconContext.Provider value={{className: "search-icon"}} >
        <FaSistrix/>
      </IconContext.Provider>

    </>
  )
}

export default SearchBar;