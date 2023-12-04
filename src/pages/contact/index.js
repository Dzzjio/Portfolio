import Header from "../../components/header"

const Contact = () => {
   const headerText = {
      h1: 'CONTACT ME',
      p: 'SAY HELLO TOO ME'
   }

   return (
      <div>
         <Header headerText={headerText} />
      </div>
   )
}

export default Contact