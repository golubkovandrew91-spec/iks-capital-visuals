import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import GradientText from "./GradientText";
import StarBorder from "@/components/StarBorder";

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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              <GradientText animationSpeed={9} showBorder={false}>
                Invest — Keep — Secure
              </GradientText>
            </h1>

            {/* Subtitle */}
            <div className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-4">
                Дисциплинированный доступ к доходности цифровых активов с приоритетом сохранения капитала
                и институциональной безопасностью
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Наша цель предоставить инвесторам простой и надёжный способ участвовать в росте цифровой экономики
              без избыточной сложности и рисков.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <StarBorder>
                <Button
                  variant="hero"
                  size="lg"
                  className="text-base sm:text-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Начните инвестировать с IKS Capital уже сегодня
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </StarBorder>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 max-w-3xl mx-auto">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  <AnimatedCounter end={50} suffix="%" className="text-3xl sm:text-4xl" />
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">Доходность трейдинга</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  <AnimatedCounter end={100} suffix="%" className="text-3xl sm:text-4xl" />
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">Доходность портфеля</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  <AnimatedCounter end={5} suffix=" лет" className="text-3xl sm:text-4xl" />
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">Опыт на рынке</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs sm:text-sm text-muted-foreground pt-6 sm:pt-8 max-w-2xl mx-auto">
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
