import { useState, useEffect } from "react";

import axios from "axios";

import "../../styles/Location.css"
import { Item } from "./Components/Item";

export const Location = () => {
    const [locate, setLocate] = useState<any>([
        {
            id: 1,
            map: "경상북도 울릉군 서면 태하리 512-2",
            name: "울릉도 서면 대피소",
            description: "울릉도 서면 대피소는 울릉도 서면에 위치한 대피소입니다.",
        },
        {
            id: 2,
            map: "경상북도 울릉군 북면 천부리 694",
            name: "울릉도 북면 대피소",
            description: "울릉도 북면 대피소는 울릉도 북면에 위치한 대피소입니다.",
        }
    ]);

    const api_id = process.env.REACT_APP_NAVER_MAP_ID;

    // useEffect(() => {
    //     navigator
    //         .geolocation
    //         .getCurrentPosition((position) => {
    //             console.log(
    //                 "현재 사용자는 위도 " + position.coords.latitude + ", 경도 " + position.coords.longitude +
    //                 "에 위치하고 있습니다."
    //             )
    //             if (typeof position.coords.latitude === 'number' && typeof position.coords.longitude === 'number'){
    //                 setLatitude(position.coords.latitude);
    //                 setLongitude(position.coords.longitude);
    //             }
    //         }, (err) => {
    //             console.log(err)
    //         });
    // }, []);

    // useEffect(() => {
    //     axios.get(`http://192.168.162.181:8080/api/shelter/getinfo/length?latitude=${latitude}&longitude=${longitude}`)
    //     .then((res) => {
    //         console.log(res)
    //         setData(res.data)})
    //     .catch((err) => console.log(err))
    // }, [latitude, longitude])

    useEffect(() => {
        for (let i = 0; i < locate.length; i++) {
            axios
                .get(`http://114.129.198.66:8002/address?address=${locate[i].map}`)
                .then((res) => {
                    setLocate((prev: any) => {
                        prev[i].x = res.data.x;
                        prev[i].y = res.data.y;
                        return [...prev]
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [])

    useEffect(() => {
        console.log(locate)
    }, [locate])




    return (
        <div className="location_container">
            <div className="location_list">

                {/* {
                    locate.map((location:any) => {
                        return (
                            <div className="location_item">
                                <div className="location_item_img_wrapper">
                                    <img src={`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=${location?.x},${location?.y}&level=11&X-NCP-APIGW-API-KEY-ID=${api_id}`} />
                                </div>
                                <div>
                                    <h3>{location.name}</h3>
                                    <p>{location.description}</p>
                                </div>
                            </div>
                        )
                    })
                } */}
                {
                    locate.map((location: any) => {
                        return (
                            <Item location={location} />
                        )
                    })
                }

            </div>
        </div>
    )
}