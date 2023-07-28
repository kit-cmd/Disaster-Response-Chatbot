interface RecentInfoProps {
    infos: string[]
}

export const RecentInfo = ({ infos }:RecentInfoProps) => {
    
    return (
        <section className="calamity-recent-wrapper">
            <div className="calamity-recent-header">
                최신 재난 정보
            </div>
            <ul className="calamity-recent-body">
                {infos.map((info, index) => (
                    <li key={index} className="calamity-recent-info">
                        {info}
                    </li>
                ))}
            </ul>
        </section>
    )
}