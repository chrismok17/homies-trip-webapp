let countDownDate = new Date("Aug 11, 2022 11:00:00").getTime();

    // Update the count down every 1 second
    let x = setInterval(() => {

    // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("days").innerHTML = `${days} days`;
        document.getElementById("hours").innerHTML = `${hours} hours`;
        document.getElementById("minutes").innerHTML = `${minutes} minutes`;
        document.getElementById("seconds").innerHTML = `${seconds} seconds`;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "IT'S VACATION TIME";
        }
        }, 1000);