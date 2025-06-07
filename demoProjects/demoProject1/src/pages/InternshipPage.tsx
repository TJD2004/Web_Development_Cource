import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Building, Calendar, DollarSign, Clock, Star, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import NavBar from '../components/NavBar';
import TextField from '../components/TextField';
import Card from '../components/Card';
import Button from '../components/Button';

const InternshipPage: React.FC = () => {
  const internships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp',
      location: 'San Francisco, CA (Remote)',
      duration: '3 months',
      stipend: '$2000/month',
      logo: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'UI/UX'],
      isHot: true,
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'AnalyticsPro',
      location: 'New York, NY',
      duration: '6 months',
      stipend: '$2500/month',
      logo: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Machine Learning', 'SQL'],
      isHot: false,
    },
    {
      id: 3,
      title: 'UX Research Intern',
      company: 'DesignHub',
      location: 'Seattle, WA (Hybrid)',
      duration: '4 months',
      stipend: '$1800/month',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['User Research', 'Prototyping', 'Figma'],
      isHot: true,
    },
    {
      id: 4,
      title: 'Backend Developer Intern',
      company: 'ServerStack',
      location: 'Austin, TX',
      duration: '3 months',
      stipend: '$2200/month',
      logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Node.js', 'MongoDB', 'API Development'],
      isHot: false,
    },
    {
      id: 5,
      title: 'Marketing Intern',
      company: 'BrandMasters',
      location: 'Chicago, IL (Remote)',
      duration: '6 months',
      stipend: '$1500/month',
      logo: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Social Media', 'Content Creation', 'Analytics'],
      isHot: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        
        <main className="page-container">
          <div className="mb-8 mt-6">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Internship Opportunities</h1>
            <p className="mt-3 text-xl text-gray-600">Find the perfect internship to kickstart your career</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <TextField
                  type="search"
                  placeholder="Search for internships, skills, or companies"
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </Button>
                <Button>
                  Search
                </Button>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Remote
                <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                Engineering
                <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                3-6 months
                <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
              </span>
            </div>
          </div>

          <motion.div 
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {internships.map((internship) => (
              <motion.div key={internship.id} variants={item}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row items-start p-6">
                    <div className="sm:mr-6 mb-4 sm:mb-0 w-full sm:w-auto">
                      <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={internship.logo}
                          alt={`${internship.company} logo`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{internship.title}</h3>
                          <div className="flex items-center mt-1 text-gray-600">
                            <Building className="h-4 w-4 mr-1" />
                            <span>{internship.company}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{internship.location}</span>
                          </div>
                        </div>
                        {internship.isHot && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error-100 text-error-800">
                            <Star className="h-3 w-3 mr-1" />
                            Hot
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          <Calendar className="h-4 w-4 mr-1" />
                          {internship.duration}
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {internship.stipend}
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                          <Clock className="h-4 w-4 mr-1" />
                          Posted 2 days ago
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {internship.tags.map((tag, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary-100 text-primary-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                          Apply before July 30, 2025
                        </p>
                        <Button size="small">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-auto">
              Load more internships
            </Button>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default InternshipPage;