import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./LiveChat";

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
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <Livechat />
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
