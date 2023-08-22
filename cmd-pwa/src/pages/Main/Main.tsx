import "./index.css"
import { Calamity } from '../../components/Calamity';
import { RecentInfo } from './Components/RecentInfo';

import { randomInfo } from "../../module/info";

export const Main = () => {

    const recentInfos = randomInfo({num:5})
    return (
        <section className='container'>
            <section className='calamity-info-section'>
                <Calamity type={null} calamity={{
                    id: 1,
                    name: "재난 이름",
                    description: "재난 설명",
                    map: "지도",
                    date: "2021-10-10"
                }} />

                <Calamity type={null} calamity={{
                    id: 1,
                    name: "재난 이름",
                    description: "재난 설명",
                    map: "지도",
                    date: "2021-10-10"
                }} />
            </section>

            <section className='calamity-today-tip'>
                <div>오늘의 팁</div>
                <div>{randomInfo({num:1})}</div>
            </section>

            <section className='calamity-recent-section'>
                <RecentInfo infos={recentInfos} />           
            </section>
        </section>
        
    )
}