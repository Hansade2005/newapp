import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Building2, Info, Mail } from 'lucide-react';

const navItems = [
 { name: 'Home', path: '/', icon: Home },
 { name: 'Properties', path: '/properties', icon: Building2 },
 { name: 'About', path: '/about', icon: Info },
 { name: 'Contact', path: '/contact', icon: Mail }
];

export function Header() {
 return (
 <header className="bg-white shadow-sm">
 <div className="container mx-auto px-4 py-4 flex justify-between items-center">
 <Link to="/" className="flex items-center space-x-2">
 <Building2 className="h-8 w-8 text-primary" />
 <span className="text-xl font-bold text-primary">DreamHome</span>
 </Link>

 <nav className="hidden md:flex space-x-8">
 {navItems.map((item) => (
 <Link
 key={item.name}
 to={item.path}
 className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors"
 >
 <item.icon className="h-4 w-4" />
 <span>{item.name}</span>
 </Link>
 ))}
 </nav>

 <div className="flex items-center space-x-4">
 <Button variant="outline">Sign In</Button>
 <Button>List Your Property</Button>
 </div>
 </div>
 </header>
 );
}