import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Leaf, 
  Recycle, 
  Zap, 
  Target, 
  Globe, 
  Users, 
  Award,
  TrendingUp,
  Shield,
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Sustainability - Ghana First Company Limited',
  description: 'Learn about our commitment to sustainability, circular waste reuse model, and contribution to UN Sustainable Development Goals (SDGs).',
};

export default function SustainabilityPage() {
  const sdgGoals = [
    {
      number: "6",
      title: "Clean Water and Sanitation",
      description: "Ensuring availability and sustainable management of water and sanitation for all.",
      icon: "💧"
    },
    {
      number: "7",
      title: "Affordable and Clean Energy",
      description: "Ensuring access to affordable, reliable, sustainable and modern energy for all.",
      icon: "⚡"
    },
    {
      number: "11",
      title: "Sustainable Cities and Communities",
      description: "Making cities and human settlements inclusive, safe, resilient and sustainable.",
      icon: "🏙️"
    },
    {
      number: "13",
      title: "Climate Action",
      description: "Taking urgent action to combat climate change and its impacts.",
      icon: "🌍"
    },
    {
      number: "15",
      title: "Life on Land",
      description: "Protecting, restoring and promoting sustainable use of terrestrial ecosystems.",
      icon: "🌱"
    },
    {
      number: "17",
      title: "Partnerships for the Goals",
      description: "Strengthening the means of implementation and revitalizing global partnerships.",
      icon: "🤝"
    }
  ];

  const circularModel = [
    {
      step: "1",
      title: "Waste Collection",
      description: "Efficient collection of organic waste from our facilities and communities.",
      icon: <Recycle className="w-8 h-8 text-white" />
    },
    {
      step: "2",
      title: "Processing",
      description: "Advanced bio-digester systems convert waste into biogas and organic fertilizer.",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      step: "3",
      title: "Energy Generation",
      description: "Biogas powers local communities and reduces reliance on fossil fuels.",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      step: "4",
      title: "Fertilizer Production",
      description: "Organic fertilizer improves soil health and agricultural productivity.",
      icon: <Leaf className="w-8 h-8 text-white" />
    },
    {
      step: "5",
      title: "Community Benefits",
      description: "Improved public health, economic opportunities, and environmental protection.",
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  const environmentalImpact = [
    {
      metric: "85%",
      label: "Reduction in Open Defecation",
      description: "Significant decrease in open defecation practices in communities we serve."
    },
    {
      metric: "60%",
      label: "Waste Reduction",
      description: "Efficient waste management systems reduce overall waste generation."
    },
    {
      metric: "40%",
      label: "Energy Savings",
      description: "Renewable energy generation reduces fossil fuel consumption."
    },
    {
      metric: "100%",
      label: "Organic Fertilizer",
      description: "All organic waste converted into valuable agricultural inputs."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sustainability
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Committed to eradicating open defecation and creating a circular economy 
            that benefits communities, the environment, and future generations.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Sustainability Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Ghana First Company Limited, sustainability isn&apos;t just a goal—it&apos;s the foundation 
                of everything we do. We&apos;re committed to eradicating open defecation across Africa 
                while creating a circular economy that transforms waste into valuable resources.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our innovative approach combines modern technology with traditional wisdom to create 
                solutions that are not only environmentally sustainable but also economically viable 
                and socially beneficial for communities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Environmental</div>
                  <div className="text-gray-600 dark:text-gray-400">Protection</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Social</div>
                  <div className="text-gray-600 dark:text-gray-400">Impact</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Economic</div>
                  <div className="text-gray-600 dark:text-gray-400">Viability</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Global Impact</h3>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Our sustainability initiatives contribute to multiple UN Sustainable Development 
                  Goals, creating positive change at local, national, and global levels.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>Reduced carbon footprint</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>Improved public health</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    <span>Economic empowerment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Model */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Circular Waste Reuse Model
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our innovative circular economy approach transforms waste into valuable resources, 
              creating a sustainable cycle that benefits everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {circularModel.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-sm text-green-600 font-bold mb-2">Step {step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-green-600 font-semibold">
              <span>Creating a sustainable future</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to environmental sustainability 
              and community well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalImpact.map((impact, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">{impact.metric}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {impact.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contributing to UN Sustainable Development Goals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our work directly supports multiple UN SDGs, creating positive change 
              that aligns with global sustainability objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgGoals.map((goal, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{goal.number}</span>
                  </div>
                  <div className="text-2xl">{goal.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {goal.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eradicating Open Defecation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Eradicating Open Defecation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Open defecation is a critical public health issue affecting millions across Africa. 
                Our comprehensive approach addresses this challenge through education, infrastructure, 
                and community engagement.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We work closely with communities to understand their needs, provide appropriate 
                facilities, and ensure long-term behavioral change through education and awareness programs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Public Health Protection
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Reducing waterborne diseases and improving community health outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Dignity and Safety
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Providing safe, private facilities that respect human dignity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Community Engagement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Working with communities to ensure sustainable behavioral change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">85%</div>
                    <div className="text-blue-100">Reduction in open defecation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Communities transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100K+</div>
                    <div className="text-blue-100">Lives improved</div>
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
            Join Us in Creating a Sustainable Future
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Together, we can eradicate open defecation, protect our environment, and build 
            resilient communities for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Partner With Us
            </Link>
            <Link href="/projects" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
