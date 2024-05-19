import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import Livechat from "./LiveChat";
import "./WatchPage.css";

const Watchpage = () => {
  //   console.log(info);
  // const { snippet, statistics } = info?.length && info[0];
  // const { channelTitle, title,  }=  snippet && snippet;

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get(" v"))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className=" sm:flex sm:flex-col sm: w-full h-full p-2">
      <div className="sm:px-5 sm:flex sm:w-full h-full w-full">
        <div className="container max-w-[100%] h-full">
          <iframe
            className="responsive-iframe"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="liveChat">
            <Livechat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
