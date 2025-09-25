import React, { useState } from 'react';
import { PropertySearch } from '@/components/PropertySearch';
import { PropertyList } from '@/components/PropertyList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Home, LandPlot, Building, TreePine, Star, MapPin, DollarSign, BedDouble, Bath, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Mock data - replace with actual API calls in a real application
const mockProperties = [
 {
 id: '1',
 title: 'Modern Family Home',
 price:450000,
 bedrooms:4,
 bathrooms:3,
 squareFeet:2200,
 address: '123 Main St, Anytown, USA',
 imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
 isFeatured: true,
 rating:4.8,
 features: ['Pool', 'Garage', 'Garden']
 },
 {
 id: '2',
 title: 'Luxury Beachfront Villa',
 price:1200000,
 bedrooms:5,
 bathrooms:4,
 squareFeet:3500,
 address: '456 Ocean Ave, Seaside, USA',
 imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
 rating:4.9,
 features: ['Beach Access', 'Private Pool', 'Ocean View']
 },
 {
 id: '3',
 title: 'Cozy Downtown Apartment',
 price:320000,
 bedrooms:2,
 bathrooms:2,
 squareFeet:1200,
 address: '789 City Center, Metropolis, USA',
 imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
 rating:4.5,
 features: ['Gym', 'Parking', 'WiFi']
 },
 {
 id: '4',
 title: 'Suburban Dream House',
 price:550000,
 bedrooms:3,
 bathrooms:2,
 squareFeet:1800,
 address: '321 Quiet Lane, Suburbia, USA',
 imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9b1fd1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
 rating:4.7,
 features: ['Garage', 'Garden', 'Play Area']
 },
 {
 id: '5',
 title: 'Rustic Mountain Cabin',
 price:380000,
 bedrooms:3,
 bathrooms:2,
 squareFeet:1600,
 address: '987 Forest Rd, Mountainville, USA',
 imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
 rating:4.6,
 features: ['Fireplace', 'Wood Stove', 'Hiking Trails']
 },
 {
 id: '6',
 title: 'Urban Loft with Skyline Views',
 price:650000,
 bedrooms:2,
 bathrooms:2,
 squareFeet:1400,
 address: '654 Skyline Blvd, Cityscape, USA',
 imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
 isFeatured: true,
 rating:4.9,
 features: ['City Views', 'Rooftop Access', 'Modern Design']
 }
];

const featuredProperties = mockProperties.filter(p => p.isFeatured);

const propertyTypes = [
 { name: 'Houses', icon: Home, count:125 },
 { name: 'Apartments', icon: Building2, count:89 },
 { name: 'Land', icon: LandPlot, count:42 },
 { name: 'Commercial', icon: Building, count:33 },
 { name: 'Rural', icon: TreePine, count:27 }
];

export function HomePage() {
 const [filteredProperties, setFilteredProperties] = useState(mockProperties);

 const handleSearch = (filters: any) => {
 // In a real application, you would call an API here with the filters
 console.log('Searching with filters:', filters);
 // For now, we'll just filter the mock data
 setFilteredProperties(
 mockProperties.filter((property) => {
 return (
 (filters.propertyType === 'all' || property.title.toLowerCase().includes(filters.propertyType)) &&
 property.price >= filters.minPrice &&
 property.price <= filters.maxPrice &&
 property.bedrooms >= filters.bedrooms &&
 (filters.location === '' || property.address.toLowerCase().includes(filters.location.toLowerCase())) &&
 (filters.moveInDate === undefined || new Date(property.id) >= filters.moveInDate) &&
 (filters.amenities.length ===0 || filters.amenities.some(amenity => property.features?.includes(amenity)))
 );
 })
 );
 };

 return (
 <div className="container mx-auto px-4 py-8">
 <motion.section
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5 }}
 className="mb-12"
 >
 <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Find Your Dream Home</h1>
 <p className="text-xl text-gray-600">Discover the perfect property from our extensive listings</p>
 </motion.section>

 <motion.section
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.2 }}
 className="mb-12"
 >
 <PropertySearch onSearch={handleSearch} />
 </motion.section>

 <motion.section
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.4 }}
 className="mb-12"
 >
 <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
 <Carousel className="w-full">
 <CarouselContent>
 {featuredProperties.map((property) => (
 <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3">
 <motion.div
 whileHover={{ scale:1.02 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20">
 <div className="relative">
 <img
 src={property.imageUrl}
 alt={property.title}
 className="w-full h-48 object-cover"
 />
 <div className="absolute top-2 right-2 bg-primary/80 text-white px-2 py-1 rounded-full text-sm flex items-center">
 <Star className="w-4 h-4 mr-1 fill-yellow-400" />
 {property.rating}
 </div>
 </div>
 <CardContent className="p-4">
 <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
 <div className="flex items-center text-sm text-gray-500 mb-2">
 <MapPin className="w-4 h-4 mr-1" />
 <span>{property.address}</span>
 </div>
 <div className="flex justify-between items-center mb-3">
 <span className="text-primary font-bold text-xl">
 ${property.price.toLocaleString()}
 </span>
 <div className="flex space-x-3">
 <div className="flex items-center">
 <BedDouble className="w-4 h-4 mr-1" />
 <span>{property.bedrooms}</span>
 </div>
 <div className="flex items-center">
 <Bath className="w-4 h-4 mr-1" />
 <span>{property.bathrooms}</span>
 </div>
 <div className="flex items-center">
 <HomeIcon className="w-4 h-4 mr-1" />
 <span>{property.squareFeet.toLocaleString()} sqft</span>
 </div>
 </div>
 </div>
 <div className="flex flex-wrap gap-2 mb-3">
 {property.features?.map((feature, index) => (
 <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
 {feature}
 </span>
 ))}
 </div>
 <Button className="w-full">View Details</Button>
 </CardContent>
 </Card>
 </motion.div>
 </CarouselItem>
 ))}
 </CarouselContent>
 <CarouselPrevious />
 <CarouselNext />
 </Carousel>
 </motion.section>

 <motion.section
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.6 }}
 className="mb-12"
 >
 <h2 className="text-2xl font-semibold mb-6">Browse by Property Type</h2>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 {propertyTypes.map((type) => (
 <motion.div
 key={type.name}
 whileHover={{ scale:1.05 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border border-white/20">
 <CardContent className="p-6 flex flex-col items-center text-center">
 <type.icon className="h-12 w-12 text-primary mb-3" />
 <h3 className="font-semibold mb-1">{type.name}</h3>
 <p className="text-sm text-gray-500">{type.count} listings</p>
 </CardContent>
 </Card>
 </motion.div>
 ))}
 </div>
 </motion.section>

 <motion.section
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.5, delay:0.8 }}
 >
 <Tabs defaultValue="all" className="w-full">
 <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-white/20">
 <TabsTrigger value="all">All Properties</TabsTrigger>
 <TabsTrigger value="featured">Featured</TabsTrigger>
 <TabsTrigger value="recent">Recently Added</TabsTrigger>
 </TabsList>
 <TabsContent value="all">
 <PropertyList properties={filteredProperties} />
 </TabsContent>
 <TabsContent value="featured">
 <PropertyList properties={filteredProperties.filter(p => p.isFeatured)} />
 </TabsContent>
 <TabsContent value="recent">
 <PropertyList properties={[...filteredProperties].sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime())} />
 </TabsContent>
 </Tabs>
 </motion.section>
 </div>
 );
}