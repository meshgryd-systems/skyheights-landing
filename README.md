# Skyheights Academy - Official Website

A modern, high-end website for Skyheights Academy, a premier private school in Nigeria offering excellence in education from Creche to Secondary level.

## 🎓 About

Skyheights Academy is a prestigious private school established in 2017, offering comprehensive education through Nigerian, British, and Montessori curriculum. This website showcases our commitment to academic excellence, character development, and world-class facilities.

## ✨ Features

### Design System
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Brand Colors**: Heritage Brown (#7A4E2D), Royal Blue (#12A6D8), Cream (#F5EFC3)
- **Professional Layout**: Clean, spacious design with 8px spacing system
- **Responsive Design**: Fully responsive across all devices

### Pages & Sections

#### Main Pages
1. **Home** - Hero section, features, programs overview, stats, testimonials
2. **About** - School history, mission/vision, core values, proprietor's message
3. **Academics** - Creche, Nursery, Primary, Secondary programs + curriculum details
4. **Admissions** - 6-step admission process, requirements, calendar, FAQ
5. **Facilities** - Modern classrooms, labs, library, sports, security features
6. **Student Life** - Co-curricular activities, character development, school culture
7. **News & Events** - Latest news, upcoming events, achievements, academic calendar
8. **Gallery** - Photo gallery with category filters, video gallery
9. **Contact** - Contact form, map, office hours, department contacts

#### Utility Pages
- Privacy Policy
- Terms & Conditions

### Key Components
- **Navigation Header** - Sticky header with mobile menu
- **Footer** - Comprehensive footer with quick links and contact info
- **Buttons** - Primary, secondary, and outline variants
- **Cards** - Program cards, facility cards, general cards
- **Contact Form** - Full-featured contact form with validation
- **Section Containers** - Consistent layout containers

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skyheights-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
skyheights-landing/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── SectionContainer.tsx
│   │   └── SectionTitle.tsx
│   ├── about/              # About page
│   ├── academics/          # Academics page
│   ├── admissions/         # Admissions page
│   ├── contact/            # Contact page
│   ├── facilities/         # Facilities page
│   ├── gallery/            # Gallery page
│   ├── news-events/        # News & Events page
│   ├── privacy-policy/     # Privacy Policy page
│   ├── student-life/       # Student Life page
│   ├── terms-conditions/   # Terms & Conditions page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Heritage Brown**: `#7A4E2D` - Primary brand color
- **Royal Blue**: `#12A6D8` - Secondary brand color
- **Cream**: `#F5EFC3` - Accent color
- **Deep Navy**: `#1F2933` - Text color
- **Light Grey**: `#F5F7FA` - Background
- **Divider Grey**: `#E5E7EB` - Borders

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Line Height**: 1.6 for body, 1.2 for headings

### Spacing
Uses 8px spacing system: 8, 16, 24, 32, 48, 64px

## 📝 Customization

### Update School Information
1. **Contact Details**: Update in `app/components/Footer.tsx` and `app/contact/page.tsx`
2. **School Stats**: Update in `app/page.tsx` (home page)
3. **Proprietor Info**: Update in `app/about/page.tsx`

### Add Images
1. Place images in the `public` folder
2. Update image paths in relevant components
3. Current placeholders use emojis - replace with actual photos

### Modify Colors
Update color values in `app/globals.css` under the `:root` section

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌟 Best Practices
- Clean, semantic HTML
- Accessible components (ARIA labels, keyboard navigation)
- SEO-optimized with proper meta tags
- Fast loading with Next.js optimizations
- Mobile-first responsive design

## 📄 License
© 2026 Skyheights Academy. All rights reserved.

## 📞 Support
For technical support or questions:
- Email: info@skyheightsacademy.com
- Phone: +234 xxx xxx xxxx

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy with one click

### Other Platforms
The project is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📋 TODO / Future Enhancements
- [ ] Add actual school photos to replace emoji placeholders
- [ ] Integrate Google Maps for location
- [ ] Add online payment gateway
- [ ] Implement parent/student portal
- [ ] Add blog section
- [ ] Integrate with school management system
- [ ] Add live chat support
- [ ] Multi-language support (if needed)

## 🤝 Contributing
This is a private project for Skyheights Academy. For contributions or suggestions, please contact the development team.

---

**Built with ❤️ for Skyheights Academy**
