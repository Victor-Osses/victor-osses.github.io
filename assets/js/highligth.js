window.addEventListener('DOMContentLoaded', () => {
    setupSpectrum("#custom1", "highlight-name", "#e06c75");
    setupSpectrum("#custom2", "highlight-selector-class", "#45E545");
    setupSpectrum("#custom3", "highlight-attribute", "#57D8FF");
    setupSpectrum("#custom4", "highlight-special-str", "#e2e83e");
    setupSpectrum("#custom5", "highlight-parameters", "#ffa42d");
    setupSpectrum("#custom6", "highlight-const", "#b779fa");
})

function setupSpectrum(inputId, targetClass, initialColor) {
    $(inputId).spectrum({
        color: initialColor,
        move: (color) => {
            changeTargetColor(targetClass, color.toHexString());
        }
    });
}

function changeTargetColor(target, color) {
    const elements = document.getElementsByClassName(target);
    const hexText = document.getElementById(target);

    Array.from(elements).forEach((element) => {
        element.style.color = color;
    })

    hexText.style.background = color;
    hexText.textContent = color;
}