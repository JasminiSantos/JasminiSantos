var highlighted_projects = [
    // {
    //     name: "glucosync",
    //     description: "A diabetes tracking app with HealthKit and ML integration.",
    //     image: "assets/glucosync.jpeg"
    // },
    {
        name: "ink-of-the-ancient-stones",
        description: "An interactive historical app exploring Mayan glyphs.",
        image: "../assets/ink-of-ancient-stones.png"
    },
    {
        name: "synkros",
        description: "A student productivity tool for organizing academic life.",
        image: "../assets/synkros.jpeg"
    }
];

var current_indicator = 1;
let projects = document.querySelector(".projects");

function switchProject(sideElement) {
    let currentIndicator = document.querySelector(".current");
    let newIndicator = null;
    let newProjectNumber = null;

    if (sideElement.getAttribute("data-side") == "right") {
        newProjectNumber = String(parseInt(document.querySelector(".current").getAttribute("data-projectnumber")) + 1);
    } else {
        newProjectNumber = String(parseInt(document.querySelector(".current").getAttribute("data-projectnumber")) - 1);
    }

    switch (currentIndicator.getAttribute("data-projectnumber")) {
        case "0":
            if (sideElement.getAttribute("data-side") == "left")
                newProjectNumber = String(2);
            break;
        case "1":
            break;
        case "2":
            if (sideElement.getAttribute("data-side") == "right")
                newProjectNumber = String(0);
            break;

        default:
            break;
    }
    newIndicator = document.querySelector(`.nav-item-indicator[data-projectnumber='${newProjectNumber}']`)

    if (currentIndicator) {
        currentIndicator.classList.remove("current");
        newIndicator.classList.add("current");
    }
    switch (newIndicator.getAttribute("data-projectnumber")) {
        case "0":
            projects.style.transform = `translateX(100vw)`;
            break;
        case "1":
            projects.style.transform = `translateX(0vw)`;
            break;
        case "2":
            projects.style.transform = `translateX(-100vw)`;
            break;

        default:
            break;
    }
}

document.getElementById("projectsSum").textContent = highlighted_projects.length + "+";

document.querySelector(".projects").style.transform = `translateX(100vw)`;

highlighted_projects.forEach((project, index) => {
    let indicator = document.createElement("i");
    let project_element = document.createElement("div");

    indicator.classList.add("fa-solid", "fa-circle", "nav-item-indicator");
    if (index === 1) {
        indicator.classList.add("current");
    }
    indicator.setAttribute("data-projectnumber", index);
    indicator.onclick = () => {
        document.querySelector(".current")?.classList.remove("current");
        indicator.classList.add("current");
        switch (index) {
            case 0: projects.style.transform = `translateX(100vw)`; break;
            case 1: projects.style.transform = `translateX(0vw)`; break;
            case 2: projects.style.transform = `translateX(-100vw)`; break;
        }
    };
    document.querySelector("div.xprojects").appendChild(indicator);

    project_element.classList.add("project");

    let project_image = document.createElement("img");
    project_image.setAttribute("src", project.image);
    project_image.setAttribute("alt", project.name);

    let project_info_holder = document.createElement("div");
    project_info_holder.classList.add("info");

    let project_name = document.createElement('h3');
    project_name.textContent = project.name.charAt(0).toUpperCase() + project.name.slice(1).replaceAll("-", " ");

    let project_description = document.createElement('p');
    project_description.textContent = project.description;

    project_info_holder.appendChild(project_name);
    project_info_holder.appendChild(project_description);

    project_element.appendChild(project_image);
    project_element.appendChild(project_info_holder);

    projects.appendChild(project_element);
});


document.querySelector('.godown').addEventListener('click', function() {
    document.querySelector('#aboutme').scrollIntoView({ 
        behavior: 'smooth' 
    });
    });