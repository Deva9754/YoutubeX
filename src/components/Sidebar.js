import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
const Sidebar = () => {
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" pt-2 w-48 shadow-2xl rounded-lg">
      <h1>
        <ul className=" py-1.5 font-semibold p-2 text-white">
          <li className="p-1">
            {" "}
            <Link to={"/"}>
              {" "}
              <HomeIcon /> Home
            </Link>
          </li>
          <li className="p-1">
            {" "}
            <VideoLibraryIcon />
            Shorts
          </li>
          <li className="p-1"> 📹Video</li>
          <li className="p-1">
            {" "}
            <OndemandVideoIcon />
            Live
          </li>
        </ul>
      </h1>
      <h1 className=" font-extrabold p-2  text-white ">
        {" "}
        You
        <ul className="py-2 font-semibold  text-white">
          <li className="p-1">
            {" "}
            <PersonIcon />
            Your{" "}
          </li>
          <li className="p-1">
            {" "}
            <HistoryIcon />
            History{" "}
          </li>
          <li className="p-1">
            {" "}
            <FavoriteIcon />
            liked
          </li>
          <li className="p-1">
            {" "}
            <MovieIcon />
            watched
          </li>
        </ul>
      </h1>
      <h1 className="  font-extrabold p-2  text-white">
        {" "}
        Subscriptions
        <ul className=" py-2 font-semibold  text-white">
          <li className="p-1"> 📰Aaj Tak</li>
          <li className="p-1"> 🗽Sony SAB</li>
          <li className="p-1"> ⚗️History Tv</li>
          <li className="p-1"> 🎌NGO</li>
        </ul>
      </h1>
    </div>
  );
};

export default Sidebar;
