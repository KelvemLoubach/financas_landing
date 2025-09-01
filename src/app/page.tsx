"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  TrendingUp, 
  Lightbulb, 
  Target, 
  Users, 
  Star, 
  Clock, 
  CheckCircle, 
  Award,
  Crown,
  Sparkles,
  ArrowRight,
  Zap,
  Shield
} from "lucide-react";

export default function Home() {
  const [progress] = useState(80);

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "Quer sair da CLT e ter liberdade financeira.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-green-400" />,
      title: "Não sabe por onde começar a investir.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Deseja ter uma vida tranquila e sem preocupações.",
    },
  ];

  const modules = [
    {
      icon: <BookIcon />,
      title: "Fundamentos do Mercado Financeiro",
    },
    {
      icon: <ChartIcon />,
      title: "Análise de Ativos",
    },
    {
      icon: <StrategyIcon />,
      title: "Estratégias de Investimento",
    },
    {
      icon: <ShieldIcon />,
      title: "Gestão de Risco e Portfólio",
    },
  ];

  const instructors = [
    {
      name: "João Silva",
      role: "Analista Financeiro",
      bio: "10+ anos de experiência em mercado de capitais",
    },
    {
      name: "Maria Santos",
      role: "Especialista em Investimentos",
      bio: "Gestora de portfólios de alto rendimento",
    },
    {
      name: "Carlos Oliveira",
      role: "Consultor Financeiro",
      bio: "Especialista em educação financeira",
    },
    {
      name: "Ana Costa",
      role: "Analista de Riscos",
      bio: "Especialista em gestão de riscos financeiros",
    },
  ];

  const testimonials = [
    {
      name: "Maria S.",
      role: "Empresária",
      avatar: "MS",
      quote: "Nunca pensei que seria tão fácil! Meu dinheiro está rendendo como nunca.",
      rating: 5,
    },
    {
      name: "Pedro L.",
      role: "Engenheiro",
      avatar: "PL",
      quote: "O curso mudou minha vida. Hoje tenho liberdade financeira real.",
      rating: 5,
    },
    {
      name: "Carla M.",
      role: "Designer",
      avatar: "CM",
      quote: "Finalmente entendi como investir com segurança e confiança.",
      rating: 5,
    },
    {
      name: "Ricardo B.",
      role: "Professor",
      avatar: "RB",
      quote: "Excelente conteúdo! Já estou aplicando as estratégias com sucesso.",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "Plano Essencial",
      price: "R$ 39,90",
      period: "/mês",
      features: [
        "Acesso a todos os módulos",
        "Suporte por email",
        "Certificado de conclusão",
        "Material complementar",
      ],
      popular: false,
    },
    {
      name: "Plano Premium",
      price: "R$ 79,90",
      period: "/mês",
      features: [
        "Tudo do Plano Essencial",
        "Mentorias individuais",
        "Análise de portfólio personalizada",
        "Acesso à comunidade VIP",
      ],
      popular: true,
    },
    {
      name: "Plano VIP",
      price: "R$ 149,90",
      period: "/mês",
      features: [
        "Tudo do Plano Premium",
        "Sinais de investimento em tempo real",
        "Workshops exclusivos",
        "Acesso vitalício",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Preciso ter conhecimento prévio?",
      answer: "Não, o curso é para iniciantes. Começamos do zero e evoluímos passo a passo.",
    },
    {
      question: "Qual o valor do investimento?",
      answer: "Valor especial por tempo limitado! A partir de R$ 39,90/mês.",
    },
    {
      question: "Tenho suporte após o curso?",
      answer: "Sim, acesso vitalício à comunidade e suporte contínuo.",
    },
    {
      question: "O curso tem garantia?",
      answer: "Sim, garantia de 7 dias. Se não gostar, devolvemos seu dinheiro.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "80% dos alunos já estão investindo em menos de 3 meses.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-900/10 to-green-900/10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxOTc2ZDIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTYgMzR2LTRINGg0djRIMHYyaDR2NGgydi00aDR2LTJINnptMC0zMFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnpNNiAzNHYtNEg0djRIMHYyaDR2NGgydi00aDR2LTJINnpNNiA0VjBINHY0SDB2Mmg0djRoMlY2aDRWNEg2eiIvPjwvZz48L2c+PC9zdmc+')] pointer-events-none"></div>

      {/* Header Section */}
      <header className="relative text-center py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-green-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-green-900/30 animate-gradient-shift"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30 backdrop-blur-sm animate-bounce-slow">
            <Sparkles className="w-4 h-4 mr-2" />
            Curso Exclusivo
          </Badge>
          
         <h1 className="
  text-2xl sm:text-3xl md:text-5xl lg:text-7xl
  font-bold mb-4 sm:mb-6
  bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent
  drop-shadow-lg animate-title-glow
">
  TRANSFORME SUA REALIDADE FINANCEIRA
</h1>

<p className="
  text-base sm:text-lg md:text-xl lg:text-2xl
  text-gray-300 mb-6 sm:mb-8
  max-w-2xl sm:max-w-3xl mx-auto
  drop-shadow-md animate-fade-in-up
">
  Domine o mercado financeiro e construa a vida dos seus sonhos.
</p>


          {/* Social Proof Bar */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up-delayed">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative">
                  <img 
                    src={`/student${i}.jpg`} 
                    alt={`Aluno satisfeito ${i}`}
                    className="w-12 h-12 rounded-full border-2 border-black backdrop-blur-sm bg-black/20 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse-slow"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center animate-ping-slow">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-300 backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full border border-gray-700 animate-glow">
              Mais de 10.000 Alunos Satisfeitos
            </span>
          </div>

          {/* CTA Button with Urgency */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up-more-delayed">
            <Button
  size="lg"
  className="
    bg-green-500 hover:bg-green-600 text-black font-bold
    text-base sm:text-lg
    px-4 py-2 sm:px-8 sm:py-4
    rounded-full
    whitespace-nowrap
  "
>
  GARANTIR VAGA
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>
            <Badge className="bg-red-500 text-white px-3 py-1 rounded-full animate-pulse backdrop-blur-sm">
              Últimas Vagas!
            </Badge>
          </div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-float-slow opacity-80"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-50"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </header>

      {/* New Section: Student Success Showcase */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">ALUNOS QUE ESTÃO TRANSFORMANDO SUAS VIDAS</h3>
            <p className="text-gray-400">Conheça alguns dos milhares de alunos que já estão colhendo os resultados</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {[
              { name: "Ana Silva", result: "+300% ganhos" },
              { name: "Carlos Santos", result: "Investidor ativo" },
              { name: "Mariana Costa", result: "Liberdade financeira" },
              { name: "Pedro Oliveira", result: "+R$50k/mês" },
              { name: "Juliana Lima", result: "Aposentada aos 35" }
            ].map((student, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-3">
                  <img 
                    src={`/student${index + 1}.jpg`} 
                    alt={student.name}
                    className="w-20 h-20 mx-auto rounded-full border-3 border-blue-500/30 object-cover group-hover:border-blue-400 transition-colors duration-300 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{student.name}</h4>
                <p className="text-xs text-green-400">{student.result}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Junte-se a +10.000 alunos satisfeitos</span>
              <ArrowRight className="w-4 h-4 text-green-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem/Solution & Key Benefits */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            ESTE CURSO É PARA VOCÊ QUE...
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-center gap-4">
                    {benefit.icon}
                    <p className="text-lg text-gray-300">{benefit.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Dynamic Visual Element */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">{progress}%</div>
                      <Progress value={progress} className="w-32 h-2 mx-auto mb-4" />
                      <p className="text-sm text-gray-400">
                        DOS ALUNOS JÁ ESTÃO INVESTINDO EM MENOS DE 3 MESES
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Course Structure/Module Overview */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            O QUE VOCÊ VAI APRENDER COM O CURSO
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="text-blue-400">{module.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-300">{module.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value-Added Benefits */}
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Suporte Exclusivo</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">Comunidade VIP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Instructor Credibility/Team */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            CONHEÇA SEU MENTOR E ESPECIALISTAS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {instructors.map((instructor, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-lg shadow-blue-500/20">
                  <img 
                    src={`/instructor${index + 1}.jpg`} 
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{instructor.name}</h3>
                <p className="text-sm text-blue-400 mb-2">{instructor.role}</p>
                <p className="text-sm text-gray-400">{instructor.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
           <Button
  size="lg"
  className="
    bg-green-500 hover:bg-green-600 text-black font-bold
    text-base sm:text-lg
    px-4 py-2 sm:px-8 sm:py-4
    rounded-full
    whitespace-nowrap
  "
>
  QUERO ME TORNAR UM INVESTIDOR
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials/Success Stories */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            O QUE NOSSOS ALUNOS DIZEM
          </h2>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-900/50 border-gray-800 h-full backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-white text-sm">{testimonial.name}</CardTitle>
                          <CardDescription className="text-gray-400 text-xs">{testimonial.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-gray-700 hover:bg-gray-800" />
            <CarouselNext className="text-white border-gray-700 hover:bg-gray-800" />
          </Carousel>
        </div>
      </section>

      {/* New Section: Statistics & Numbers */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/50 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Resultados Comprovados
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              NÚMEROS QUE FALAM POR SI
            </h2>
            <p className="text-gray-400 text-lg">Resultados reais de alunos que transformaram suas vidas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">10K+</div>
              <p className="text-gray-300">Alunos Formados</p>
              <div className="w-16 h-1 bg-green-400 mx-auto mt-3 rounded"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">94%</div>
              <p className="text-gray-300">Taxa de Sucesso</p>
              <div className="w-16 h-1 bg-blue-400 mx-auto mt-3 rounded"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">3M</div>
              <p className="text-gray-300">Rendimento Médio</p>
              <div className="w-16 h-1 bg-green-400 mx-auto mt-3 rounded"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Suporte Disponível</p>
              <div className="w-16 h-1 bg-blue-400 mx-auto mt-3 rounded"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
            >
              QUERO FAZER PARTE DESSES NÚMEROS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* New Section: Bonus & Offers */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              BÔNUS EXCLUSIVOS
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              GARANTA SEUS BÔNUS LIMITADOS
            </h2>
            <p className="text-gray-400 text-lg">Apenas para os primeiros 100 alunos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gray-900/50 to-yellow-500/10 border-yellow-500/30 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                  <BookIcon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">E-book Exclusivo</h3>
                <p className="text-gray-400 mb-4">Guia completo sobre investimentos passivos (R$ 197 de valor)</p>
                <div className="text-yellow-400 font-semibold">GRÁTIS</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-green-500/10 border-green-500/30 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mentoria Individual</h3>
                <p className="text-gray-400 mb-4">1 hora de mentoria 1:1 com especialistas (R$ 497 de valor)</p>
                <div className="text-green-400 font-semibold">GRÁTIS</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/50 to-blue-500/10 border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Planilha de Investimentos</h3>
                <p className="text-gray-400 mb-4">Planilha profissional para controle de portfólio (R$ 97 de valor)</p>
                <div className="text-blue-400 font-semibold">GRÁTIS</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Badge className="bg-red-500 text-white px-4 py-2">
              ⏰ Oferta válida apenas para as primeiras 100 vagas!
            </Badge>
          </div>
        </div>
      </section>

      {/* New Section: Risk-Free Guarantee */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            GARANTIA INCONDICIONAL DE 7 DIAS
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Sem risco algum. Se por qualquer motivo você não ficar 100% satisfeito com o curso, 
            devolvemos cada centavo do seu investimento. Sem perguntas, sem burocracia.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sem Risco</h3>
              <p className="text-gray-400 text-sm">Experimente sem compromisso</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">7 Dias Úteis</h3>
              <p className="text-gray-400 text-sm">Tempo suficiente para avaliar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Satisfação</h3>
              <p className="text-gray-400 text-sm">Ou seu dinheiro de volta</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
          >
            QUERO EXPERIMENTAR SEM RISCO
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* New Section: Comparison Table */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              POR QUE NOSSO CURSO É O MELHOR
            </h2>
            <p className="text-gray-400 text-lg">Compare e veja a diferença</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 text-gray-300">Recursos</th>
                  <th className="text-center py-4 px-6 text-blue-400">Nosso Curso</th>
                  <th className="text-center py-4 px-6 text-gray-500">Concorrência</th>
                  <th className="text-center py-4 px-6 text-gray-500">Aprender Sozinho</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Conteúdo Atualizado</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-gray-500">Parcial</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400">✗</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Suporte 24/7</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-gray-500">Limitado</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400">✗</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Comunidade VIP</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-gray-500">Básica</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400">✗</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Mentorias 1:1</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400">✗</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400">✗</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Garantia 7 Dias</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400">✗</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400">✗</div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300 font-semibold">Preço</td>
                  <td className="text-center py-4 px-6">
                    <div className="text-green-400 font-bold">A partir de R$ 39,90</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-gray-500">R$ 297+</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-gray-500">Perda de tempo</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
            >
              ESCOLHER A MELHOR OPÇÃO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* New Section: Final Urgency Countdown */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-red-500 text-white animate-pulse backdrop-blur-sm">
              ⚠️ ÚLTIMA CHANCE
            </Badge>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            A OFERTA TERMINA EM:
          </h2>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/30">
              <div className="text-4xl font-bold text-red-400 mb-2">23</div>
              <div className="text-gray-400 text-sm">HORAS</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/30">
              <div className="text-4xl font-bold text-red-400 mb-2">45</div>
              <div className="text-gray-400 text-sm">MINUTOS</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/30">
              <div className="text-4xl font-bold text-red-400 mb-2">30</div>
              <div className="text-gray-400 text-sm">SEGUNDOS</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/30">
              <div className="text-4xl font-bold text-red-400 mb-2">12</div>
              <div className="text-gray-400 text-sm">VAGAS</div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">NÃO PERCA ESTA OPORTUNIDADE ÚNICA</h3>
            <p className="text-gray-300 mb-6">
              Mais de 2.000 pessoas estão visualizando esta página agora mesmo. 
              As vagas estão se esgotando rapidamente e o preço voltará ao normal em breve.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gray-700 rounded-full border-2 border-black"></div>
                ))}
              </div>
              <span className="text-sm text-gray-400">+1.847 pessoas online agora</span>
            </div>
          </div>

         <Button
  size="lg"
  className="
    bg-red-500 hover:bg-red-600 text-white font-bold
    text-base sm:text-lg md:text-xl
    px-4 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6
    rounded-full
    shadow-lg shadow-red-500/25 hover:shadow-red-500/40
    transition-all duration-300 transform hover:scale-105
    animate-pulse
    whitespace-normal break-words text-center
  "
>
  GARANTIR MINHA VAGA AGORA - ÚLTIMA CHANCE!
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>


          <p className="text-gray-400 text-sm mt-4">
            ⚠️ Após o término da promoção, o preço aumentará para R$ 297,00
          </p>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            PERGUNTAS FREQUENTES
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                <AccordionTrigger className="text-gray-300 hover:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final Section: Pricing & Final CTA */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/50 backdrop-blur-sm">
              <Clock className="w-4 h-4 mr-2" />
              Oferta por Tempo Limitado!
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              ESCOLHA SEU PLANO
            </h2>
            <p className="text-gray-400">ÚLTIMA CHANCE DE GARANTIR SEU FUTURO</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative bg-gray-900/50 border-gray-800 backdrop-blur-sm ${plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-black">MAIS POPULAR</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-green-500 hover:bg-green-600 text-black' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
                    size="lg"
                  >
                    GARANTIR MINHA VAGA
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Badge className="bg-red-500 text-white px-4 py-2">
              Desconto de 50% por tempo limitado!
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Aprenda a Investir do Zero. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Custom Icons
function BookIcon() {
  return (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}