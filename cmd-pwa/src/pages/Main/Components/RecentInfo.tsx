import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider
}
from '@mui/material'

interface RecentInfoProps {
    infos: string[]
}

export const RecentInfo = ({ infos }: RecentInfoProps) => {
    
    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="primary" gutterBottom>
                    최신 재난 정보
                </Typography>
                <Typography component="div">
                    <List>
                        {infos.map((info, index) => (
                            <div key={index}>
                                <ListItem>
                                    <ListItemText primary={info} />
                                </ListItem>
                                { index !== infos.length - 1 ? <Divider /> : null }
                            </div>
                        ))}
                    </List>
                </Typography>
            </CardContent>
        </Card>
    )
    
    // return (
    //     <section className="calamity-recent-wrapper">
    //         <div className="calamity-recent-header">
    //             최신 재난 정보
    //         </div>
    //         <ul className="calamity-recent-body">
    //             {infos.map((info, index) => (
    //                 <li key={index} className="calamity-recent-info">
    //                     {info}
    //                 </li>
    //             ))}
    //         </ul>
    //     </section>
    // )
}