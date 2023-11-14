import "./index.css"
import { useEffect, useState } from 'react';
import { Tip } from './Components/Tip';

import { randomInfo } from "../../module/info";
import { getMessaging, onMessage } from "firebase/messaging";
import { Calamity } from "../../components/Calamity";
import axios from "axios";
import { RecentInfo } from "./Components/RecentInfo";


export const Main = () => {
    const [newMsg, setNewMsg] = useState<string>();
    const [calamityInfos, setCalamityInfos] = useState<{ id: number; name: string; description: string; map: string; date: string; }[]>([]);
    const [lastId, setLastId] = useState(0);

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
                const newCalamityInfos = [{
                    id: lastId + 1,
                    name: msgData.row[0].location_name,
                    description: msgData.row[0].msg,
                    map: msgData.row[0].location_name,
                    date: msgData.row[0].create_date
                }];
                setCalamityInfos(newCalamityInfos);
                console.log(msgData);

                setLastId(lastId + 1);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [newMsg]);

    const recentInfos = randomInfo({num:5})
    
    return (
        <section className='container'>
            <section className='calamity-info-section'>
                {
                    calamityInfos.map((info) => {
                        return (
                            <Calamity calamity={info} key={info.id} type={null}/>
                        )
                    })
                }
            </section>

            <Tip tip={randomInfo({ num: 1 })[0]} />

            <section className='calamity-recent-section'>
                <RecentInfo infos={recentInfos} />           
            </section>
        </section>
        
    )
}