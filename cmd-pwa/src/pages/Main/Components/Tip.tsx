import {
    Card,
    CardContent,
    Typography,
}
from '@mui/material'

export const Tip = ({ tip }: { tip: string }) => {
    return (
        <div className='calamity-today-tip'>
        <Card sx={{ width: '90%', height: '60%'}}>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="primary" component="h2" variant='h6' gutterBottom>
                    오늘의 팁
                </Typography>
                <Typography component="div">
                    {tip}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}

