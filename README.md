# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and PHP.

## Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About & Education section
├── projects.html           # Projects/Works gallery
├── contact.html            # Contact form page
├── process_contact.php     # PHP contact form handler
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with responsive design
│   ├── js/
│   │   └── script.js       # JavaScript for interactions & animations
│   └── images/
│       └── (placeholder images)
└── README.md              # This file
```

## Features

### 1. **Profile Section** ✓
- Full Name: Jessa Esmana
- Short Bio / About Me
- Profile Picture
- Skills showcase (Multimedia Design, Communication, Problem Solving, Time Management)

### 2. **Education / Experience Section** ✓
- Bachelor's degree background
- Trainings & Seminars completed
- Work experience history
- Technical & creative skills

### 3. **Projects / Works Section** ✓
- Gallery of 8 featured projects
- Project descriptions
- Category tags
- Responsive grid layout

### 4. **Contact Section** ✓
- Email address
- Phone number
- Social media links
- Contact form with PHP backend validation

### 5. **Additional Features** ✓
- **Responsive Design**: Mobile-friendly layout with CSS media queries
- **CSS Animations**: Smooth transitions, hover effects, and scroll animations
- **Interactive Elements**: Form validation, smooth scrolling, dynamic feedback
- **Modern Design**: Gradient backgrounds, shadows, and professional typography
- **Navigation**: Sticky navigation bar with hover effects
- **Cross-browser Compatible**: Works on all modern browsers

## How to Use

### Prerequisites
- PHP 7.0 or higher
- Web server (Apache, Nginx, etc.)
- Modern web browser

### Installation

1. Copy the entire project folder to your web server's document root
2. Update the email address in `process_contact.php` line 68 to receive contact form submissions
3. Access the website through your web server: `http://localhost/portfolio/` or your domain

### Configuration

#### Change Contact Email
Edit `process_contact.php` and update:
```php
$to = "your-email@example.com"; // Change this to your email
```

#### Enable Message Logging
Uncomment line 95 in `process_contact.php` to save contact messages:
```php
file_put_contents($log_file, $log_entry, FILE_APPEND);
```

## File Guide

### HTML Files
- **index.html**: Main landing page with hero section and profile preview
- **about.html**: Detailed about section with education, training, and experience
- **projects.html**: Portfolio gallery with 8 sample projects
- **contact.html**: Contact information and contact form

### CSS (assets/css/style.css)
- Clean, organized stylesheet
- CSS variables for easy customization
- Responsive design with mobile-first approach
- Animations and hover effects
- Modern gradient backgrounds

### JavaScript (assets/js/script.js)
- Smooth scrolling behavior
- Scroll animation for elements
- Active navigation highlighting
- Form validation feedback
- Parallax effects
- Responsive menu handling

### PHP (process_contact.php)
- Server-side form validation
- Input sanitization and security
- Email sending functionality
- Error handling and user feedback
- Optional message logging

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
--primary-color: #667eea;
--secondary-color: #764ba2;
--accent-color: #f093fb;
```

### Content
- Update personal information in HTML files
- Replace placeholder images in `assets/images/`
- Modify project details in `projects.html`
- Update education/experience in `about.html`

### Images
- Profile picture: `assets/images/profile.jpg`
- Project images: `assets/images/project1.jpg` through `project8.jpg`
- If images are missing, placeholder backgrounds display automatically

## Performance Considerations

- Optimized CSS with minimal redundancy
- Lightweight JavaScript without external dependencies
- Responsive images with fallback placeholders
- Lazy loading support built in
- Fast loading times on mobile devices

## Security Features

- Input validation and sanitization in PHP
- XSS protection with htmlspecialchars()
- Email header injection prevention
- CSRF protection can be added if needed

## Future Enhancements

- Blog section
- Project detail pages with larger gallery
- Testimonials/Reviews section
- Dark mode toggle
- Multi-language support
- CMS integration

## License

This portfolio website is created for educational purposes and personal use.

## Support

For questions or issues, please contact: esmanajessa@gmail.com

---

**Last Updated**: February 25, 2026
**Version**: 1.0
