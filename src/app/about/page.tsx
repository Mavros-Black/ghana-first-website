import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe, 
  Leaf,
  Building,
  MapPin,
  Calendar
} from 'lucide-react';

export const metadata = {
  title: 'About Us - Ghana First Company Limited',
  description: 'Learn about Ghana First Company Limited, our vision, mission, core values, and the team leading sustainable sanitation solutions across Africa.',
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Innovation",
      description: "Continuously developing cutting-edge solutions for modern sanitation challenges."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability",
      description: "Committed to environmental conservation and sustainable development practices."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Public Health",
      description: "Prioritizing community health and well-being through improved sanitation."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community Impact",
      description: "Creating lasting positive change in communities across Africa."
    }
  ];

  const leadership = [
    {
      name: "Kwame Asante",
      position: "Chief Executive Officer",
      image: "/images/ceo.jpg",
              bio: "Over 15 years of experience in environmental engineering and sustainable development. Led the company&apos;s expansion across 5 African countries."
    },
    {
      name: "Ama Osei",
      position: "Chief Operations Officer",
      image: "/images/coo.jpg",
      bio: "Expert in project management and community development. Oversees all operational aspects and ensures quality delivery."
    },
    {
      name: "Kofi Mensah",
      position: "Chief Technology Officer",
      image: "/images/cto.jpg",
      bio: "Innovation leader with expertise in waste-to-energy technology and bio-digester systems development."
    },
    {
      name: "Efua Addo",
      position: "Head of Sustainability",
      image: "/images/sustainability-head.jpg",
      bio: "Environmental scientist focused on circular economy solutions and UN SDG implementation."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Ghana First
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Leading the transformation of sanitation management across Africa through 
            innovation, sustainability, and community-focused solutions.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600  mb-6 leading-relaxed">
                Founded in 2012, Ghana First Company Limited emerged from a vision to transform 
                public health across Africa through innovative sanitation solutions. What started 
                as a small operation in East Legon, Accra, has grown into a leading provider of 
                sustainable sanitation infrastructure across the continent.
              </p>
              <p className="text-lg text-gray-600  mb-8 leading-relaxed">
                Our journey began with a simple mission: to eradicate open defecation and provide 
                communities with modern, hygienic facilities that not only serve immediate needs 
                but also contribute to environmental conservation and economic development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50  rounded-lg">
                  <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 ">2012</div>
                  <div className="text-gray-600 ">Founded</div>
                </div>
                <div className="text-center p-4 bg-gray-50  rounded-lg">
                  <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 ">East Legon</div>
                  <div className="text-gray-600 ">Headquarters</div>
                </div>
                <div className="text-center p-4 bg-gray-50  rounded-lg">
                  <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 ">5+</div>
                  <div className="text-gray-600 ">Countries</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Our Location</h3>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Headquartered in Adjiriganor, East Legon, Greater Accra, Ghana, 
                  we serve communities across Africa with our innovative sanitation solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-blue-200" />
                    <span>Adjiriganor, East Legon</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200">Greater Accra, Ghana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50 ">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900  mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600  leading-relaxed">
                To be the leading provider of sustainable sanitation solutions across Africa, 
                creating healthier communities and a cleaner environment for future generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900  mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600  leading-relaxed">
                To revolutionize public health through innovative, sustainable sanitation 
                solutions that serve communities effectively while protecting our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach 
              to sustainable development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100  rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900  mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600  leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50 ">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and sustainable 
              development across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white  rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900  mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600  font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600  text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              Our commitment to excellence and innovation has been recognized by 
              industry leaders and environmental organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Best Sanitation Company</h3>
              <p className="text-blue-100">Ghana Environmental Protection Agency, 2023</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation in Sustainability</h3>
              <p className="text-blue-100">African Development Awards, 2022</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Impact Award</h3>
              <p className="text-blue-100">Ghana Business Awards, 2021</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
