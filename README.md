# 🍛 Laja's Kitchens - One-Page Website

A beautiful, mobile-responsive one-page website for **Laja's Kitchens**, a vegetarian and vegan Indian catering business.

## 📋 Project Overview

This is a brochure-style website designed to:
- Showcase Laja's Kitchens brand and story
- Display signature vegetarian/vegan Indian dishes
- Highlight catering services for events
- Enable easy customer enquiries via WhatsApp and phone
- Build trust through customer reviews and gallery

## 🎨 Design Features

- **Warm Indian-Inspired Palette**: Turmeric orange (#E67E22), deep red (#C0392B), almond beige (#F5E6D3)
- **Mobile-First Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Single-page navigation with smooth scroll effects
- **Modern Typography**: Playfair Display for headings, Poppins for body text
- **Interactive Elements**: Hover effects, fade-in animations, image lightbox
- **WhatsApp Integration**: Direct messaging CTAs throughout

## 📁 Project Structure

```
lajas-kitchens/
├── index.html              # Main HTML file with all sections
├── css/
│   └── styles.css          # Complete stylesheet with responsive design
├── js/
│   └── main.js             # Interactive functionality and animations
├── assets/
│   ├── hero/               # Hero section background image
│   ├── about/              # About section images
│   ├── dishes/             # Product/dish photos
│   │   ├── samosa.jpg
│   │   ├── pakora.jpg
│   │   ├── chickpea-curry.jpg
│   │   ├── chutney.jpg
│   │   ├── wah-bowl.jpg
│   │   └── meal-prep.jpg
│   └── gallery/            # Event and food gallery images
│       ├── food-1.jpg
│       ├── food-2.jpg
│       ├── food-3.jpg
│       ├── event-1.jpg
│       ├── kitchen-1.jpg
│       └── customer-1.jpg
├── .github/
│   └── copilot-instructions.md   # AI agent guidance
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML, CSS, and JavaScript

### Installation

1. Clone or download this repository
2. Open the project folder
3. Open `index.html` in your web browser

**That's it!** No installation or build process needed.

### Local Development

For live reload during development, you can use:
- **VS Code Live Server Extension**: Right-click on `index.html` → Open with Live Server
- **Python**: `python -m http.server 8000` then visit `http://localhost:8000`
- **Node.js**: `npx serve` or `npx live-server`

## ✅ Pre-Launch Checklist

Before launching the website, complete these tasks:

### 📸 **Replace Placeholder Images**
- [ ] Hero section background (`assets/hero/hero-bg.jpg`)
- [ ] About section photo (`assets/about/kitchen-story.jpg`)
- [ ] Dish photos (6 images in `assets/dishes/`)
- [ ] Gallery photos (6 images in `assets/gallery/`)
- **Note**: Optimize images to <200KB each for fast loading

### 📞 **Update Contact Information**
- [ ] Replace `44XXXXXXXXXX` with actual UK phone number in all WhatsApp links
- [ ] Replace `44XXXXXXXXXX` with actual phone number in "Call Us" links
- [ ] Update email address: `info@lajaskitchens.com`
- [ ] Update operating hours in Contact section
- [ ] Add actual business address if needed

### 🔗 **Update Social Media Links**
- [ ] Instagram handle: `https://instagram.com/lajaskitchens`
- [ ] TikTok handle: `https://tiktok.com/@lajaskitchens`

### 💬 **Add Real Content**
- [ ] Replace placeholder reviews with actual customer testimonials
- [ ] Add real customer names (with permission)
- [ ] Include Instagram review screenshots if available

### 🎨 **Final Touches**
- [ ] Test all buttons and links
- [ ] Verify mobile responsiveness on real devices
- [ ] Check spelling and grammar
- [ ] Add Google Analytics tracking code (optional)
- [ ] Set up Google Business Profile integration (optional)

## 🎯 Website Sections

1. **Hero Section**: Eye-catching banner with CTA buttons
2. **About**: Brand story and tribute to Laja
3. **Signature Dishes**: 6 featured products with descriptions
4. **Catering Services**: Event types and service offerings
5. **Customer Reviews**: Testimonials and social proof
6. **Gallery**: Visual showcase of food and events
7. **Contact**: WhatsApp/phone CTAs and business information

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (3-column layouts)
- **Tablet**: 768px - 1023px (2-column layouts)
- **Mobile**: Below 768px (1-column layouts, mobile menu)

## 🎨 Color Palette

```css
Primary (Turmeric Orange): #E67E22
Secondary (Deep Red): #C0392B
Accent (Almond Beige): #F5E6D3
Dark Text: #2C3E50
Light Text: #7F8C8D
Background Light: #FDF8F3
```

## 🛠️ Technical Details

- **Built with**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Icons**: Inline SVG for better performance
- **Images**: Lazy loading for optimization
- **Mobile Navigation**: Hamburger menu with smooth toggle
- **Animations**: CSS transitions and Intersection Observer API
- **SEO**: Meta tags, alt attributes, semantic HTML

## 🚀 Deployment

### Option 1: Netlify (Recommended - Free)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the entire project folder
3. Get instant HTTPS URL
4. Optional: Connect custom domain

### Option 2: GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access at `username.github.io/repository-name`

### Option 3: Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import GitHub repository or upload files
3. Get instant deployment

### Option 4: Traditional Web Hosting
1. Use FTP/SFTP to upload files to web host
2. Ensure `index.html` is in the root directory
3. Point domain to hosting server

## 📊 Performance Optimization

- Compress all images before upload (use TinyPNG or ImageOptim)
- Enable gzip compression on web server
- Consider using WebP format for images
- Lazy loading implemented for images
- Minimal external dependencies for fast loading

## 🔧 Customization

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #E67E22;
    --secondary-color: #C0392B;
    --accent-color: #F5E6D3;
}
```

### Adding/Removing Dishes
Edit the `.dishes-grid` section in `index.html` and duplicate/remove `.dish-card` blocks.

### Modifying Navigation
Edit the `.nav-menu` in `index.html` and corresponding section IDs.

## 📞 Support & Contact

**Project Lead**: Prab Samra  
**Client**: Laja's Kitchens  
**Timeline**: 10 days (brief provided)

## 📝 License

This is a custom project for Laja's Kitchens. All rights reserved.

---

## 🎯 Next Steps After Launch

1. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Optimize meta descriptions
   - Add structured data (Schema.org)

2. **Analytics**
   - Set up Google Analytics
   - Track button clicks and conversions
   - Monitor user behavior

3. **Marketing**
   - Share on social media
   - Add website link to Instagram/TikTok bio
   - Create QR code for physical marketing

4. **Maintenance**
   - Regular content updates (seasonal dishes)
   - Fresh testimonials
   - New gallery photos from events

---

**Built with ❤️ and authentic spices for Laja's Kitchens**