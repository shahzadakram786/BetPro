import React from "react";
import { Map, User, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

// Define the interface for props
interface RepresentativeProps {
  name?: string;
  whatsapp?: string;
  role?: string;
}

const RepresentativeSection = ({
  name = siteConfig.representatives.salman.name,
  whatsapp = siteConfig.representatives.salman.whatsapp,
  role = siteConfig.representatives.salman.role,
}: RepresentativeProps) => {
  // Dynamic WhatsApp Link Generation
  const whatsappUrl = `https://wa.me/${whatsapp.replace(/\s+/g, "")}`;
  return (
    <section className="bg-brand-dark py-25 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-[#1A1A1A] border border-white/5 rounded-xl flex items-center justify-center">
              <Map size={24} className="text-brand-neon" />
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
              BETPRO IN PAKISTAN
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
              Come join us for an exciting day of learning about Betpro id
              betting experience! Our knowledgeable staff will be happy to teach
              you everything you need to know about this exciting new betting
              platform!
            </p>
          </div>

          {/* RIGHT CARD (Salman Shaikh) */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative bg-brand-card rounded-betpro overflow-hidden border border-white/5 shadow-2xl transition-all hover:border-brand-neon/20 hover:shadow-brand-neon/5 duration-500 group">
              {/* Top Profile Area */}
              <div className="pt-12 pb-8 flex flex-col items-center">
                {/* Profile Icon with subtle pulse animation on card hover */}
                <div className="w-24 h-24 rounded-full bg-brand-black border-4 border-[#1A1A1A] flex items-center justify-center mb-6 shadow-inner group-hover:border-brand-neon/30 transition-colors">
                  <User
                    size={40}
                    className="text-brand-neon group-hover:scale-110 transition-transform"
                  />
                </div>

                <h3 className="text-white text-3xl font-black tracking-tight mb-1">
                  {name}{" "}
                </h3>
                <p className="text-brand-neon text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
                  {role}{" "}
                </p>
              </div>

              {/* Action Area - Fully Functional Link */}
              <div className="bg-brand-black/50 p-8">
                <a
                  href={whatsappUrl} // Dynamic Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-brand-neon hover:bg-[#32e612] text-black py-5 rounded-3xl font-black text-sm uppercase transition-all shadow-[0_10px_30px_rgba(57,255,20,0.15)] hover:shadow-brand-neon/40 hover:-translate-y-1 active:scale-95"
                >
                  <Phone size={18} fill="black" />
                  CONTACT US
                </a>
              </div>

              {/* Decorative Subtle Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-neon/10 blur-[80px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepresentativeSection;
