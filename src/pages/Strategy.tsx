import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, TrendingDown, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Strategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary">
              Стратегия IKS Capital
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto">
              Модель IKS Capital предполагает инвестирование средств не в отдельные направления, 
              а в единый капитал компании для максимизации эффективности и минимизации рисков
            </p>
          </div>
        </div>
      </section>

      {/* Synergy Principle */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Принцип синергии всех направлений
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">Распределение капитала</p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="card-elevated text-center group">
                <CardHeader>
                  <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-2xl">40% — Трейдинг</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">Фьючерсные операции</p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center group">
                <CardHeader>
                  <Target className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-2xl">50% — Портфельное управление</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">Спотовые активы + DeFi</p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center group">
                <CardHeader>
                  <Zap className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-2xl">10% — Инновационные технологии</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">Исследования и тестирование</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interaction Mechanism */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Механизм взаимодействия стратегий
            </h2>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              <Card className="card-elevated">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Компенсация просадок</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Когда спотовый портфель показывает временную просадку, трейдинговое подразделение 
                    открывает короткие позиции по фьючерсам, компенсируя убытки прибылью от падающих цен.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Оптимизация точек входа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Прибыль от трейдинга используется для дополнительной покупки активов в спотовый портфель 
                    по более выгодным ценам, чем первоначальная покупка.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Activity className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">DeFi как источник дохода</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Активы спотового портфеля размещаются в DeFi-протоколах для получения yield 
                    независимо от направления рынка.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Инновационная диверсификация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Средства направляются в майнинг криптовалют с доходностью 5–20% годовых, 
                    вне зависимости от фазы рынка. Прибыль направляется в трейдинг и спотовый портфель.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Synergistic Effects */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Взаимосвязь стратегий и синергетические эффекты
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Scenario 1 */}
              <Card className="card-elevated">
                <CardHeader>
                  <TrendingDown className="h-8 w-8 text-destructive mb-2" />
                  <CardTitle className="text-xl">Сценарий 1: Падение крипторынка</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Спотовый портфель показывает просадку
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Трейдинг переходит в короткие позиции по фьючерсам
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Прибыль от фьючерсов компенсирует спотовые убытки
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      DeFi продолжает генерировать доход от процентов
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Airdrop токены направляются на увеличение спотового портфеля
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Scenario 2 */}
              <Card className="card-elevated">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Сценарий 2: Рост крипторынка</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Спотовый портфель показывает значительную прибыль
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Трейдинг использует длинные позиции для усиления эффекта
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      DeFi максимизирует доходность через ликвидный стейкинг
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Часть прибыли фиксируется для новых инвестиций
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Доход от IEO токенов значительно превышает расходы
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Scenario 3 */}
              <Card className="card-elevated">
                <CardHeader>
                  <Activity className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-xl">Сценарий 3: Боковое движение</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Спотовый портфель остаётся стабильным
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Трейдинг зарабатывает на локальных колебаниях
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      DeFi обеспечивает стабильный процентный доход
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Накопление позиции в ожидании трендового движения
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Токенизированные акции приносят доход независимо от крипторынка
                    </li>
                  </ul>
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
            Хотите узнать, как интегрированная стратегия IKS Capital может повысить устойчивость и доходность вашего портфеля?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию экспертов
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

export default Strategy;