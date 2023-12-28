import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
// import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  //   console.log(info);
  // const { snippet, statistics } = info?.length && info[0];
  // const { channelTitle, title,  }=  snippet && snippet;

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get(" v"))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?&autoplay=1&mute=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* <div className="p-2 m-2 w-72 shadow-lg ">
   
     <ul>
       <li className="font-bold py-2 text-white">{title}</li>
       <li className=" text-gray-500">{channelTitle}</li>
       <li className=" text-gray-500">{Math.round(statistics.viewCount * 100)/1000000} views</li>
     </ul>
   </div>  */}
      </div>
      {/* <CommentsContainer /> */}
    </div>
  );
};

export default Watchpage;
