console.log("page loaded...");

function editProfile() {
    document.querySelector("#profile").innerHTML = "any other name";
}

function requests(e) {
    if (e.alt === "accept")
    {
        document.querySelector("#connections").innerHTML = ++document.querySelector("#connections").innerHTML;
    }

    document.querySelector("#requests").innerHTML = --document.querySelector("#requests").innerHTML;
    e.parentNode.parentNode.remove();
}