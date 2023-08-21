import {
    createBrowserRouter,
    Link,
    RouterProvider,
  } from "react-router-dom";
import { Landingscreen } from "../screens/landing";
import { Welcomescreen } from "../screens/welcome";
import { Signup } from "../screens/Signup";
import { Login } from "../screens/Login";
import { Homescreen } from "../screens/Homescreen";
import { FoodDetails } from "../screens/FoodDetails";
import { Category } from "../screens/Category";
import { ProfileContainer } from "../screens/Profile";
import { AddNewAdress } from "../screens/AddNewAdress";
import HomeDrawer from "../components/Drawer";
import Cart from "../screens/Cart";
import { Favorite } from "../screens/Favorite";
export const Routes = createBrowserRouter([
    {
        path:'/',element:<Landingscreen/>
    },
    {
        path:'/Welcome',element:<Welcomescreen/>
    },
    {
        path:'/SignUp',element:<Signup/>
    },
    {
        path:'/LogIn',element:<Login/>
    },
    {
        path:'/HomeScreen',element:<HomeDrawer/>
    },
    {
        path:'/FoodDetail/:id',element:<FoodDetails/>
    },
    {
        path:'/Category',element:<Category/>
    },
    {
        path:'/Profile',element:<ProfileContainer/>
    },
    {
        path:'/AddNewAddress',element:<AddNewAdress/>
    },
    {
        path:"/cart" , element: <Cart/>
    },
    {
        path:"/favorite" , element: <Favorite/>
    }
])