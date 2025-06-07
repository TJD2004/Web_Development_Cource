import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Briefcase, FileText, GraduationCap, Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    {
      name: 'Home',
      path: '/home',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      name: 'Internships',
      path: '/internships',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      name: 'Notes',
      path: '/notes',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: 'Courses',
      path: '/courses',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className="cursor-pointer" onClick={() => navigate('/home')} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsMenuOpen(false);
              }}
              className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;