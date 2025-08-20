import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import { 
  Droplets, 
  Zap, 
  Recycle, 
  Users, 
  Award, 
  Globe, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const companyGoals = [
    {
      icon: <Droplets className="w-6 h-6 text-white" />,
      title: "Smart Public Sanitation",
      description: "Modern, hygienic facilities that serve communities effectively and sustainably."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Waste-to-Energy",
      description: "Converting waste into clean energy to power communities and reduce environmental impact."
    },
    {
      icon: <Recycle className="w-6 h-6 text-white" />,
      title: "Recycling Innovation",
      description: "Advanced recycling programs that create value from waste materials."
    }
  ];

  const flagshipProjects = [
    {
      title: "Accra Central Market Sanitation",
              description: "Modern sanitary facilities serving over 50,000 daily visitors at Ghana&apos;s largest market.",
      image: "/images/project-1.jpg",
      location: "Accra Central Market",
      status: "Completed"
    },
    {
      title: "Kumasi Lorry Park Bio-digester",
      description: "Innovative bio-digester system converting waste to energy for the bustling transport hub.",
      image: "/images/project-2.jpg",
      location: "Kumasi, Ashanti Region",
      status: "Ongoing"
    },
    {
      title: "Cape Coast Beach Sanitation",
      description: "Eco-friendly beach facilities promoting tourism and environmental conservation.",
      image: "/images/project-3.jpg",
      location: "Cape Coast, Central Region",
      status: "Completed"
    }
  ];

  const stats = [
    { number: "500+", label: "Facilities Installed" },
    { number: "50+", label: "Communities Served" },
    { number: "1000+", label: "Jobs Created" },
    { number: "95%", label: "Customer Satisfaction" }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 container-custom text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Leading Sanitation Management
            <span className="block text-blue-200">Across Africa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Ghana First Company Limited is revolutionizing public health through innovative, 
            sustainable sanitation solutions that serve communities and protect our environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link href="/about" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-green-600">
              Learn More About Us
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Company Goals Section */}
      <section className="section-padding bg-gray-50 ">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Our Mission & Goals
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              We&apos;re committed to transforming sanitation across Africa through innovation, 
              sustainability, and community impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyGoals.map((goal, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900  mb-4">
                  {goal.title}
                </h3>
                <p className="text-gray-600  leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Our Flagship Projects
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              Discover how we&apos;re transforming communities through innovative sanitation solutions 
              across Ghana and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flagshipProjects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                className="group"
              >
                <div className="flex items-center justify-between text-sm text-gray-500  mb-4">
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    {project.location}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                                          ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 ">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-6">
                Why Choose Ghana First?
              </h2>
              <p className="text-lg text-gray-600  mb-8 leading-relaxed">
                With over a decade of experience in sanitation management, we&apos;ve established 
                ourselves as the leading provider of sustainable sanitation solutions across Africa.
              </p>
              
              <div className="space-y-4">
                {[
                  "Innovation-driven approach to sanitation",
                  "Proven track record across 50+ communities",
                  "Sustainable and environmentally conscious solutions",
                  "24/7 support and maintenance services",
                  "Compliance with international standards",
                  "Community-focused development"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 ">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Industry Recognition</h3>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Awarded "Best Sanitation Company" by the Ghana Environmental Protection Agency 
                  for our innovative approach to sustainable waste management.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">12+</div>
                    <div className="text-blue-100 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-blue-100 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in creating a cleaner, healthier, and more sustainable future for Africa. 
                          Let&apos;s work together to build better sanitation infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Contact Us Today
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </main>
  );
}
