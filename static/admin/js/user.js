
let userform = document.querySelector(`.usform`);
let uprofile = document.querySelector(`.uprofile-settings`);
let userProfileSettings = document.querySelector(".user-profile-settings");
let usUpdate = document.querySelector(".update");
let usForm = document.querySelector(`.usform`);
let userEdit = document.querySelector(`.user-edit`);

//EDIT PROFILE
userEdit.addEventListener("click", () => {
    uprofile.classList.remove(`hide`);
})

//UPDATE PROFILE
usUpdate.addEventListener("click", () => {
    uprofile.classList.add(`hide`);
})

function addUser() {
    userform.classList.remove(`hide`);
}
function useraction() {
    userform.classList.add(`hide`);
}

function handleSettingsClick(event) {
    const clickedElement = event.target;
    if (clickedElement.classList === "uprofile-settings" || "usform") {
        clickedElement.classList.add(`hide`);
    }
}
userEdit.addEventListener("click", handleSettingsClick)
uprofile.addEventListener("click", handleSettingsClick);
usUpdate.addEventListener("click", handleSettingsClick);
usForm.addEventListener("click", handleSettingsClick);
