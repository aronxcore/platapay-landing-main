import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-plata-dark">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-plata-dark to-plata-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
                Documentation
              </h1>
              <p className="text-xl text-plata-light mb-8 animate-fade-in">
                Comprehensive guides and API documentation
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;