import { useState, useEffect } from "react";
import { Calamity } from "../../components/Calamity";
import { Calamity as calamity } from "../../types/calamity";

import "../../styles/realtime.css";
import { getMessaging, onMessage } from "firebase/messaging";
import axios from "axios";

export const Realtime = () => {


    const [newMsg, setNewMsg] = useState<string>();
    const [lastId, setLastId] = useState(0);
    const [calamity, setCalamity] = useState<calamity[]>([]);

    const messaging = getMessaging();

    onMessage(messaging, (payload) => {
        if (payload.data && payload.data.title && payload.data.body) {
            setNewMsg(payload.data.body);
        }
    });

    useEffect(() => {
        axios.get('http://ec2-15-164-230-207.ap-northeast-2.compute.amazonaws.com:8081/api/disaster/info')
            .then(response => {
                const msgData = response.data.DisasterMsg[1];
                const newCalamityInfos = {
                    id: lastId + 1,
                    name: msgData.row[0].location_name,
                    description: msgData.row[0].msg,
                    map: msgData.row[0].location_name,
                    date: msgData.row[0].create_date
                };

                let updatedCalamityInfos = [newCalamityInfos, ...calamity];

                if (updatedCalamityInfos.length > 5) {
                    updatedCalamityInfos = updatedCalamityInfos.slice(5);
                }

                setCalamity(updatedCalamityInfos);
                console.log(msgData);

                setLastId(lastId + 1);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [newMsg]);


    return (
        <div className="container">
            <div className="real-body">
                {calamity.map((item) => {
                    return <Calamity calamity={item} type={"detail"} />
                })}
            </div>
        </div>
    )
}