import Home from "../pages/home";
import Menu from "../pages/menu";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact";

export const routes = [
    {
        path: "/",
        element: <Menu />,
    },
    {
        path: "/home",
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
]