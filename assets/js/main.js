let animationHandler = {
    counter: function() {

        let counterNumbers = document.querySelectorAll(".count-number");
        animateValue = function(counterNumber) {
            let data = counterNumber.getAttribute("data-to");
            speed = counterNumber.getAttribute("data-speed");
            current = 0;

            const stepTime = Math.abs(Math.floor(speed / data));
            timer = setInterval(function() {
                current = current + 1;
                counterNumber.innerHTML = current + "";
                if (current == data) {
                    clearInterval(timer);
                }
            }, stepTime);
        };
        counterNumbers.forEach(counterNumber => {
            animateValue(counterNumber);
        });
    },
}
animationHandler.counter();