export const canvas = document.querySelector('#canvas');
export const context = canvas.getContext('2d');
export const cW = canvas.clientWidth;
export const cH = canvas.clientHeight;

export function getSquareOrRectangle(props) {
    const { cWd, cHt, aX, aY, color, background } = props

    context.fillStyle = background || 'white';
    context.fillRect(0, 0, cW, cH)

    const rW = cWd ? cWd : 50;
    const rH = cHt ? cHt : 50;
    const rX = aX ? aX : Math.round((cW - rW) / 2);
    const rY = aY ? aY : Math.round((cH - rH) / 2);

    context.fillStyle = color || 'red';
    context.fillRect(rX, rY, rW, rH);
}