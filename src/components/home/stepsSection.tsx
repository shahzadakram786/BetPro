import React from 'react';

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Contact With Salman Shaikh",
    },
    {
      number: "02",
      title: "Tell your Id Type",
    },
    {
      number: "03",
      title: "Send Payment",
    },
    {
      number: "04",
      title: "Get your Trusted ID",
    },
  ];

  return (
    <section className="bg-black py-24 px-4">
      <div className="container mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            ACHIEVE YOUR BETPRO <br /> ACCOUNT IN 4 STEPS
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-medium">
            You're looking for an easy way to create a new Betpro id, we've got just what you need.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-brand-card rounded-4xl p-10 flex flex-col items-center justify-center text-center border border-white/5 transition-all duration-300 hover:border-white/10 group"
            >
              {/* Large Gold Numbering */}
              <span className="text-brand-gold/20 text-6xl font-black mb-4 transition-colors group-hover:text-brand-gold/40">
                {step.number}
              </span>
              
              {/* Step Title */}
              <h3 className="text-white text-lg font-bold leading-snug px-2">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;