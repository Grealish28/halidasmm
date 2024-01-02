import "./Advantages.css"
import Paint from '../../assets/advantages/paint.png'
import Notebook from "../../assets/advantages/notebook.png"
import Mic from "../../assets/advantages/mic.png"
import Crown from '../../assets/advantages/crown.png'

export default function Advantages(){
    return(
        <div className="advantages_page">
            <div className="container">
                <div className="flex_items">
                    <div className="itembg"> 
                        <div className="item">
                            <img src={Notebook} alt="icon" />
                            <h4><span className="numbers">2 Oy</span> Kurs<br/>Davomiyligi</h4>
                        </div>
                    </div>
                    <div className="itembg">
                        <div className="item">
                            <img src={Crown} alt="icon" />
                            <h4><span className="numbers">10 ta</span> Eng Aktual Kasblar</h4>
                        </div>
                    </div>
                    </div>
                    <div className="flex_items">
                    <div className="itembg">
                        <div className="item">
                            <img src={Mic} alt="icon" />
                            <h4><span className="numbers">4 ta</span> Mehmon Speakerlar</h4>
                        </div>
                    </div>
                    <div className="itembg">
                    <div className="item">
                            <img src={Paint} alt="icon" />
                            <h4><span className="numbers">30+</span> video<br/>darsliklar</h4>
                        </div>
                    </div>
                </div>
                    <a href="#pricing" className="form_link_button">Joy Band Qilish!</a>  
            </div>
        </div>
    )
}