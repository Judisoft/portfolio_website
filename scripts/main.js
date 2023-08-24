
let typed = new Typed("#text", {
    strings: 
            ['Who is Kum Jude? ^1000\n `<br><br> Kum Jude is a skilled back-end developer and educator, experienced in technologies like JavaScript, Python, TypeScript and PHP. I specialize in developing server-side applications and databases. He\'s an EduTech enthusiast.` ^10000',
             'What is Jude focused on right now? ^1000\n `<br><br> Kum Jude is the lead developer at Quizzy, a data driven instruction platform. He spends time upskilling and learning new technologies.` ^10000'

            ],
    typeSpeed: 50,
    loop: true
})

function viewProjects() {
    const projects = document.getElementById("projects")
    projects.style.display = "block"
}

