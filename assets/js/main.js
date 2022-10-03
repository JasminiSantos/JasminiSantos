var highlighted_projects = [{}, {}, {}];
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

fetch(`https://api.github.com/users/JasminiSantos/repos`)
    .then(result => result.json()).then((result) => {
        document.getElementById("projectsSum").textContent = Object.keys(result).length + "+";

        highlighted_projects = result.filter(project => project.default_branch == "final").slice();

        document.querySelector(".projects").style.transform = `translateX(100vw)`;

        highlighted_projects.forEach((project, index) => {
            console.log(project);
            let indicator = document.createElement("i");
            let project_element = document.createElement("div");
            if (index == 0) {
                indicator.classList.add("fa-solid", "fa-circle", "nav-item-indicator", "current");
            }
            indicator.classList.add("fa-solid", "fa-circle", "nav-item-indicator");
            indicator.setAttribute("data-projectNumber", index);
            indicator.onclick = () => {
                if (document.querySelector(".current")) {
                    document.querySelector(".current").classList.remove("current");
                    indicator.classList.add("current");
                }
                switch (indicator.getAttribute("data-projectnumber")) {
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

            document.querySelector("div.xprojects").appendChild(indicator);

            project_element.classList.add("project");
            let project_image = document.createElement("img");
            project_image.setAttribute("src", "assets/"+ project.name +".jpeg");
            project_image.setAttribute("alt", "Project");
            let project_info_holder = document.createElement("div");
            project_info_holder.classList.add("info")
            let project_name = document.createElement('h3');
            project_name.textContent = project["name"] ? project["name"].charAt(0).toUpperCase() + project["name"].slice(1) : "Projeto #" + (index + 1);
            let project_description = document.createElement('p');
            project_description.textContent = (project["description"]) ? project["description"] : "Website adaptable to all devices, with UI components and animated interactions.";

            project_info_holder.appendChild(project_name);
            project_info_holder.appendChild(project_description);

            project_element.appendChild(project_image);
            project_element.appendChild(project_info_holder);

            projects.appendChild(project_element);
        });
    });









//fetch(`https://api.github.com/users/JasminiSantos/repos`)
/*  

  document.getElementById("projectsSum").textContent = Object.keys(result).length + "+";
result.forEach(projeto => {

      let card = document.createElement('div');
      card.classList.add('card');

      let card_header = document.createElement('div');
      card_header.classList.add('card-header');

      let card_header_image = document.createElement('img');
      card_header_image.setAttribute('src', 'cursosacademy.png');

      let card_body = document.createElement('div');
      card_body.classList.add('card-body');

      let project_name = document.createElement('h2');
      project_name.textContent = projeto["name"].charAt(0).toUpperCase() + projeto["name"].slice(1);

      let project_language = document.createElement('span');
      project_language.classList.add('tag', 'tag-teal');
      project_language.textContent = projeto["language"] ? projeto["language"] : 'Other';

      let project_description = document.createElement('p');
      project_description.textContent = (projeto["description"]) ? projeto["description"] : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

      card_body.appendChild(project_name);
      card_body.appendChild(project_language);
      card_body.appendChild(project_description);

      card_header.appendChild(card_header_image);

      card.appendChild(card_header);
      card.appendChild(card_body);

      document.getElementById('projectList').appendChild(card);


  }); */