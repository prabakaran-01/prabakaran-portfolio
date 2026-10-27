# Prabakaran M — Premium Dark Developer Portfolio

A modern, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Motion for React (`motion`)**.

Designed with an aesthetic dark theme (`#0A0A0C` background, `#121216` / `#17171C` surfaces, `#29292F` subtle borders, and `#B7FF3C` neon lime accents). Built specifically for **Prabakaran M (WordPress Developer | Web Developer)** with 100% verified resume details.

---

## 🚀 Features

- **High-End Dark Aesthetic:** Minimalist developer palette (`#0A0A0C`) with strategic `#B7FF3C` neon lime highlights and generous whitespace.
- **Fluid Micro-Interactions:** Smooth entrance and scroll reveals powered by `motion/react`, respecting `prefers-reduced-motion`.
- **Dynamic Navigation:** Sticky glassmorphism header with active section tracking, smooth anchor scrolling, and a responsive mobile drawer.
- **Editable Centralized Data:** All personal details, project descriptions, skills, experience, and contact details reside in `src/data/portfolioData.js`.
- **Resume Download Ready:** Points directly to `/resume.pdf` with sample resume pre-generated and easy one-file replacement.
- **Interactive Contact Dispatcher:** Functional email client dispatcher via `mailto:` with instant "Copy Draft" and "Copy Email / Phone" clipboard buttons.
- **Zero Paid Dependencies:** Runs completely on open-source packages and standard static web hosting (Vercel, GitHub Pages, Netlify).

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion for React (`motion`)](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Space Grotesk (Headings) & Inter (Body)

---

## 📁 Project Structure

```text
prabakaran-portfolio/
├── public/
│   ├── favicon.svg               # Custom dark & neon lime favicon
│   ├── resume.pdf                # Downloadable resume document
│   └── images/
│       └── projects/
│           ├── woocommerce-store.svg   # WooCommerce project mockup
│           └── wordpress-business.svg  # WordPress business mockup
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation with active pill indicator
│   │   ├── Hero.jsx              # Hero section with headline & CTA buttons
│   │   ├── About.jsx             # Background, specialization & verified stats
│   │   ├── Skills.jsx            # 4 category cards (Frontend, Backend, WP, Tools)
│   │   ├── Projects.jsx          # Showcase of WooCommerce & WordPress projects
│   │   ├── Experience.jsx        # Vertical timeline of professional roles
│   │   ├── Education.jsx         # Academic degrees & university credentials
│   │   ├── Contact.jsx           # Direct contact cards & email dispatcher
│   │   ├── Footer.jsx            # Minimal dark footer & Back to Top link
│   │   └── Icons.jsx             # SVG icons (GitHub, LinkedIn, Twitter/X)
│   ├── data/
│   │   └── portfolioData.js      # ⭐ Single file to edit all portfolio content
│   ├── App.jsx                   # Main layout container
│   ├── index.css                 # Tailwind CSS v4 & theme definitions
│   └── main.jsx                  # React application entry point
├── index.html                    # SEO meta tags, title & font imports
├── vite.config.js                # Vite + Tailwind v4 configuration
└── package.json                  # Dependencies & npm scripts
```

---

## 💻 Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start the local development server
```bash
npm run dev
```
Open your browser and navigate to the printed URL (typically `http://localhost:5173`).

### 3. Build for production
```bash
npm run build
```
The optimized static production files will be built into the `dist/` folder.

### 4. Preview the production build locally
```bash
npm run preview
```
Runs a local server serving the contents of `dist/` to verify production behavior.

---

## ✏️ How to Customize Your Content

### 1. Update Personal Info, Skills, Experience & Links
Open `src/data/portfolioData.js`:
- **Change Name or Title:** Update `personal.name` and `personal.role`.
- **Add Social Profiles:** Fill in `personal.socialLinks.github`, `personal.socialLinks.linkedin`, etc. *(Empty strings are automatically hidden from the site)*.
- **Update Projects:** Modify `projects` array to add live URLs (`liveUrl: "https://..."`), GitHub links (`githubUrl: "https://..."`), or new projects.
- **Update Availability Status:** Set `personal.availability.isAvailable` to `true` or `false`.

### 2. Replace Project Screenshots
Place your real project screenshots in:
```text
public/images/projects/
```
Then update the `image` path inside `src/data/portfolioData.js` (e.g. `image: "/images/projects/my-screenshot.png"`).

### 3. Replace the Resume PDF
Replace the file at:
```text
public/resume.pdf
```
with your updated resume PDF. The **Download Resume** button in the Hero section will automatically download this file.

---

## 🌐 Free Deployment via GitHub & Vercel (Recommended)

### Step 1: Initialize Git and Push to GitHub

1. Open your terminal in the project directory:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium dark developer portfolio"
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `prabakaran-portfolio`. Keep it **Public** (or Private).

3. Link and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/prabakaran-portfolio.git
   git push -u origin main
   ```

---

### Step 2: Deploy Free on Vercel

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** or **Log In** with your GitHub account.
2. In the Vercel dashboard, click **Add New...** → **Project**.
3. Under **Import Git Repository**, find `prabakaran-portfolio` and click **Import**.
4. In the configuration screen:
   - **Framework Preset:** Vite *(detected automatically)*
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` *(detected automatically)*
   - **Output Directory:** `dist` *(detected automatically)*
5. Click **Deploy**.
6. Within 30–60 seconds, your portfolio will be live at a free URL (e.g., `https://prabakaran-portfolio.vercel.app`).
7. Any future commits pushed to `main` on GitHub will automatically trigger a new deployment.

---

## 📄 License

MIT License. Designed and crafted for Prabakaran M.
