import { useNavigate } from 'react-router-dom';

import "./index.css"
import { CalamityInfo } from './Components/CalamityInfo';

export const Main = () => {
    const navigate = useNavigate();


    return (
        <section className='container'>
            <section className='calamity-info-section'>
                <CalamityInfo title="재난 정보" info={{
                    id: 1,
                    name: "재난 이름",
                    description: "재난 설명",
                    map: "지도"
                }} />

                <CalamityInfo title="재난 정보" info={{
                    id: 1,
                    name: "재난 이름",
                    description: "재난 설명",
                    map: "지도"
                }} />
            </section>

            <section className='calamity-today-tip'>
                <div>오늘의 팁</div>
                <div>{`사람들에게 도움이 될만한 오늘의 팁 표시`}</div>
            </section>
        </section>
        
    )
}