const Features = () => (
    <section id="features" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Features & Amenities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Floating Pools</h3>
            <p>Enjoy an unmatched seaside experience with our unique floating pools.</p>
          </div>
          {/* Add more features similarly */}
        </div>
      </div>
    </section>
  );
  
  export default Features;
  