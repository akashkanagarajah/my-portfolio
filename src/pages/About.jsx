import React from 'react'

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen px-6 py-20 bg-gray-800 text-white"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                    {/* 👤 Profile Picture */}
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
                            <img
                                src="/profilepic.jpg"
                                alt="Akash Kanagarajah"
                                className="w-full h-full object-cover scale-125"
                            />
                        </div>
                    </div>

                    {/* 🧠 Bio Content */}
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-3xl font-bold mb-6 text-emerald-400 text-center lg:text-left">About Me</h2>
                        <p className="text-lg leading-relaxed mb-8 text-center lg:text-left">
                            I'm a Computer Engineering graduate who thrives at the intersection of hardware and software. Whether it's modernizing embedded Linux systems in nuclear facilities or building React-based tools that solve real-world problems, I love turning complexity into clean, practical solutions. I'm currently exploring full-stack development and AI automation, always focused on delivering fast, reliable code.
                        </p>
                        
                        {/* 🧰 Tech Stack Grid */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-6 text-emerald-400 text-center lg:text-left">Tech Stack</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
                                {[
                                    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                                    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                                    { name: 'C', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
                                    { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                                    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                                    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                                    { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                                    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                                    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                                    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                                    { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                                    { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                                    { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                                    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                                    { name: 'Netlify', src: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
                                    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                                    { name: 'OpenCV', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
                                    { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' }

                                ].map((tech, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-up"
                                        className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:text-emerald-400"
                                    >
                                        <img src={tech.src} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 mb-2" />
                                        <span className="text-xs md:text-sm text-center">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 📄 Resume Button */}
                        <div className="text-center lg:text-left">
                            <a
                                href="/Akash_K_Resume.pdf"
                                download
                                className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About