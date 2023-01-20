import Login from "../../components/pages/Login/Login";
import SignUp from "../../components/pages/SignUp/SignUp";
import AllService from "../../components/Shared/AllService/AllService";
import CardDetails from "../../components/Shared/Service/CardDetails";
import PrivetRoute from "../PrivetRouter/PrivetRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../components/pages/Home/Home");
const { default: Main } = require("../../layout/Main");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <PrivetRoute><AllService></AllService></PrivetRoute>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/foods/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
    }
])

export default router;