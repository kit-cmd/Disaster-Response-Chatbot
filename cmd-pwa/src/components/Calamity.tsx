import { useEffect, useState } from "react";
import { Calamity as calamity } from "../types/calamity";
import axios from "axios";

interface CalamityProps {
    calamity: calamity;
    type: string | null;
}

interface locate {
    x: number;
    y: number;
}

export const Calamity = (props: CalamityProps) => {
    
    const { calamity, type } = props;
    const api_id = process.env.REACT_APP_NAVER_MAP_ID;

    const [locate, setLocate] = useState<locate | null>(null)

    useEffect(() => {
        axios
            .get(`http://localhost:3001/address?address=전라북도 군산시`)
            .then((res) => {
                setLocate(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <section className={type !== null ? "calamity-summary-wrapper" + "-" + type : "calamity-summary-wrapper" }>
            <div className="calamity-summary-header">
                {calamity.name}
                {/* 재난 위치로 변경할 것 */}
            </div>
            <div className="calamity-summary-body">
                <div className="calamity-summary-map-wrapper">
                    <div>
                        {
                            locate === null
                                ? "이미지 로드중"
                                : <img src={`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=${locate?.x},${locate?.y}&level=11&X-NCP-APIGW-API-KEY-ID=${api_id}`} />
                        }
                        {/* 네이버 지도 api사용해서 지도 연결 */}
                        {/* 위,경도 받아오는 API 구성할 것 */}
                    </div>
                </div>

                <div className="calamity-summary-info-wrapper">
                    <div>재난 종류 : {calamity.name}</div>
                    <div>상세 정보 : {calamity.description}</div>
                    <div>발생 시각 : {calamity.date}</div>
                </div>
            </div>
        </section>
    )
}