import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import { 
  Droplets, 
  Zap, 
  Recycle, 
  Users, 
  Wrench, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Leaf,
  Building,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services - Ghana First Company Limited',
  description: 'Explore our comprehensive sanitation services including modern sanitary facilities, bio-digester installation, waste-to-energy technology, and recycling programs.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-white" />,
      title: "Modern Sanitary Facility Installation",
      description: "State-of-the-art sanitary facilities designed for public spaces, markets, lorry parks, and community centers. Our facilities feature modern amenities, accessibility compliance, and sustainable design principles.",
      features: [
        "Hygienic and accessible design",
        "Water-efficient fixtures",
        "24/7 maintenance support",
        "Community consultation",
        "Environmental compliance",
        "Scalable solutions"
      ],
      image: "/images/sanitary-facilities.jpg"
    },
    {
      icon: <Droplets className="w-8 h-8 text-white" />,
      title: "Bio-digester Installation & Management",
      description: "Advanced bio-digester systems that convert organic waste into biogas and organic fertilizer. Our systems are designed for efficiency, sustainability, and long-term community benefit.",
      features: [
        "Custom-designed systems",
        "Waste-to-energy conversion",
        "Organic fertilizer production",
        "Reduced environmental impact",
        "Low maintenance requirements",
        "Community training programs"
      ],
      image: "/images/bio-digester.jpg"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Waste-to-Energy Technology",
      description: "Innovative waste-to-energy solutions that transform waste into clean, renewable energy. Our technology helps communities reduce waste while generating power for local needs.",
      features: [
        "Renewable energy generation",
        "Waste reduction solutions",
        "Carbon footprint reduction",
        "Community power supply",
        "Sustainable energy practices",
        "Economic benefits"
      ],
      image: "/images/waste-to-energy.jpg"
    },
    {
      icon: <Recycle className="w-8 h-8 text-white" />,
      title: "Recycling & Education Programs",
      description: "Comprehensive recycling initiatives combined with educational programs to promote sustainable waste management practices in communities across Africa.",
      features: [
        "Community education programs",
        "Waste sorting systems",
        "Recycling infrastructure",
        "Behavioral change campaigns",
        "Youth engagement programs",
        "Long-term sustainability"
      ],
      image: "/images/recycling.jpg"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Assessment",
              description: "We begin with a comprehensive assessment of your community&apos;s needs and existing infrastructure."
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our experts design customized solutions that meet your specific requirements and budget."
    },
    {
      number: "03",
      title: "Installation & Implementation",
              description: "Professional installation with minimal disruption to your community&apos;s daily activities."
    },
    {
      number: "04",
      title: "Training & Support",
      description: "Comprehensive training for maintenance staff and ongoing support for optimal performance."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Improved Public Health",
      description: "Reduce waterborne diseases and improve community health outcomes."
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Environmental Protection",
      description: "Minimize environmental impact through sustainable waste management."
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Community Development",
      description: "Create jobs and economic opportunities in local communities."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Sustainable Future",
      description: "Build resilient infrastructure for future generations."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive sanitation solutions designed to transform communities 
            and create sustainable, healthy environments across Africa.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Comprehensive Sanitation Solutions
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              From modern facilities to innovative waste management, we provide end-to-end 
              solutions that address the complete sanitation ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                className="h-full"
              >
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 ">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 ">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50 ">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and long-term community impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900  mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600  leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              Our comprehensive approach delivers multiple benefits for communities, 
              the environment, and future generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100  rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900  mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600  leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section-padding bg-gray-50 ">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-6">
                Quality Assurance & Support
              </h2>
              <p className="text-lg text-gray-600  mb-8 leading-relaxed">
                We don&apos;t just install facilities – we ensure they continue to serve 
                communities effectively for years to come through comprehensive support.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900  mb-2">
                      24/7 Maintenance Support
                    </h3>
                    <p className="text-gray-600 ">
                      Round-the-clock support to ensure your facilities remain operational 
                      and well-maintained at all times.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900  mb-2">
                      Rapid Response Times
                    </h3>
                    <p className="text-gray-600 ">
                      Quick response to maintenance requests and emergency situations 
                      to minimize service disruptions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900  mb-2">
                      Community Training
                    </h3>
                    <p className="text-gray-600 ">
                      Comprehensive training programs for local staff to ensure proper 
                      operation and maintenance of facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Service Guarantee</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>5-year warranty on all installations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>Free consultation and assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>Compliance with international standards</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>Ongoing technical support</span>
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
                          Let&apos;s discuss how our services can benefit your community and create 
            a sustainable future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Get a Free Consultation
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
