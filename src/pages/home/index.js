import Header from "../../components/header"

const Home = () => {

   const headerText = {
      h1: 'GIO JIOSHVILI',
      p: 'WEB-DEVELOPER'
   }

   return (
      <div>
         <Header headerText={headerText} />
      </div>
   )
}

export default Home