import type { Calamity } from "../../../types/calamity"

interface CalamityInfoProps {
    title: string
    info: Calamity
}

export const CalamityInfo = ({title, info}:CalamityInfoProps) => {


    return (
        <section className="calamity-summary-wrapper">
            <div className="calamity-summary-header">
                {title}
            </div>
            <div className="calamity-summary-body">
                <div className="calamity-summary-map-wrapper">
                    <div>
                        {info.map}
                        {/* 네이버 지도 api사용해서 지도 연결 */}
                    </div>
                </div>

                <div className="calamity-summary-info-wrapper">
                    <div>재난 종류 : {info.name}</div>
                    <div>상세 정보 : {info.description}</div>
                </div>
            </div>
        </section>
    )

}