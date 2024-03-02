import { monthArr } from "../../data.js";
import { timeConvert } from "../../menu.js";
import { createElem } from "../createFunc.js";
import { films } from "../data.js";
import { getTimeBeforeMovie } from "../timeFun/getTimeBeforeMovie.js";
import { renderEachComp } from "./renderPostsAndComp.js";

export function renderCurrentFilm(props) {
    window.scrollTo(0, 0);

    const { id } = props;

    const film = films.find(el => el.id == id);

    const { bigPicture, relevant, title, description, schedule, trailer } = film;

    const box = createElem({ tag: 'div', className: 'current-film' });
    const imgBox = createElem({ tag: 'div', className: 'img-box' });
    const img = createElem({ tag: 'img', className: 'img-box__src', src: bigPicture });
    const descrBox = createElem({ tag: 'div', className: 'description-box' })
    const titleEl = createElem({ tag: 'h2', className: 'description-box__title', textContent: title })
    const descriptionEl = createElem({tag: 'p', className: 'description-box__info', textContent: description })
    const trailerEl = createElem({ tag: 'a', className: 'description-box__trailer', textContent: `Watch ${title} trailer`, href: trailer, target: '_blank' })

    const ul = renderEachComp(relevant, 'alter-films', 'alter-element');

    const scheduleBox = createElem({ tag: 'div', className: 'schedule-box' });

    schedule.forEach(item => {
        const el = createElem({ tag: 'div', className: 'movie-schedule' })
        const month = monthArr[item.getMonth()];
        const date = item.getDate();

        const { hours, minutes } = timeConvert(item);

        const btns = createElem({ tag: 'div', className: 'movie-buttons' })
        const refundBtn = createElem({ tag: 'button', className: 'movie-buttons__refund-btn', textContent: 'Refund' })
        const buyBtn = createElem({ tag: 'button', className: 'movie-buttons__buy-btn', textContent: 'Buy ticket', })

        const regInfo = createElem({ tag: 'div', className: 'additional-info' });
        const movieTitle = createElem({ tag: 'h3', className: 'additional-info__title', textContent: title })
        const day = createElem({ tag: 'span', className: 'additional-info__schedule', textContent: `${date} ${month}` })
        const time =  createElem({ tag: 'span', className: 'additional-info__schedule', textContent: `${hours}:${minutes}` })

        const res = getTimeBeforeMovie(hours, minutes, item);

        buyBtn.onclick = () => {
            if (res <= 0 || isNaN(res)) {
                alert('Movie already is in the progress')
                return
            }

            alert('Thanks for your order :)')
        }

        refundBtn.onclick = () => {
            if (res <= 1 || isNaN(res)) {
                alert('Refund is unavailable movie starts less than 1 hours or already been recorded')
                return
            }

            alert('Refund has been accepted')
        }

        scheduleBox.append(el);
        el.append(regInfo, btns);
        regInfo.append(movieTitle, day, time);
        btns.append(buyBtn, refundBtn);
    })

    box.append(imgBox, scheduleBox, ul);
    imgBox.append(img, descrBox);
    descrBox.append(titleEl, descriptionEl, trailerEl);

    return box;
}