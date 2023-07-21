import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import "../styles/Sidebar.css"

export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        { name: '안전 지침', path: '/info', pathname: 'info' },
        { name: '재난 예측 정보', path: '/predict', pathname: 'predict' },
        { name: '실시간 재난 정보', path: '/realtime', pathname: 'realtime' },
        { name: '대피 시설 정보', path: '/location', pathname: 'location' },
        { name: '로그인', path: '/account', pathname: 'account' },
    ]

    const [active, setActive] = useState<String>('');
    useEffect(() => {
        let path = location.pathname;
        path = path.split('/')[1];
        setActive(path);
    }, [location.pathname])





    return (
        <div className="sidebar">
            <div className='sidebar__logo' onClick={() => navigate('/')}>
                {/* <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" /> */}
                <span>CMD</span>
            </div>
            {links.map((link, index) => (
                <div key={index} className={`sidebar__item ` + (link.pathname === active ? `active` : ``)} onClick={() => navigate(link.path)}>
                    {link.name}
                </div>
            ))}
        </div>
    )
}