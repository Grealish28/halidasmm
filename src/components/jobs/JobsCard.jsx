
import Styles from "./JobsCard.module.css"


export default function JobsCard(props){
    return(
        <div className={Styles.jobs_card_gradient}>
            <div className={Styles.jobs_bg}>
                <img src={props.imgSrc} alt="emoji" className={Styles.jobs_emoji} />
                <h4>{props.text}</h4>
            </div>
        </div>
    )
}

