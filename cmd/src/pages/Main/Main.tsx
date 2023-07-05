import { useNavigate } from 'react-router-dom';

export const Main = () => {
    const navigate = useNavigate();


    return (
        <>
            <div>메인 페이지 입니다</div>
            <button onClick={() => navigate('/')}>메인페이지로 이동</button>
            <button onClick={() => navigate('/predict')}>재난 예측 페이지로 이동</button>
            <button onClick={() => navigate('/realtime')}>실시간 재난 정보 제공 페이지로 이동</button>
            <button onClick={() => navigate('/mypage')}>마이페이지로 이동</button>
            <button onClick={() => navigate('/account')}>계정 관리 페이지로 이동</button>
            <button onClick={() => navigate('/info')}>정보 페이지로 이동</button>
        </>
        
    )
}