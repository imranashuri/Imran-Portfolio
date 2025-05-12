document.addEventListener("DOMContentLoaded", function () {
    const text = "I am a Front-End Developer";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Har letter ke liye 100ms delay
        } else {
            setTimeout(eraseEffect, 1000); // 1 sec wait, phir erase start hoga
        }
    }

    function eraseEffect() {
        if (index > 0) {
            typingElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(eraseEffect, 50); // Har letter delete hone me 50ms delay
        } else {
            setTimeout(typeEffect, 500); // 0.5 sec wait, phir typing start
        }
    }

    typeEffect(); // Start animation
});


document.querySelector("a[href='#home']").addEventListener("click", function (e) {
    e.preventDefault(); // Default jump behavior ko rokne ke liye
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling ke liye
    });
});

// Page Lode animation
window.addEventListener("load", function () {
    document.body.style.opacity = "1";
});



