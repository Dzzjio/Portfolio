import { Link } from "react-router-dom"
import X from '../../img/X.png'

const Menu = () => {
   return (
      <div className='relative px-[37px] flex flex-col sm:flex-wrap gap-10 sm:flex-row sm:justify-evenly pb-14 mt-10">'>
         <Link to='/'><img className="absolute right-6 top-6 h-5" alt="X" src={X}/></Link>
         <div className="relative mt-20 mx-auto flex flex-col items-start text-5xl font-bold w-234 h-46 flex-shrink-0 text-black text-48">
            <h4 className="absolute tracking-wide rotate-[270deg] left-[-45px] top-6 text-xl">MENU</h4>
            <Link to='/'><h2 className="mb-6">HOME</h2></Link>
            <Link to='/projects'><h2 className="mb-6">PROJECTS</h2></Link>
            <Link to='/about'><h2 className="mb-6">ABOUT</h2></Link>
            <Link to='/contact'><h2 className="mb-6">CONTACT</h2></Link>
         </div>
      </div>
   )
}

export default Menu

