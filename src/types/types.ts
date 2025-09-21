export interface fluxwareButton {
    children : string
    variant: "contained" | "outlined"
}
export interface fluxwareStaff {
    img: string,
    name: string,
    position: string
}
export interface customerReview {
    img: string,
    name: string,
    review: string
}
export interface projectTierService {
    detail: string,
    offered: boolean
}
export interface projectTierElement {
    tier: string,
    price: number,
    description: string,
    services: Array<projectTierService>
}