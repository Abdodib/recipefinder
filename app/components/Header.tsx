import Link from 'next/link';
import React from 'react'

const Header = () => {
  
    const Links = [
        { name :'explore' , link : '/' },
        { name :'contact' , link : '/contact' },
    ];
    return (
    <div className=' flex items-center justify-between'>

        <ul className=' flex items-center justify-between'>
          {Links.map(link => (
            <li key={link.name}>
                <Link href={link.link} >{link.name}</Link>
            </li> 
          ) ) }  
        </ul>
      
    </div>
  )
}

export default Header
