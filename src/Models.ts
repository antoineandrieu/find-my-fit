export interface Measurements {
    id?: number;
    bust?: number;
    waist?: number;
    hips?: number;
    thigh?: number;
    inseam?: number;
}

export interface ProductModel {
    imgUrl: string;
    price: string;
    title: string;
    id: string;
    shopName: string;
    gender: string;
    color: string;
    buttonBorderRadius: string;
    fontStyle: string;
    mainButtonBorderColor: string;
    buttonColor: string;
    buttonTextColor: string;
    mainButtonBorder: string;
    mainBorderColor: string;
    inputColor: string;
    logoUrl?: string;
}

export interface Sizes {
    bustSize: number;
    waistSize: number;
    hipsSize: number;
    thighSize: number;
    inseamSize: number;
}

export interface DropDownItem {
    id: number;
    text: string;
}

export interface UserModel {
    username: string;
}

export interface TmpUserModel {
    username: string;
    password: string;
}

export interface CreateAnalyticResponse {
    id: number;
    size: string;
    external_id?: string;
}

export interface Analytic {
    recommendedSize?: CreateAnalyticResponse;
    loading?: boolean;
    error?: string;
}

export interface CreateMeasurementsResponse {
    measurement?: Measurements;
    loading?: boolean;
    error?: string;
}
