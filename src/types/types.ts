import React from "react"

export interface fluxwareButton {
    children : string,
    link : string,
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
export interface productOffered {
    title: string,
    description: string,
    img: string,
    smallImg: string
}
export interface navItems {
    name: string,
    link: string,
    icon?: React.ReactElement | string
}