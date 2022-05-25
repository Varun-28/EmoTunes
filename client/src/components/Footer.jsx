import React from 'react';
import { useTheme } from '../Context/theme-context';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode} from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/emotunes-logo.svg";

function Footer() {

  const {theme} = useTheme();

  return (
    <div className='flex flex-col gap-x-4 text-center p-4'
    style={{backgroundColor: theme.mode.secondaryColor, color:theme.mode.bgColor}}
    >
      <div>
        <Link to="/" className='mr-auto'>
          <img className='logo-img w-40 mx-auto' src={Logo} alt='logo'/>
        </Link>
        <p className='px-12 py-4 md:w-1/2 md:mx-auto'>EmoTunes is the one-stop solution for all your music needs. It offers you free, 
        unlimited access to Hindi Songs and English songs.</p>
      </div>
      <span className='block w-2/4 mx-auto border-t-2 border-solid rounded my-4 border-transparent' style={{borderColor: `${theme.mode.shadowColor}`}}></span>
      <div>
        <p>Made with <FontAwesomeIcon icon={faHeart} /> and <FontAwesomeIcon icon={faCode} />.</p>
      </div>
      <span className='block w-2/4 mx-auto border-t-2 border-solid rounded my-4 border-transparent' style={{borderColor: `${theme.mode.shadowColor}`}}></span>
    </div>
  )
}

export {Footer};