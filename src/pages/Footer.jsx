import { Link } from "react-router-dom";
import logo from '../image/hambugiLogo.png';
import '../css/footer.css';

function Footer() {

    return(
        <>
            <footer className="footer">
                <div className="footerInside">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" className="logo" />
                        </Link>
                    </div>
                    <ul className="footerList">
                        <li>개인정보 처리방침</li>
                        <li>가맹점 문의</li>    
                        <li>고객 문의</li>
                        <li>인재채용</li>
                    </ul>
                </div>
                <div className="footerIntro">
                    <p>© 2026 Park ByeongJun. This is a personal portfolio project inspired by McDonald's Korea.</p>
                    <p><a href="https://www.mcdonalds.co.kr/kor/" target="_blank" rel="noopener noreferrer">McDonald's Korea</a></p>
                </div>
            </footer>
        </>
    );
}

export default Footer;