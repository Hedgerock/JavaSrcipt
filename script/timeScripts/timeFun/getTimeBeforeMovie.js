export function getTimeBeforeMovie(hours, minutes, item) {
    const date = new Date();
    const dateHour = date.getHours();
    const dateMinutes = date.getMinutes();
    
    if (date > item) {
        return 0
    }

    const resultF = (dateHour * 60) + dateMinutes;
    const resultS = (+hours * 60) + +minutes;

    let timeDifference = resultS - resultF;
    if (timeDifference < 0) {
        timeDifference += 24 * 60;
    }

    const hoursDifference = timeDifference / 60;

    return hoursDifference;
}