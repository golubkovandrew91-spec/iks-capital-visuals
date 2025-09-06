import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import GradientText from "./GradientText";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <GradientText animationSpeed={9} showBorder={false}>
                Invest — Keep — Secure
              </GradientText>
            </h1>

            {/* Subtitle */}
            <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-4">
                Дисциплинированный доступ к доходности цифровых активов с приоритетом сохранения капитала 
                и институциональной безопасностью
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Наша цель предоставить инвесторам простой и надёжный способ участвовать в росте цифровой экономики 
              без избыточной сложности и рисков.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                variant="hero" 
                size="xl" 
                className="pulse-glow"
                onClick={() => scrollToSection("contact")}
              >
                Начните инвестировать с IKS Capital уже сегодня
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={50} suffix="%" className="text-4xl" />
                </div>
                <p className="text-muted-foreground">Доходность трейдинга</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={100} suffix="%" className="text-4xl" />
                </div>
                <p className="text-muted-foreground">Доходность портфеля</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={5} suffix=" лет" className="text-4xl" />
                </div>
                <p className="text-muted-foreground">Опыт на рынке</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-muted-foreground pt-8 max-w-2xl mx-auto">
              <strong>Важное уведомление:</strong> представленны показатели за 2024 год. 
              Историческая доходность не гарантирует будущие результаты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
