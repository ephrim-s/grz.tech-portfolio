import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "JavaScrip", 
        "React",
        "Tailwindcss",
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "Express",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
    ]

    return (
        <section id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me {" "}
                    </h2>
                    <div className="glass rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <div>
                            <p className="text-gray-300 mb-6">
                                Hi, I'm a passionate and detail-oriented Full-Stack Web Developer currently studying at ALX Africa.
                                I specialize in building responsive, user-friendly web applications using modern technologies like Django,
                                React, JavaScript, Python, and TailwindCSS. With a solid foundation in backend and frontend development,
                                I enjoy turning complex problems into clean, scalable solutions. I'm actively seeking an internship
                                opportunity where I can apply my skills, learn from experienced professionals, and contribute to impactful projects.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🧾 What I Bring </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Strong backend experience with Python/Django</strong> 
                                </li>
                                <li>
                                    <strong>Interactive and mobile-first UIs with React & TailwindCSS</strong> 
                                </li>
                                <li>
                                    <strong>RESTful APIs, authentication systems, and full-stack app deployment</strong> 
                                </li>
                                <li>
                                    <strong>Teamwork, time management, and a hunger to grow in a professional environment</strong> 
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4"> Frontend Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (

                                            <span key={key}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4"> Backend Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech, key) => (

                                            <span key={key}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 📖 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Back-End Web Development </strong> - ALX Africa 2021 - 2025
                                </li>
                                <li>
                                    <strong>Front-End Web Development </strong> - ALX Africa 2021 - 2025
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> ⚒️ Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Software Engineer at ABC Corp (2020 - Present)</h4>
                                    <p>Developed and maintained microservices for clud-based application</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Intern at AEF Startups (2019)</h4>
                                    <p>Assisteed in Building front-end components and integration REST API</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};