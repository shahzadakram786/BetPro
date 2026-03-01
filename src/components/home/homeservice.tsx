import React from 'react';
import { Crown, Users, ShieldCheck, UserCircle } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "BETPRO MASTER ID", icon: <Crown size={24} /> },
    { title: "BETPRO USERS", icon: <Users size={24} /> },
    { title: "BETPRO ADMIN", icon: <ShieldCheck size={24} /> },
    { title: "BETPRO CLIENT ID", icon: <UserCircle size={24} /> },
  ];

  return (
    <section className="bg-[#0F1720] py-24 px-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight  mb-4">
            BETPRO Services
          </h2>
          <div className="w-12 h-1 bg-brand-neon mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-brand-card rounded-3xl p-10 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-white/5 shadow-2xl"
            >
              {/* Pixel-Perfect Top Neon Border */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-0.75 bg-brand-neon rounded-b-full shadow-[0_2px_10px_rgba(57,255,20,0.5)]"></div>

              {/* Icon Container */}
              <div className="mb-8 w-20 h-20 rounded-full border border-brand-neon/30 flex items-center justify-center text-brand-neon group-hover:bg-brand-neon/10 transition-colors">
                <div className="p-4 rounded-full border border-brand-neon/10">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-sm md:text-base font-black uppercase tracking-widest text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;