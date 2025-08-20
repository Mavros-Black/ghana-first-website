# Ghana First Company Limited - Website

A modern, responsive website for Ghana First Company Limited, a leading Ghanaian sanitation company specializing in sustainable sanitation solutions across Africa.

## 🌟 Features

### Design & User Experience
- **Modern, Professional Design** - Clean and professional layout reflecting innovation and sustainability
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Toggle** - User-friendly dark/light mode switching
- **Smooth Animations** - Modern transitions and hover effects using Framer Motion
- **Accessibility** - WCAG compliant with proper semantic HTML and ARIA labels

### Brand Identity
- **Green & Blue Color Scheme** - Representing sustainability, water, and sanitation
- **Modern Typography** - Clean sans-serif fonts with excellent readability
- **Professional Logo** - Gradient logo with company initials
- **Consistent Branding** - Unified design language across all pages

### Core Pages
1. **Home Page** - Hero section, company goals, flagship projects, call-to-action
2. **About Us** - Company profile, vision & mission, core values, leadership team
3. **Services** - Modern sanitary facilities, bio-digester installation, waste-to-energy, recycling
4. **Projects** - Gallery of completed and ongoing projects with filtering
5. **Sustainability** - Focus on eradicating open defecation, circular economy, UN SDGs
6. **News & Media** - Blog-style updates with pagination and filtering
7. **Contact Us** - Contact form, company information, FAQ section

### Technical Features
- **SEO Optimized** - Comprehensive metadata, structured data, and semantic HTML
- **Performance Optimized** - Fast loading times with optimized images and code
- **TypeScript** - Full type safety and better development experience
- **Component-Based Architecture** - Reusable components for maintainability
- **Form Handling** - Contact form with validation and submission feedback

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ghana-first-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Validation**: Zod

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── sustainability/    # Sustainability page
│   ├── news/              # News & Media page
│   ├── contact/           # Contact Us page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Sticky navigation
│   ├── Footer.tsx         # Footer component
│   └── Card.tsx           # Reusable card component
└── types/                 # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Primary Green**: `#059669` (Green-600)
- **Primary Blue**: `#2563eb` (Blue-600)
- **Gradient**: Linear gradient from green to blue
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Hover effects and consistent spacing
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile menu

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Import and use the Navigation and Footer components
4. Follow the existing page structure and styling patterns

### Modifying Styles
- Global styles are in `src/app/globals.css`
- Component-specific styles use TailwindCSS classes
- Custom CSS variables are defined for consistent theming

### Updating Content
- Company information is stored in component data
- Images should be placed in the `public/images/` directory
- Update metadata in each page's export

## 📊 SEO Features

- **Meta Tags**: Comprehensive metadata for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for better search engine understanding
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be added in Vercel dashboard

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS Amplify**: Connect repository and follow Next.js deployment guide
- **Traditional Hosting**: Build and upload the `out` directory

## 📈 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Images and components load as needed
- **Caching**: Static generation for better performance

## 🔒 Security

- **HTTPS**: Enforced in production
- **Content Security Policy**: Configured for security
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Sanitized inputs and outputs

## 📞 Support

For technical support or questions about the website:
- **Email**: info@ghanafirst.com
- **Phone**: +233 24 412 3456
- **Address**: Adjiriganor, East Legon, Greater Accra, Ghana

## 📄 License

This project is proprietary to Ghana First Company Limited. All rights reserved.

## 🤝 Contributing

This is a private project for Ghana First Company Limited. For collaboration opportunities, please contact the company directly.

---

**Ghana First Company Limited** - Leading Sanitation Management Across Africa
