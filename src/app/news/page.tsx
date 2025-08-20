'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  ArrowLeft,
  Search,
  Filter,
  Newspaper,
  Users,
  Award,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Ghana First Wins &apos;Best Sanitation Company&apos; Award at EPA Excellence Awards",
              excerpt: "Ghana First Company Limited has been recognized as the &apos;Best Sanitation Company&apos; at the 2023 Ghana Environmental Protection Agency Excellence Awards for our innovative approach to sustainable waste management.",
        content: "Ghana First Company Limited has been recognized as the &apos;Best Sanitation Company&apos; at the 2023 Ghana Environmental Protection Agency Excellence Awards. The award recognizes our innovative approach to sustainable waste management and our commitment to environmental protection across Ghana. Our bio-digester technology and waste-to-energy solutions have set new standards in the industry, demonstrating that environmental responsibility and business success can go hand in hand.",
      author: "Ghana First Team",
      date: "December 15, 2023",
      category: "Awards",
      image: "/images/news-1.jpg",
      tags: ["Awards", "Recognition", "Sustainability"]
    },
    {
      id: 2,
      title: "New Bio-digester Installation in Kumasi Lorry Park Reduces Waste by 60%",
      excerpt: "Our latest bio-digester installation at Kumasi Lorry Park has successfully reduced waste generation by 60% while providing clean energy for the facility.",
      content: "Our latest bio-digester installation at Kumasi Lorry Park has successfully reduced waste generation by 60% while providing clean energy for the facility. The innovative system converts organic waste into biogas and organic fertilizer, creating a sustainable cycle that benefits both the environment and the local community. The project serves as a model for other transport hubs across Africa.",
      author: "Kofi Mensah",
      date: "November 28, 2023",
      category: "Projects",
      image: "/images/news-2.jpg",
      tags: ["Bio-digester", "Kumasi", "Waste Reduction"]
    },
    {
      id: 3,
      title: "Community Impact: How Sanitation Facilities Transformed Accra Central Market",
              excerpt: "A comprehensive look at how our modern sanitary facilities have improved public health and business operations at Ghana&apos;s largest market.",
      content: "A comprehensive look at how our modern sanitary facilities have improved public health and business operations at Ghana's largest market. The installation of state-of-the-art facilities serving over 50,000 daily visitors has resulted in improved hygiene standards, increased customer satisfaction, and enhanced business opportunities for market vendors. The project demonstrates the direct link between sanitation infrastructure and economic development.",
      author: "Ama Osei",
      date: "November 10, 2023",
      category: "Community Impact",
      image: "/images/news-3.jpg",
      tags: ["Community", "Accra", "Public Health"]
    },
    {
      id: 4,
      title: "Ghana First Partners with UN to Support Sustainable Development Goals",
              excerpt: "We&apos;re proud to announce our partnership with the United Nations to support the implementation of Sustainable Development Goals across Africa.",
        content: "We&apos;re proud to announce our partnership with the United Nations to support the implementation of Sustainable Development Goals across Africa. This collaboration will focus on SDG 6 (Clean Water and Sanitation), SDG 7 (Affordable and Clean Energy), and SDG 11 (Sustainable Cities and Communities). Our innovative solutions will help accelerate progress toward these critical global objectives.",
      author: "Efua Addo",
      date: "October 25, 2023",
      category: "Partnerships",
      image: "/images/news-4.jpg",
      tags: ["UN", "SDGs", "Partnership"]
    },
    {
      id: 5,
      title: "Youth Education Program Launches in Cape Coast Schools",
      excerpt: "Our new youth education program is teaching students about sustainable sanitation practices and environmental conservation.",
      content: "Our new youth education program is teaching students about sustainable sanitation practices and environmental conservation. The program, launched in partnership with local schools in Cape Coast, includes hands-on workshops, educational materials, and community projects. By engaging young people in sustainability initiatives, we&apos;re building a foundation for long-term environmental stewardship.",
      author: "Community Team",
      date: "October 12, 2023",
      category: "Education",
      image: "/images/news-5.jpg",
      tags: ["Education", "Youth", "Cape Coast"]
    },
    {
      id: 6,
      title: "Innovative Waste-to-Energy Technology Reduces Carbon Footprint by 40%",
      excerpt: "Our latest waste-to-energy technology implementation has achieved a 40% reduction in carbon footprint across multiple facilities.",
      content: "Our latest waste-to-energy technology implementation has achieved a 40% reduction in carbon footprint across multiple facilities. The advanced system converts waste into clean, renewable energy while producing organic fertilizer. This breakthrough technology demonstrates our commitment to environmental sustainability and positions Ghana as a leader in green innovation.",
      author: "Kofi Mensah",
      date: "September 30, 2023",
      category: "Technology",
      image: "/images/news-6.jpg",
      tags: ["Technology", "Energy", "Carbon Reduction"]
    }
  ];

  const categories = ["All", "Awards", "Projects", "Community Impact", "Partnerships", "Education", "Technology"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const filteredArticles = newsArticles.filter(article => 
    selectedCategory === "All" || article.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            News & Media
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest projects, achievements, and community impact stories 
            as we work to transform sanitation across Africa.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
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
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentArticles.map((article) => (
              <article key={article.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    
                    <div className="flex space-x-2">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs text-gray-500 dark:text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="mt-4 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {currentArticles.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filters to see more articles.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentPage === page
                      ? 'bg-green-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Media Kit */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Media Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access our press kit, company information, and media resources for journalists 
              and media professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Newspaper className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Press Kit
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Download our comprehensive press kit with company information, 
                high-resolution images, and key statistics.
              </p>
              <button className="btn-primary">
                Download Press Kit
              </button>
            </div>
            
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Media Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get in touch with our media relations team for interviews, 
                press releases, and media inquiries.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Media Team
              </Link>
            </div>
            
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Awards & Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                View our awards, certifications, and recognition for excellence 
                in sanitation and sustainability.
              </p>
              <button className="btn-primary">
                View Awards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, project updates, 
              and sustainability insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-green-500 dark:bg-gray-800 dark:text-white"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
