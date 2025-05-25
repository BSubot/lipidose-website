# Lipidose™ Website

A modern, responsive website for Lipidose™ - Novel Synergistic Therapy for Gram-Negative Infections.

## 🚀 Live Demo

Your website will be available at your Vercel domain once deployed.

## 📋 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized HTML, CSS, and JavaScript
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper contrast and semantic markup

## 🛠️ Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Google Fonts (Inter)

## 📁 Project Structure

```
lipidose-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Deployment Instructions

### Step 1: Deploy to GitHub

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New Repository"
   - Name it `lipidose-website` (or your preferred name)
   - Make it public
   - Don't initialize with README (we have our own)

2. **Upload Your Code**:
   - Download all the files from this project
   - In your terminal/command prompt, navigate to the project folder:
     ```bash
     cd path/to/lipidose-website-code
     ```
   - Initialize Git and push to GitHub:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: Lipidose website"
     git branch -M main
     git remote add origin https://github.com/yourusername/lipidose-website.git
     git push -u origin main
     ```

### Step 2: Deploy to Vercel

1. **Create Vercel Account**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Sign in (preferably with your GitHub account)

2. **Deploy from GitHub**:
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Custom Domain (Optional)**:
   - In your Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain

### Alternative: Direct Vercel Deployment

If you prefer not to use GitHub:

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy directly:
   ```bash
   cd path/to/lipidose-website-code
   vercel
   ```

3. Follow the prompts to deploy

## 🎯 Customization

### Adding Content

- **Email Contact**: Update the email in `index.html` (currently `investor.relations@lipidose.com`)
- **Pitch Deck**: Add your PDF file and update the download link in `script.js`
- **Content**: Modify text in `index.html` as needed
- **Colors**: Update CSS variables in `styles.css` for brand colors

### SEO Optimization

- Update meta description in `index.html`
- Add social media meta tags if needed
- Consider adding Google Analytics

### Adding Features

- **Contact Form**: Add a contact form section
- **Blog**: Add a blog/news section
- **Analytics**: Integrate Google Analytics or similar
- **Chat Widget**: Add customer support chat

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Local Development

To run the website locally:

1. **Option 1 - Simple HTTP Server**:
   ```bash
   # If you have Python installed
   python -m http.server 8000
   # OR
   python3 -m http.server 8000
   
   # Then visit http://localhost:8000
   ```

2. **Option 2 - Using Node.js**:
   ```bash
   npm install
   npm run dev
   ```

3. **Option 3 - VS Code Live Server**:
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"

## 📝 License

This project is licensed under the MIT License.

## 🤝 Support

For any issues or questions regarding deployment:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Check the [GitHub Pages Documentation](https://docs.github.com/en/pages)
3. Contact your development team

## 🔄 Updates

To update your website:

1. Make changes to your files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Vercel will automatically redeploy your site

---

**Note**: This website is built with modern web standards and best practices for performance, accessibility, and SEO.