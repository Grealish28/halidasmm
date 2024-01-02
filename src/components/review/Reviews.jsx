import "./Review.css"
import img1 from "../../assets/reviews/1.jpg";
import img2 from "../../assets/reviews/2.jpg";
import img3 from "../../assets/reviews/3.jpg";
import img4 from "../../assets/reviews/4.jpg";
import img5 from "../../assets/reviews/5.jpg";
import img6 from "../../assets/reviews/6.jpg";
import img7 from "../../assets/reviews/7.jpg";
import img8 from "../../assets/reviews/8.jpg";
import img9 from "../../assets/reviews/9.jpg";
import img10 from "../../assets/reviews/10.jpg";
import img11 from "../../assets/reviews/11.jpg";
import img12 from "../../assets/reviews/12.jpg";
import img13 from "../../assets/reviews/13.jpg";



export default function Review(){
    return(
        <div className="page">
        <div className="review_container">
            <h2 data-aos="zoom-in">O'quvchilarning fikrlari</h2>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-aos="flip-down">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="1"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="2"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img5} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img6} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img7} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img8} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img9} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img10} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img11} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img12} className="d-block w-100" alt="3"/>
                    </div>
                    <div className="carousel-item">
                    <img src={img13} className="d-block w-100" alt="3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </div>
    )
}