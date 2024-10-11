
import SignIn from "../Pages/auth/SignIn"
import SignUp from "../Pages/auth/SignUp"
import Product from "../Pages/Product"


const routes = [
   
    {
        path: "/singin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/product",
        element: <Product />
    },


]

export default routes


// const navigate = useNavigate()
//Slick Slider
//Carousel