# 📅 Interactive Wall Calendar

A premium, highly interactive **React + Next.js calendar application** designed with a physical **"Wall Calendar" aesthetic**.  
This project features a unique geometric UI, a custom-ruled notes section, and a realistic 3D hanging effect.

🔗 **Live Demo:** https://take-uf-intern.vercel.app/

---

## 🚀 Features

- 📆 **Interactive Date Range Selection**  
  Seamlessly select a start and end date with a visually highlighted range.

- 🧱 **Physical Aesthetic Design**  
  Mimics a real-world hanging calendar with:
  - Wall hook
  - Binder loops
  - Depth shadows

- 📝 **Custom Ruled Notes Section**  
  Styled like real notebook paper with perfectly aligned horizontal lines.

- 🎨 **Geometric UI Design**  
  Custom SVG / clip-path wave overlays on mountain imagery for a modern look.

- 📱 **Fully Responsive**  
  Optimized for both desktop and mobile with zero-scroll layout.

---

## 🛠️ Tech Stack

- **Frontend:** React, Next.js
- **Styling:** Tailwind CSS
- **Libraries:** date-fns, lucide-react
- **Deployment:** Vercel

---

## 📂 Folder Structure
```
.
├── app/
│ ├── layout.tsx # Global metadata and fonts
│ └── page.tsx # Main entry point & calendar layout logic
├── components/
│ ├── Hero.tsx # Header section with image, wave & month/year
│ ├── Grid.tsx # Interactive date selection logic
│ └── Notes.tsx # Ruled-paper textarea for notes
├── public/ # Static assets and icons
├── tailwind.config.ts # Custom theme & shadows
└── package.json # Dependencies
```
