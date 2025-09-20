import React from "react"

export interface fluxwareButton {
    children : string
    variant: "contained" | "outlined"
}
export interface fluxWareStaff {
    img: string,
    name: string,
    jobRole: string
}
export interface successStory {
    avatar: string,
    name: string,
    review: string
}
export interface linkStructure {
    text: string,
    url: string
    icon?: React.ReactElement
}
export interface projectTierPackageServiceGiven {
    service: string,
    accepted: boolean   
}
export interface projectTier {
    packageType: string,
    packageDescription: string,
    price: number,
    packageList: Array<projectTierPackageServiceGiven>
}