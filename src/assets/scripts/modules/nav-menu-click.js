const links = document.querySelectorAll("[href^='#']");
const V = 0.6; // scrolling speed

for (const iter of links) {
    iter.addEventListener("click", e => {
        e.preventDefault();
            for (const iter of links) {
                iter.classList.remove("is-active");
            }
                e.target.classList.add("is-active");
      const anchor = document.querySelector(iter.getAttribute("href"));
        const coordAnchor = anchor.getBoundingClientRect().top;
        const windowY = window.pageYOffset;

        let start = null;

        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start;

            let coordY =
                coordAnchor < 0
                    ? Math.max(windowY - progress / V, windowY + coordAnchor)
                    : Math.min(windowY + progress / V, windowY + coordAnchor);

            window.scrollTo(0, coordY);
            if (coordY != windowY + coordAnchor) {
                requestAnimationFrame(step);
            }
        }


    });
}


