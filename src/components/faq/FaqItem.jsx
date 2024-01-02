import {useState} from 'react'
import Styles from "./Faq.module.css"
import dropdownIcon from "../../assets/dropdown_icon.png"

export default function FaqItem(props){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = function (){
        setIsOpen(!isOpen)
    }

    return(
        <div className={Styles.faq_item}>
            <div className={Styles.title_line}>
            <h3 className={Styles.title}>{props.title}</h3>
            <button onClick={handleClick} className={Styles.dropdown_btn}>
                <img src={dropdownIcon} alt="dropdown" className={Styles.dropdownIcon} />
            </button>
            {/* <FontAwesomeIcon icon="fa-solid fa-caret-down" className={Styles.dropdown_icon} /> */}
            </div>
            {isOpen ? <p className={Styles.content} data-aos="fade-down">{props.content}</p> : null}
        </div>
    )
}