const baseURL = "https://britty042.github.io/wdd230/";
const linksURL = "https://britty042.github.io/wdd230/chamber/data/members.json";

async function getLinkData() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        sortMembers(data.companies);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const sortMembers = (companies) => {
    const goldGrid = document.querySelector(".gold-display");
    const silverGrid = document.querySelector(".silver-display");
    const bronzeGrid = document.querySelector(".bronze-display");

    const goldList = document.querySelector(".gold-list");
    const silverList = document.querySelector(".silver-list");
    const bronzeList = document.querySelector(".bronze-list");

    // Clear existing content
    goldGrid.innerHTML = "";
    silverGrid.innerHTML = "";
    bronzeGrid.innerHTML = "";

    goldList.innerHTML = "";
    silverList.innerHTML = "";
    bronzeList.innerHTML = "";

    companies.forEach((company) => {
        const memberDiv = createMemberCard(company);
        const listItem = createListItem(company);

        if (company.membership === "Gold") {
            goldGrid.appendChild(memberDiv);
            goldList.appendChild(listItem);
        } else if (company.membership === "Silver") {
            silverGrid.appendChild(memberDiv);
            silverList.appendChild(listItem);
        } else {
            bronzeGrid.appendChild(memberDiv);
            bronzeList.appendChild(listItem);
        }
    });
};

const createMemberCard = (company) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("company-card");
    memberDiv.classList.add("member");

    memberDiv.innerHTML = `
        <img src="${company.img}" alt="${company.name} Logo" loading="lazy">
        <strong>${company.name}</strong>
        <p>${company.membership} Member</p>
        <p>${company.address}</p>
        <p>${company.phoneNumber}</p>
        <a href="${company.webURL}" target="_blank">${company.webURL}</a>
    `;

    return memberDiv;
};

const createListItem = (company) => {
    const listItem = document.createElement("li");
    listItem.classList.add("company-list-item");

    listItem.innerHTML = `
        <strong>${company.name}</strong>
        <p>${company.address}</p>
        <p>${company.phoneNumber}</p>
        <a href="${company.webURL}" target="_blank">${company.webURL}</a>
    `;

    return listItem;
};

// Event listener for grid and list view toggle buttons
document.addEventListener("DOMContentLoaded", function () {
    const gridViewButton = document.getElementById("grid");
    const listViewButton = document.getElementById("list");
    const gridView = document.querySelector(".directory-grid");
    const listView = document.querySelector(".list-view");

    gridViewButton.addEventListener("click", function () {
        gridView.style.display = "block";
        listView.style.display = "none";
    });

    listViewButton.addEventListener("click", function () {
        gridView.style.display = "none";
        listView.style.display = "block";
    });
});

// Initialize data retrieval
getLinkData();
