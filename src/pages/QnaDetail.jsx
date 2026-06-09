import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function QnaDetail() {

    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/qna")
        .then((res) => {
            const qnaDetail = res.data.find(
                (item) => item.id === String(id)
            );
            setDetail(qnaDetail);
        })
        .catch((err) => {
            console.log("QnA Detail Error : ", err);
        });
    }, [id]);

    if(!detail) {
        return <div>loading......</div>
    }

    return(
        <>
            <div>
                <h1>Q & A</h1>
                <div>
                    <span>제목</span>
                    <p>{detail.title}</p>
                </div>
                <div>
                    <span>내용</span>
                    <p>{detail.content}</p>
                </div>
                <div>
                    <span>답변</span>
                    <p>{detail.answer.length === 0 ? "아직 답변이 등록되지 않았습니다." : detail.answer}</p>
                </div>
            </div>
        </>
    )
}

export default QnaDetail;