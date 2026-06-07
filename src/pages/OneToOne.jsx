import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/newNotice.css';

function OneToOne() {

    return(
        <>
            <div style={{maxWidth: "90%", margin: "0 auto"}}>
                <div>
                    <h1>1 : 1 질문</h1>
                </div>
                <div>
                    <div>
                        <span>제목</span><input type="text" />
                        <span>Email</span><input type="email" />
                    </div>
                    <div>
                        <span>내용</span>
                    </div>
                    <div>    
                        <textarea style={{width: "100%", height: "350px"}} name="" id=""></textarea>
                    </div>
                    <span>
                        <ul>
                            <li><b>문의 사항에 대한 답변은 해당 이메일로 발송됩니다.</b></li>
                            <li><b>운영과 관련없는 욕설, 비방 내용은 제재될 수 있습니다.</b></li>
                        </ul>
                    </span>
                    <div>
                        <button>제출</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OneToOne;