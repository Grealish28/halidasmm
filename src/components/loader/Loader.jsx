import Styles from "./Loader.module.css";
import LoaderGif from "../../assets/loading.gif"

export default function Loader(){
    console.log("Lodare show");
    return(
        <div className={Styles.loader_page}>
            <img src={LoaderGif} alt="loading" className={Styles.loader_img} />
        </div>
    )
}