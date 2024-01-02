import RoadmapItem from "./RoadmapItem"
import Styles from './Roadmap.module.css'
import memoji1 from '../../assets/memoji/1.png'
import memoji2 from '../../assets/memoji/2.png'
import memoji3 from '../../assets/memoji/3.png'
import memoji4 from '../../assets/memoji/4.png'
import memoji5 from '../../assets/memoji/5.png'
import memoji6 from '../../assets/memoji/6.png'
import memoji7 from '../../assets/memoji/7.png'
import memoji8 from '../../assets/memoji/8.png'
import memoji9 from '../../assets/memoji/9.png'
import memoji10 from '../../assets/memoji/10.png'


export default function Roadmap(){
    return(
        <div className={Styles.page}>
            <div className={Styles.container}>
                <div className={Styles.header}>
                    <h2 className={Styles.header_title}>Modullar</h2>
                </div>
                <div className={Styles.scroll_container}>
                    <ul className={Styles.items}>
                        <RoadmapItem title="1. Kirish" image={memoji1}>
                            <li>Kursdagi asosiy yo'nalishlar<br/>bilan tanishuv</li>
                        </RoadmapItem>
                        <RoadmapItem title="2. SMM" image={memoji2}>
                            <li>Ijtimoiy tarmoqlarda<br/>marketing asoslari</li>
                        </RoadmapItem>
                        <RoadmapItem title="3. Blogging" image={memoji3}>
                            <li>Bloggerlik sari<br/>ilk qadamlar</li>
                        </RoadmapItem>
                        <RoadmapItem title="4. Mobilografiya" image={memoji4}>
                            <li>Telefon orqali syomka<br/>va montaj</li>
                        </RoadmapItem>
                        <RoadmapItem title="5. Target" image={memoji5}>
                            <li>Professional darajada<br/>reklama sozlash</li>                       
                        </RoadmapItem>
                        <RoadmapItem title="6. Copywriting" image={memoji6}>
                            <li>Postlar uchun sotuvchi<br/>matn yozish</li>
                        </RoadmapItem>
                        <RoadmapItem title="7. Stories Making" image={memoji7}>
                            <li>Stories orqali kontent yaratish<br/>va auditoriya jalb qilish</li>
                        </RoadmapItem>
                        <RoadmapItem title="8. Psixologiya" image={memoji8}>
                            <li>Ichki qo'rquvlar bilan ishlash<br/>va ularni yengish</li>
                        </RoadmapItem>
                        <RoadmapItem title="9. Mijoz topish" image={memoji9}>
                            <li>Mijoz topishning barcha yo'llari,<br/>usullari va sirlari</li>
                        </RoadmapItem>
                        <RoadmapItem title="10. Imtihon" image={memoji10}>
                            <li>Barcha o'tilgan mavzular bo'yicha<br/>yakuniy imtihon</li>
                        </RoadmapItem>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}