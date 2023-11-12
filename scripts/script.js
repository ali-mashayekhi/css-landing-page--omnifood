// Set current year
const yearEl = document.querySelector(".year");

const currentDate = new Date();
yearEl.textContent = currentDate.getFullYear();

////////////////////////////////////////////////////
//// Make mobile navigation
const headerEl = document.querySelector("header");
const htmlEl = document.querySelector("html");

headerEl.querySelector(".btn-mobile-nav").addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    htmlEl.style["overflow-y"] = "hidden";
    document.body.style["overflow-y"] = "hidden";
  } else {
    htmlEl.style["overflow-y"] = "";
    document.body.style["overflow-y"] = "";
  }
});

////////////////////////////////////////////////////
//// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
      htmlEl.style["overflow-y"] = "";
      bodyEl.style["overflow-y"] = "";
    }
  });
});

////////////////////////////////////////////////////
//// Stickiy navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    console.log(ent);
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
