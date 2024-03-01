export function makeTime(time) {
    const currentTime = new Date()

    if (!time) {
        return currentTime;
    }

    if (isNaN(time)) {
        console.warn('Should be a number!')
        return;
    }

    currentTime.setHours(currentTime.getHours() + time); //time in hours
    return currentTime;
}
