
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
import MatchCategory from '../components/matchCategory/MatchCategory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-kappa-seven.vercel.app/homeData')
      },


      {
        path: "/allCraft",
        element: <AllArtAndCrafts></AllArtAndCrafts>,
        loader: () => fetch('https://assignment-10-server-kappa-seven.vercel.app/allitems')
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
        loader: ({ params }) => fetch(`https://assignment-10-server-kappa-seven.vercel.app/allitems/${params.id}`)
      },


      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://assignment-10-server-kappa-seven.vercel.app/allitems/${params.id}`)
      },


      {
        path: "/matchCategory/:subcategory",
        element: <MatchCategory></MatchCategory>,
        loader:({params}) => fetch(`https://assignment-10-server-kappa-seven.vercel.app/allitems/subcategory/${params.subcategory}`)
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