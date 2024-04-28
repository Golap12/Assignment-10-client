
import { createBrowserRouter } from 'react-router-dom';
import PrivetRoute from './../components/privetRoute/PrivetRoute';
import Home from './../components/home/Home';
import Register from './../components/register/Register';
import Login from './../components/login/Login';
import Error from './../components/error/Error';
import Details from '../components/details/Details';
import Root from '../components/layout/Root';
import About from './../pages/about/About';
import Contact from '../pages/contact/Contact';
import AddCraftItem from './../pages/addCraftItem/AddCraftItem';
import MyArtAndCraftList from './../pages/myArtAndCraftList/MyArtAndCraftList';
import AllArtAndCrafts from './../pages/allArtAndCrafts/AllArtAndCrafts';
import Update from './../components/update/Update';
import HomeDetails from '../components/homeDetails/HomeDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/homeData')
      },
      {
        path: "/details/:id",
        element: <PrivetRoute><Details></Details></PrivetRoute>,
      },
      {
        path: "/allCraft",
        element: <AllArtAndCrafts></AllArtAndCrafts>,
        loader: () => fetch('http://localhost:5000/addedItems')
      },
      {
        path: "/addItem",
        element: <PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>,
      },
      {
        path: "/myList",
        element: <PrivetRoute><MyArtAndCraftList></MyArtAndCraftList></PrivetRoute>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/addedItems/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <PrivetRoute><Details></Details></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/addedItems/${params.id}`)
      },
      {
        path: "/homeDetails/:id",
        element: <HomeDetails></HomeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/homeData/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;