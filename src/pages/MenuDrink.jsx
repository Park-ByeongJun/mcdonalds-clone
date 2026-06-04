import drink1 from '../image/drink1.png'
import drink2 from '../image/drink2.jpg'
import drink3 from '../image/drink3.jpg'
import drink4 from '../image/drink4.jpg'
import drink5 from '../image/drink5.jpg'
import drink6 from '../image/drink6.jpg'
import '../css/menuBurger.css'

function MenuDrink() {

    const drinks = [
        {
            name : "레몬주스",
            img : drink1,
            engName : "Lemon Juice"
        },
        {
            name : "콜라",
            img : drink2 ,
            engName : "Coke"
        },
        {
            name : "딸기 주스" ,
            img : drink3 ,
            engName : "Strawberry Juice"
        },
        {
            name : "커피" ,
            img : drink4 ,
            engName : "Coffee"
        },
        {
            name : "라임 주스" ,
            img : drink5 ,
            engName : "Lime Juice"
        },
        {
            name : "초코 라떼" ,
            img : drink6 ,
            engName : "Choco Latte"
        }
    ]

    return(
        <>
            <div>
                <h1>Drinks</h1>
            </div>
            <div>
                <ul className='burgerMenu'>
                    {drinks.map((drink) => (
                        <li className='burgerDetail' key={drink.name}>
                            <img src={drink.img} alt="" />
                            <h2><b>{drink.name}</b></h2>
                            <h3>{drink.engName}</h3>
                        </li>
                    ))}    
                </ul>    
            </div>  
        </>
    );
}

export default MenuDrink;