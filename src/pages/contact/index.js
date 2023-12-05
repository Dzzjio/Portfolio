import { Link } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Button from "../../components/button"

const Contact = () => {
   const headerText = {
      h1: 'CONTACT ME',
      p: 'SAY HELLO TO ME'
   }
   const contactText = 'Message'

   return (
      <div>
         <Header headerText={headerText} />
         <div className='px-[37px] lg:px-[300px] mb-10'>
            <h2 className="w-180 sm:w-173 text-2xl font-bold mt-10 mb-4">Contact me</h2>
            
            <div className="lg:flex justify-between gap-10">
               <div className="mb-4">
                  <label htmlFor="name" className="mb-3 block text-sm font-bold text-gray-700">Name</label>
                  <input type="text" id="name" placeholder='Your Name' className="border-b-2 min-w-[298px] border-black"/>
               </div>

               <div className="mb-4">
                  <label htmlFor="email" className="mb-3 block text-sm font-bold text-gray-700">Email</label>
                  <input type="email" id="email" placeholder='email@example.com' className="border-b-2 min-w-[298px] border-black"/>
               </div>
            </div>

            <div className="mb-4 sm:w-1">
               <label htmlFor="message" className="mb-3 block text-sm font-bold text-gray-700">Nachricht</label>
               <input type="text" id="message" placeholder='Hello, my name is...' className="border-b-2 min-w-[298px] lg:min-w-[636px] border-black"/>
            </div>

         </div>
            <div className="mb-[58px] sm:mb-[80px] mx-auto sm:text-center">
               <Link to='/contact'><Button text={contactText}/></Link>
            </div>
         <Footer />
      </div>
   )
}

export default Contact