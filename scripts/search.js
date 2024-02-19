import Search from "../components/search.js";
let searchBar = document.getElementById("searchBar");
searchBar.innerHTML = Search();

const COURSES_API = "https://clone-pluralsight-server.herokuapp.com/courses";

let search = document.getElementById("img");
let body = document.getElementById("mainBody");
let searchItem = document.getElementById("searchItem");
let searchedData = document.getElementById("searchedData");

let searchInput = document.getElementById("searchInput");

searchItem.style.display = "none";
searchedData.style.display = "none";
search.addEventListener("click", () => {
  searchItem.style.display = "flex";
  searchedData.style.display = "block";
  document.documentElement.style.overflow = "hidden";
});

let closeDiv = document.getElementById("p");
closeDiv.addEventListener("click", () => {
  searchItem.style.display = "none";
  searchedData.style.display = "none";
  document.documentElement.style.overflow = "auto";
});

let searchDataTimer;
searchInput.addEventListener("keyup", () => {
  // console.log(searchInput.value);

  if (searchDataTimer) {
    clearInterval(searchDataTimer);
  }

  searchDataTimer = setTimeout(async () => {
    displayData(await getCourses(COURSES_API));
  }, 500);
});

const getCourses = async (COURSES_API) => {
  try {
    let response = await fetch(COURSES_API);
    let res = response.json();
    return res;
  } catch (e) {
    console.log("Error: ", e);
  }
};

const displayData = ({ course }) => {
  searchedData.innerHTML = null;
  let coursesDiv = document.createElement("div");
  coursesDiv.setAttribute("id", "coursesDataDiv");

  let searchedString = searchInput.value.trim().toLowerCase();

  course = course.filter((element) => {
    return element.title.toLowerCase().includes(searchedString);
  });

  
  course.forEach((element) => {
    let title = document.createElement("p");
    title.setAttribute("style", "cursor: pointer;");
    title.innerText = element.title;

    title.onclick = () => {
      localStorage.setItem("course", JSON.stringify(element));
      location.href = "course-details.html";
    };

    coursesDiv.append(title);
  });
  searchedData.append(coursesDiv);
};
