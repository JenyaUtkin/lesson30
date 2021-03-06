    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours');
        const timerMinutes = document.querySelector('#timer-minutes');
        const timerSeconds = document.querySelector('#timer-seconds');
        const timeFormat = (n) => n < 10 ? "0" + n : n;


        function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const hours = Math.floor(timeRemaining / 60 / 60);
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
        }

        function updateClock() {
        const timer = getTimeRemaining();
        timerHours.textContent = timeFormat(timer.hours);
        timerMinutes.textContent = timeFormat(timer.minutes);
        timerSeconds.textContent = timeFormat(timer.seconds);


        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        } else {
            timerHours.textContent = timeFormat(0);
            timerMinutes.textContent = timeFormat(0);
            timerSeconds.textContent = timeFormat(0);
        }
        }

        updateClock();
    };
    export default countTimer;