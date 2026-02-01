import './navbar.css'
import React, { useRef, useState, useEffect } from 'react';


export default function Navbar() {
    const [floating, setFloating] = useState(false);
 
    function logScroll() {
        if(window.scrollY > 40) {
            setFloating(true);
        } else {
            setFloating(false);
        }
        console.log(floating)
    }

    useEffect(() => {
        window.addEventListener('scroll', logScroll);

        return () => {
            window.removeEventListener('scroll', logScroll);
        };
    }, []);

  

    return <div id='nav' className={`${floating ? 'float' : ''} navbar p-5 flex justify-between  rounded-full items-center`}>
        <div className='w-10 ml-10'>
            <img src="src/assets/imgs/logokairos.png" alt="" />
        </div>

        <ul className='flex gap-10 text-md mr-10'>
            <li><a href="">Serviços</a></li>
            <li><a href="">Portifólio</a></li>
            <li><a className='button-contact' href="">Entre em contato</a></li>
        </ul>
    </div>
}


