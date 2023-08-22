import { useEffect, useState, useMemo } from "react";
import "../../styles/Info.css"

import { safeInfo } from "../../module/info";
import { info } from "../../types/info";


export const Info = () => {

    const calamityType = useMemo(() => {
        return ["태풍", "호우", "지진", "대설"];
    }, []);

    const [tapActive, setTapActive] = useState(0)
    const [infos, setInfos] = useState<info | null>(null);

    const parseInfo = (info: any, step: number) => {
        if (info == null) return (<></>);
        let res = <></>;
        switch (step) {
            case 0:
                res = <h2>{info.title}</h2>
                break;
            case 1:
                res = <h3>{info.title}</h3>
                break;
            case 2:
                res = <h4>{info.title}</h4>
                break;
            case 3:
                res = <h5>{info.title}</h5>
                break;
            default:
                break;
        }
        res = <>{res}<hr /></>

        if (typeof info.description === "string") {
            return (
                <>
                    {res}
                    <p>{info.description}</p>
                </>
            )
        }
        else if (typeof info.description[0] === "object") {
            return (
                <>
                    {res}
                    {
                        info.description.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    {parseInfo(item, step + 1)}
                                </div>
                            )
                        })
                    }
                </>
            )
        }
        else if(typeof info.description[0] === "string"){
            return (
                <>
                    {res}
                    <ul>
                        {
                            info.description.map((item: any, index: number) => {
                                return (
                                    <li key={index}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            )
        }
    }

    useEffect(() => {
        setInfos(safeInfo(calamityType[tapActive]));
    }, [tapActive, calamityType])

    return (
        <div className="info_container">
            <div className="info_header">
                <p>안전지침 정보</p>
            </div>
            <div className="infos">
                <div className="info_tap">
                    {
                        calamityType.map((item, index) => {
                            return (
                                <div key={index} className={(tapActive=== index) ? "info_tap_active" : "info_tap_none"} onClick={()=>setTapActive(index)}>{item}</div>
                            )
                        })
                    }
                    <div></div>
                </div>
                <div className="info_text">{infos?.description.map(item=>parseInfo(item, 0))}</div>
            </div>
        </div>
    )
}