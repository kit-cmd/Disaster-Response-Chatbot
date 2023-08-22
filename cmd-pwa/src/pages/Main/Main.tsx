import { useNavigate } from 'react-router-dom';

import "./index.css"
import { Calamity } from '../../components/Calamity';
import { RecentInfo } from './Components/RecentInfo';

export const Main = () => {
    const navigate = useNavigate();
    

    const recentInfos = [
        "재난 최신 정보1",
        "재난 최신 정보2",
        "재난 최신 정보3",
        "재난 최신 정보4",
        "재난 최신 정보5",
    ]
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
                <div>{`사람들에게 도움이 될만한 오늘의 팁 표시`}</div>
            </section>

            <section className='calamity-recent-section'>
                <RecentInfo infos={recentInfos} />           
            </section>
        </section>
        
    )
}