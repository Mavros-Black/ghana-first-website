'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Filter,
  Search,
  Globe,
  Building,
  Droplets,
  Zap
} from 'lucide-react';
import { useState } from 'react';



export default function ProjectsPage() {
  const projects = [
    {
      title: "Accra Central Market Sanitation",
      description: "Modern sanitary facilities serving over 50,000 daily visitors at Ghana's largest market. Features water-efficient fixtures, accessibility compliance, and 24/7 maintenance support.",
      image: "/images/project-1.jpg",
      location: "Accra Central Market, Greater Accra",
      status: "Completed",
      date: "2023",
      category: "Market",
      impact: "50,000+ daily users",
      features: ["Water-efficient fixtures", "Accessibility compliance", "24/7 maintenance"]
    },
    {
      title: "Kumasi Lorry Park Bio-digester",
      description: "Innovative bio-digester system converting waste to energy for the bustling transport hub. Provides clean energy and organic fertilizer while reducing environmental impact.",
      image: "/images/project-2.jpg",
      location: "Kumasi, Ashanti Region",
      status: "Ongoing",
      date: "2024",
      category: "Transport Hub",
      impact: "10,000+ daily users",
      features: ["Waste-to-energy conversion", "Organic fertilizer production", "Low maintenance"]
    },
    {
      title: "Cape Coast Beach Sanitation",
      description: "Eco-friendly beach facilities promoting tourism and environmental conservation. Designed to withstand coastal conditions while maintaining high hygiene standards.",
      image: "/images/project-3.jpg",
      location: "Cape Coast, Central Region",
      status: "Completed",
      date: "2023",
      category: "Tourism",
      impact: "5,000+ daily users",
      features: ["Coastal-resistant design", "Tourism-friendly", "Environmental conservation"]
    },
    {
      title: "Tamale Rest Stop Facilities",
      description: "Modern rest stop facilities along major highways serving travelers and local communities. Features sustainable design and community integration.",
      image: "/images/project-4.jpg",
      location: "Tamale, Northern Region",
      status: "Completed",
      date: "2022",
      category: "Rest Stop",
      impact: "2,000+ daily users",
      features: ["Highway accessibility", "Community integration", "Sustainable design"]
    },
    {
      title: "Sekondi-Takoradi Port Sanitation",
      description: "Comprehensive sanitation infrastructure for the busy port area, serving workers, visitors, and local businesses with modern facilities.",
      image: "/images/project-5.jpg",
      location: "Sekondi-Takoradi, Western Region",
      status: "Ongoing",
      date: "2024",
      category: "Port",
      impact: "15,000+ daily users",
      features: ["Port-specific design", "High capacity", "Industrial standards"]
    },
    {
      title: "Ho Community Center Bio-digester",
      description: "Community-focused bio-digester installation providing energy and fertilizer for local agricultural activities while improving public health.",
      image: "/images/project-6.jpg",
      location: "Ho, Volta Region",
      status: "Completed",
      date: "2023",
      category: "Community",
      impact: "3,000+ daily users",
      features: ["Community training", "Agricultural benefits", "Local employment"]
    },
    {
      title: "Sunyani Market Complex",
      description: "Integrated market sanitation system with recycling facilities and educational programs for sustainable waste management.",
      image: "/images/project-7.jpg",
      location: "Sunyani, Bono Region",
      status: "Ongoing",
      date: "2024",
      category: "Market",
      impact: "8,000+ daily users",
      features: ["Recycling integration", "Educational programs", "Waste management"]
    },
    {
      title: "Koforidua University Campus",
      description: "Campus-wide sanitation upgrade with modern facilities, bio-digester systems, and sustainability education programs for students.",
      image: "/images/project-8.jpg",
      location: "Koforidua, Eastern Region",
      status: "Completed",
      date: "2023",
      category: "Education",
      impact: "12,000+ daily users",
      features: ["Campus integration", "Student education", "Sustainability focus"]
    }
  ];

  const categories = ["All", "Market", "Transport Hub", "Tourism", "Rest Stop", "Port", "Community", "Education"];
  const statuses = ["All", "Completed", "Ongoing"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const statusMatch = selectedStatus === "All" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover how we're transforming communities across Ghana through innovative 
            sanitation solutions and sustainable infrastructure development.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600 dark:text-gray-400">Regions Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">100K+</div>
              <div className="text-gray-600 dark:text-gray-400">Daily Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedStatus === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                className="group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.impact}
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filters to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Impact */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact Across Ghana
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Through our projects, we've created lasting positive change in communities 
              across all regions of Ghana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Infrastructure Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern, sustainable facilities that serve communities for generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Public Health Improvement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reduced waterborne diseases and improved community health outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Energy Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clean energy production from waste, powering local communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Environmental Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sustainable practices that protect our environment for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring sustainable sanitation solutions to your community 
            and create lasting positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Start Your Project
            </a>
            <a href="/services" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
