import { Link } from "react-router-dom";
import logo from '../image/hambugiLogo.png';
import '../css/header.css'

function Header() {

    return(
        <header className="header">
            <div className="test">
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <div>
                    <ul className="newMenu">
                        <li>
                            NEW
                            <ul className="dropdown">
                                <li><Link className="menuLink" to="/new/open">출시 예정</Link></li>
                                <li><Link className="menuLink" to="/new/menu">신메뉴</Link></li>
                                <li><Link className="menuLink" to="/new/notice">공지사항</Link></li>
                            </ul>
                        </li>
                        <li>
                            MENU
                            <ul className="dropdown">
                                <li><Link className="menuLink" to="/menu/burger">버거</Link></li>
                                <li><Link className="menuLink" to="/menu/sides">사이드</Link></li>
                                <li><Link className="menuLink" to="/menu/drink">음료</Link></li>
                            </ul>
                        </li>
                        <li>
                            EVENT
                            <ul className="dropdown">
                                <li><Link className="menuLink" to="/event/event">이벤트</Link></li>
                                <li><Link className="menuLink" to="/event/coupon">쿠폰</Link></li>
                            </ul>
                        </li>   
                        <li>    
                            Q&A
                            <ul className="dropdown">
                                <li><Link className="menuLink" to="/qna/oneToOne">1:1 문의</Link></li>
                                <li><Link className="menuLink" to="/qna/qna">Q & A</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;