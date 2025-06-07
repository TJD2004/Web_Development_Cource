import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, FileText, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'internships',
      title: 'Internships',
      description: 'Find the perfect internship opportunities to kickstart your career',
      icon: <Briefcase className="h-6 w-6 text-secondary-600" />,
      bgColor: 'bg-secondary-50',
      path: '/internships',
    },
    {
      id: 'notes',
      title: 'Notes',
      description: 'Access and share study materials with fellow students',
      icon: <FileText className="h-6 w-6 text-accent-600" />,
      bgColor: 'bg-accent-50',
      path: '/notes',
    },
    {
      id: 'courses',
      title: 'Courses',
      description: 'Explore a wide range of courses to enhance your skills',
      icon: <GraduationCap className="h-6 w-6 text-primary-600" />,
      bgColor: 'bg-primary-50',
      path: '/courses',
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
          <div className="mb-10 mt-6">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Welcome to eduBuddy</h1>
            <p className="mt-3 text-xl text-gray-600">Your one-stop educational companion</p>
          </div>

          <section className="mt-8">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-md overflow-hidden">
              <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center">
                <div className="lg:w-3/5">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Continue your learning journey
                  </h2>
                  <p className="mt-3 text-lg text-white text-opacity-90">
                    Pick up where you left off or explore new educational opportunities
                  </p>
                  <div className="mt-8">
                    <Button variant="outline" className="bg-white border-white text-primary-700 hover:bg-gray-100">
                      Explore recommendations
                    </Button>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-2/5 lg:pl-10">
                  <div className="flex justify-center">
                    <BookOpen className="h-32 w-32 text-white opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Explore Categories</h2>
            <p className="mt-2 text-gray-600">Discover learning resources tailored for you</p>
            
            <motion.div 
              className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {categories.map((category) => (
                <motion.div key={category.id} variants={item}>
                  <Card
                    className="h-full cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => navigate(category.path)}
                  >
                    <Card.Content className="h-full flex flex-col">
                      <div className={`p-4 rounded-lg inline-flex ${category.bgColor}`}>
                        {category.icon}
                      </div>
                      <Card.Title className="mt-4">{category.title}</Card.Title>
                      <Card.Description className="flex-grow">{category.description}</Card.Description>
                      <div className="mt-4 flex items-center text-primary-600 font-medium">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Card.Content>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recently Added</h2>
            <p className="mt-2 text-gray-600">The latest educational content for you</p>
            
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <Card.Image 
                  src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Programming course"
                  className="h-48"
                />
                <Card.Content>
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium bg-primary-100 text-primary-800 px-2 py-1 rounded">Course</span>
                  </div>
                  <Card.Title>Introduction to Web Development</Card.Title>
                  <Card.Description>Learn the fundamentals of HTML, CSS, and JavaScript</Card.Description>
                </Card.Content>
              </Card>

              <Card className="overflow-hidden">
                <Card.Image 
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Internship opportunity"
                  className="h-48"
                />
                <Card.Content>
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium bg-secondary-100 text-secondary-800 px-2 py-1 rounded">Internship</span>
                  </div>
                  <Card.Title>UI/UX Design Internship</Card.Title>
                  <Card.Description>6-month internship opportunity at a leading tech company</Card.Description>
                </Card.Content>
              </Card>

              <Card className="overflow-hidden">
                <Card.Image 
                  src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Study notes"
                  className="h-48"
                />
                <Card.Content>
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium bg-accent-100 text-accent-800 px-2 py-1 rounded">Notes</span>
                  </div>
                  <Card.Title>Data Structures & Algorithms</Card.Title>
                  <Card.Description>Comprehensive study notes with examples and practice problems</Card.Description>
                </Card.Content>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default HomePage;