function randomNumberInRange(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function generateRandomColor() : string {
    return `rgb(${randomNumberInRange(0,255)}, ${randomNumberInRange(0,255)}, ${randomNumberInRange(0,255)})`;
}

