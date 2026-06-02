import { useState, useEffect } from 'react'
import ham1 from '../image/ham1.png'
import ham2 from '../image/ham2.png'
import ham3 from '../image/ham3.png'
import ham4 from '../image/ham4.png'
import ham5 from '../image/ham5.png'
import ham6 from '../image/ham6.png'
import ham7 from '../image/ham7.png'
import ham8 from '../image/ham8.png'
import drink1 from '../image/drink1.png'
import '../css/home.css';

function Home() {
    const images = [
        ham1, ham2, ham3, drink1
    ];

    const newImages = [
        ham4, ham5, ham6, ham7, ham8
    ]

    const newImageInfo = [
        {
            name : "소고기 패티 오리지널 버거",
            engName : "Beef Original Burger"
        },
        {
            name : "더블 패티 오리지널 버거",
            engName : "Double Beef Original Burger"
        },
        {
            name : "치킨 패티 오리지널 버거",
            engName : "Chicken Original Burger"
        },
        {
            name : "오리지널 버거",
            engName : "Original Burger"
        },
        {
            name : "불고기 패티 오리지널 버거",
            engName : "Bulgogi Original Burger"
        },
    ]

    const [current, setCurrent] = useState(0);
    const [newBurger, setNewBurger] = useState(0);
    const [play, setPlay] = useState(true);

    const nextSlide = () => {
        setNewBurger((prev) => 
            prev >= newImages.length -1 ? 0 : prev +1
        );
    };

    const preSlide = () => {
        setNewBurger((prev) =>
            prev <= 0 ? newImages.length -1 : prev -1
        );
    };

    const prevMain = () => {
        setCurrent((prev) => 
            prev === 0 ? images.length -1 : prev - 1
        );
    };

    const nextMain = () => {
        setCurrent((prev) => 
            prev === images.length -1 ? 0 : prev + 1
        )
    }

    useEffect(() => {
        if(!play) return;
        
        const timer = setInterval(() => {
            nextMain();
        }, 3000);

        return () => clearInterval(timer);
    }, [play]);

  return ( 
    <>
        <div>
            <div className='slider'>
                <img src={images[current]} alt="" />
                <div className='slide-btn'>
                    <button onClick={prevMain}>이전</button>
                    <button onClick={() => setPlay((prev) => !prev)}>{play ? "정지" : "재생"}</button>
                    <button onClick={nextMain}>이후</button>
                </div>
            </div>
        </div>
        <div>
            <h1 style={{ margin : '50px' }}>NEW MENU</h1>
        </div>
        <div className='newImages'>
            <div className='newImagesDetail'>
                <button onClick={preSlide}>전</button>
                <div className='newImageOne'>
                    <img src={newImages[newBurger]} alt="newBurger" />
                    <p>{newImageInfo[newBurger].name}</p>
                    <p>{newImageInfo[newBurger].engName}</p>
                </div>
                <div className='newImageOne'>
                    <img src={newImages[(newBurger + 1) % newImages.length]} alt="newBurger" />
                    <p>{newImageInfo[(newBurger + 1) % newImages.length ].name}</p>
                    <p>{newImageInfo[(newBurger + 1) % newImages.length].engName}</p>
                </div>
                <button onClick={nextSlide}>후</button>
            </div>
            <div>
                <p className='hiMent'>햄부기의 최신 소식을 빠르게 받아보세요!</p>
            </div>
        </div>
    </>
  )
}

export default Home;