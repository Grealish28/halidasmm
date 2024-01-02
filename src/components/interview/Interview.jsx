import Styles from "./Interview.module.css"
export default function Interview() {
    return(
        <div className={Styles.interview_page}>
            <div className={Styles.interview_container}>
                <h2 className={Styles.interview_h2} data-aos="zoom-out">O'quvchilarning natijalari</h2>
                <div className={Styles.inteview_flex} >
                    <div className={Styles.interview_item} data-aos="zoom-in-up">
                        <div className={Styles.btns}>
                            <div className={Styles.btn1}></div>
                            <div className={Styles.btn2}></div>
                            <div className={Styles.btn3}></div>
                        </div>
                        <iframe src="https://www.youtube.com/embed/l7dKMgHVPFc?si=7EFRrb0ox3-N-kzm" className={Styles.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className={Styles.interview_item} data-aos="zoom-in-up">
                        <div className={Styles.btns}>
                            <div className={Styles.btn1}></div>
                            <div className={Styles.btn2}></div>
                            <div className={Styles.btn3}></div>
                        </div>
                        <iframe src="https://www.youtube.com/embed/Ta6Xi-0xwRE?si=ikvbc6nUUA2PKBnW" className={Styles.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className={Styles.interview_item} data-aos="zoom-in-up">
                        <div className={Styles.btns}>
                            <div className={Styles.btn1}></div>
                            <div className={Styles.btn2}></div>
                            <div className={Styles.btn3}></div>
                        </div>
                        <iframe src="https://www.youtube.com/embed/n7BLfLsl_58?si=DbRMeYS49fFjOh9C" className={Styles.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
