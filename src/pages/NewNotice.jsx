import { useEffect, useState } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import axios from 'axios';
import '../css/newNotice.css'

function NewNotice() {

    const [notices, setNotices] = useState([]);
    const sortNotices = [...notices].sort((a, b) => b.id - a.id);
    
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const totalPage = Math.ceil(notices.length / pageSize);
    const currentNotices = sortNotices.slice(startIndex, endIndex);

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
                        {currentNotices.map((notice) => (
                            <tr key={notice.id} className="noticeDetail">
                                <td>{notice.id}</td>
                                <td>{notice.id}</td>
                                <td>{notice.title}</td>
                                <td>{notice.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
                <div className='btnZone'>
                    <button
                        onClick={() => setPage((prev) => prev - 1)}
                        disabled={page === 1}
                    ><GrPrevious /></button>
                    {
                        Array.from({length : totalPage}, (_, i) => (
                           <button key={i + 1} onClick={() => setPage(i + 1)}
                           className={page === i + 1 ? "active" : ""}>
                                {i + 1}
                           </button> 
                        ))
                    }
                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={page === Math.ceil(notices.length / pageSize)}
                    ><GrNext /></button>
                </div>      
            </div>  
        </>
    );
}

export default NewNotice;