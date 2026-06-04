import newOpen1 from '../image/newOpen1.png'
import newOpen2 from '../image/newOpen2.png'

function New(){

    const newOpen = [
        {
            img : newOpen1,
            name : "스모키 베이컨 버거",
            engName : "Smoky Bacon Burger"
        },
        {
            img : newOpen2,
            name : "자몽 허니 블라썸 에이드",
            engName : "Grapefruit Honey Blossom Ade"
        }
    ]

    return(
        <>
            <div>
                {newOpen.map((open) => (
                    <img style={{width: "50%", margin: "10px"}} src={open.img} alt="" />
                ))}
            </div>
        </>
    );
}

export default New; 