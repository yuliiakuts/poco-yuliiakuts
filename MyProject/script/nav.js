let nav = [
    {
        src: "./index.html",
        text: "Main"
    },
    {
        src: "./resume.html",
        text: "Resume"
    },
    {
        src: "./photo.html",
        text: "Photo"
    },
    {
        src: "./video.html",
        text: "Video"
    },
    {
        src: "./contacts.html",
        text: "Contacts"
    }
];

let ol = document.getElementById("menu__top");
for (let i = 0; i < nav.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "nav__li")
    li.innerHTML = `<a class="nav__link" href="${nav[i].src}">${nav[i].text}</a>`;
    ol.appendChild(li);
}
