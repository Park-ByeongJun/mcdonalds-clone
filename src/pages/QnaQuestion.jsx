import { useState } from "react";
import axios from "axios";
import '../css/oneToOne.css';

function QnaQuestion() {

    const [title, setTitle] = useState("");
    const [emailId, setEmailId] = useState("");
    const [emailDomain, setEmailDomain] = useState("");
    const [emailCusDomain, setEmailCusDomain] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const answer = "";

    const submitQ = () => {
        const finalDomain = 
        emailDomain === "custom" ? emailCusDomain : emailDomain;

    const email = `${emailId}@${finalDomain}`;
    axios.post("http://localhost:3001/qna", {
        title, email, content, answer ,date: new Date().toISOString().slice(0,10)
            }
        ).then((res) => {
            alert("문의가 전송되었습니다.");
            window.location.reload();
        })
        .catch((err) => {
            alert("문제가 발생했습니다. 관리자에게 문의 부탁드립니다.");
        });
    };

    return (
        <>
            <div style={{maxWidth: "90%", margin: "0 auto"}}>
                <div>
                    <h1>Q & A 질문하기</h1>
                </div>
                <div>
                    <div>
                        <div className='form-row'>
                            <span>제목</span>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                            <p></p>
                        <div className='form-row'>
                            <span>Email</span>
                            <div>
                                <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                <span>@</span> 
                                <select value={emailDomain} onChange={(e) => setEmailDomain(e.target.value)} 
                                style={{width: "180px"}} name="" id="">
                                    <option value="">선택해주세요</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="custom">직접입력</option>
                                </select>
                                <div>
                                    {emailDomain === "custom" && (
                                        <input 
                                            type='text'
                                            placeholder='도메인 입력'
                                            value={emailCusDomain}
                                            onChange={(e) => setEmailCusDomain(e.target.value)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='form-row'>
                            <span>내용</span>
                        </div>
                        <div>    
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} 
                            style={{width: "100%", height: "350px"}} name="" id=""></textarea>
                        </div>
                        <span>
                            <ul>
                                <li><b>문의 사항에 대한 답변은 해당 이메일로 발송됩니다.</b></li>
                                <li><b>운영과 관련없는 욕설, 비방 내용은 제재될 수 있습니다.</b></li>
                            </ul>
                        </span>
                        <div>
                            <button onClick={submitQ}>제출</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QnaQuestion;