import store from 'reducers/store';
import { timeTick } from 'actions';

let timeHandle;

export const startTimer = (interval) => {
    timeHandle = window.setInterval(() => store.dispatch(timeTick()), interval);
};

export const pauseTimer = () => {
    if (timeHandle) {
        window.clearInterval(timeHandle);
    }
};

export const resumeTimer = () => {
    start();
}