import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { useCallback, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSugsestions = useCallback(async () => {
    const url = YOUTUBE_SEARCH_API + searchQuery;
    try {
      const data = await fetch(url);
    const json = await data.json();
    setSuggestions(json[1]);
     // update cache
     dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    } catch (error) {
      console.log(error)
    }
  },[dispatch, searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {  
      if (searchCache && searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  },[searchQuery, getSearchSugsestions, searchCache]);


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
   <div>
    <div className=" grid grid-flow-col p-5  shadow-lg  rounded-lg">
      <div className=" flex col-span-1">
      <i className="fa-solid fa-bars"></i>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/godserver/expand-sidebar.png"
          className="  rounded-lg w-12 cursor-pointer"
          alt="Hambergun_img"
          onClick={() => toggleMenuHandler()} />
        <a href="/">
          <img
            className=" rounded-lg  w-14 mx-2 my-2 cursor-pointer"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="Logo" />
        </a>
      </div>
      <div className=" col-span-9">
        <input
          className=" text-white bg-black w-1/2 px-10 border border-gray-500 rounded-l-full p-2 "
          type="text"
          placeholder="Type something ?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
             onBlur={() => setShowSuggestions(false)}       
          />
        <button className=" text-white border border-gray-700 p-2 bg-gray-400  rounded-r-full">
          {" "}
          Search{" "}
        </button>
      </div>
       {showSuggestions && (
  <div className=" absolute bg-white ml-[223px] w-[35rem] mt-12   shadow-lg rounded-lg border border-gray-100">
  <ul>
    {suggestions.map((s) => {
      console.log(s);
      return(
      
      <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
        🔍 {s}

      </li>
      
)}
)}
  </ul>
</div>
)}

<div className="col-span-1">
<img
className="h-8 cursor-pointer"
alt="user"
src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
/>
</div>
</div>
</div>
    
  );
};

export default Header;


