const portfolioData = {
    profile: {
        name: "Ferrante Mathieu",
        title: "Étudiant ISEN | Développement IA",
        desc: "Ancien élève en BTS CIEL et alternant au Commissariat au Numérique de la Défense.<br>Passionné par l'innovation et à la recherche d'une alternance en IA."
    },
    navigation: [
        { name: "1. Parcours & Expérience", link: "#parcours" },
        { name: "2. Compétences Techniques", link: "#competences" },
        { name: "3. Projet Marquant", link: "#projet" },
        { name: "4. Coordonnées", link: "#contact" }
    ],
    sections: {
        parcours: {
            title: "1. Parcours & Expérience",
            items: [
                "J'ai effectué une alternance au sein du Commissariat au numérique de défense pendant 2 ans, au cours de laquelle j'ai pu travailler en tant que technicien réseau téléphonique et ainsi m'occuper du bon fonctionnement du réseau.",
                "J'ai aussi travaillé sur un projet de fin d'année en BTS, en groupe de 4, où nous devions créer un parking connecté à partir de zéro (balises physiques, site web, programmes, bases de données, etc.)."
            ]
        },
        skills: {
            title: "2. Compétences Techniques",
            intro: "Au cours de mon parcours, j'ai eu l'occasion d'utiliser plusieurs technologies et outils tels que le câblage cuivre, les langages de programmation mais aussi la suite Office.",
            groups: [
                { title: "💻 Langages de programmation objet:", list: "C, C++" },
                { title: "💻 Langages de programmation web:", list: "PHP, HTML et CSS" },
                { title: "📊 Bases de données", list: "MySQL" }
            ]
        },
        projects: {
            title: "3. Projets",
            availableYears: ["all", "2025", "2024"],
            items: [
                { 
                    title: "Migration IP Militaire", 
                    year: "2025", 
                    desc: "Le projet le plus marquant de mon parcours est la migration complète d'un site militaire de la technologie cuivre vers l'IP (réalisée dans les temps et sans aucun problème final). Les principales problématiques ont été la gestion de la clientèle avec diplomatie." 
                },
                { 
                    title: "Projet BTS : Parking Connecté", 
                    year: "2024", 
                    desc: "Conception complète d'un système de parking intelligent avec capteurs et base de données." 
                }
            ]
        },
        contact: {
            title: "4. Coordonnées",
            loc: "Sanary-sur-mer",
            tel: "07-76-69-29-76",
            email: "ferrantemathieu08@gmail.com",
            github: "https://github.com/idontnowhowtonameme",
            copyright: "© 2026 - Ferrante Mathieu - ISEN Toulon"
        }
    }
};

let filtreActuel = 'all';

function injecterContenu() {
    // Hero
    document.getElementById('hero-name').innerText = portfolioData.profile.name;
    document.getElementById('hero-title').innerText = portfolioData.profile.title;
    document.getElementById('hero-desc').innerHTML = portfolioData.profile.desc;
    document.getElementById('main-nav').innerHTML = portfolioData.navigation
        .map(n => `<a href="${n.link}" class="btn">${n.name}</a>`).join('');

    // Parcours
    document.getElementById('title-parcours').innerText = portfolioData.sections.parcours.title;
    document.getElementById('parcours-content').innerHTML = `
        <div class="card">${portfolioData.sections.parcours.items.map(p => `<p>${p}</p>`).join('')}</div>
    `;

    // Compétences
    document.getElementById('title-skills').innerText = portfolioData.sections.skills.title;
    document.getElementById('skills-intro').innerText = portfolioData.sections.skills.intro;
    document.getElementById('skills-list').innerHTML = portfolioData.sections.skills.groups
        .map(g => `
            <div class="skill-card">
                <h4>${g.title}</h4>
                <p>${g.list}</p>
            </div>
        `).join('');

    // Projets
    document.getElementById('title-projects').innerText = portfolioData.sections.projects.title;
    const yearSelect = document.getElementById('year-filter');
    yearSelect.innerHTML = portfolioData.sections.projects.availableYears
        .map(y => `<option value="${y}">${y === 'all' ? 'Tous les projets' : y}</option>`).join('');
    
    yearSelect.addEventListener('change', (e) => {
        filtreActuel = e.target.value;
        afficherProjets();
    });
    afficherProjets();

    // Contact
    document.getElementById('title-contact').innerText = portfolioData.sections.contact.title;
    document.getElementById('footer-contact').innerHTML = `
        <p>📍 ${portfolioData.sections.contact.loc}</p>
        <p>📞 ${portfolioData.sections.contact.tel}</p>
        <p>✉️ <a href="mailto:${portfolioData.sections.contact.email}">${portfolioData.sections.contact.email}</a></p>
        <p>🔗 <a href="${portfolioData.sections.contact.github}" target="_blank">GitHub</a></p>
    `;
    
    const form = document.getElementById('contact-form');
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "15px";
    form.style.padding = "30px";
    form.innerHTML = `
        <input type="email" placeholder="Votre Email" required style="padding:12px; border:1px solid #ccc; border-radius:8px;">
        <textarea rows="4" placeholder="Votre Message" required style="padding:12px; border:1px solid #ccc; border-radius:8px; font-family:inherit;"></textarea>
        <button type="submit" class="btn" style="background:var(--primary); color:white; border:none; width:100%; cursor:pointer;">Envoyer le message</button>
        <div id="form-status" style="margin-top:10px; font-weight:bold; text-align:center;"></div>
    `;
    
    form.onsubmit = (e) => {
        e.preventDefault();
        document.getElementById('form-status').innerHTML = "✅ Message envoyé avec succès !";
        form.reset();
    };

    document.getElementById('copyright-text').innerText = portfolioData.sections.contact.copyright;
}

function afficherProjets() {
    const container = document.getElementById('projects-list');
    const filtered = portfolioData.sections.projects.items.filter(p => filtreActuel === 'all' || p.year === filtreActuel);
    
    container.innerHTML = filtered.map(p => `
        <div class="project-box">
            <h3>${p.title} (${p.year})</h3>
            <p>${p.desc}</p>
        </div>
    `).join('');
}

window.addEventListener('DOMContentLoaded', injecterContenu);