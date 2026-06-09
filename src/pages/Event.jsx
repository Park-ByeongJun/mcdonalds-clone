import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import axios from "axios";
import '../css/newNotice.css'
import { Link, useNavigate } from "react-router-dom";

function Event() {

    const [notices, setNotices] = useState([]);
    const sortNotices = [...notices].sort((a, b) => b.id - a.id);

    const [page, setPage] = useState(1);
    const pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const totalPage = Math.ceil(notices.length / pageSize);
    const currentNotices = sortNotices.slice(startIndex, endIndex);
    const navigate = useNavigate();

    function eventDetail(id) {
        navigate(`/event/event/${id}`);
    }

    useEffect(() => {
        axios.get("/data/events.json")
        .then((res) => {
            setNotices(res.data);
        })
        .catch((err) => {
            console.log("Event Error : ", err);
        });
    }, []);

    return(
        <>
            <h1>이벤트</h1>
            <div className="notice-wrap">
                <table className="notice-table">
                    <colgroup>
                        <col style={{width: "10%"}}/>
                        <col style={{width: "30%"}}/>
                        <col style={{width: "40%"}}/>
                        <col style={{width: "20%"}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>이미지</td>
                            <td>제목</td>
                            <td>등록일</td>
                        </tr>
                    </thead>
                    <tbody>
                        {currentNotices.map((notice) => (
                            <tr onClick={() => eventDetail(notice.id)} key={notice.id} className="noticeDetail">
                                <td>{notice.id}</td>
                                <td><img style={{width: "100px", height: "100px"}} src={notice.image} alt="" /></td>
                                <td>{notice.title}</td>
                                <td>{notice.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="btnZone">
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

export default Event;