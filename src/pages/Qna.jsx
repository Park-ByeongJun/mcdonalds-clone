import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/newNotice.css';
import { Link } from 'react-router-dom';

function Qna() {

    const [oneQs, setOneQs] = useState([]);
    const sortOneQs = [...oneQs].sort((a, b) => b.id - a.id);

    const [page, setPage] = useState(1);
    const pageSize = 10;
    const startIndex = (page -1) * pageSize;
    const endIndex = startIndex + pageSize;
    const totalPage = Math.ceil(oneQs.length / pageSize );
    const currentOneQ = sortOneQs.slice(startIndex, endIndex);

    useEffect(() => {
        axios.get("/data/oneQ.json")
        .then((res) => {
            setOneQs(res.data);
        })
        .catch((err) => {
            console.log("OneToOneQuestion Error : ", err);
        });
    }, []);

    return(
        <>
            <div>
                <h1>Q & A</h1>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end", marginRight: "50px"}}>
                <Link to="/qna/qna/question"><button>질문하기</button></Link>
            </div>
            <div className='notice-wrap'>
                <table className='notice-table'>
                    <colgroup>
                        <col style={{width: "10%"}} />
                        <col style={{width: "50%"}} />
                        <col style={{width: "20%"}} />
                        <col style={{width: "20%"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                            <td>일시</td>
                            <td>답변여부</td>
                        </tr>
                    </thead>
                    <tbody>
                        {oneQs.map((q, index) => (
                            <tr key={q.id}>
                                <td>{q.id}</td>
                                <td>{q.title}</td>
                                <td>{q.date}</td>
                                <td>{q.answer.length === 0 ? "X" : "O"}</td>
                            </tr>
                        ))}
                    </tbody>    
                </table>    
            </div>
        </>
    );
}

export default Qna;