import Styles from "./Header.module.css"
import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min.js'
import HeaderImage from "../../assets/headerimage.webp"
// import modelPhoto from "../../assets/model_photo.png"

export default function Header(){
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
        setVantaEffect(WAVES({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0b1324
        }))
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return(
        <div ref={myRef} className={Styles.header}>
            <div className={Styles.header_tag}>
                <h3 className={Styles.header_tag_h3}>Start</h3>
                <h2 className={Styles.header_tag_h2}>5-Yanvar</h2>
            </div>
            <div className={Styles.header_blur}></div>
            <div className={Styles.header_container}>
                <h1 className={Styles.header_h1}>MediaXpert</h1>
                <p className={Styles.header_p}>Barcha zamonaviy kasblar<br/>endi bir kursda!</p>
                <p className={Styles.header_subtitle}>Yangi yilni yangi kasb bilan boshlang!</p>

            </div>
            <img src={HeaderImage} alt="founderimage" className={Styles.header_image}/>
            {/* <a href="#pricing" className={Styles.header_button}>
                Batafsil
            </a> */}
         </div>
    )
}