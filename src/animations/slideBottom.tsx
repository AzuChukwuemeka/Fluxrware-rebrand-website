export const slideBottomFromProperties = {
    yPercent: 100,
    opacity: 0,
}
export const slideBottomToProperties = {
    yPercent: 0,
    opacity: 1,
}
export const slideBottomToPropertiesWithDelay = {
    yPercent: 0,
    opacity: 1,
    animationDelay: 1
}
export const slideBottomToPropertiesWithStagger = {
    yPercent: 0,
    opacity: 1,
    animationDelay: 1,
    stagger: 0.04
}
export const slideBottomDefaultState = {
    yPercent: 100,
    opacity: 0,
    visibility: "visible"
}
export const slideBottomToPropertiesWithDelayAndStagger = (delay: number, stagger: number) => {
    return {
        yPercent: 0,
        opacity: 1,
        animationDelay: delay,
        stagger: stagger
    }
}