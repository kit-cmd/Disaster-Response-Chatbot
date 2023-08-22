import { useState, useEffect } from "react";
import { Calamity } from "../../components/Calamity";
import { Calamity as calamity } from "../../types/calamity";

import "../../styles/realtime.css";

export const Realtime = () => {

    const [calamity, setCalamity] = useState<calamity[]>([]);

    useEffect(() => {
        setCalamity([
            {
                id: 1,
                name: "지진",
                description: "지진이 발생했습니다.",
                map: "지도",
                date: "2021-10-10"
            },
            {
                id: 2,
                name: "화재",
                description: "화재가 발생했습니다.",
                map: "지도",
                date: "2021-10-10"
            }
        ])
    }, [])

    return (
        <div className="container">
            <div className="real-title">
                <span>실시간 재난 정보</span>
            </div>
            <div className="real-body">
                {calamity.map((item) => {
                    return <Calamity calamity={item} type={"detail"} />
                })}
            </div>
        </div>
    )
}