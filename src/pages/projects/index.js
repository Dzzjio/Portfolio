import { Link } from "react-router-dom"
import Button from "../../components/button"
import Card from "../../components/card"
import Footer from "../../components/footer"
import Header from "../../components/header"

const Projects = () => {
   const headerText = {
      h1: 'MY PROJECTS',
      p: 'MADE WITH LOVE'
   }
   const contactText = 'Contact Me'

   return (
      <div>
         <Header headerText={headerText} />
         <div className="px-[37px] flex flex-col sm:flex-wrap gap-10 sm:flex-row sm:justify-evenly pb-14 mt-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
            <div className="mb-[58px] sm:mb-[80px] mx-auto sm:text-center">
               <Link to='/contact'><Button text={contactText}/></Link>
            </div>
         <Footer />
      </div>
   )
}

export default Projects