import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Footer = () => {
   return (
      <div className="bg-black mx-auto text-white w-[375px] h-[300px] sm:w-full sm:h-[400px] pt-[83px] sm:pt-[160px] px-[37px] sm:px-[120px] sm:flex sm:justify-between">
                <div className="w-[298px] sm:w-[374px] sm:h-[40px] gap-[30px] flex justify-between mb-[60px]">
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/about">ABOUT ME</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div>
                    <div className='flex gap-[21px] lg:flex lg:gap-[400px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <h5>
                                giojio14@gmail.com
                            </h5>
                            <h5>
                                +995 599160881
                            </h5>
                        </div>
                        <img src={logo} alt='logo' className='w-[58px] sm:w-[80px] inline' />
                    </div>
                </div>
            </div>
   )
}

export default Footer