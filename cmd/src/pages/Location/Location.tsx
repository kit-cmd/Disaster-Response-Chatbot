import {useEffect, useState} from "react";
import "../../styles/Location.css"
import axios from "axios";

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

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/shelter/getinfo/length?latitude=${latitude}&longitude=${longitude}`)
    }, [latitude, longitude])

    return (
        <div className="location_container">
            <p>위도 : {latitude}</p>
            <p>경도 : {longitude}</p>
        </div>
    )
}