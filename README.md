# Ravi Saxena Photography Website

A beautiful, responsive photography website for Ravi Saxena, featuring elegant design and smooth animations.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth page transitions without page reloads
- **Interactive Portfolio**: Filterable gallery with hover effects
- **Contact Form**: Functional contact form with validation
- **Modern Animations**: Smooth scroll effects and page transitions
- **Mobile Menu**: Hamburger menu for mobile devices
- **Loading Screen**: Elegant loading animation

## Pages

1. **Home**: Hero section with call-to-action buttons
2. **Services**: Photography services with pricing
3. **Portfolio**: Filterable gallery of work
4. **About**: Information about Ravi with statistics
5. **Contact**: Contact form and information

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Run

### Option 1: Direct File Opening
Simply open `index.html` in your web browser. The website will work immediately.

### Option 2: Local Server (Recommended)
For the best experience, run a local server:

1. **Using Python** (if you have Python installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js** (if you have Node.js installed):
   ```bash
   npx serve .
   ```

3. **Using Live Server** (VS Code extension):
   - Install the "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

Then open your browser and go to `http://localhost:8000` (or the port shown in your terminal).

## Customization

### Changing Content
- Edit the text content directly in `index.html`
- Update contact information in the contact section
- Modify service prices and descriptions

### Styling
- All styles are in `styles.css`
- Main colors: `#2c2c2c` (dark gray), `#fafafa` (light gray)
- Font: Arial/Helvetica (can be changed in CSS)

### Adding Images
To add real images to the portfolio:
1. Create an `images` folder
2. Add your images
3. Replace the placeholder portfolio items with `<img>` tags
4. Update the CSS to style the images properly

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Features in Detail

### Navigation
- Fixed navigation bar with blur effect
- Smooth underline animations on hover
- Mobile hamburger menu

### Portfolio Filtering
- Filter by category (All, Weddings, Fashion, Portraits, Events)
- Smooth animations when filtering
- Hover effects on portfolio items

### Contact Form
- Form validation
- Simulated submission (you'll need to add backend functionality)
- Responsive design

### Animations
- Page entrance animations
- Scroll-triggered animations
- Smooth transitions between pages
- Loading screen

## Future Enhancements

- Add real images to portfolio
- Implement backend for contact form
- Add image lightbox for portfolio
- Add blog section
- Add testimonials section
- Add social media links

## Credits

This website template is designed for Ravi Saxena Photography. All styling and functionality is custom-built with vanilla HTML, CSS, and JavaScript.

---

**Note**: This is a frontend-only website. For production use, you'll need to:
1. Add real images
2. Implement a backend for the contact form
3. Add proper SEO meta tags
4. Optimize images for web
5. Add analytics tracking 