# Muhammad Zeeshan — Portfolio & Dynamic CMS

A dynamic, high-converting portfolio website and content administration panel for **Muhammad Zeeshan**, Data Scientist & AI/ML Developer.

---

## 🚀 How to Run Locally

### Method 1: One-Click Launcher (Recommended)
Double-click:
```
run.bat
```
This automatically starts your local Python server and opens your portfolio at `http://localhost:8000`.

### Method 2: Via Terminal (PowerShell / Command Prompt)
Run:
```bash
python run.py
```
- **Portfolio Website:** [http://localhost:8000](http://localhost:8000)
- **Admin Control Panel:** [http://localhost:8000/admin.html](http://localhost:8000/admin.html)

---

## ⚙️ Built-In Admin Control Panel (`admin.html`)

You have an interactive administrative dashboard to manage your portfolio content dynamically:
- **Profile:** Update your name, title, headline, bio, and contact links.
- **Projects:** Add new projects, edit existing ones, or delete outdated repositories with a single click.
- **Experience:** Add, edit, or remove work experience and open-source contributions.
- **Certifications:** Dynamically append new credentials as you earn them.
- **Live Saving:** Clicking **"💾 Save Changes"** writes directly to `data.json` on your local drive!
- **Download data.json:** Export your data file anytime with one click.

---

## 📱 Responsive & Scalable Architecture
- All project and certification grids automatically adapt (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with uniform flexbox cards.
- Adding 1, 5, or 20 new projects or certifications will never break mobile, tablet, or desktop screen layouts.

---

## 🌐 Deploying to GitHub Pages (Free)

1. Open PowerShell in `c:\Users\Zeeshan\Desktop\Myportfolio` and run:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio: Muhammad Zeeshan, ML & NLP focus, admin panel"
   git branch -M main
   git remote add origin https://github.com/zeeshanrana707/portfolio.git
   git push -u origin main
   ```
2. In your repository on GitHub:
   - Go to **Settings** → **Pages**.
   - Under **Branch**, select `main` and `/ (root)`.
   - Click **Save**.
3. Your site will be live at `https://zeeshanrana707.github.io/portfolio`!
