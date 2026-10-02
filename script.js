/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);



/* =========================
   CLOSE MOBILE MENU
========================= */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    }
);



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(
        function (element) {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element
                    .getBoundingClientRect()
                    .top;


            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }


    const stats =
        document.querySelector(".stats");


    const position =
        stats
            .getBoundingClientRect()
            .top;


    if (
        position <
        window.innerHeight
    ) {

        counterStarted = true;


        counters.forEach(
            function (counter) {

                const target =
                    Number(
                        counter.dataset.target
                    );


                let number = 0;


                const updateCounter =
                    setInterval(
                        function () {

                            number++;


                            counter.textContent =
                                number + "+";


                            if (
                                number >= target
                            ) {

                                clearInterval(
                                    updateCounter
                                );

                            }

                        },
                        20
                    );

            }
        );

    }

}


window.addEventListener(
    "scroll",
    startCounters
);


startCounters();



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        formMessage.textContent =
            "Thanks " +
            name +
            "! I'll get back to you soon.";


        contactForm.reset();

    }
);