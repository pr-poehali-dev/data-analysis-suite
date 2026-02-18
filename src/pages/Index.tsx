import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-indigo-700">DormFix</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#problem" className="hover:text-gray-900">Проблема</a>
            <a href="#how" className="hover:text-gray-900">Как работает</a>
            <a href="#features" className="hover:text-gray-900">Возможности</a>
            <a href="#pricing" className="hover:text-gray-900">Тарифы</a>
            <a href="#reviews" className="hover:text-gray-900">Отзывы</a>
          </nav>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-full px-6">
          Тарифы
        </Button>
      </header>

      {/* 1. Hero */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-indigo-700 text-white text-sm px-4 py-2 rounded-full mb-8">
          <span className="bg-white text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full mr-3">Новинка</span>
          Быстрое решение бытовых проблем в общежитии
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
          Помогаем студентам быстро решать бытовые проблемы{" "}
          <span className="text-indigo-600">в общежитии</span>
        </h1>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-pretty">
          Интеллектуальный сервис, который связывает студентов с ответственными службами — чтобы техника, уборка и свет работали без задержек, а администрация видела полную картину проблем.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-full px-8 py-3 text-base">
            <Icon name="Play" size={18} className="mr-2" />
            Попробовать демо
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-3 bg-transparent text-base border-indigo-200 text-indigo-700 hover:bg-indigo-50">
            <Icon name="Building2" size={18} className="mr-2" />
            Для общежитий — запросить презентацию
          </Button>
        </div>
      </section>

      {/* Partners strip */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-400 mb-6">Подходит для</p>
          <div className="flex items-center justify-center space-x-10 opacity-60 flex-wrap gap-y-4">
            <div className="text-lg font-medium">Общежития вузов</div>
            <div className="text-lg font-bold border-b-2 border-indigo-600 pb-1">Студгородки</div>
            <div className="text-lg font-bold">УК</div>
            <div className="text-lg font-medium">Кампусы</div>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section id="problem" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Проблема</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Хаос с заявками в общежитии
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Студенты не знают, куда обращаться с проблемой, заявки теряются, а ремонт затягивается на недели. Администрация не видит реальной картины.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="EyeOff" size={20} className="text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Заявки теряются</h3>
              <p className="text-gray-600 text-sm">Студент написал в чат, позвонил на вахту — и никто не знает, кто отвечает и когда починят.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Clock" size={20} className="text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Долгое ожидание</h3>
              <p className="text-gray-600 text-sm">Нет прозрачных сроков. Студент не знает, принята ли заявка и когда ждать мастера.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="ShieldAlert" size={20} className="text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Нет ответственных</h3>
              <p className="text-gray-600 text-sm">Непонятно, кто должен чинить — сантехник, электрик или комендант. Заявки перекидывают друг другу.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="BarChart3" size={20} className="text-purple-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Нет аналитики</h3>
              <p className="text-gray-600 text-sm">Администрация не видит, какие проблемы повторяются, где чаще всего ломается техника.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Как это работает</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Три шага к решению проблемы
          </h2>
          <p className="text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            От подачи заявки до уведомления о выполнении
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="MessageSquarePlus" size={28} className="text-indigo-600" />
              </div>
              <div className="text-xs font-bold text-indigo-600 mb-2">ШАГ 1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Студент подаёт заявку</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Выбирает категорию проблемы</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Указывает комнату и корпус</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Прикладывает фото</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Описывает проблему в свободной форме</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Route" size={28} className="text-indigo-600" />
              </div>
              <div className="text-xs font-bold text-indigo-600 mb-2">ШАГ 2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Автоматическая маршрутизация</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Заявка попадает нужному специалисту</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Назначаются сроки выполнения</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Студент видит статус в реальном времени</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={28} className="text-indigo-600" />
              </div>
              <div className="text-xs font-bold text-indigo-600 mb-2">ШАГ 3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Решение и обратная связь</h3>
              <div className="text-sm text-gray-600 text-left space-y-4">
                <div>
                  <p className="font-medium text-gray-800 mb-1">Студент получает:</p>
                  <p>Уведомление о выполнении, возможность оценить качество работы</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Администрация получает:</p>
                  <p>Аналитику по заявкам, рейтинги служб, карту проблемных зон</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who it's for */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Для кого</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Кому подходит, а кому нет
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Подходит</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 mt-0.5 shrink-0" />
                  Общежитиям вузов, которые хотят ускорить обработку заявок
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 mt-0.5 shrink-0" />
                  Студгородкам с несколькими корпусами и службами
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 mt-0.5 shrink-0" />
                  Управляющим компаниям кампусов
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 mt-0.5 shrink-0" />
                  Администрации, которая хочет видеть аналитику по проблемам
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Icon name="XCircle" size={20} className="text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Не подходит</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700">
                  <Icon name="X" size={18} className="text-red-400 mr-3 mt-0.5 shrink-0" />
                  Общежитиям без технических служб и ответственных
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="X" size={18} className="text-red-400 mr-3 mt-0.5 shrink-0" />
                  Организациям, не готовым к цифровизации процессов
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="X" size={18} className="text-red-400 mr-3 mt-0.5 shrink-0" />
                  Малым общежитиям до 50 человек, где всё решается устно
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Возможности</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Как сервис решает проблемы
          </h2>
          <p className="text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Каждая функция закрывает конкретную боль студента или администрации
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Мгновенная подача заявки</h3>
              <p className="text-sm text-gray-500 mb-2">Студенты звонят на вахту и ждут — теперь заявка за 30 секунд с телефона.</p>
              <p className="text-sm text-indigo-600 font-medium">Проблема фиксируется сразу</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Route" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Автоматическая маршрутизация</h3>
              <p className="text-sm text-gray-500 mb-2">Заявки перекидывают между службами — система сама определяет ответственного.</p>
              <p className="text-sm text-indigo-600 font-medium">Нужный мастер получает задачу сразу</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Bell" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Статус в реальном времени</h3>
              <p className="text-sm text-gray-500 mb-2">Студент не знает, что с заявкой — теперь видит статус и сроки онлайн.</p>
              <p className="text-sm text-indigo-600 font-medium">Прозрачность на каждом этапе</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="BarChart3" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Аналитика для администрации</h3>
              <p className="text-sm text-gray-500 mb-2">Нет данных о повторяющихся проблемах — отчёты, тепловые карты, рейтинг служб.</p>
              <p className="text-sm text-indigo-600 font-medium">Решения на основе данных, а не интуиции</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Star" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Оценка качества работ</h3>
              <p className="text-sm text-gray-500 mb-2">Нет обратной связи от жильцов — студенты оценивают каждую выполненную заявку.</p>
              <p className="text-sm text-indigo-600 font-medium">Контроль качества служб</p>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Для студентов — бесплатно</h3>
              <p className="text-sm text-indigo-100 mb-4">Оплачивает общежитие — студент просто подаёт заявку и следит за статусом.</p>
              <Button className="bg-white text-indigo-700 hover:bg-indigo-50 rounded-full px-6 text-sm">
                Попробовать демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Тарифы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Условия для общежитий
          </h2>
          <p className="text-gray-600 mb-12 text-center">Для студентов — всегда бесплатно. Оплачивает администрация.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-sm font-semibold text-gray-500 mb-2">START</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">До 500 жильцов</h3>
              <p className="text-gray-500 text-sm mb-6">Для пилотного запуска</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Приём и трекинг заявок
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Уведомления студентам
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Базовая аналитика
                </li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                Запросить доступ
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-600 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Популярный
              </div>
              <div className="text-sm font-semibold text-indigo-600 mb-2">PRO</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">500 — 5 000 жильцов</h3>
              <p className="text-gray-500 text-sm mb-6">Для студгородков</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Всё из Start
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Автоматическая маршрутизация
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Глубокая аналитика и отчёты
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Интеграция с внутренними системами
                </li>
              </ul>
              <Button className="w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
                Запросить презентацию
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-sm font-semibold text-gray-500 mb-2">ENTERPRISE</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Индивидуально</h3>
              <p className="text-gray-500 text-sm mb-6">Для крупных кампусов</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Всё из Pro
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Кастомизация и API
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Мобильное приложение для мастеров
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Выделенная поддержка
                </li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social proof */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Отзывы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Что говорят пользователи
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
                  <Icon name="GraduationCap" size={18} className="text-indigo-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Студент, 2 курс</p>
                  <p className="text-xs text-gray-500">Общежитие №3</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Раньше кран тёк неделю, теперь чинят за день. Просто подал заявку с телефона."
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
                  <Icon name="Wrench" size={18} className="text-indigo-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Мастер-сантехник</p>
                  <p className="text-xs text-gray-500">Техническая служба</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Вижу все заявки в одном месте с фото и описанием — не трачу время на выяснение деталей."
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
                  <Icon name="Building2" size={18} className="text-indigo-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Комендант</p>
                  <p className="text-xs text-gray-500">Студгородок</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Наконец вижу полную картину: какие проблемы, где и сколько раз. Планирую ремонты на основе данных."
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">x3</div>
                <p className="text-indigo-200 text-sm">быстрее обрабатываются заявки</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">87%</div>
                <p className="text-indigo-200 text-sm">заявок решаются в течение суток</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">94%</div>
                <p className="text-indigo-200 text-sm">студентов довольны сервисом</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-indigo-700 mb-4 md:mb-0">DormFix</div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-900">Условия использования</a>
            <a href="#" className="hover:text-gray-900">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;