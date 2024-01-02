import memoji from "../../assets/memoji.png"
import emojitarget from "../../assets/emoji_target.png"
import emojismm from "../../assets/emoji_smm.png"
import emojimobilography from "../../assets/emoji_mobilography.png"
import emojiassistant from "../../assets/emoji_assistant.png"
import emojistories from "../../assets/emoji_stories.png"
import emojiblogger from "../../assets/emoji_blogger.png"
import emojicontent from "../../assets/emoji_content.png"
import emojireels from "../../assets/emoji_reels.png"
import emojiphoto from "../../assets/emoji_photo.png"
import emojicopyright from "../../assets/emoji_copyright.png"

import Styles from "./Jobs.module.css"
import JobsCard from "./JobsCard"



export default function Jobs(props){
    return(
        <div className={Styles.jobs_page}>
            <div className={Styles.jobs_container}>
                <h2 className={Styles.jobs_header} data-aos="zoom-out">O’zingiz hohlagan mutaxassis bo'ling!</h2>
                <div className={Styles.jobs_memojies} >
                    <img src={memoji} alt="memoji1" className={Styles.jobs_memoji} data-aos="flip-left"/>
                </div>
                <div className={Styles.jobs_cards} data-aos="fade-down">
                    <JobsCard imgSrc={emojismm} text="SMM Mutaxassis"/>
                    <JobsCard imgSrc={emojimobilography} text="Mobilograf"/>
                    <JobsCard imgSrc={emojiblogger} text="Blogger"/>
                    <JobsCard imgSrc={emojiassistant} text="Blogger Assistenti"/>
                    <JobsCard imgSrc={emojicontent} text="Kontent-meyker"/>
                    <JobsCard imgSrc={emojistories} text="Stories-meyker" />
                    <JobsCard imgSrc={emojitarget} text="Targetolog" />
                    <JobsCard imgSrc={emojireels} text="Reels-meyker"/>
                    <JobsCard imgSrc={emojicopyright} text="Kopirayter"/>
                    <JobsCard imgSrc={emojiphoto} text="Mobil Fotograf"/>
                </div>
            </div>
        </div>
    )
}