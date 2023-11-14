import {
    Card,
    CardMedia,
    CardContent,
    Typography,
}
from "@mui/material"

export const Item = ({ location }: { location: any }) => {
    const api_id = process.env.REACT_APP_NAVER_MAP_ID;
    const img = `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=${location?.x},${location?.y}&level=11&X-NCP-APIGW-API-KEY-ID=${api_id}`

    return (
        <Card className="location__item" sx={{ maxWidth: 345, marginRight: '20px', marginBottom: '10px' }}>
            <CardMedia
                component="img"
                height="170"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {location.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {location.description}
                </Typography>
            </CardContent>
        </Card>
    )
}