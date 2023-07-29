import {useEffect, useState} from "react"
import axios from "axios";
import "../../styles/Account.css"
import {useNavigate} from "react-router-dom";
import { join } from "path";
import { Join } from "./Join";

export const Account = () => {

    // 탭, 로그인 폼, 회원가입 폼 3가지 컴포넌트로 나눌 것 !!

    const navigate = useNavigate();

    const [tap, setTap] = useState(true);
    const loginClick = () => {
        setTap(true);
    }
    const joinClick = () => {
        setTap(false);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginForm, setLoginForm] = useState({});

    const onEmailHandler = (e : any) => {
        setEmail(e.currentTarget.value)
    }
    const onPassWordHandler = (e : any) => {
        setPassword(e.currentTarget.value)
    }
    const onLogin = () => {
        setLoginForm({email, password})
    }

    useEffect(() => {
        axios
            .post('http://192.168.162.2:8080/auth/login', loginForm)
            .then((res) => console.log(res))
            .then((res) => alert("로그인 성공"))
            .catch((err) => console.log(err))
    }, [loginForm])

    return (
        <div className="account_container">
            <div className="account_tap">
                <div
                    className={(
                        tap)
                        ? "tap_active"
                        : "tap"}
                    onClick={loginClick}>로그인</div>
                <div
                    className={(
                        tap)
                        ? "tap"
                        : "tap_active"}
                    onClick={joinClick}>회원가입</div>
            </div>
            <div className="login">
                <div
                    className={(
                        tap)
                        ? "form_active"
                        : "form"}>
                    <p>이메일</p>
                    <input
                        type="email"
                        value={email}
                        placeholder="이메일을 입력하세요"
                        onChange={onEmailHandler}></input>
                    <p>비밀번호</p>
                    <input
                        type="password"
                        value={password}
                        placeholder="비밀번호를 입력하세요"
                        onChange={onPassWordHandler}></input>
                    <div className="button" onClick={onLogin}>로그인</div>
                </div>
            </div>
            <div className="join">
                <div
                    className={(
                        tap)
                        ? "form"
                        : "form_active"}>
                            {<Join />}
                </div>
            </div>
        </div>
    )
}