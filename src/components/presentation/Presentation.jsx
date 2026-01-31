import { useEffect, useRef, useState } from 'react';
import './presentation.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Presentation() {

    const divRef = useRef(null);

    useEffect(() => {
        const services = divRef.current;

        if (!services) return;

        const totalWidth = services.scrollWidth;
        const viewPortWidth = window.innerWidth;

        const tween = gsap.to(services, {
            x: -(totalWidth - viewPortWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top top',
                end: () => `+=${totalWidth - viewPortWidth}`,
                scrub: true,
                pin: true,
                markers: false,
            }
        });
        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };

    }, []);


    return <div className=''>

        <div className='wrapper'>
            <div ref={divRef} className='services' >
                <div className='service-container flex flex-col services-our'>
                    <span className='text-5xl' >Conheça os nossos</span>
                    <span className='text-9xl font-bold' >SERVIÇOS</span>
                    <div>
                        <div className=' p-3 pill flex text-sm mt-5 justify-center items-center gap-5'>
                            O que podemos oferecer?
                            <div className='icon'>
                                <i className="pi pi-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-container flex flex-col services-design' >
                    <span className='text-5xl' >Para transformar seu perfil</span>
                    <span className='text-9xl font-bold' >DESGIN</span>
                </div>
                <div className='service-container flex flex-col services-video'>
                    <span className='text-5xl' >Para engajar e acançar público</span>
                    <span className='text-9xl font-bold' >VIDEO</span>
                </div>
                <div className='service-container flex flex-col services-media' >
                    <span className='text-5xl' >Para ter contato com seu público</span>
                    <span className='text-9xl font-bold' >SOCIAL-MEDIA</span>
                </div>

                <div className='service-container  flex flex-col services-sites' >
                    <span className='text-5xl' >Profissionalismo para sua marca</span>
                    <span className='text-9xl font-bold' >SITES</span>
                </div>

                <div className='service-container  flex flex-col services-web' >
                    <span className='text-5xl' >Inovação para seu serviço</span>
                    <span className='text-9xl font-bold' >SERVIÇOS-WEB</span>
                </div>
            </div>
        </div>

    </div>
}