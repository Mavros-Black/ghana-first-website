'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Clock, Newspaper } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
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

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Clock className="w-24 h-24 text-green-600 mx-auto mb-6" />
                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h2>
                             <p className="text-xl text-gray-600 mb-8">
                We're working hard to bring you the latest news, updates, and media resources. 
                Our news section will feature project updates, community impact stories, 
                and insights into our sustainable sanitation solutions.
              </p>
            </div>
            
                         <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <Newspaper className="w-16 h-16 text-green-600 mx-auto mb-4" />
                             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                                   <h4 className="font-semibold text-gray-900 mb-2">Project Updates</h4>
                 <p className="text-gray-600">Latest developments in our sanitation projects across Ghana and Africa.</p>
                </div>
                <div>
                                   <h4 className="font-semibold text-gray-900 mb-2">Community Impact</h4>
                 <p className="text-gray-600">Stories of how our work is transforming communities and improving lives.</p>
                </div>
                <div>
                                   <h4 className="font-semibold text-gray-900 mb-2">Sustainability Insights</h4>
                 <p className="text-gray-600">Expert insights on environmental conservation and sustainable development.</p>
                </div>
                <div>
                                   <h4 className="font-semibold text-gray-900 mb-2">Media Resources</h4>
                 <p className="text-gray-600">Press kits, high-resolution images, and media contact information.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/projects" className="btn-outline">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
