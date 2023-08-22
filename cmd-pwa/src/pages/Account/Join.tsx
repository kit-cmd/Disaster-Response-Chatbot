import {useEffect, useState} from "react"
import axios from "axios";
import "../../styles/Join.css"
import {useNavigate} from "react-router-dom";

export const Join = () => {
    const [email, setJoinEmail] = useState("");
    const [password, setJoinPassword] = useState("");
    const [joinPasswordCheck, setJoinPasswordCheck] = useState("");
    const [joinForm, setJoinForm] = useState({});

    const onJoinEmailHandler = (e : any) => {
        setJoinEmail(e.currentTarget.value)
    }
    const onJoinPassWordHandler = (e : any) => {
        setJoinPassword(e.currentTarget.value)
    }
    const onJoinPassWordCheckHandler = (e : any) => {
        setJoinPasswordCheck(e.currentTarget.value)
    }
    const onJoin = () => {
        if (password === joinPasswordCheck) {
            setJoinForm({email, password})
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }

    useEffect(() => {
        axios
            .post('http://192.168.162.2:8080/auth/signup', joinForm)
            .then((res) => console.log(res))
            // alert("회원가입에 성공했습니다 !"))
            .then((res) => window.location.replace("/accout"))
            .catch((err) => console.log("arr"))
        }, [joinForm])

    return (
            <div className="join">
                    <p>이메일</p>
                    <input
                        type="email"
                        value={email}
                        placeholder="이메일을 입력하세요"
                        onChange={onJoinEmailHandler}></input>
                    <p>비밀번호</p>
                    <input
                        type="password"
                        value={password}
                        placeholder="영문자, 숫자 포함 8글자 이상"
                        onChange={onJoinPassWordHandler}></input>
                    <input
                        id="join_tap"
                        value={joinPasswordCheck}
                        type="password"
                        placeholder="비밀번호를 확인 해주세요"
                        onChange={onJoinPassWordCheckHandler}></input>
                    <div className="button" onClick={onJoin}>회원가입</div>
                    </div>
    )
}