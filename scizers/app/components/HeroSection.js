const HeroSection = () => (
    <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Harbour Lights</h1>
        <p className="mt-4 text-lg">Seaside Apartments in Dubai Maritime City</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 rounded-full">Get a Presentation</button>
      </div>
    </section>
  );
  
  export default HeroSection;
  