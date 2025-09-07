import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap, Target, Users, Globe } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";


const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          {/* How We Started */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gradient-primary">Как мы появились</h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              IKS Capital возник в 2020 году как ответ на ключевой запрос инвесторов в цифровых активах:
              как участвовать в росте динамично развивающегося рынка, сохраняя строгий контроль над рисками.
              Более четырёх лет мы формировали комплексный подход, объединив трейдинг и портфельное управление
              с институциональными практиками — от процедур KYC/AML до операционного контроля и регулярной отчётности.
            </p>
          </div>

          {/* Results */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16 sm:mb-20">
            <Card className="card-elevated text-center">
              <CardContent className="pt-6 sm:pt-8">
                <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Трейдинг</h3>
                <div className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-2">
                  <AnimatedCounter end={50} suffix="%" />
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">доходности к депозиту</p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardContent className="pt-6 sm:pt-8">
                <Target className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Портфельное управление</h3>
                <div className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">доходности к депозиту</p>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="card-elevated">
              <CardHeader>
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2" />
                <CardTitle className="text-lg sm:text-xl">Миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Сделать инвестиции в цифровые активы доступными, понятными и результативными:
                  управляем капиталом прозрачно, дисциплинированно и с предсказуемыми процессами.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2" />
                <CardTitle className="text-lg sm:text-xl">Видение (3–5 лет)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Стать эталоном доверительного управления в сфере цифровых активов: продуктовые стандарты,
                  прозрачная отчётность по запросу, безупречный риск-менеджмент и клиентский сервис уровня Private Banking.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2" />
                <CardTitle className="text-lg sm:text-xl">Обязательство бренда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Мы принимаем на себя сложность криптовалютного рынка — вы получаете чёткие правила,
                  защищённые процессы и прозрачный результат.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Future Direction */}
          <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gradient-primary">Куда направляемся</h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Мы системно развиваем продуктовую линейку, внедряя инновационные направления для диверсификации
              источников дохода и укрепления конкурентных преимуществ. Усиливаем аналитические инструменты
              и автоматизацию процессов, а также совершенствуем клиентский сервис через личный кабинет,
              уведомления, реферальную программу и отчёты в Telegram-боте.
            </p>
          </div>
        </div>
      </section>

      {/* Main Directions */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gradient-primary">Основные направления</h2>
            <p className="text-base sm:text-lg text-foreground max-w-5xl mx-auto leading-relaxed">
              Стратегия IKS Capital заключается в комплексном подходе к работе с криптоактивами,
              объединяющий два основных направления — портфельное управление и трейдинг, которые уже
              доказали свою эффективность в обеспечении стабильного роста капитала и регулярного денежного потока,
              а также дополнительное - инновационные направления для технологического развития,
              создания долгосрочных конкурентных преимуществ и расширения возможностей получения доходности.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="card-elevated group">
              <CardHeader>
                <Target className="h-8 w-8 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg sm:text-xl">Портфельное управление</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  Долгосрочная стратегия направленная на прямое владение активами с целью увеличения капитала
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-sm sm:text-base" asChild>
                  <Link to="/portfolio">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated group">
              <CardHeader>
                <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg sm:text-xl">Трейдинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  Среднесрочная стратегия основанная на торговле производными инструментами для получения пассивного дохода
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-sm sm:text-base" asChild>
                  <Link to="/trading">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated group">
              <CardHeader>
                <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg sm:text-xl">Инновационные направления</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  Изучение новых блокчейн-технологий обеспечивает стратегический рост компании и формирует дополнительный поток доходов
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-sm sm:text-base" asChild>
                  <Link to="/innovations">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Index;
