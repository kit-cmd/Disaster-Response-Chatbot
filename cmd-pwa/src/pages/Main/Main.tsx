import "./index.css"
import { Calamity } from '../../components/Calamity';
import { RecentInfo } from './Components/RecentInfo';
import { Tip } from './Components/Tip';

import { randomInfo } from "../../module/info";
import { useMemo } from "react";

export const Main = () => {

    const calamityInfos = useMemo(() => {
        return [
            {
                id: 1,
                name: "전라북도 군산시",
                description: "[군산시] 금일 발생한 서수면 암모니아 누출 사고는 현재 공장 내 수습 진행 중으로 공장 밖으로 추가 확산 가능성은 없음. 주민들께서는 일상생활에 복귀 바랍니다.",
                map: "전라북도 군산시",
                date: "2023/07/03 20:52:30"
            },
            {
                id: 2,
                name: "경상남도 창원시 의창구",
                description: "[경남경찰청] 창원시에서 실종된 박현영씨(여, 42세)를 찾습니다 - 160cm, 85kg, 초록색티셔츠,베이지반바지,은색샌들",
                map: "경상남도 창원시 의창구",
                date: "2023/07/03 20:23:24"
            }
        ]
        
    }, [])

    const recentInfos = randomInfo({num:5})
    return (
        <section className='container'>
            <section className='calamity-info-section'>
                {
                    calamityInfos.map((info) => {
                        console.log(info)
                        return (
                            <Calamity calamity={info} key={info.id} type={null}/>
                        )
                    })
                }
            </section>

            <Tip tip={randomInfo({ num: 1 })[0]} />

            <section className='calamity-recent-section'>
                <RecentInfo infos={recentInfos} />           
            </section>
        </section>
        
    )
}