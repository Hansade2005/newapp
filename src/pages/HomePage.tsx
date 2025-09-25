import React, { useState } from 'react';
import { PropertySearch } from '@/components/PropertySearch';
import { PropertyList } from '@/components/PropertyList';

// Mock data - replace with actual API calls in a real application
const mockProperties = [
  {
    id: '1',
    title: 'Modern Family Home',
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2200,
    address: '123 Main St, Anytown, USA',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
 isFeatured: true
 },
 {
 id: '2',
 title: 'Luxury Beachfront Villa',
 price:1200000,
 bedrooms:5,
 bathrooms:4,
 squareFeet:3500,
 address: '456 Ocean Ave, Seaside, USA',
 imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
 },
 {
 id: '3',
 title: 'Cozy Downtown Apartment',
 price:320000,
 bedrooms:2,
 bathrooms:2,
 squareFeet:1200,
 address: '789 City Center, Metropolis, USA',
 imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
 },
 {
 id: '4',
 title: 'Suburban Dream House',
 price:550000,
 bedrooms:3,
 bathrooms:2,
 squareFeet:1800,
 address: '321 Quiet Lane, Suburbia, USA',
 imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9b1fd1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
 },
 {
 id: '5',
 title: 'Rustic Mountain Cabin',
 price:380000,
 bedrooms:3,
 bathrooms:2,
 squareFeet:1600,
 address: '987 Forest Rd, Mountainville, USA',
 imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
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
 isFeatured: true
 }
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
 (filters.location === '' || property.address.toLowerCase().includes(filters.location.toLowerCase()))
 );
 })
 );
 };

 return (
 <div className="container mx-auto px-4 py-8">
 <h1 className="text-3xl font-bold mb-8">Find Your Dream Home</h1>
 <PropertySearch onSearch={handleSearch} />
 <PropertyList properties={filteredProperties} />
 </div>
 );
}