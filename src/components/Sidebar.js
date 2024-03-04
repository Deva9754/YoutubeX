import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ()=>{

     const isMenuOpen =useSelector (Store => Store.app.isMenuOpen);


     if (!isMenuOpen) return null;
     
    return(
        <div className=" pt-2 w-48 shadow-2xl rounded-lg">
<h1> 
    <ul className=" py-1.5 font-semibold p-2 text-white">

    <li className="p-1"> <Link to={"/"}> 🏠 Home</Link></li>
    <li className="p-1"> ⏯️Shorts</li>
    <li className="p-1"> 📹Video</li>
    <li className="p-1"> ✳️Live</li>
    </ul>
</h1>
<h1 className=" font-extrabold p-2  text-white "> You
    <ul className="py-2 font-semibold  text-white">

    <li className="p-1"> 👤Your </li>
    <li className="p-1"> 🌐History </li>
    <li className="p-1"> ❤️liked</li>
    <li className="p-1"> ⏲️watched</li>
    </ul>
</h1>
<h1 className="  font-extrabold p-2  text-white"> Subscriptions
    <ul className=" py-2 font-semibold  text-white">

    <li className="p-1"> 📰Aaj Tak</li>
    <li className="p-1"> 🗽Sony SAB</li>
    <li className="p-1"> ⚗️History Tv</li>
    <li className="p-1"> 🎌NGO</li>
    </ul>
</h1>
        </div>
    )
}

export default Sidebar;