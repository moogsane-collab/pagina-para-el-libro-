
"use client";

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

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-4 py-4 bg-red-600 text-white w-full">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-bold uppercase tracking-widest hidden sm:inline">La oferta termina en:</span>
      </div>
      <div className="flex gap-2 text-2xl font-black font-mono">
        <div className="bg-white/10 px-2 py-1 rounded">{format(timeLeft.hours)}h</div>
        <span>:</span>
        <div className="bg-white/10 px-2 py-1 rounded">{format(timeLeft.minutes)}m</div>
        <span>:</span>
        <div className="bg-white/10 px-2 py-1 rounded">{format(timeLeft.seconds)}s</div>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-[100] border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-slate-900 p-1.5 rounded-lg">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <span className="font-extrabold text-lg tracking-tighter text-slate-900 uppercase">SOMBRAS DEL PENSAMIENTO</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#story" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">La Historia</a>
        <a href="#benefits" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Beneficios</a>
        <a 
          href="#offer" 
          className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100"
        >
          DESCARGAR LIBRO
        </a>
      </div>
    </div>
  </nav>
);

const BookCoverMockup = () => (
  <div className="relative bg-[#fdfdfd] aspect-[3/4] w-full rounded-md shadow-2xl border border-slate-200 overflow-hidden flex flex-col items-center pt-24 pb-16 px-10">
    <div className="flex flex-col items-center z-10 w-full">
      <h2 className="text-4xl md:text-5xl font-black text-slate-950 text-center tracking-tight leading-none mb-1">
        SOMBRAS
      </h2>
      <h2 className="text-4xl md:text-5xl font-black text-slate-950 text-center tracking-tight leading-none mb-1">
        DEL
      </h2>
      <h2 className="text-4xl md:text-5xl font-black text-slate-950 text-center tracking-tight leading-none">
        PENSAMIENTO
      </h2>
    </div>
    
    <div className="flex-grow flex items-center justify-center w-full relative -mt-10">
       <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-40 h-40 bg-slate-300 rounded-full blur-2xl opacity-20 -bottom-10 right-10 -rotate-12"></div>
          
          <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-2xl opacity-90 transform translate-x-4">
             <defs>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                   <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                   <feOffset dx="10" dy="15" result="offsetblur" />
                   <feComponentTransfer>
                      <feFuncA type="linear" slope="0.3" />
                   </feComponentTransfer>
                   <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                   </feMerge>
                </filter>
             </defs>
             <path 
                filter="url(#softShadow)"
                fill="#e5e7eb" 
                d="M100,10 C140,10 170,40 170,80 C170,120 150,150 130,170 C130,170 140,195 130,200 L70,200 C60,195 70,170 70,170 C50,150 30,120 30,80 C30,40 60,10 100,10" 
                transform="rotate(5, 100, 100) scale(0.9)"
             />
             <path 
                fill="#d1d5db" 
                d="M105,15 C145,15 175,45 175,85 C175,125 155,155 135,175 C135,175 145,195 135,200 L75,200 C65,195 75,175 75,175 C55,155 35,125 35,85 C35,45 65,15 105,15" 
                transform="scale(0.85) translate(15, 15)"
             />
          </svg>
       </div>
    </div>

    <div className="mt-auto text-center z-10">
      <p className="text-sm font-bold text-slate-900 tracking-tight">La trampa de la percepción</p>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 z-[60]">
      <CountdownTimer />
    </div>
    
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 pt-10">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
          <Sparkles className="w-4 h-4" />
          Regalo Exclusivo por Tiempo Limitado
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tight">
          Llena los <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Vacíos del Corazón</span> sin cosas efímeras
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Descubre el sistema para descodificar tus nudos emocionales y escapar del laberinto de la percepción que nubla tu bienestar real.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
          <a 
            href="#offer" 
            className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            Descargar Gratis <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+15}`} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="User" />
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-500">Lectores Felices</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative w-full max-md:hidden lg:flex max-w-md mx-auto group">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        <div className="relative group-hover:scale-[1.03] transition-transform duration-700">
          <BookCoverMockup />
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-50 max-w-[180px] text-left">
            <div className="flex gap-1 text-yellow-400 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            <p className="text-xs font-bold text-slate-800 leading-tight">"Me dio la brújula que necesitaba para mi paz mental."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 italic font-serif">¿Te sientes atrapado en el laberinto?</h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16">No es falta de voluntad, es un problema de percepción.</p>
      
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { icon: Target, title: "Placeres Efímeros", text: "Buscas saciedad en cosas momentáneas, pero el vacío regresa más grande cada vez." },
          { icon: Brain, title: "Nudos Emocionales", text: "Tus propios pensamientos son tus carceleros. Das vueltas sin encontrar la salida." },
          { icon: Users, title: "Soledad Digital", text: "Estamos más conectados que nunca, pero el corazón se siente más solo que nunca." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <item.icon className="w-10 h-10 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section id="story" className="py-32 px-6 bg-white overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">La Historia Detrás del Libro</h4>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">De la Disciplina a la Libertad</h2>
      </div>
      
      <div className="relative p-12 md:p-16 bg-slate-50 rounded-[3rem] border border-slate-100">
        <Quote className="absolute top-8 left-8 w-24 h-24 text-slate-200 opacity-40 -z-0" />
        <div className="relative z-10 space-y-8 text-slate-600 text-lg leading-relaxed">
          <p>
            Mi nombre es <strong>J. Andres Molano Zuluaga</strong>. Durante gran parte de mi vida, mi realidad fue la disciplina militar. Allí aprendí a combatir enemigos externos, pero me encontré desarmado frente al más letal: <strong>mi propio vacío emocional.</strong>
          </p>
          <p className="p-8 bg-white shadow-xl border-l-8 border-red-600 italic rounded-r-3xl text-slate-800 font-serif text-xl">
            "Entendí que la verdadera batalla no ocurre afuera, sino en la forma en que percibimos lo que nos pasa."
          </p>
          <p>Tras años de búsqueda, descubrí las herramientas para descodificar mis propios nudos. Entendí que la verdadera autonomía es la libertad de percepción.</p>
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-12 border-t border-slate-200">
            <div className="text-center sm:text-left">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">10+</span><br/>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Años de Estudio</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">1.5k</span><br/>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Vidas Impactadas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section id="benefits" className="py-32 px-6 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">Tu Hoja de Ruta al Bienestar</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Heridas de la Infancia", desc: "Identifica por qué siguen dictando tus decisiones hoy." },
          { title: "Biodescodificación", desc: "Escucha el mensaje real que tu cuerpo intenta enviarte." },
          { title: "Ocio Consciente", desc: "Regenera tu cerebro en la era de la dopamina artificial." },
          { title: "Metas vs Sueños", desc: "La distinción técnica que te salvará de la frustración." },
          { title: "Energías Internas", desc: "Equilibra tus polos para una toma de decisiones coherente." },
          { title: "El Arte del 'No'", desc: "Protege tu paz mental ante las demandas externas." }
        ].map((benefit, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <CheckCircle2 className="w-8 h-8 text-red-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-slate-500 text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OfferSection = () => (
  <section id="offer" className="py-32 px-6 bg-white text-center">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-16">Obtén tu Transformación</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-10 rounded-[2.5rem] border-2 border-slate-100 flex flex-col items-center">
          <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-black mb-8">1</div>
          <h3 className="text-2xl font-bold mb-4">Aporte Voluntario</h3>
          <p className="text-slate-600 mb-10 text-sm leading-relaxed">Este libro es un regalo, pero tu donación me permite seguir compartiendo este conocimiento.</p>
          <a href={DONATION_URL} target="_blank" rel="noopener noreferrer">
            <img height="44" src="https://storage.ko-fi.com/cdn/kofi2.png?v=6" alt="Donar en Ko-fi" />
          </a>
        </div>

        <div className="bg-slate-900 p-10 rounded-[2.5rem] flex flex-col items-center text-white shadow-2xl">
          <div className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center text-xl font-black mb-8">2</div>
          <h3 className="text-2xl font-bold mb-4">Descarga el Libro</h3>
          <p className="text-slate-400 mb-10 text-sm">Accede al PDF inmediatamente. Sin registros ni esperas.</p>
          <a href={BOOK_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4.5 bg-red-600 rounded-2xl font-black text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3">
            DESCARGAR PDF <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-20 p-8 bg-green-50 rounded-3xl border border-green-100 flex items-center gap-6 max-w-2xl mx-auto text-left">
        <ShieldCheck className="w-12 h-12 text-green-600 shrink-0" />
        <p className="text-green-800 text-sm font-medium italic">Garantía de Valor: Si el libro no transforma tu visión del mundo, mi invitación a donar queda cancelada. Mi prioridad es tu crecimiento.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 bg-white border-t border-slate-100 text-center">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <BookOpen className="w-5 h-5" />
        <span className="font-black text-lg uppercase">SOMBRAS DEL PENSAMIENTO</span>
      </div>
      <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">© {new Date().getFullYear()} J. Andres Molano Zuluaga.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-red-600 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <StorySection />
        <BenefitsSection />
        <OfferSection />
      </main>
      <Footer />
    </div>
  );
}
