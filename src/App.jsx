import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Cpu, Zap, Code2, Rocket, ChevronRight, Activity, FlaskConical, Terminal, Layers } from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const deliveries = [
    {
      company: "Rede Celer",
      role: "Platform Engineer",
      impact: "Migração de 60% dos módulos legados para bibliotecas privadas no Maven, padronizando o ecossistema de micro-frontends mobile.",
      metric: "60% Módulos",
      logo: "CELER"
    },
    {
      company: "Itaú Unibanco",
      role: "Senior Android Engineer",
      impact: "Elevação do Crash-free de 96% para 99,80% através da implementação de regras customizadas no Detekt e expansão de cenários de testes.",
      metric: "99.8% CF",
      logo: "ITAÚ"
    },
    {
      company: "Itaú Unibanco",
      role: "Performance Specialist",
      impact: "Redução drástica de ANRs (1,5% para 0,25%) via refatoração para Coroutines e substituição de SharedPreferences por soluções reativas.",
      metric: "-83% ANR",
      logo: "ITAÚ"
    }
  ];

  const ongoingProjects = [
    {
      title: "MakerHub 3D",
      status: "Beta",
      progress: 75,
      desc: "Plataforma de controle e gestão para iniciantes em modelagem 3D e prototipagem física.",
      tech: ["Kotlin", "Three.js", "Firebase"]
    },
    {
      title: "Ultimate Release Manager",
      status: "Em escala",
      progress: 90,
      desc: "A solução mais completa de gerenciamento de releases para apps críticos (iOS/Android).",
      tech: ["Swift", "Kotlin", "Fastlane"]
    },
    {
      title: "Custom 3D Drone",
      status: "Hardware Build",
      progress: 50,
      desc: "Construção de um drone autônomo do zero, utilizando estrutura impressa em 3D e FC customizada.",
      tech: ["C++", "Python", "Fusion 360"]
    }
  ];

  const skillGroups = [
    {
      category: "Linguagens",
      skills: [
        { name: "Kotlin", level: 98 },
        { name: "Java", level: 90 },
        { name: "Swift", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      category: "Mobile Tech",
      skills: [
        { name: "Android / Compose", level: 98 },
        { name: "iOS / SwiftUI", level: 82 },
        { name: "KMP", level: 80 },
        { name: "Fastlane / CI", level: 90 }
      ]
    },
    {
      category: "Qualidade & Testes",
      skills: [
        { name: "Junit / Mockk / Robot", level: 95 },
        { name: "Maestro / Appium", level: 88 },
        { name: "Macrobenchmark", level: 85 },
        { name: "XCUITest / Espresso", level: 82 }
      ]
    },
    {
      category: "Engenharia",
      skills: [
        { name: "Clean Architecture", level: 95 },
        { name: "Performance Tuning", level: 92 },
        { name: "Modulização", level: 90 },
        { name: "Detekt / Lint Rules", level: 94 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-sky-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-900/10 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        {/* Hero */}
        <section className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 font-bold">Senior Software Engineer</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-700">
            Ramon.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-12">
            Especialista em ecossistemas mobile de alta escala. Reduzindo crashes, otimizando ANRs e automatizando o ciclo de vida de software.
          </p>

          <div className="flex flex-wrap gap-4 mb-32">
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 transition-all">
              <Github size={18} /> <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 transition-all">
              <Linkedin size={18} /> <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-sky-500 hover:text-white transition-all">
              Vamos conversar
            </button>
          </div>
        </section>

        {/* Deliveries - Metrics Driven */}
        <section className="mb-40">
          <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-600 mb-16 text-center italic font-bold tracking-widest text-sky-500">
            {`// IMPACTO PROFISSIONAL EM NÚMEROS`}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {deliveries.map((job, idx) => (
              <div key={idx} className="group relative p-8 rounded-2xl bg-zinc-900/10 border border-zinc-900 hover:border-zinc-700 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Layers size={60} />
                </div>
                <div className="text-4xl font-black text-sky-500 mb-4 font-mono">{job.metric}</div>
                <h3 className="text-lg font-bold mb-1">{job.company}</h3>
                <p className="text-xs text-zinc-500 mb-4 uppercase font-bold tracking-tighter">{job.role}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{job.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Matrix - 4 Columns */}
        <section className="mb-40">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            Stack Tecnológica <div className="h-[1px] flex-grow bg-zinc-900" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {skillGroups.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-[10px] font-mono text-sky-500 mb-8 uppercase tracking-widest font-bold">{group.category}</h3>
                <div className="space-y-6">
                  {group.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-[13px]">
                        <span className="text-zinc-400">{skill.name}</span>
                        <span className="text-zinc-600 font-mono text-[10px]">{skill.level}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-zinc-600 group-hover:bg-sky-500 transition-all duration-1000"
                          style={{ width: `${isVisible ? skill.level : 0}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Lab */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2">The Lab</h2>
            <p className="text-zinc-500">Projetos autorais e experimentação maker.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {ongoingProjects.map((project, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-sky-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded italic">
                      {project.status}
                    </span>
                    <Terminal size={14} className="text-zinc-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-xs mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div>
                  <div className="h-1 w-full bg-zinc-900 rounded-full mb-4 overflow-hidden">
                    <div className="h-full bg-sky-500 opacity-60" style={{ width: `${project.progress}%` }} />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 bg-black rounded text-zinc-600 uppercase border border-zinc-900">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.3em]">
            Optimized for 60fps // Ramon // {new Date().getFullYear()}
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest">Resume</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-widest">Source</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;