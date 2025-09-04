import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, TrendingUp, DollarSign, BarChart3, Lock, Coins, Zap } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary">
              Портфельное управление
            </h1>
            <p className="text-xl md:text-2xl text-foreground">
              Прямое владение цифровыми активами. Максимальный контроль и безопасность
            </p>
          </div>
        </div>
      </section>

      {/* What is Portfolio Management */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Что такое портфельное управление?
            </h2>
            <p className="text-lg text-foreground leading-relaxed text-center">
              Портфельное управление IKS Capital — это стратегия приобретения реальных цифровых активов 
              на спотовом рынке с целью их долгосрочного удержания и роста стоимости. Она предполагает 
              прямое владение активами без использования кредитного плеча, что обеспечивает высокий уровень 
              контроля и безопасности вложенных средств. Такой подход позволяет инвестору участвовать в росте рынка, 
              минимизируя риски за счёт продуманного распределения активов и хеджирования.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Ключевые особенности и возможности
            </h2>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <Card className="card-elevated text-center group">
                <CardContent className="pt-8">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">Свободное управление</h3>
                  <p className="text-muted-foreground text-sm">
                    Активами с возможностью перевода, обмена и продажи
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center group">
                <CardContent className="pt-8">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">Максимальная защита</h3>
                  <p className="text-muted-foreground text-sm">
                    От взлома за счет офлайн-хранения
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center group">
                <CardContent className="pt-8">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">Полный контроль</h3>
                  <p className="text-muted-foreground text-sm">
                    Инвестора над активами с доступом только у владельца
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center group">
                <CardContent className="pt-8">
                  <Coins className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">Дополнительный доход</h3>
                  <p className="text-muted-foreground text-sm">
                    Через участие в DeFi-протоколах
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Systematic Approach */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Системный подход к формированию спотового портфеля
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Approach */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Подход к формированию спотового портфеля</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">1. Фундаментальный анализ</h4>
                    <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                      <li>• Оценка команды разработчиков и их опыта</li>
                      <li>• Анализ технологических решений и инноваций</li>
                      <li>• Исследование рыночного потенциала и конкурентных преимуществ</li>
                      <li>• Изучение токеномики и экономической модели проекта</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. Секторальная диверсификация</h4>
                    <p className="text-muted-foreground text-sm">
                      Распределение капитала между различными сегментами крипторынка (инфраструктурные проекты, 
                      DeFi, Layer 1 и Layer 2, стейблкоины и др.) для снижения рисков и повышения устойчивости портфеля.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. Ребалансировка портфеля</h4>
                    <p className="text-muted-foreground text-sm">
                      Периодический пересмотр и корректировка долей активов в зависимости от рыночной конъюнктуры, 
                      чтобы поддерживать оптимальную структуру и максимизировать доходность и снизить риски.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. Хеджирование</h4>
                    <p className="text-muted-foreground text-sm">
                      Использование инструментов защиты капитала, включая покупку пут-опционов и другие стратегии, 
                      позволяющие минимизировать убытки при падении рынка.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Результаты и показатели</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gradient-primary mb-4">
                      <AnimatedCounter end={100} suffix="%" />
                    </div>
                    <p className="text-muted-foreground">
                      Историческая доходность к депозиту за 2024 год
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Максимальная просадка:</span>
                      <span className="font-semibold text-primary">&lt; 30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Средний период удержания:</span>
                      <span className="font-semibold text-primary">18 месяцев</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Количество активов:</span>
                      <span className="font-semibold text-primary">10–20</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Представленные показатели носят иллюстративный характер. 
                    Историческая доходность не гарантирует будущие результаты.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Хотите узнать больше о портфельном управлении?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию от экспертов IKS Capital
          </p>
          <Button 
            variant="glass" 
            size="xl"
            className="text-primary hover:text-primary bg-white/20 hover:bg-white/30"
            asChild
          >
            <Link to="/#contact">
              Записаться на консультацию
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;