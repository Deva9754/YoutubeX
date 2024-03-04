import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

 

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
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const url = YOUTUBE_SEARCH_API + searchQuery;
    try {
      const data = await fetch(url);
    const json = await data.json();
    //console.log(json[1]);
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
   
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
   <div>
    <div className=" grid grid-flow-col p-5  shadow-lg  rounded-lg">
      <div className=" flex col-span-1">
      <i className="fa-solid fa-bars"></i>
        <img
          src="data:image/png;base64,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"
          className="  rounded-lg w-12 cursor-pointer"
          alt="Hambergun_img"
          onClick={() => toggleMenuHandler()} />
        <a href="/">
          <img
            className=" rounded-lg  w-14 mx-2 cursor-pointer"
            src="data:image/png;base64,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"
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
className="h-8"
alt="user"
src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
/>
</div>
</div>
</div>
    
  );
};

export default Header;


