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

      {/* Methods of Asset Acquisition */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Методы приобретения активов
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Оптимизация точек входа для максимальной эффективности
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="card-elevated">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Покупка по ключевым ценовым уровням</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Вход в актив при достижении заранее определённых зон стоимости, что помогает оптимизировать 
                    точку входа и снизить риск переплаты.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Проведение технического и фундаментального анализа</li>
                    <li>• Определение ключевых уровней</li>
                    <li>• Анализ исторических данных о ценах</li>
                    <li>• Ожидание коррекций для оптимальных точек входа</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Стратегия усреднения стоимости (DCA)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Равномерное распределение покупок во времени для сглаживания влияния краткосрочной волатильности 
                    и снижения средней цены входа.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Снижение влияния краткосрочной волатильности</li>
                    <li>• Усреднение цены входа в позицию</li>
                    <li>• Постепенное наращивание позиций в перспективных активах</li>
                    <li>• Психологическая комфортность для инвестора</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="card-elevated">
              <CardContent className="pt-8">
                <p className="text-foreground text-center leading-relaxed">
                  Такой подход обеспечивает сбалансированный рост капитала с контролем рисков 
                  и высокой степенью защиты инвестиций.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Asset Interaction Options */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Варианты взаимодействия с активами
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              В рамках портфельного управления IKS Capital предлагает инвесторам два варианта взаимодействия с активами
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="card-elevated">
                <CardHeader>
                  <Lock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Хранение на собственном кошельке инвестора</CardTitle>
                  <p className="text-sm text-primary font-medium">Максимальная защита и полный контроль</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Инвестор получает криптоактивы напрямую на свой личный холодный кошелёк — это может быть аппаратное 
                    устройство или специализированное программное обеспечение, которое хранит приватные ключи в режиме офлайн. 
                    Такой способ обеспечивает максимальную защиту от взлома, так как кошелёк не подключён к интернету. 
                    Доступ к средствам есть только у владельца.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    При таком подходе инвестор сохраняет полный контроль над активами и может распоряжаться ими по своему усмотрению, 
                    получая при этом консультации и рекомендации от команды IKS Capital.
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Преимущества:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Максимальная защита от взломов бирж</li>
                      <li>• Полный контроль инвестора над активами</li>
                      <li>• Консультационная поддержка от IKS Capital</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Управление активами командой IKS Capital для увеличения доходности</CardTitle>
                  <p className="text-sm text-primary font-medium">Активное увеличение прибыли через DeFi</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Второй вариант позволяет увеличить прибыль за счет активного использования DeFi-инструментов, 
                    однако стоит учесть, что увеличиваются и риски. Ключевое преимущество заключается в том, 
                    что доход генерируется в любых рыночных условиях — при падении, росте или боковом движении.
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Преимущества активного управления:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Генерация дополнительного дохода в любых рыночных условиях</li>
                      <li>• Профессиональное управление и мониторинг</li>
                      <li>• Возможность кратного увеличения прибыли</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Mechanisms */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Механизм работы DeFi-инструментов
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Как генерируется дополнительная доходность
            </p>
            
            <div className="mb-12">
              <Card className="card-elevated">
                <CardContent className="pt-8">
                  <ul className="text-foreground space-y-4 max-w-4xl mx-auto">
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      При размещении активов в DeFi-инструментах инвестор получает вознаграждение в виде базового актива или токенов наград
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Это означает, что со временем увеличивается количество монет на балансе инвестора
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      Когда рынок переходит в фазу роста, инвестор владеет уже большим объёмом токенов, 
                      чем было куплено изначально, увеличивая итоговую доходность
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-gradient-primary text-center">
              Основные DeFi-инструменты, используемые командой IKS Capital
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <CardHeader>
                  <Coins className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Ликвидный стейкинг — 2,7–8% годовых</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Получение производного токена с возможностью использования в других DeFi-протоколах, 
                    сохраняя доход от стейкинга.
                  </p>
                  <h4 className="font-semibold text-primary mb-2">Механизм работы:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Получение производных токенов (stETH, bbSOL)</li>
                    <li>• Сохранение возможности использования в других протоколах</li>
                    <li>• Непрерывная генерация дохода</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Пулы ликвидности — 4–30% годовых</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Предоставление пары токенов в пулы на децентрализованных биржах в зависимости от пула и протокола.
                  </p>
                  <h4 className="font-semibold text-primary mb-2">Источники дохода:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Предоставление пар токенов в DEX</li>
                    <li>• Получение комиссий от торговли</li>
                    <li>• Дополнительные вознаграждения в токенах протокола</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Лендинг — 4–6% годовых</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Размещение криптоактивов на платформах для предоставления займов под процент.
                  </p>
                  <h4 className="font-semibold text-primary mb-2">Характеристики:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Размещение активов на платформах кредитования</li>
                    <li>• Получение процентов от заемщиков</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Практический пример мультипликации прибыли
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Увеличение доходности на 30–50% через DeFi
            </p>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl">Базовый сценарий</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Допустим, инвестор разместил $100,000 в ETH. При простом хранении он получает только рост цены актива.
                </p>
                
                <h4 className="font-semibold text-primary mb-4">При использовании DeFi-стратегий:</h4>
                <ol className="text-muted-foreground space-y-2 mb-6">
                  <li>1. Ликвидный стейкинг ETH → получение stETH + 2,7% годовых в ETH</li>
                  <li>2. Использование stETH в пуле ликвидности → дополнительно 5–15% годовых в токенах вознаграждения</li>
                  <li>3. Стейкинг полученных токенов вознаграждения → ещё 6–15% годовых в зависимости от протокола</li>
                </ol>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-4">Итоговый результат:</h4>
                  <p className="text-foreground mb-4">
                    Вместо 1,000 ETH инвестор через год имеет 1,150–1,250 ETH. Когда ETH вырастет в цене на 100%, 
                    прибыль составит не $100,000, а $130,000–150,000+, то есть на 30–50% больше.
                  </p>
                  <p className="text-primary font-semibold">
                    Математика мультипликации: 1,197 ETH через год вместо 1,000 ETH. 
                    При росте ETH на 100% прибыль составит $139,400 вместо $100,000.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Income */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Дополнительный доход от временно неиспользуемых средств
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Максимальная эффективность использования всех средств
            </p>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl">Поэтапная покупка активов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Важной особенностью стратегии «Портфельное управление» является поэтапная покупка активов. 
                  Когда инвестор вносит средства, покупка осуществляется не единовременно, а постепенно согласно 
                  рыночным условиям и стратегии входа. Пока часть средств находится в стейблкоинах (криптовалютах, 
                  стабильно привязанных к фиатным валютам, таким как доллар США), эти средства размещаются на лендинговых 
                  платформах, где они генерируют дополнительный доход в виде процентов до момента их использования 
                  для покупки целевых активов.
                </p>

                <h4 className="font-semibold text-primary mb-4">Временное размещение средств:</h4>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>• Неиспользуемые средства размещаются в стейблкоинах</li>
                  <li>• Стейблкоины генерируют доход через лендинг (4–6% годовых)</li>
                  <li>• Быстрое развертывание при появлении возможностей</li>
                </ul>

                <p className="text-foreground">
                  Такой комплексный подход позволяет максимально эффективно использовать все средства инвестора, 
                  обеспечивая постоянный доход даже в периоды ожидания оптимальных условий для входа в рынок.
                </p>
              </CardContent>
            </Card>
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