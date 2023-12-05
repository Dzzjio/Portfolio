import { Link } from "react-router-dom"
import Button from "../../components/button"
import Footer from "../../components/footer"
import Header from "../../components/header"

const About = () => {
   const headerText = {
      h1: 'ABOUT ME',
      p: "IT'S A-ME, MARIO!"
   }
   const contactText = 'Contact Me'

   return (
      <div>
         <Header headerText={headerText} />
         <div className='px-[37px] lg:px-[300px]'>
         <h2 className="w-180 sm:w-173 text-2xl font-bold mt-10 mb-4">My Background</h2>
         <p className=''>
            Results-driven web developer with a solid foundation in HTML5, CSS,
            and frameworks such as Tailwind CSS and Bootstrap. Proficient in
            SASS/SCSS and experienced in creating dynamic and responsive user
            interfaces using React and styled-components. Adept at utilizing
            JavaScript (ES6+) for client-side scripting, employing libraries like
            Axios for efficient API communication, and leveraging NPM for project
            management. Knowledgeable in Node.js and Express for server-side
            development. Demonstrated expertise in version control with Git and
            GitHub, along with a proven track record of successful project
            implementations. Seeking to bring my diverse skill set and hands-on
            experience to contribute effectively to dynamic web development
            projects.
         </p>
         </div>
         <div className='px-[37px] lg:px-[300px] mb-10'>
        <h2 className="w-180 sm:w-173 text-2xl font-bold mt-10 mb-4">My Hobbies and InRetests</h2>
        <p className=''>
          Results-driven web developer with a solid foundation in HTML5, CSS,
          and frameworks such as Tailwind CSS and Bootstrap. Proficient in
          SASS/SCSS and experienced in creating dynamic and responsive user
          interfaces using React and styled-components. Adept at utilizing
          JavaScript (ES6+) for client-side scripting, employing libraries like
          Axios for efficient API communication, and leveraging NPM for project
          management. Knowledgeable in Node.js and Express for server-side
          development. Demonstrated expertise in version control with Git and
          GitHub, along with a proven track record of successful project
          implementations. Seeking to bring my diverse skill set and hands-on
          experience to contribute effectively to dynamic web development
          projects.
        </p>
      </div>
      <div className="mb-[58px] sm:mb-[80px] mx-auto sm:text-center">
         <Link to='/contact'><Button text={contactText}/></Link>
      </div>
      <Footer />
      </div>
   )
}

export default About