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
    const spotlightGrid = document.querySelector(".spotlight");
    const spotlightOptions = []

    spotlightGrid.innerHTML = "";


    companies.forEach((company) => {

        if (company.membership === "Gold" || company.membership === "Silver") {
            spotlightOptions.push(company);
        } 
    });

    shuffleArray(spotlightOptions);

    const displayedMembers = spotlightOptions.slice(0,3);
    
    displayedMembers.forEach((company) => {
        const memberDiv = createMemberCard(company);
        spotlightGrid.appendChild(memberDiv);
    });
};

const createMemberCard = (company) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("company-card");
    memberDiv.classList.add("member");

    memberDiv.innerHTML = `
        <img src="${company.img}" alt="${company.name}" Logo loading="lazy">
        
        <p>${company.membership} Member</p>
        <p>${company.address}</p>
        <p>${company.phoneNumber}</p>
        <a href="${company.webURL}" target="_blank">${company.webURL}</a>
    `;

    return memberDiv;
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Initialize data retrieval
getLinkData();