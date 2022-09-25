window.onload = () => {
    setEventListeners();
}

/** 
 * Set event listeners for the page.
 * @param: NA
 * @return: NA
 */
function setEventListeners() {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", hideRatingState);
    submitButton.addEventListener("click", displayThankYouState);
}

/** 
 * Hide rating state.
 * @param: NA
 * @return: NA
 */
function hideRatingState() {
    const ratingStateContainer = document.getElementById("rating-state-container");
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
    const thankYouStateContainer = document.getElementById("thank-you-state-container");
    thankYouStateContainer.style.display = "block";
    thankYouStateContainer.style.visibility = "visible";
    return false;
}