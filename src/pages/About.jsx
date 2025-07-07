import React from 'react'

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen px-6 py-20 bg-gray-800 text-white flex flex-col md:flex-row items-center justify-center gap-10"
        >
            {/* 👤 Image placeholder */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <img
                    src="/profilepic.jpg"
                    alt="Akash Kanagarajah"
                    className="w-full h-full object-cover scale-125"
                />
            </div>

            {/* 🧠 Bio */}
            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-emerald-400">About Me</h2>
                <p>
                    I'm a Computer Engineering graduate who thrives at the intersection of hardware and software. Whether it's modernizing embedded Linux systems in nuclear facilities or building React-based tools that solve real-world problems, I love turning complexity into clean, practical solutions. I'm currently exploring full-stack development and AI automation, always focused on delivering fast, reliable code.
                </p>
                {/* 🧰 Tech Stack Grid */}
                <h3 className="text-2xl font-semibold mt-10 mb-4 text-emerald-400">Tech Stack</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
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
                            <img src={tech.src} alt={tech.name} className="w-12 h-12 mb-2" />
                            <span className="text-sm">{tech.name}</span>
                        </div>
                    ))}
                </div>
                <a
                    href="/Akash_K_Resume.pdf"
                    download
                    className="mt-8 inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
                >
                    Download Resume
                </a>
            </div>
        </section>
    )
}

export default About