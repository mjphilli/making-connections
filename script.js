console.log("page loaded...");

function editProfile() {
    document.querySelector("#profile").innerText = "any other name";
}

function requests(e) {
    if (e.alt === "accept")
    {
        ++document.querySelector("#connections").innerText;
    }

    --document.querySelector("#requests").innerText;
    e.parentNode.parentNode.remove();
}