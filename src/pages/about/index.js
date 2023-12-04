import Header from "../../components/header"

const About = () => {
   const headerText = {
      h1: 'ABOUT ME',
      p: "IT'S A-ME, MARIO!"
   }

   return (
      <div>
         <Header headerText={headerText} />
      </div>
   )
}

export default About