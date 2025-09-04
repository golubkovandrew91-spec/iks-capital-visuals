import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Users, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Trading = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary">
              Трейдинг
            </h1>
            <p className="text-xl md:text-2xl text-foreground">
              Процесс покупки и продажи финансовых инструментов с целью получения прибыли 
              за счет краткосрочного колебания цены
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Фьючерсная торговля — это торговля с использованием кредитного плеча фьючерсными контрактами, 
              отражающих цену актива, без его фактической покупки или поставки. Это даёт возможность управлять 
              позициями большего объёма, чем собственный капитал, зарабатывать как на росте, при устойчивом 
              восходящем движении, так и на падении цен и хеджировать инвестиционный спотовый портфель от просадок.
            </p>
          </div>
        </div>
      </section>

      {/* Principle and Application */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="card-elevated">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Принцип работы трейдинг-направления</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Инвестор передаёт средства в управление
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Капитал используется для фьючерсной торговли
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Генерируется ежемесячный доход
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Выплаты производятся ежеквартально или реинвестируются по выбору инвестора
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Как мы применяем этот инструмент</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      При падении рынка — открываем позиции, которые компенсируют просадку спотового портфеля
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      При устойчивом росте — увеличиваем объём сделок для усиления прибыли
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      С жёстким риск-менеджментом — это система защиты капитала, где для каждой сделки и дня 
                      заранее ограничен возможный убыток
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Advantages */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary">
              Преимущества трейдинга для инвестора
            </h2>
            <p className="text-xl text-muted-foreground">Пассивный доход и защита капитала</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated text-center group">
              <CardContent className="pt-8">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Гибкость</h3>
                <p className="text-sm text-muted-foreground">
                  Возможность адаптироваться к любой фазе рынка
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center group">
              <CardContent className="pt-8">
                <BarChart3 className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Снижение волатильности</h3>
                <p className="text-sm text-muted-foreground">
                  Портфеля за счёт хеджирующих сделок
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center group">
              <CardContent className="pt-8">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Повышенная доходность</h3>
                <p className="text-sm text-muted-foreground">
                  При контролируемом уровне риска
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center group">
              <CardContent className="pt-8">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Краткосрочный доход</h3>
                <p className="text-sm text-muted-foreground">
                  Получение дохода в краткосрочной перспективе
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complex Approach */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              IKS Capital — комплексный подход к трейдингу и управлению рисками
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">Баланс опыта и технологий</p>
            
            <p className="text-lg text-foreground text-center mb-12 max-w-4xl mx-auto">
              В IKS Capital мы используем два подхода к трейдингу — работу трейдеров и автоматизированные алгоритмы. 
              Каждый из них имеет свои сильные стороны, и вместе они создают сбалансированную и безопасную систему.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="card-elevated">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Классический трейдинг</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Это торговля, основанная на принятии торговых решений человеком — трейдером, 
                    учитывая его опыт, гибкость и умение быстро адаптироваться к неожиданным событиям на рынке. 
                    Профессиональный трейдер может учесть нюансы, которые не всегда видны в цифрах: новости, 
                    настроение рынка, поведение крупных игроков. Такой подход особенно ценен в нестандартных ситуациях, 
                    когда важно принять решение, опираясь не только на статистику, но и на здравый смысл. 
                    При этом у каждого трейдера есть чёткие лимиты по суммам и допустимым потерям, 
                    а все сделки проходят под контролем риск-менеджера.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Bot className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Алгоритмическая торговля</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Это скорость, дисциплина и отсутствие эмоций. Алгоритмы работают по заранее заданным правилам 
                    и реагируют на изменения рынка за доли секунды. Они идеально подходят для стабильных условий, 
                    где важна точность исполнения и мгновенная реакция. Алгоритмы не устают, не поддаются панике 
                    и строго соблюдают установленные ограничения. Их работа круглосуточно контролируется, 
                    а при малейших отклонениях система автоматически останавливает торговлю.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="card-elevated">
              <CardContent className="pt-8">
                <p className="text-foreground text-center leading-relaxed">
                  <strong>Ключевое преимущество</strong> в том, что мы не полагаемся на один метод. 
                  Классический трейдинг даёт гибкость и умение работать в сложных ситуациях, 
                  а алгоритмы обеспечивают скорость и дисциплину. Эти подходы дополняют друг друга, 
                  а строгая система лимитов, постоянный мониторинг и распределение капитала между разными стратегиями 
                  делают процесс максимально безопасным для вложенных средств.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three-Level Management System */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Трёхуровневая система управления
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Штатные трейдеры</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Это ядро нашей команды. Это профессионалы с многолетним опытом, которые прошли отбор 
                    и доказали свою эффективность на реальных рынках. Они работают по стратегиям, которые мы используем 
                    уже много лет, и которые показали стабильные результаты в разных рыночных условиях. 
                    Их задача — обеспечивать надёжный, предсказуемый результат и быть примером дисциплины 
                    и качества для всей команды.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Bot className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Алгоритмическая торговля</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Crypto и Forex алгоритмы — автоматизированные системы для работы на финансовых рынках, 
                    обеспечивающие круглосуточную торговлю без эмоций и усталости.
                  </p>
                  
                  <h4 className="font-semibold text-primary mb-2">Почему мы используем алгоритмическую торговлю:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Скорость и точность — алгоритм реагирует на рыночные изменения мгновенно</li>
                    <li>• Дисциплина — программа строго следует заданной стратегии</li>
                    <li>• Круглосуточная работа — алгоритмы могут торговать 24/7</li>
                  </ul>

                  <h4 className="font-semibold text-primary mb-2">Диверсификация внутри алгоритмической торговли:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Forex-алго — валютные пары и золото</li>
                    <li>• Crypto-алго — крупные криптовалюты, в первую очередь Ethereum и Bitcoin</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Prop IKS Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Это направление, через которое мы привлекаем перспективных трейдеров из Академии IKS Capital. 
                    Здесь они проходят обучение тем же стратегиям и методам, которые успешно применяются в фонде 
                    и доказали свою эффективность на практике. Такой подход позволяет нам находить и развивать 
                    действительно талантливых людей, у которых пока нет собственного капитала, но есть необходимые 
                    качества для успешной торговли: аналитический склад ума, дисциплина, умение работать с рисками 
                    и стремление к результату.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Благодаря этой системе мы не только формируем команду лояльных и подготовленных специалистов, 
                    но и создаём основу для масштабирования компании. Когда объём капитала под управлением растёт, 
                    мы можем быстро увеличить количество активных трейдеров, не жертвуя качеством и безопасностью 
                    управления средствами.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diversification and Protection */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Диверсификация и многоуровневая защита
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="card-elevated">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Диверсификация и защита капитала</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Разные рынки — валюты, золото, криптовалюты
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Разные стратегии — от краткосрочных сделок до среднесрочных трендовых систем
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Разные инструменты управления рисками — стоп-лоссы, лимиты по просадке, автоматическая приостановка торговли
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Такое распределение снижает зависимость от одного инструмента или сценария и помогает сглаживать колебания доходности.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Безопасность на каждом этапе</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Многоуровневый риск-контроль — лимиты на сделку, дневные и недельные ограничения по убыткам
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Постоянный мониторинг — команда риск-менеджеров следит за работой алгоритмов и действиями трейдеров в реальном времени
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Адаптация стратегий — регулярный пересмотр и оптимизация алгоритмов и торговых планов
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="card-elevated">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Для инвестора:</h3>
                  <p className="text-foreground max-w-4xl mx-auto leading-relaxed">
                    Вы получаете систему, где человеческий опыт и машинная точность работают вместе. 
                    Это не просто торговля — это комплексная стратегия, которая сочетает скорость, 
                    гибкость и высокий уровень защиты капитала.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Хотите получить бесплатную консультацию по трейдингу?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Запишитесь на консультацию, и наши эксперты свяжутся с вами
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

export default Trading;