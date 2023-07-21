import {useEffect, useState} from "react";
import "../../styles/Location.css"

export const Location = () => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        navigator
            .geolocation
            .getCurrentPosition((position) => {
                console.log(
                    "현재 사용자는 위도 " + position.coords.latitude + ", 경도 " + position.coords.longitude +
                    "에 위치하고 있습니다."
                )
                if (typeof position.coords.latitude === 'number' && typeof position.coords.longitude === 'number'){
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }
            }, (err) => {
                console.log(err)
            });
    }, []);

    return (
        <div className="location_container">
            <p>위도 : {latitude}</p>
            <p>경도 : {longitude}</p>
        </div>
    )
}