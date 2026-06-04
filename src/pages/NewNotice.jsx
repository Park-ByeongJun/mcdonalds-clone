import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/newNotice.css'

function NewNotice() {

    const [notices, setNotices] = useState([]);

    useEffect(() => {
        axios.get("/data/notices.json")
        .then((res) => {
            setNotices(res.data);
        })
        .catch((err) => {
            console.log("Notice Error : ", err);
        });
    }, []);

    return(
        <>
            <h1>공지사항</h1>
            <div className='notice-wrap'>
                <table className="notice-table">
                    <colgroup>
                        <col style={{width: "10%"}}/>
                        <col style={{width: "10%"}}/>
                        <col style={{width: "60%"}}/>
                        <col style={{width: "20%"}}/>
                    
                    </colgroup>

                    <thead className="noticeHead">
                        <tr>
                            <td>번호</td>
                            <td>분류</td>    
                            <td>제목</td>
                            <td>시간</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="noticeDetail">
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>        
            </div>  
        </>
    );
}

export default NewNotice;