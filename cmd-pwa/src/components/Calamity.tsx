import { useEffect, useState } from "react";
import { Calamity as calamity } from "../types/calamity";
import axios from "axios";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { CardMedia } from "@mui/material";


interface CalamityProps {
    calamity: calamity;
    type: string | null;
}

interface locate {
    x: number;
    y: number;
}

export const Calamity = (props: CalamityProps) => {
    
    const { calamity, type } = props;
    const api_id = process.env.REACT_APP_NAVER_MAP_ID;

    const [locate, setLocate] = useState<locate | null>(null)

    useEffect(() => {
        axios
            .get(`http://localhost:3001/address?address=${calamity.map}`)
            .then((res) => {
                setLocate(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const sx = 
        type !== null
        ? { width: '90%', height: 350, margin: '15px 2%' }
        : { width: '40%', height: '35vh', minWidth: 300, margin: '0 auto' }
    
    
    const mapimg = 
        `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=${locate?.x},${locate?.y}&level=11&X-NCP-APIGW-API-KEY-ID=${api_id}`
    
    
    return (
        <Card sx={sx}>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="primary" gutterBottom>
                    {calamity.name}
                </Typography>
                <Typography component="div">
                    {calamity.description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {calamity.date}
                </Typography>
            </CardContent>
            <CardMedia 
                component="img"
                sx={{ width: '100%', height: 240 }}
                image={mapimg}
                alt="이미지 로드중"
            />
        </Card>
    )
    // return (
    //     <section className={type !== null ? "calamity-summary-wrapper" + "-" + type : "calamity-summary-wrapper" }>
    //         <div className="calamity-summary-header">
    //             {calamity.name}
    //             {/* 재난 위치로 변경할 것 */}
    //         </div>
    //         <div className="calamity-summary-body">
    //             <div className="calamity-summary-map-wrapper">
    //                 <div>
    //                     {
    //                         locate === null
    //                             ? "이미지 로드중"
    //                             : <img src={`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=${locate?.x},${locate?.y}&level=11&X-NCP-APIGW-API-KEY-ID=${api_id}`} />
    //                     }
    //                     {/* 네이버 지도 api사용해서 지도 연결 */}
    //                     {/* 위,경도 받아오는 API 구성할 것 */}
    //                 </div>
    //             </div>

    //             <div className="calamity-summary-info-wrapper">
    //                 <div>재난 종류 : {calamity.name}</div>
    //                 <div>상세 정보 : {calamity.description}</div>
    //                 <div>발생 시각 : {calamity.date}</div>
    //             </div>
    //         </div>
    //     </section>
    // )
}