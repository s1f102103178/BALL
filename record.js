function openMainTab(evt, tabName) {
    let mainTabContent = document.getElementsByClassName("mainTabContent");
    let tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < mainTabContent.length; i++) {
        mainTabContent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openSubTab(evt, tabName) {
    let subTabContent = document.getElementsByClassName("subTabContent");
    let subTablinks = document.getElementsByClassName("subTablinks");

    for (let i = 0; i < subTabContent.length; i++) {
        subTabContent[i].style.display = "none";
    }

    for (let i = 0; i < subTablinks.length; i++) {
        subTablinks[i].className = subTablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openSubSubTab(evt, tabName) {
    let subSubTabContent = document.getElementsByClassName("subSubTabContent");
    let subSubTablinks = document.getElementsByClassName("subSubTablinks");

    for (let i = 0; i < subSubTabContent.length; i++) {
        subSubTabContent[i].style.display = "none";
    }

    for (let i = 0; i < subSubTablinks.length; i++) {
        subSubTablinks[i].className = subSubTablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 初期表示設定
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab button").click();
    document.querySelector(".subTab button").click();
    document.querySelector(".subSubTab button").click();
});
