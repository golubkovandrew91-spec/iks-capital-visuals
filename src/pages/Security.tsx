import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, Eye, Server, AlertTriangle, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary">
              Приоритет №1
            </h1>
            <p className="text-2xl md:text-3xl text-foreground">
              Сохранность капитала инвесторов превыше всего
            </p>
          </div>
        </div>
      </section>

      {/* Exchange Diversification */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Диверсификация хранения средств
            </h2>
            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-8">Распределение по биржам</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <Card className="card-elevated text-center group">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Server className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-bold">Binance</h4>
                  </CardContent>
                </Card>

                <Card className="card-elevated text-center group">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Server className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-bold">Bybit</h4>
                  </CardContent>
                </Card>

                <Card className="card-elevated text-center group">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Server className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-bold">Bitget</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl text-center">Критерии выбора бирж</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Лицензирование в уважаемых юрисдикциях
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Наличие фондов страхования пользователей
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Многолетняя репутация без крупных инцидентов
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exchange Resilience Example */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              Пример устойчивости биржи при кризисных событиях
            </h2>
            
            <div className="mb-12">
              <p className="text-lg text-foreground text-center max-w-4xl mx-auto leading-relaxed">
                В 2024 году Bybit стала мишенью хакерской атаки: злоумышленники получили доступ к одному из горячих кошельков биржи. 
                Несмотря на это, баланс пользователей остался полностью неизменным — ни один аккаунт не понёс потерь. 
                Такое устойчивое положение обеспечивается следующими механизмами:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <Card className="card-elevated">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Страховой фонд</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Bybit формирует страховой резерв, пополняемый за счёт части комиссий от торгов. 
                    При любых внештатных списаниях компенсации покрываются из этого фонда.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Lock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Разделение активов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Большая часть криптовалют хранится в мультиподписных холодных кошельках. 
                    Только 5% средств держится в горячих кошельках для обеспечения торговли.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Резервное покрытие 1:1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Bybit регулярно публикует результаты аудита, подтверждающие 100% покрытие обязательств. 
                    Даже при потере горячих кошельков платформа восстановит баланс.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Eye className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Система контроля рисков</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Автоматизированные системы отслеживают аномалии и инициируют аварийные протоколы 
                    с временной заморозкой и ручным пересмотром операций.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="card-elevated bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="pt-8">
                <p className="text-foreground text-center leading-relaxed font-medium">
                  В совокупности эти меры позволяют Bybit оставаться работоспособной и гарантировать сохранность средств клиентов 
                  даже при серьёзных инцидентах, что делает её надёжным звеном в схеме диверсификации хранения.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Security Elements */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Ключевые элементы безопасности
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <CardHeader>
                  <Lock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Холодное хранение для долгосрочных позиций</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Использование аппаратных кошельков (Ledger, Trezor)</li>
                    <li>• Мультиподписные схемы (multisig) для крупных сумм</li>
                    <li>• Географическое распределение устройств хранения</li>
                    <li>• Регулярное тестирование процедур восстановления</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Операционная безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Многофакторная аутентификация на всех аккаунтах</li>
                    <li>• Регулярная смена паролей и ключей доступа</li>
                    <li>• Ограничение IP-адресов для доступа к счетам</li>
                    <li>• Мониторинг всех транзакций в режиме реального времени</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Eye className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Система мониторинга</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Круглосуточное наблюдение за всеми позициями</li>
                    <li>• Автоматические уведомления о критических событиях</li>
                    <li>• Ежедневные отчёты о состоянии портфелей</li>
                    <li>• Еженедельный анализ результатов и корректировка стратегий</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Minimization */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Комплексная система минимизации рисков
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                  <CardTitle>Рыночные риски</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Риск: Общее падение криптовалютного рынка</h4>
                    <p className="text-xs text-muted-foreground mb-2">Минимизация:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Хеджирование через пут-опционы</li>
                      <li>• Диверсификация в стейблкоины</li>
                      <li>• Активное использование коротких позиций</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Риск: Низкая корреляция между активами</h4>
                    <p className="text-xs text-muted-foreground mb-2">Минимизация:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Регулярный анализ корреляций</li>
                      <li>• Ребалансировка портфеля</li>
                      <li>• Использование различных типов активов</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Server className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Технологические риски</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Риск: Взлом DeFi-протоколов</h4>
                    <p className="text-xs text-muted-foreground mb-2">Минимизация:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Использование только проверенных протоколов</li>
                      <li>• Лимитирование экспозиции на протокол</li>
                      <li>• Страхование через Nexus Mutual</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Риск: Ошибки в смарт-контрактах</h4>
                    <p className="text-xs text-muted-foreground mb-2">Минимизация:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Тщательный анализ кода</li>
                      <li>• Постепенное увеличение экспозиции</li>
                      <li>• Мониторинг экспертных мнений</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Операционные риски</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Риск: Человеческий фактор в трейдинге</h4>
                    <p className="text-xs text-muted-foreground mb-2">Минимизация:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Строгие риск-менеджмент процедуры</li>
                      <li>• Автоматизация через алгоритмы</li>
                      <li>• Постоянное обучение персонала</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Риск: Регуляторные изменения</h4>
                    <p className="text-xs text-muted-foreground mb-2">Минимизация:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Мониторинг правовых изменений</li>
                      <li>• Диверсификация по юрисдикциям</li>
                      <li>• Готовность к быстрой адаптации</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Полная прозрачность перед инвесторами
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Регулярная отчётность</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Ежемесячные отчёты:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Результаты по каждому направлению</li>
                    <li>• Анализ рыночных условий и принятых решений</li>
                    <li>• Планы на следующий месяц</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Eye className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Квартальные отчёты</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Комплексный анализ результатов</li>
                    <li>• Корректировка стратегий на основе результатов</li>
                    <li>• Выплата процентов инвесторам</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Прозрачность операций</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Отчёт в Telegram-боте о текущем состоянии портфеля</li>
                    <li>• История всех транзакций и операций</li>
                    <li>• Реальный P&L по всем стратегиям</li>
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
            Хотите обсудить систему безопасности капитала и минимизацию рисков?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию экспертов IKS Capital
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

export default Security;