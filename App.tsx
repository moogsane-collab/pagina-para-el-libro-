
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Quote,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Target,
  Users,
  Brain
} from 'lucide-react';

// --- Constants ---
const BOOK_DOWNLOAD_URL = "https://drive.google.com/file/d/1_2tBGNPLkluKqTHYakLYciC2lQVIpC08/view?usp=sharing";
const DONATION_URL = "https://ko-fi.com/Z8Z01SNQVH";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-slate-900 p-2 rounded-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <span className="font-extrabold text-xl tracking-tighter text-slate-900">SOMBRAS DEL PENSAMIENTO</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#story" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">La Historia</a>
        <a href="#benefits" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Beneficios</a>
        <a 
          href="#offer" 
          className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100 hover:shadow-red-200"
        >
          DESCARGAR LIBRO
        </a>
      </div>
    </div>
  </nav>
);

const BookCoverMockup = () => (
  <div className="relative bg-white aspect-[2/3] w-full rounded-lg shadow-2xl border border-slate-100 overflow-hidden flex flex-col items-center pt-16 pb-12 px-8">
    <div className="absolute top-0 left-0 w-full h-1 bg-slate-900/10"></div>
    <div className="flex flex-col items-center z-10">
      <h2 className="text-3xl font-black text-slate-900 text-center uppercase tracking-tighter leading-tight mb-2">
        SOMBRAS<br/>DEL<br/>PENSAMIENTO
      </h2>
      <div className="w-12 h-0.5 bg-slate-400 mb-8"></div>
    </div>
    
    <div className="flex-grow flex items-center justify-center w-full relative">
       {/* Silhouette representation */}
       <div className="absolute w-48 h-48 bg-slate-100 rounded-full blur-xl opacity-50"></div>
       <div className="w-40 h-56 relative opacity-80">
          <svg viewBox="0 0 200 300" className="w-full h-full fill-slate-300 drop-shadow-xl">
             <path d="M50,250 C50,250 30,220 30,180 C30,140 40,80 100,50 C160,20 170,100 170,140 C170,180 150,220 150,250 L50,250" />
             <circle cx="100" cy="120" r="60" />
          </svg>
       </div>
    </div>

    <div className="mt-auto text-center z-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">La trampa de la percepción</p>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100 animate-pulse">
        <Sparkles className="w-4 h-4" />
        Oferta Especial: Libro + Bonos Gratis
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tight">
        Cómo <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Llenar los Vacíos</span> del Corazón sin Buscar en lo Efímero
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        Descubre el sistema para descodificar tus nudos emocionales y escapar del laberinto de la percepción que nubla tu bienestar real.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
        <a 
          href="#offer" 
          className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
        >
          ¡Sí! Quiero mi Copia Gratis <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="flex items-center gap-4 text-slate-500">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
            ))}
          </div>
          <p className="text-sm font-semibold text-slate-600">+1,500 lectores transformados</p>
        </div>
      </div>

      <div className="relative max-w-sm mx-auto group">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        <div className="relative group-hover:scale-[1.02] transition-transform duration-500">
          <BookCoverMockup />
          <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden sm:block max-w-[200px] text-left">
            <div className="flex gap-1 text-yellow-400 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-sm font-bold text-slate-800 leading-tight">"El mapa definitivo para la paz mental que buscaba."</p>
            <p className="text-xs text-slate-500 mt-2">— Sofía G.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic font-serif">¿Sientes que el mundo se desmorona a tu alrededor?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Vivimos en una "Era de Cristal" donde la fragilidad emocional es la norma, no la excepción.
        </p>
      </div>
      
      <div className="space-y-6">
        {[
          { icon: Target, title: "La Trampa de lo Efímero", text: "Buscas saciedad en compras, likes y placeres momentáneos, pero el vacío regresa más grande cada vez." },
          { icon: Brain, title: "El Laberinto Mental", text: "Tus propios pensamientos son tus carceleros. Das vueltas en círculos sin encontrar la salida a la ansiedad." },
          { icon: Users, title: "Desconexión Real", text: "Estamos más conectados que nunca digitalmente, pero el corazón se siente más solo que nunca." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="bg-red-600/20 p-4 rounded-2xl">
              <item.icon className="w-10 h-10 text-red-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-2xl font-serif italic text-slate-300">"No necesitas más información. Necesitas una nueva percepción."</p>
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section id="story" className="py-32 px-6 bg-white overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h4 className="text-red-600 font-black uppercase tracking-widest text-sm mb-4">La Historia del Autor</h4>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
          De la Guerra Exterior a la Paz Interior
        </h2>
      </div>
      
      <div className="relative p-12 md:p-16 bg-slate-50 rounded-[3rem] border border-slate-100">
        <Quote className="absolute top-8 left-8 w-20 h-20 text-slate-200 -z-0 opacity-50" />
        
        <div className="relative z-10 space-y-8 text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto">
          <p>
            Mi nombre es <strong>J. Andres Molano Zuluaga</strong>. Durante gran parte de mi vida, mi realidad fue la disciplina férrea del mundo militar. Allí aprendí a combatir enemigos externos, pero me encontré desarmado frente al enemigo más letal: <strong>mi propio vacío emocional.</strong>
          </p>
          <p className="p-8 bg-white shadow-xl shadow-slate-200/50 border-l-8 border-red-600 italic rounded-r-3xl text-slate-800 font-serif">
            "Me sentía víctima de las circunstancias. Creía que mi felicidad dependía de eventos externos, hasta que entendí que mi percepción era el laberinto."
          </p>
          <p>
            Tras años de búsqueda, descubrí las herramientas para descodificar mis propios nudos. Entendí que la verdadera autonomía no es libertad de movimiento, sino libertad de percepción.
          </p>
          <p className="font-bold text-slate-900 text-2xl">
            He condensado mi transformación en este libro para que tú no tengas que pasar años en la oscuridad.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center gap-12 border-t border-slate-200">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">10+</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Años de Estudio</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">1.5k</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Vidas Impactadas</span>
            </div>
            <div className="ml-auto">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-100">
                     <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <span className="text-sm font-bold text-slate-400 italic">Un propósito de sanación.</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section id="benefits" className="py-32 px-6 bg-slate-50 relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Lo que descubrirás dentro...</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Un mapa paso a paso para desmantelar tus miedos y construir bienestar sólido.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Heridas de la Infancia", desc: "Cómo identificarlas y por qué siguen dictando tus decisiones de hoy sin que te des cuenta." },
          { title: "Biodescodificación", desc: "El arte de entender el mensaje que tu cuerpo y mente intentan enviarte a través del síntoma." },
          { title: "El Ocio Consciente", desc: "Cómo regenerar tu cerebro en una era saturada de dopamina artificial y cansancio crónico." },
          { title: "Metas vs Sueños", desc: "La distinción técnica que te salvará de la frustración perpetua de 'no llegar nunca'." },
          { title: "Energías Masculina/Femenina", desc: "Equilibra tus polos internos para actuar con fuerza y sentir con profundidad." },
          { title: "El Arte del 'No'", desc: "Herramientas de asertividad para proteger tu paz ante la demanda infinita de otros." }
        ].map((benefit, i) => (
          <div key={i} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-red-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{benefit.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OfferSection = () => {
  return (
    <section id="offer" className="py-32 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Empezar es Gratis
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Tu Nueva Vida Empieza Aquí</h2>
          <p className="text-slate-500 text-lg">Sigue este embudo de 2 pasos para obtener tu transformación.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* STEP 1: DONATION */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border-2 border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-8 shadow-lg shadow-red-200">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Aporte Voluntario</h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Este libro es un regalo, pero si sientes que este conocimiento tiene valor para ti, tu donación me permite seguir ayudando a otros.
            </p>
            
            <a 
              href={DONATION_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <img 
                height="48" 
                style={{ border: '0px', height: '48px' }} 
                src="https://storage.ko-fi.com/cdn/kofi2.png?v=6" 
                alt="Buy Me a Coffee at ko-fi.com" 
              />
            </a>
            
            <p className="mt-8 text-xs text-slate-400 font-medium italic">
              *Tu donación es 100% voluntaria y segura a través de Ko-fi.
            </p>
          </div>

          {/* STEP 2: DOWNLOAD */}
          <div className="bg-slate-900 p-10 rounded-[2.5rem] flex flex-col items-center text-center text-white shadow-2xl shadow-slate-300">
            <div className="w-16 h-16 bg-white text-slate-900 rounded-full flex items-center justify-center text-2xl font-black mb-8">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4">Descarga Inmediata</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Sin registros, sin esperas. Haz clic debajo para descargar tu copia en PDF de "Sombras del Pensamiento".
            </p>
            
            <a 
              href={BOOK_DOWNLOAD_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full py-5 bg-red-600 rounded-2xl font-black text-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-900/20"
            >
              DESCARGAR AHORA <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-8 flex flex-col items-center gap-2">
               <div className="flex gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
               </div>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Incluye Guía de Bonos</span>
            </div>
          </div>
        </div>

        <div className="mt-20 p-8 bg-green-50 rounded-3xl border border-green-100 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
          <ShieldCheck className="w-16 h-16 text-green-600 shrink-0" />
          <div>
            <h4 className="font-bold text-green-900 text-lg mb-1">Garantía de Valor Total</h4>
            <p className="text-green-800 text-sm leading-relaxed">
              Si después de leerlo sientes que no es para ti, no te preocupes. Mi misión es compartir este conocimiento. Si no te aporta valor, ignora el paso 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="py-24 px-6 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 italic font-serif text-slate-900">Voces del Despertar</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Andrés G.", role: "Emprendedor", text: "Estaba en un racha de negatividad interminable. Este libro me enseñó que yo era quien sostenía el laberinto." },
          { name: "Lucía P.", role: "Docente", text: "La explicación del ocio consciente cambió mi relación con el descanso. Ahora mi mente se siente joven de nuevo." },
          { name: "Roberto M.", role: "Ex-Militar", text: "Compañero de armas, gracias por este manual. La verdadera batalla es interna y este es el mejor equipo que he recibido." }
        ].map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <Quote className="w-10 h-10 text-red-500/10 mb-6" />
            <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 bg-white border-t border-slate-100 text-slate-600">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-slate-900" />
          <span className="font-black text-xl tracking-tighter text-slate-900">SOMBRAS DEL PENSAMIENTO</span>
        </div>
        <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
          Transformación emocional a través de la percepción consciente. Por J. Andres Molano Zuluaga.
        </p>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-6">
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-red-600 transition-colors">Inicio</a>
          <a href="#story" className="hover:text-red-600 transition-colors">La Historia</a>
          <a href="#offer" className="hover:text-red-600 transition-colors">Descargar</a>
        </div>
        <div className="flex gap-4">
          <Heart className="w-5 h-5 text-red-600 animate-pulse" />
          <p className="text-xs font-medium text-slate-400">Hecho con el propósito de sanar corazones.</p>
        </div>
        <p className="text-[10px] text-slate-300">© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-red-600 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <StorySection />
        <BenefitsSection />
        <OfferSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
