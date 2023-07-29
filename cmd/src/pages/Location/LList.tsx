import { LItem } from "./LItem"

export const LList = ({data}) => {

    return (
        {data.map((item) => <LItem item={item} /> )}
    )
    
}