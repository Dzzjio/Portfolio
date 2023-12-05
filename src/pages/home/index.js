import Header from "../../components/header";
import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/js.png'
import react from '../../img/react_js.png'
import node from '../../img/node_js.png'
import chrome from '../../img/chrome.png'
import figma from '../../img/figma.png'
import npm from '../../img/npm.png'
import git from '../../img/git.png'
import vsCode from '../../img/vs_code.png'
import Footer from "../../components/footer";
import Card from "../../components/card";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Home = () => {
  const headerText = {
    h1: "GIO JIOSHVILI",
    p: "WEB-DEVELOPER",
  };

  const ProjectsText = 'All Projects'
  const contactText = 'Contact Me'

  return (
    <div>
      <Header headerText={headerText} />

      <div className='px-[37px] lg:px-[300px]'>
        <h2 className="w-180 sm:w-173 text-2xl font-bold mt-10 mb-4">About me</h2>
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

      <div className='px-[37px] lg:px-[300px]'>
         <h2 className="w-180 sm:w-173 text-2xl font-bold mt-10 mb-4">My Skills</h2>

         <div className='flex gap-10 sm:flex-col mb-[60px] sm:mb-[100px] lg:w-[600px]'>
            <div className='flex flex-col  sm:flex-row gap-[5px] w-[103px] sm:w-[560px]'>
               <div> <span><img className='inline' alt='skills' src={html} /></span> HTML</div>
               <div> <span><img className='inline' alt='skills' src={css} /></span> CSS</div>
               <div> <span><img className='inline' alt='skills' src={js} /></span> JavaScript</div>
               <div> <span><img className='inline' alt='skills' src={react} /></span> React.JS</div>
               <div> <span><img className='inline' alt='skills' src={node} /></span> Node.JS</div>
            </div>
            <div className='flex flex-col  sm:flex-row gap-[5px] w-[103px] sm:w-[560px]'>
               <div> <span><img className='inline' alt='skills' src={chrome} /></span> Chrome</div>
               <div> <span><img className='inline' alt='skills' src={figma} /></span> Figma</div>
               <div> <span><img className='inline' alt='skills' src={npm} /></span> NPM</div>
               <div> <span><img className='inline' alt='skills' src={git} /></span> Git</div>
               <div> <span><img className='inline' alt='skills' src={vsCode} /></span> VSCode</div>
            </div>
         </div>

      </div>

      <div className="px-[37px] flex flex-col gap-10 sm:flex-row sm:justify-evenly pb-14">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-evenly mr-[37px]">
        <Link to='/projects'><Button text={ProjectsText}/></Link>
        <Link to='/contact'><Button text={contactText}/></Link>
      </div>

   <Footer />

   </div>
  );
};

export default Home;
