// import { Provider } from 'react-redux';
// import './App.css';
// import Body from './components/Body';
// import Header from './components/Header';
// import Store from './utils/Store';

// function App() {
//   return (

//     <Provider store={Store}>
//     <div className=''>

//       <Header/>
//       <Body/>

//     </div>
//     </Provider>
//   );
// }

// export default App;

import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/Store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className=" bg-black flex flex-col h-[100vh]">
        <Header />
        <div className="flex-1">
          <RouterProvider router={appRouter} />
        </div>

        {/**
         *
         * Header
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
