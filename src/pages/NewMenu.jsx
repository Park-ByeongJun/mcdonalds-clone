import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import newBurger1 from '../image/newBurger1.png'
import newBurger2 from '../image/newBurger2.png'
import newBurger3 from '../image/newBurger3.png'
import '../css/newMenu.css'
import "swiper/css";

function NewMenu() {

    const newMenus = [
        {
            img : newBurger1,
            name : "프래시 오리지널 버거",
            engName : "Fresh Original Burger"
        },
        {
            img : newBurger2,
            name : "갈릭버터 후라이" ,
            engName : "Garlic butter Fried"
        },
        {
            img : newBurger3,
            name : "딸기 에이드" ,
            engName : "Strawberry Ade"
        }
    ]

    return(
        <>
            <div>
                <div className='newBurgerMenu'>
                    <div> 
                        <h1>신메뉴</h1>
                    </div>  
                    <div style={{display: "flex", justifyContent: "center" ,flexDirection: "column", alignItems: "center"}}>
                            {newMenus.map((newMenu) => (
                                    <img key={newMenu.name} src={newMenu.img} alt="" />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewMenu;