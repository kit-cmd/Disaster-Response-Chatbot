import { useEffect, useState, useMemo } from "react";
import "../../styles/Info.css"

import { safeInfo } from "../../module/info";
import { info } from "../../types/info";

import {
    List,
    ListItem,
    ListItemText,
    Tabs,
    Tab,
    Box,
    Typography,
}
from "@mui/material"


export const Info = () => {

    const calamityType = useMemo(() => {
        return ["태풍", "호우", "지진", "대설"];
    }, []);

    const [tapActive, setTapActive] = useState(0)
    const [infos, setInfos] = useState<info | null>(null);

    const parseInfo = (info: any, step: number) => {
        if (info == null) return (<></>);
        let res = <></>;
        switch (step) {
            case 0:
                res = <h2>{info.title}</h2>
                break;
            case 1:
                res = <h3>{info.title}</h3>
                break;
            case 2:
                res = <h4>{info.title}</h4>
                break;
            case 3:
                res = <h5>{info.title}</h5>
                break;
            default:
                break;
        }
        res = <>{res}<hr /></>

        if (typeof info.description === "string") {
            return (
                <>
                    {res}
                    <p>{info.description}</p>
                </>
            )
        }
        else if (typeof info.description[0] === "object") {
            return (
                <>
                    {res}
                    {
                        info.description.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    {parseInfo(item, step + 1)}
                                </div>
                            )
                        })
                    }
                </>
            )
        }
        else if(typeof info.description[0] === "string"){
            return (
                <>
                    {/* {res}
                    <ul>
                        {
                            info.description.map((item: any, index: number) => {
                                return (
                                    <li key={index}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul> */}
                    {res}
                    <List>
                        {
                            info.description.map((item: any, index: number) => {
                                return (
                                    <ListItem key={index}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </>
            )
        }
    }

    useEffect(() => {
        setInfos(safeInfo(calamityType[tapActive]));
    }, [tapActive, calamityType])

    return (
        <div className="info_container">
            <div className="infos">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={tapActive}
                        onChange={(e, newValue) => setTapActive(newValue)}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            calamityType.map((item, index) => {
                                return (
                                    <Tab key={index} label={item} />
                                )
                            })
                        }
                    </Tabs>
                    <div></div>
                </Box>
                <div className="info_text">{infos?.description.map(item=>parseInfo(item, 0))}</div>
            </div>
        </div>
    )
}