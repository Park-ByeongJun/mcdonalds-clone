import ham1 from '../image/ham1.png'
import ham2 from '../image/ham2.png'
import ham3 from '../image/ham3.png'
import ham4 from '../image/ham4.png'
import ham5 from '../image/ham5.png'
import ham6 from '../image/ham6.png'
import ham7 from '../image/ham7.png'
import ham8 from '../image/ham8.png'
import '../css/menuBurger.css'

function MenuBurger() {

const burgers = [
    ham1, ham2, ham3, ham4, ham5, ham6, ham7, ham8
]

const burgerInfo = [
        {
            name : "소고기 패티 오리지널 버거",
            img : ham1,
            engName : "Beef Original Burger"
        },
        {
            name : "더블 패티 오리지널 버거",
            img : ham2,
            engName : "Double Beef Original Burger"
        },
        {
            name : "치킨 토마토 버거",
            img : ham3,
            engName : "Chicken Tomato Burger"
        },
        {
            name : "오리지널 버거",
            img : ham4,
            engName : "Original Burger"
        },
        {
            name : "더블 패티 베이컨 버거",
            img : ham5,
            engName : "Double patty bacon Burger"
        },
        {
            name : "치킨 패티 오리지널 버거",
            img : ham6,
            engName : "Chicken Original Burger"
        },
        {
            name : "오리지널 치즈 버거",
            img : ham7,
            engName : "Original Cheese Burger"
        },
        {
            name : "오리지널 칠리 버거",
            img : ham8,
            engName : "Original chili Burger"
        },
    ]

    return(
        <>
            <div>
                <h1>HAMBURGER</h1>
            </div>
            <div>
                <ul className='burgerMenu'>
                    {burgerInfo.map((burgerInfo) => (
                                <li className='burgerDetail' key={burgerInfo.name}>
                                    <img src={burgerInfo.img} alt="" />
                                    <h2><b>{burgerInfo.name}</b></h2>
                                    <h3>{burgerInfo.engName}</h3>
                                </li>
                            ))}         
                </ul>
            </div>
        </>
    );
}

export default MenuBurger;
