"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

type Property = {
  id: number;
  title: string;
  type: "Apartment" | "Office";
  location: string;
  price: string;
  image: string;
};

const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Modern Apartment in Sea Point",
    type: "Apartment",
    location: "Sea Point, Cape Town",
    price: "R12,000 / month",
    image: "https://source.unsplash.com/random/800x600/?apartment,capetown"
  },
  {
    id: 2,
    title: "Open Plan Office in CBD",
    type: "Office",
    location: "Cape Town CBD",
    price: "R25,000 / month",
    image: "https://source.unsplash.com/random/800x600/?office,capetown"
  },
  {
    id: 3,
    title: "Luxury Apartment in Green Point",
    type: "Apartment",
    location: "Green Point, Cape Town",
    price: "R18,000 / month",
    image: "https://source.unsplash.com/random/800x600/?luxury,apartment"
  }
];

export default function GoodRentApp() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  const filtered = PROPERTIES.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === "all" || p.type === filterType;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-blue-600" /> GoodRent
        </h1>
        <nav className="flex gap-4 text-gray-600">
          <a href="#properties" className="hover:text-blue-600">Properties</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      <section className="bg-blue-600 text-white text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Apartments & Office Rentals in Cape Town
        </motion.h2>
        <p className="mt-4 text-lg">Find your next space with GoodRent</p>
      </section>

      <section className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-4 items-center">
        <Input
          placeholder="Search by location or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Select onValueChange={(val) => setFilterType(val)} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Apartment">Apartments</SelectItem>
            <SelectItem value="Office">Offices</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section id="properties" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filtered.map((property) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
              <img src={property.image} alt={property.title} className="h-48 w-full object-cover" />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {property.location}
                </p>
                <p className="mt-2 font-bold text-blue-600">{property.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section id="contact" className="bg-white py-12 border-t mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">We’d love to help you find the perfect space.</p>
          <div className="flex justify-center gap-6 text-gray-700">
            <a href="mailto:info@goodrent.co.za" className="flex items-center gap-2 hover:text-blue-600">
              <Mail className="w-5 h-5" /> info@goodrent.co.za
            </a>
            <a href="tel:+27215555555" className="flex items-center gap-2 hover:text-blue-600">
              <Phone className="w-5 h-5" /> +27 21 555 5555
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-12">
        © {new Date().getFullYear()} GoodRent. All rights reserved.
      </footer>
    </div>
  );
}
