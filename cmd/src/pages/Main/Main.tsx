import { useNavigate } from 'react-router-dom';

import "./index.css"
import { CalamityInfo } from './Components/CalamityInfo';

export const Main = () => {
    const navigate = useNavigate();


    return (
        <section className='container'>
            <div>메인 페이지 입니다</div>
            <CalamityInfo title="재난 정보" info={{
                id: 1,
                name: "재난 이름",
                description: "재난 설명",
                map: "지도"
            }} />
        </section>
        
    )
}