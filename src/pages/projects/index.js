import Footer from "../../components/footer"
import Header from "../../components/header"

const Projects = () => {
   const headerText = {
      h1: 'MY PROJECTS',
      p: 'MADE WITH LOVE'
   }

   return (
      <div>
         <Header headerText={headerText} />
         <Footer />
      </div>
   )
}

export default Projects