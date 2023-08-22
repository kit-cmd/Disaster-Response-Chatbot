export interface info{
    type: string;
    description: (detailInfo | orderInfo | primaryInfo)[];
}

export interface detailInfo{
    title: string;
    description: string[];
}

export interface orderInfo{
    title: string;
    description: order[];
}

export interface order{
    title: string;
    description: string[];
}

export interface primaryInfo {
    title: string;
    description: string;
}