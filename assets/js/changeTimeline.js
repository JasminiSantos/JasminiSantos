function timeLineChange(element) {
    let current = document.getElementsByClassName("current")[0];

    current.classList.toggle("current")
    element.classList.toggle("current");

    current.getAttribute("data-timeline")

    let career = document.getElementsByClassName("timeline")[0];
    let school = document.getElementsByClassName("timeline")[1];

    switch (element.getAttribute("data-timeline")) {
        case "career":
            school.style = "transform: translateX(100vw)"
            career.style = "transform: translateX(0vw)"
            break;

        case "school":
            career.style = "transform: translateX(-100vw)"
            school.style = "transform: translateX(0vw)"
            break;

        default:
            break;
    }
}