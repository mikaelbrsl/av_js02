const countries = [
    { name: "Andorra", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ad.png"},
    { name: "Emirados Árabes Unidos", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ae.png" },
    { name: "Afeganistão", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/af.png" },
    { name: "Antígua e Barbuda", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ag.png" },
    { name: "Anguilla", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ai.png" },
    { name: "Albânia", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/al.png" },
    { name: "Armênia", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/am.png" },
    { name: "Angola", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ao.png" },
    { name: "Antártida", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/aq.png" },
    { name: "Argentina", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ar.png" },
    { name: "Samoa Americana", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/as.png" },
    { name: "Áustria", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/at.png" },
    { name: "Austrália", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/au.png" },
    { name: "Aruba", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/aw.png" },
    { name: "Ilhas Aland", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ax.png" },
    { name: "Azerbaijão", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/az.png" },
    { name: "Bósnia e Herzegovina", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/ba.png" },
    { name: "Barbados", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/bb.png" },
    { name: "Bangladesh", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/bd.png" },
    { name: "Bélgica", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/be.png" },
    { name: "Burkina Faso", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/bf.png" },
    { name: "Bulgária", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/bg.png" },
    { name: "Barein", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/bh.png" },
    { name: "Burundi", url: "https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png1000px/bi.png" }
];


const container = document.getElementById("flags-container");


countries.forEach(country => {
    const flagContainer = document.createElement("div");
    flagContainer.className = "flag-container";

    
    const img = document.createElement("img");
    img.src = country.url;
    img.alt = country.name;
    img.className = "flag";


    const caption = document.createElement("p");
    caption.textContent = country.name;
    caption.className = "flag-name";


    flagContainer.appendChild(img);
    flagContainer.appendChild(caption);


    container.appendChild(flagContainer);
});
