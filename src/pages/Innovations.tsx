import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cpu, Coins, TrendingUp, Shield, Zap, Globe, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Innovations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary">
              Инновационные направления
            </h1>
            <p className="text-xl md:text-2xl text-foreground">
              Исследование перспективных блокчейн-технологий для диверсификации источников дохода 
              и подготовки к масштабированию успешных решений
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Инновационные направления IKS Capital представляют собой стратегически важный компонент нашей 
              инвестиционной экосистемы, направленный на исследование и тестирование передовых блокчейн-технологий 
              с целью выявления новых возможностей генерации доходности. Выделяя до 10% от общего капитала на данное направление, 
              мы обеспечиваем баланс между консервативными подходами основных продуктов и инновационным потенциалом 
              развивающихся технологий.
            </p>
          </div>
        </div>
      </section>

      {/* Key Instruments */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Определения и классификация ключевых инструментов
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Семь основных направлений инновационных инвестиций с детальным анализом механизмов работы 
              и потенциальной доходности
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mining */}
              <Card className="card-elevated">
                <CardHeader>
                  <Cpu className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Майнинг криптовалют</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Процесс обеспечения безопасности блокчейн-сетей через вычислительные мощности 
                    в обмен на вознаграждения в виде криптовалюты.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доходность:</span>
                      <span className="font-semibold text-primary">5-20% годовых</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Риски:</span>
                      <span className="text-destructive">Волатильность, износ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ICO/IEO/IDO */}
              <Card className="card-elevated">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Участие в ICO/IEO/IDO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Первичные размещения токенов — механизм привлечения финансирования для блокчейн-проектов 
                    через продажу нативных токенов на ранней стадии развития.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доходность:</span>
                      <span className="font-semibold text-primary">2-10x средняя</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Риски:</span>
                      <span className="text-destructive">До 80% неудач</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Airdrop */}
              <Card className="card-elevated">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Airdrop-стратегии</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Маркетинговая стратегия блокчейн-проектов по бесплатному распределению токенов 
                    среди пользователей для стимулирования роста экосистемы.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доходность:</span>
                      <span className="font-semibold text-primary">$1,000-20,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Риски:</span>
                      <span className="text-destructive">Неопределенность</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* NFT */}
              <Card className="card-elevated">
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">NFT-инвестиции</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Инвестиции в невзаимозаменяемые токены, представляющие уникальные цифровые активы 
                    с различными вариантами использования.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Рынок:</span>
                      <span className="font-semibold text-primary">$2.82 млрд</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Риски:</span>
                      <span className="text-destructive">Высокая волатильность</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RWA */}
              <Card className="card-elevated">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Токенизация реальных активов (RWA)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Процесс представления традиционных финансовых и физических активов в виде криптотокенов 
                    на блокчейне для повышения ликвидности и доступности.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доходность:</span>
                      <span className="font-semibold text-primary">4-15% годовых</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Стабильность:</span>
                      <span className="text-primary">Высокая</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Liquid Restaking */}
              <Card className="card-elevated">
                <CardHeader>
                  <Coins className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Liquid Restaking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Развитие стейкинга, позволяющее использовать застейканные токены (stETH) 
                    для обеспечения дополнительных блокчейн-сервисов через EigenLayer.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доходность:</span>
                      <span className="font-semibold text-primary">5-9% годовых</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Эффективность:</span>
                      <span className="text-primary">Многослойная</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Ключевые особенности и возможности направления
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Системный подход к управлению инновационными инвестициями с контролем рисков
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Ограничения по доле капитала</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Жесткий лимит в 10% от общего управляемого капитала обеспечивает баланс между 
                    инновационным потенциалом и консервативным подходом IKS Capital.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Исследование высокорискованных возможностей без угрозы основному капиталу</li>
                    <li>• Тестирование новых инструментов в контролируемой среде</li>
                    <li>• Постепенное масштабирование успешных стратегий</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Многоэтапная методология отбора</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Четырехуровневый процесс оценки проектов
                  </p>
                  <ol className="text-sm text-muted-foreground space-y-2">
                    <li>1. Технический аудит: Анализ кода, архитектуры, безопасности</li>
                    <li>2. Фундаментальный анализ: Оценка команды, бизнес-модели</li>
                    <li>3. Рыночный анализ: Изучение потенциала роста</li>
                    <li>4. Риск-оценка: Количественная оценка просадки</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Интеграция успешных кейсов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Механизм масштабирования
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Тестирование новых инструментов в течение 6-12 месяцев</li>
                    <li>• При достижении стабильной доходности &gt;15% — перевод в основной портфель</li>
                    <li>• Создание отдельных продуктовых линеек</li>
                    <li>• Образовательные программы для клиентов</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Example */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary">
              Практический кейс диверсификации портфеля ($100,000)
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Распределение инновационного бюджета между семью направлениями с детализацией 
              ожидаемой доходности и рисков
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">25%</div>
                    <div className="text-sm text-muted-foreground">$25,000</div>
                  </div>
                  <h3 className="font-semibold mb-2">Токенизация RWA</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Доходность: 8–15%</div>
                    <div>Риск: до 15%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">20%</div>
                    <div className="text-sm text-muted-foreground">$20,000</div>
                  </div>
                  <h3 className="font-semibold mb-2">ICO/IEO/IDO</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Доходность: 50–200%</div>
                    <div>Риск: до 80%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">15%</div>
                    <div className="text-sm text-muted-foreground">$15,000</div>
                  </div>
                  <h3 className="font-semibold mb-2">Майнинг</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Доходность: 12–18%</div>
                    <div>Риск: до 25%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">10%</div>
                    <div className="text-sm text-muted-foreground">$10,000</div>
                  </div>
                  <h3 className="font-semibold mb-2">NFT-инвестиции</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Доходность: -20% до +150%</div>
                    <div>Риск: до 70%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">10%</div>
                    <div className="text-sm text-muted-foreground">$10,000</div>
                  </div>
                  <h3 className="font-semibold mb-2">Airdrop</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Доходность: 100–300%</div>
                    <div>Риск: до 50%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">10%</div>
                    <div className="text-sm text-muted-foreground">$10,000</div>
                  </div>
                  <h3 className="font-semibold mb-2">Liquid Restaking</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Доходность: 6–11%</div>
                    <div>Риск: до 20%</div>
                  </div>
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
            Готовы исследовать инновационные возможности блокчейн-технологий?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Инновационные направления IKS Capital представляют собой системный подход к исследованию и внедрению 
            передовых блокчейн-технологий, обеспечивающий компании конкурентные преимущества и дополнительные 
            источники доходности при строгом контроле рисков
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

export default Innovations;