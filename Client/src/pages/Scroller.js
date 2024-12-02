import React, { useState, useEffect } from 'react';
import "./scroll.css"
const Scroller = () => {
    const [isVertical, setIsVertical] = useState(false);

    const toggleDirection = () => {
        setIsVertical(!isVertical);
    };

    useEffect(() => {
        // This is where you can add any setup logic if needed
        return () => {
            // This is where you can clean up if needed
        };
    }, []);
    return (
        <>
            <div className="">
                <ul className='ul'>
                    <li className='li'><img src='/cc.webp' className='w-50 d-flex align-items-center '  /></li>
                    <li className='li'><img src='/bc.png' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/abbott.png' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/ejad.webp' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/searle.png' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo Bayer.png' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/Free_Fire.png' className='w-50 d-flex align-items-center ' /></li>
                    {/* <li className='li'><img src='/galary.png' className='w-50 d-flex align-items-center ' /></li> */}
                </ul>
                <ul className="uli">
                    <li className='li'><img src='/ibex.png' className='w-50' /></li>
                    <li className='li'><img src='/valorant.webp' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/Trillium.avif' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/Reckitt_2021.webp' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/Ramada.png' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/getz.png' className='w-50 d-flex align-items-center ' /></li>
                    <li className='li'><img src='/ILO.png' className='w-50 d-flex align-items-center ' /></li>
                </ul>
            </div>
        </>

    )
}

export default Scroller