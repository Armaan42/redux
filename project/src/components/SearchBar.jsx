import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(setQuery(text))

    setText('')
  };

  return (
    <div>
      <form onSubmit={(e) => {
            submitHandler(e)
      }} 
      className="flex bg-gray-800 px-10 py-10 gap-5">


        <input
        value = {text}
        onChange={(e) => {
            setText(e.target.value)
            
        }}
          required
          className="border-2 w-full px-4 py-2 rounded-2xl outline-none"
          type="text"
          placeholder="search anything.. "
        />
        <button className=" bg-white text-black px-4 rounded-2xl cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
