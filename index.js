window.onload = () => {
    setEventListeners();
}

/** 
 * Set event listeners for the page.
 * @param: NA
 * @return: NA
 */
function setEventListeners() {
    const submitButton = document.querySelector(".submit-button");
    const radioButtons = document.querySelectorAll("input");

    submitButton.addEventListener("click", hideRatingState);
    submitButton.addEventListener("click", displayThankYouState);
    submitButton.addEventListener("click", setRating);

    for (const button of radioButtons) {
        button.addEventListener("click", changeActiveButtonColor);
    }
}

/** 
 * Hide rating state.
 * @param: NA
 * @return: NA
 */
function hideRatingState() {
    const ratingStateContainer = document.querySelector(".rating-state-container");
    ratingStateContainer.style.display = "none";
    ratingStateContainer.style.visibility = "hidden";
    return false;
}

/** 
 * Display thank you state.
 * @param: NA
 * @return: NA
 */
function displayThankYouState() {
    const thankYouStateContainer = document.querySelector(".thank-you-state-container");
    thankYouStateContainer.style.display = "block";
    thankYouStateContainer.style.visibility = "visible";
    return false;
}

/**
 * Change color of rating buttons after clicked.
 * @param: NA
 * @return: NA
 */
function changeActiveButtonColor() {
    const radioLabels = document.getElementsByTagName("label");
    const radioButtons = document.getElementsByTagName("input"); 

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioLabels[i].style.color = "var(--white)";
            radioLabels[i].style.background = "var(--orange)";
        }
        else {
            radioLabels[i].style.color = "var(--light-grey)";
            radioLabels[i].style.background = "var(--modified-dark-blue)";
        }
    }
}

/**
 * Change result text to show user-selected rating.
 * @param: NA
 * @return: NA
 */
function setRating() {
    const radioButtons = document.getElementsByTagName("input");
    const ratingResultText = document.querySelector(".rating-result");
    let ratingResult = "";

    for (const button of radioButtons) {
        if (button.checked) {
            ratingResult = "You selected " + button.value + " out of 5";
        }
    }
    ratingResultText.innerHTML = ratingResult.toString();
    return false;
}