import Footer from "../../components/footer"
import Header from "../../components/header"

const Contact = () => {
   const headerText = {
      h1: 'CONTACT ME',
      p: 'SAY HELLO TO ME'
   }

   return (
      <div>
         <Header headerText={headerText} />
         <Footer />
      </div>
   )
}

export default Contact