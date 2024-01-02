import Styles from "./Guests.module.css"
import Guest1 from "../../assets/guests/guest1.jpg"
import Guest2 from "../../assets/guests/guest2.jpg"
import Guest3 from "../../assets/guests/guest3.jpg"
import Guest4 from "../../assets/guests/guest4.jpg"

export default function Guests(){
    return(
        <div className={Styles.guests_page}>
            <div className={Styles.container}>
                <h2 data-aos="zoom-in">Mehmon Spikerlar</h2>
                <div className={Styles.flex_items} data-aos="fade-up">
                    <div className={Styles.itembg}>
                        <div className={Styles.item}>
                            <img src={Guest4} alt="icon" />
                            <h3>Bonamur</h3>
                            <h4>Blogger</h4>
                            <p><strong>1.3 million</strong> obunachiga ega. "Bloggerlik sirlari va yoshlarga maslahat" beradilar.</p>
                        </div>
                    </div>
                    <div className={Styles.itembg}>
                        <div className={Styles.item}>
                            <img src={Guest2} alt="icon" />
                            <h3>Doniyor FX</h3>
                            <h4>Videograf</h4>
                            <p><strong>8 yillik tajriba, 30 dan ziyod</strong> xalqaro va milliy loyihalarda qatnashgan.</p>
                        </div>
                    </div>
                    <div className={Styles.itembg}> 
                        <div className={Styles.item}>
                            <img src={Guest1} alt="icon" />
                            <h3>Umida Kadyrova</h3>
                            <h4>Oliy ma’lumotli psixolog-pedagog</h4>
                            <p><strong>“Ichki qorquvlar bilan ishlash va ularni yengish”</strong> boyicha dars</p>
                        </div>
                    </div>
                    <div className={Styles.itembg}>
                        <div className={Styles.item}>
                            <img src={Guest3} alt="icon" />
                            <h3>Komron Yo’ldoshev</h3>
                            <h4>Prodyuser | Online Edu firma asoschisi</h4>
                            <p><strong>"Mijoz topish va xizmatni qimmat narxga sotish"</strong> bilimlarini beradi</p>
                        </div>
                    </div>
                </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyBVI_UMH2R9P-Xjtdlo_Ro_18YlItptpBdC0KMlXZ_ZPMbA/viewform?usp=sf_link" className={Styles.form_link_button}>Joy Band Qilish!</a>  
            </div>
        </div>
    )
}