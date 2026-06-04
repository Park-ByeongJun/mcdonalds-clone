import '../css/menuBurger.css'
import side1 from '../image/sides1.jpg'
import side2 from '../image/sides2.jpg'
import side3 from '../image/sides3.jpg'
import side4 from '../image/sides4.jpg'
import side5 from '../image/sides5.jpg'

function MenuSides() {

const sides = [
    {
        name : "감자튀김",
        img : side1,
        engName : "Fried Potato"
    },
    {
        name : "양파링",
        img : side2 ,
        engName : "onion ring" 
    },
    {
        name : "칠리 치즈스틱",
        img : side3 ,
        engName : "chili cheese sticks"
    },
    {
        name : "고기튀김" ,
        img : side4 ,
        engName : "fried fork" 
    },
    {
        name : "치즈스틱" ,
        img : side5 ,
        engName : "Cheese Sticks"
    },
]

    return(
        <>
            <div>
                <h1>Sides</h1>
            </div>
            <div>
                <ul className='burgerMenu'>
                    {sides.map((side) => (
                        <li className='burgerDetail' key={side.name}>
                            <img src={side.img} alt="" />
                            <h2><b>{side.name}</b></h2>
                            <h3>{side.engName}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MenuSides;