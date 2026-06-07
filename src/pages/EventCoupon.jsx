import coupon1 from '../image/coupon1.png';
import coupon2 from '../image/coupon2.png';
import coupon3 from '../image/coupon3.png';
import coupon4 from '../image/coupon4.png';
import '../css/coupon.css'
import { FiDownload } from "react-icons/fi";

function EventCoupon() {

     const coupon = [
        coupon1, coupon2, coupon3, coupon4
     ]

    return(
        <>
            <h1>이벤트 쿠폰</h1>
            <table className='coupon-table'>
                <colgroup>
                    <col style={{width: "80%"}}/>
                    <col style={{width: "20%"}}/>
                </colgroup>
                <thead>
                    <tr>
                        <td>쿠폰</td>
                        <td>저장</td>
                    </tr>
                </thead>
                <tbody>
                    {coupon.map((cou, index) => (
                        <tr key={index}>
                            <td><img style={{width: "40%", height: "50%", marginLeft: "20px"}} src={cou} alt="" /></td>
                            <td><b><a href={cou} download><FiDownload /></a></b></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EventCoupon;