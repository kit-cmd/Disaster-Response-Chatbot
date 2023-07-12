import type { Calamity } from "../../../types/calamity"

interface CalamityInfoProps {
    title: string
    info: Calamity
}

export const CalamityInfo = ({title, info}:CalamityInfoProps) => {


    return (
        <section className="calamity-summary-wrapper">
            <div className="calamity-summary-header">

            </div>
            <div className="calamity-summary-body">
                <div className="calamity-summary-map-wrapper">
                    <div>
                        {info.map}
                    </div>
                </div>

                <div className="calamity-summary-info-wrapper">
                    <div>재난 정보 페이지 입니다</div>
                    <div>{info.name}</div>
                    <div>{info.description}</div>
                </div>
            </div>
        </section>
    )

}