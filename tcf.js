document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    const tv5mondeScoreInput = document.getElementById("tv5mondeScore");
    const resultElement = document.getElementById("result");

    calculateBtn.addEventListener("click", function () {
        const tv5mondeScore = parseFloat(tv5mondeScoreInput.value);
        if (!isNaN(tv5mondeScore)) {
            const note = (tv5mondeScore * 699) / 100;
            const niveau = classificationNiveau(note);
            resultElement.textContent = `Your level for ${tv5mondeScore}% is ${niveau}`;
        } else {
            resultElement.textContent = "Please enter a valid score.";
        }
    });

    function classificationNiveau(nombre) {
        if (100 <= nombre && nombre <= 199) {
            return "A1";
        } else if (200 <= nombre && nombre <= 299) {
            return "A2";
        } else if (300 <= nombre && nombre <= 399) {
            return "B1";
        } else if (400 <= nombre && nombre <= 499) {
            return "B2";
        } else if (500 <= nombre && nombre <= 599) {
            return "C1";
        } else if (600 <= nombre && nombre <= 699) {
            return "C2";
        } else {
            return "Level not defined";
        }
    }
});
