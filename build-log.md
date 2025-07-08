# 🚧 Portfolio Build Log
**Name:** Akash Kanagarajah  
**Date:** July 7, 2025  
**Goal:** Build and deploy a professional portfolio site in one day using React + Tailwind.

---

## ⏱️ Pomodoro Blocks

### 🔹 Block 1: 2:00 PM – 3:00 PM
**🎯 Goal:** Project setup, Tailwind install, and Git push.

#### ✅ Completed
- [x] Scaffolded project with Vite + React
- [x] Installed Tailwind CSS, PostCSS, Autoprefixer
- [x] Confirmed Tailwind is working
- [x] Cleaned up boilerplate code
- [x] Initialized Git repo
- [x] Created GitHub repo and pushed code  
🔗 [GitHub Repo](https://github.com/akashkanagarajah/my-portfolio)

---

### 🔹 Block 2: 3:00 PM – 4:00 PM _(in progress)_
**🎯 Goal:** Create folder structure and build `Navbar.jsx`, `Home.jsx`.

#### ✅ Completed
- [ ] Set up `components/` and `pages/` folders
- [ ] Updated `App.jsx` layout
- [ ] Built reusable `Navbar` with anchor links
- [ ] Created hero section in `Home`

---

## ✅ Notes & Takeaways
- Tailwind didn't work initially — fixed by installing specific stable versions.
- Cursor is fast and helpful for file editing + layout.
- GitHub push working perfectly.

---
## 📦 Block 2: Stage 1 — Hero Section & Typing Animation (4:00 PM–4:45 PM)

### ✅ Completed Tasks:
- Created `Home.jsx` component under `src/pages/`
- Added personalized heading with name (Akash Kanagarajah)
- Integrated animated typewriter effect for:
  - "Software Engineer"
  - "Embedded Systems Developer"
  - "React Builder"
  - "Problem Solver"
- Styled hero section using TailwindCSS
- Implemented static intro paragraph describing dev background
- Confirmed live on `localhost:5173`

### 🚀 Next Steps:
- Create and style `About.jsx` section
- Add personal image (placeholder for now)
- Push updated `build-log.md` and About.jsx together later
--

📦 Block 3: Stage 2 — About Section, Tech Stack Grid, Resume Button (4:00 PM–6:30 PM)

✅ Completed Tasks:
	•	Built out About.jsx section:
	•	Added circular profile image with placeholder
	•	Wrote a personal bio paragraph
	•	Created a responsive Tech Stack Grid with:
	•	18 icons (e.g., Python, JavaScript, React, MySQL, Docker, etc.)
	•	Hover effects (scale + color) and AOS fade-up animation on scroll
	•	Added Download Resume button:
	•	Linked to public/Akash_K_Resume.pdf
	•	Styled with Tailwind (bg-emerald-500 with hover state)
	•	Ensured everything aligns on mobile and desktop
	•	Tested nav jump (#about) and AOS integration

🧪 Preview:
	•	Navigate to About in the navbar: loads bio + tech grid + resume button cleanly
	•	AOS triggers once on scroll into view (intended behavior)

🚀 Next Steps:
	•	Begin Stage 2.6: Projects section (grid layout + cards + hover & scroll effects)
	•	Continue responsive styling
	•	Push all changes to GitHub

📦 Block 4: Stage 2.6 — Projects Section with Interactive Flip Cards (9:30 PM–12:00 AM)

✅ Completed Tasks:
	•	Created Projects.jsx under src/pages/ and ProjectCard.jsx under components/
	•	Displayed projects in a responsive grid layout
	•	Built reusable ProjectCard component that:
	•	Shows project title on front side
	•	Flips on click to reveal tech stack, summary, and optional GitHub link
	•	Used TailwindCSS with custom utility classes for flip animation:
	•	Applied perspective, transform-style, and rotateY logic
	•	Styled both card faces to maintain alignment and spacing
	•	Fixed layout bug where content overflowed on flip:
	•	Ensured fixed height and proper padding
	•	Used overflow-hidden and scaling to keep content inside the card boundaries

🧪 Preview:
	•	Flip animation works cleanly when project cards are clicked
	•	Content stays within card boundaries on flip
	•	Responsive layout adapts well to smaller screens

🚀 Next Steps:
	•	Finalize Contact section and footer
	•	Deploy to Netlify and polish mobile nav behavior
	•	Push latest build updates to GitHub

📦 Block 4: Stage 2.7 — Project Card Flip Animation (12:00 AM – 12:30 AM)

✅ Completed Tasks:
	•	Implemented card flip animation on click using Tailwind and custom CSS
	•	Front of card shows project title
	•	Back reveals:
	•	Tech stack (tags)
	•	Summary paragraph
	•	GitHub + Demo buttons (already hyperlinked)
	•	Ensured content fits inside card boundaries on all screen sizes
	•	Verified flip effect transitions cleanly and responsively

🧪 Preview:
	•	Click on card: smoothly flips to back
	•	Summary and buttons are readable and aligned
	•	Works on mobile and desktop

📦 Block 5: Stage 2.8 — Contact Section (12:30 AM – 12:42 AM)

✅ Completed Tasks:
	•	Created a clean and responsive Contact section
	•	Built a styled contact form with:
	•	Fields for Name, Email, and Message
	•	Submit button with hover effects and animations
	•	Wired form to React state (form inputs update live)
	•	Added scroll-triggered AOS animation on section entry
	•	Confirmed mobile responsiveness and alignment
	•	Temporarily logs form data on submit (for testing)

🧪 Current Behavior:
	•	Form captures input correctly
	•	On submit: logs to console, resets form
	•	No actual email sending (to be handled next with EmailJS)

🚀 Next Steps:
	•	Implement EmailJS to make form functional
	•	Test and validate form submission flow
	•	Add success/error message on submit


## 🏁 Final Goal
Deploy on Netlify with responsive, recruiter-ready layout and mobile polish.