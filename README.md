# 🧠 ShifaMind - Interactive Dashboard

> **Explainable Medical AI That Beats ChatGPT**

An absolutely stunning, futuristic dashboard showcasing ShifaMind's groundbreaking achievements in interpretable medical AI. Built with glassmorphism, Three.js particle effects, and smooth animations.

## 🎯 Key Highlights

- **🏆 Beat GPT-4 by 29%**: ShifaMind achieves 0.452 F1 vs GPT-4's ~0.350
- **🔍 100% Explainability**: Every decision traced through 113 clinical concepts
- **🧠 Novel Architecture**: Multiplicative concept bottleneck + GraphSAGE + RAG
- **📊 Rigorous Evaluation**: 9 models compared on MIMIC-IV (115K samples)
- **🥉 Best Interpretable Model**: #3 overall, #1 among interpretable models

## 🚀 Live Demo

**[View Live Dashboard](https://syedmohammedsameer.github.io/shifamind-dashboard)**

## 📁 Project Structure

```
shifamind-dashboard/
├── index.html          # Main dashboard page
├── styles.css          # Glassmorphism & animations
├── script.js           # Three.js background & interactions
└── README.md          # This file
```

## 🌐 Deploying to GitHub Pages

### Option 1: Quick Deploy (Recommended)

1. **Create a new GitHub repository**
   ```bash
   # On GitHub.com, create a new repository named "shifamind-dashboard"
   ```

2. **Upload your files**
   - Go to your repository
   - Click "Add file" > "Upload files"
   - Drag and drop `index.html`, `styles.css`, and `script.js`
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be live at `https://syedmohammedsameer.github.io/shifamind-dashboard`

### Option 2: Using Git Command Line

```bash
# Initialize git in your project folder
cd /path/to/your/files
git init

# Add all files
git add index.html styles.css script.js README.md

# Commit
git commit -m "Initial commit: ShifaMind dashboard"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/SyedMohammedSameer/shifamind-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages via Settings > Pages as described above
```

### Option 3: Using GitHub Desktop

1. Open GitHub Desktop
2. File > Add Local Repository
3. Choose your project folder
4. Publish repository to GitHub
5. Enable Pages in repository settings

## 🎨 Features

### Visual Design
- **Glassmorphism UI**: Frosted glass cards with backdrop blur
- **Animated 3D Background**: Three.js particle system with 2000+ particles
- **Gradient Typography**: Cyber-inspired color schemes
- **Smooth Animations**: Fade-in, slide-in, and float effects
- **Responsive Design**: Looks amazing on all devices

### Interactive Elements
- **Dynamic Charts**: Animated bar charts showing model performance
- **Performance Metrics**: Real-time animated counters
- **Hover Effects**: Glowing cards and interactive elements
- **Smooth Scroll**: Silky navigation between sections
- **Custom Cursor**: Futuristic cursor with glow effect

### Content Sections
1. **Hero**: Eye-catching introduction with key metrics
2. **Achievements**: What makes ShifaMind special
3. **Results**: Comprehensive benchmark comparisons
4. **Architecture**: Three-phase training explanation
5. **Comparison**: Why ShifaMind wins
6. **Tech Stack**: Technologies used

## 🛠️ Customization

### Update Your Information

1. **Email**: Update contact email in `index.html`
   ```html
   <!-- Line ~612 -->
   <a href="mailto:your@email.com">
   ```

2. **Colors**: Modify in `styles.css`
   ```css
   :root {
       --primary: #00f5ff;        /* Cyan */
       --secondary: #a855f7;      /* Purple */
       --accent: #10b981;         /* Green */
   }
   ```

3. **Performance Data**: Update scores in `index.html` if you have new results

4. **Paper Link**: Add your paper link when available (Line ~608)

## 🎯 Performance Tips

The dashboard is already optimized, but for even better performance:

1. **Enable Caching**: GitHub Pages automatically handles this
2. **Compress Assets**: Use tools like TinyPNG for any images you add
3. **CDN**: Three.js is loaded from Cloudflare CDN for fast delivery

## 📱 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

*Note: Three.js animations work best on desktop/modern browsers*

## 🤝 Contributing

This is a showcase project, but feel free to:
- Report bugs via Issues
- Suggest improvements
- Fork and customize for your own projects

## 📄 License

This dashboard design is open-source. The ShifaMind research and model are subject to their respective licenses.

## 🙏 Acknowledgments

- **Fonts**: Orbitron & Space Mono (Google Fonts)
- **3D Graphics**: Three.js
- **Inspiration**: Futuristic medical AI deserves a futuristic interface!

## 🔗 Links

- 📄 [Research Paper](#) - Add your paper link
- 💻 [Model Repository](#) - Add your model repo
- 📧 [Contact](mailto:your@email.com) - Update with your email

---

<div align="center">

**Made with 🔥 by the ShifaMind Team**

*Alhamdulillah! 🤲*

</div>
