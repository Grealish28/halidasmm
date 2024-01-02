import Styles from "./Roadmap.module.css"

export default function RoadmapItem(props){
    return(
        <div className={Styles.bg}>
            <div className={Styles.bg_white}>
                <img src={props.image} alt="memoji" className={Styles.image}/>
                <h4 className={Styles.title}>{props.title}</h4>
                <ul className={Styles.list}>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}