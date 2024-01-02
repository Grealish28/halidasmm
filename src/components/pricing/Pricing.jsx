import {useState} from 'react';
import Modal from "./Modal"
import Styles from "./Pricing.module.css"

export default function Pricing(){
    const [modalIsopen, setModalIsOpen] = useState(false);
    function toggleModal(){
        setModalIsOpen(!modalIsopen);
    }

    return(
        <>
        {modalIsopen ? <Modal closeModal={toggleModal}/> : null}        
        <div className={Styles.page} id="pricing">
        <div className={Styles.container}>
            <h2 data-aos="zoom-out" className={Styles.header_title}>Tariflar</h2>
            <p>Narxlar <strong>2 oylik</strong> to'liq kurs uchun ko'rsatilgan</p>
            <div className={Styles.prices} data-aos="fade-down">
                <div className={Styles.pricing_item_standart}  >
                    <div className={Styles.standart_tag}>
                        <h3>Standart</h3>
                    </div >
                    <div className={Styles.pricing_flex}>
                        <div className={Styles.list}>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  8 ta modul</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  25 ta darslik</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Umumiy chat guruh</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Qo’shimcha materiallar (gayd, chek-listlar, kitoblar)</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Darslardan 3 oy foydalanish imkoniyati</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kurs tamomlash haqida sertifikat</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kurs davomiyligi 2 oy</h4>
                        </div>
                        <div>
                            <p className={Styles.oldprice}>4.299.000</p>
                            <p className={Styles.price}>2.230.000</p>
                            <h5 className={Styles.standart_button} onClick={toggleModal}>Tanlash</h5>
                        </div>
                    </div>
                </div>
                <div className={Styles.pricing_item_pro}>
                    <div className={Styles.pro_tag}>
                        <h3>PRO</h3>
                    </div>
                    <div className={Styles.pricing_flex}>
                        <div className={Styles.list}>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  10 ta modul</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  25 ta darslik (+ 5 ta bonus dars)</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Qo’shimcha materiallar (gayd, chek-listlar, kitoblar)</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Vakansiyalar guruhiga qo’shilish- tayyor loyiha olish imkoniyati</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Mehmon spikerlar bilan offlayn uchrashuv</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kuratorlar tomonidan barcha savollarga javob olish</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kuratorlar tomonidan uyga vazifalarni tekshirish</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Yopiq “Pro Tarif” guruhiga qo’shilish</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kuratorlar tomonidan 6 ta qo’shimcha zoom dars</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Halida Abdurahmanova bilan 1 ta qo’shimcha zoom dars</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Yakuniy imtihon</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Sertifikat</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Bitiruv oqshomi</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Darslardan 6 oy foydalanish imkoniyati</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kurs davomiyligi 2 oy</h4>
                        </div>
                        <div>
                            <p className={Styles.oldprice}>4.999.000</p>
                            <p className={Styles.price}>3.997.000</p>
                            <h5 className={Styles.pro_button} onClick={toggleModal}>Tanlash</h5>
                        </div>
                    </div>
                </div>
                <div className={Styles.pricing_item_vip}>
                    <div className={Styles.vip_tag}>
                        <h3>VIP</h3>
                    </div>
                    <div className={Styles.pricing_flex} >
                        <div className={Styles.list}>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  10 ta modul</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  25 ta darslik (+ 5 ta bonus dars)</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Umumiy chat guruh</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Qo’shimcha materiallar (gayd, chek-listlar, kitoblar)</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Vakansiyalar guruhiga qo’shilish- tayyor loyiha olish imkoniyati</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Halida Abdurahmanovadan 2 ta offlayn uchrashuv</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Mehmon spikerlar bilan offlayn uchrashuv</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Shaxsan Halida Abdurahmanovadan barcha savollarga javob olish</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Halida Abdurahmanova uyga vazifalarni tekshiradi</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  5 ta eng faol o’quvchilar uchun tayyor loyiha olish imkoniyati</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kurs tamomlagandan so’ng 1 oy amaliy ko’mak</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Halida Abdurahmanova bilan VIP chat</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Halida Abdurahmanovadan 2 ta qo’shimcha zoom dars</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Yakuniy imtihon</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Sertifikat</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Bitiruv oqshomi</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Darslardan 1 yil foydalanish imkoniyati</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  Kurs davomiyligi 2 oy</h4>
                            <h4 className={Styles.listItem}><span className={Styles.statusGreen}>✔</span>  + 1 oy qo'llab quvvatlash</h4>
                        </div>
                    <div>
                        <p className={Styles.oldprice}>8.999.000</p>
                        <p className={Styles.price}>6.997.000</p>
                        <h5 className={Styles.vip_button} onClick={toggleModal}>Tanlash</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>  
        </>
    )
}