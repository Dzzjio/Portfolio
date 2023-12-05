import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact";
import Menu from "../pages/menu";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/menu",
        element: <Menu />,
    }
]