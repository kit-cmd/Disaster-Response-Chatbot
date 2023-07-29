import { useState } from "react";
import "../../styles/Info.css"

export const Info = () => {

    const infos = [
        {
            name : "태풍",
            content : "태풍 정보 입니다"
        },
        {
            name : "호우",
            content : "호우 정보 입니다"
        }, 
        {
            name : "지진",
            content : "지진 정보 입니다"
        }, 
        {
            name : "대설",
            content : "대설 정보 입니다"
        }, 
    ];

    const [tapActive, setTapActive] = useState(0)

    const InfoTapHandler = (e : any) => {
        setTapActive(e.currentTarget.id);
    }

    return (
        <div className="info_container">
            <div className="info_header">
                <p>안전지침 정보</p>
            </div>
            <div className="infos">
                <div className="info_tap">
                    <div id="0" className={(tapActive == 0) ? "info_tap_active" : "info_tap_none"} onClick={InfoTapHandler}>태풍</div>
                    <div id="1" className={(tapActive == 1) ? "info_tap_active" : "info_tap_none"} onClick={InfoTapHandler}>호우</div>
                    <div id="2" className={(tapActive == 2) ? "info_tap_active" : "info_tap_none"} onClick={InfoTapHandler}>지진</div>
                    <div id="3" className={(tapActive == 3) ? "info_tap_active" : "info_tap_none"} onClick={InfoTapHandler}>대설</div>
                </div>
                <div className="info_text">{infos[tapActive].content}</div>
            </div>
        </div>
    )
}