export default function Branding() {
  return (
    <div className="flex items-center gap-2 px-6 py-5">
      {/* This div mimics the yellow square logo 
        found in the top corner of the design.
      */}
      <div className="w-8 h-8 bg-bp-yellow rounded-md flex items-center justify-center">
        <span className="text-black font-black text-xl italic">B</span>
      </div>
      <h1 className="text-xl font-bold tracking-tighter uppercase">
        Betpro
      </h1>
    </div>
  );
}