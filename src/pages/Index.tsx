import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-indigo-700">EduPath</div>
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
          Осознанный выбор курсов для студентов
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
          Помогаем студентам выбирать правильные курсы и строить{" "}
          <span className="text-indigo-600">осознанную траекторию</span>
        </h1>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-pretty">
          Интеллектуальный сервис, который связывает компетенции, дисциплины и карьерные пути — чтобы студент учился с пользой, а вуз получал глубокую аналитику по образовательным потребностям.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-full px-8 py-3 text-base">
            <Icon name="Play" size={18} className="mr-2" />
            Попробовать демо
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-3 bg-transparent text-base border-indigo-200 text-indigo-700 hover:bg-indigo-50">
            <Icon name="Building2" size={18} className="mr-2" />
            Для вузов — запросить презентацию
          </Button>
        </div>
      </section>

      {/* Partners strip */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-400 mb-6">Подходит для</p>
          <div className="flex items-center justify-center space-x-10 opacity-60 flex-wrap gap-y-4">
            <div className="text-lg font-medium">Технические вузы</div>
            <div className="text-lg font-bold border-b-2 border-indigo-600 pb-1">IT-факультеты</div>
            <div className="text-lg font-bold">EdTech</div>
            <div className="text-lg font-medium">Образовательные центры</div>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section id="problem" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Проблема</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Хаос в выборе курсов
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Студенты теряются среди десятков дисциплин, не знают, что выбрать и как это влияет на карьеру. Университеты дают список курсов, но не дают траекторию.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="EyeOff" size={20} className="text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Непрозрачность</h3>
              <p className="text-gray-600 text-sm">Нет связки «курс — компетенции — профессия». Студент не видит, к чему приведёт выбор.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={20} className="text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Нет персонализации</h3>
              <p className="text-gray-600 text-sm">Все студенты получают одинаковый набор рекомендаций, без учёта целей и интересов.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Dice5" size={20} className="text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Интуитивный выбор</h3>
              <p className="text-gray-600 text-sm">Решение «наугад», без данных, отзывов и анализа рынка труда.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <Icon name="HelpCircle" size={20} className="text-purple-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Нехватка информации</h3>
              <p className="text-gray-600 text-sm">О содержании курса, преподавателях, опыте реальных студентов — данных просто нет.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-indigo-600 font-semibold mb-4 text-center">Как это работает</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Три шага к осознанному выбору
          </h2>
          <p className="text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            От анализа профиля до поддержки на всём пути обучения
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="UserSearch" size={28} className="text-indigo-600" />
              </div>
              <div className="text-xs font-bold text-indigo-600 mb-2">ШАГ 1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Анализ профиля студента</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Интересы и карьерные цели</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Уже освоенные курсы</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Навыки и их уровень</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Актуальные компетенции на рынке</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Route" size={28} className="text-indigo-600" />
              </div>
              <div className="text-xs font-bold text-indigo-600 mb-2">ШАГ 2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Построение траектории</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Рекомендации курсов и активностей</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Связь модулей с компетенциями</li>
                <li className="flex items-start"><Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />Прогноз карьерной траектории</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={28} className="text-indigo-600" />
              </div>
              <div className="text-xs font-bold text-indigo-600 mb-2">ШАГ 3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Поддержка на всём пути</h3>
              <div className="text-sm text-gray-600 text-left space-y-4">
                <div>
                  <p className="font-medium text-gray-800 mb-1">Студент видит:</p>
                  <p>Отзывы, трудоёмкость, альтернативы, визуализацию прогресса</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Вуз получает:</p>
                  <p>Аналитику, тепловые карты интересов, данные для корректировки планов</p>
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
                  ВУЗам, которые хотят повысить вовлечённость и успеваемость
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 mt-0.5 shrink-0" />
                  Факультетам технических и IT-направлений
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 mt-0.5 shrink-0" />
                  Студентам 1–3 курсов, которые ещё выбирают карьеру
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 mt-0.5 shrink-0" />
                  Образовательным центрам, где важно понимание компетенций
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
                  Университетам, где нет выбора дисциплин
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="X" size={18} className="text-red-400 mr-3 mt-0.5 shrink-0" />
                  Тем, кто не готов интегрировать модуль или делиться академическими данными
                </li>
                <li className="flex items-start text-gray-700">
                  <Icon name="X" size={18} className="text-red-400 mr-3 mt-0.5 shrink-0" />
                  Студентам, которые уже чётко определили карьерный путь
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
            Как продукт решает проблему
          </h2>
          <p className="text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Каждая функция закрывает конкретную боль студента или вуза
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Target" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Персональные рекомендации</h3>
              <p className="text-sm text-gray-500 mb-2">Студенты выбирают интуитивно — алгоритм подбирает курсы под цели.</p>
              <p className="text-sm text-indigo-600 font-medium">Не тратят семестры впустую</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Network" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Курс — компетенции — профессия</h3>
              <p className="text-sm text-gray-500 mb-2">Студент не понимает, к чему ведёт курс — визуализация связей всё покажет.</p>
              <p className="text-sm text-indigo-600 font-medium">Осознанное планирование карьеры</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="MessageSquare" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Отзывы и рейтинги</h3>
              <p className="text-sm text-gray-500 mb-2">Нет данных от реальных проходивших — отзывы, оценки, средняя нагрузка.</p>
              <p className="text-sm text-indigo-600 font-medium">Уверенность перед выбором</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="BarChart3" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Аналитика для вузов</h3>
              <p className="text-sm text-gray-500 mb-2">Непонимание интересов студентов — отчёты, граф компетенций, карта востребованности.</p>
              <p className="text-sm text-indigo-600 font-medium">Обновление учебных планов на основе данных</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Map" size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Визуальные траектории</h3>
              <p className="text-sm text-gray-500 mb-2">Невозможно увидеть путь целиком — карта навыков и шаги роста.</p>
              <p className="text-sm text-indigo-600 font-medium">Студент понимает, куда идёт</p>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Для студентов — бесплатно</h3>
              <p className="text-sm text-indigo-100 mb-4">Оплачивает вуз — студент просто пользуется и выбирает курсы осознанно.</p>
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
            Условия для вузов
          </h2>
          <p className="text-gray-600 mb-12 text-center">Для студентов — всегда бесплатно. Оплачивает вуз.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-sm font-semibold text-gray-500 mb-2">START</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">До 500 студентов</h3>
              <p className="text-gray-500 text-sm mb-6">Для пилотного запуска</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Базовые рекомендации
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Каталог курсов
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Отзывы студентов
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
              <h3 className="text-2xl font-bold text-gray-900 mb-1">500 — 5 000 студентов</h3>
              <p className="text-gray-500 text-sm mb-6">Для масштабирования</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Всё из Start
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Образовательные траектории
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Глубокая аналитика
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Интеграция с LMS
                </li>
              </ul>
              <Button className="w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
                Запросить презентацию
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="text-sm font-semibold text-gray-500 mb-2">ENTERPRISE</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Индивидуально</h3>
              <p className="text-gray-500 text-sm mb-6">Для крупных вузов</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Всё из Pro
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Кастомизация и API
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />Отчёты для аккредитации
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Icon name="Check" size={16} className="text-green-500 mr-2 shrink-0" />AI-модули
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
                  <p className="text-xs text-gray-500">ИРИТ-РТФ</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Я наконец понял, какие курсы реально нужны для моей специализации."
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
                  <Icon name="BookOpen" size={18} className="text-indigo-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Преподаватель</p>
                  <p className="text-xs text-gray-500">Кафедра ИТ</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Сервис помогает выявить востребованные компетенции."
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
                  <Icon name="Building2" size={18} className="text-indigo-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Администрация</p>
                  <p className="text-xs text-gray-500">Учебный отдел</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Мы используем аналитику для обновления учебных планов."
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-indigo-600 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">+32%</div>
                <p className="text-indigo-200 text-sm">студентов стали выбирать курсы осознанно</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+18%</div>
                <p className="text-indigo-200 text-sm">вовлечённости в образовательный процесс</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">94%</div>
                <p className="text-indigo-200 text-sm">студентов считают рекомендации полезными</p>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Статьи и исследования</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="FileText" size={20} className="text-indigo-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">Кейс в рамках ИРИТ-РТФ</h4>
                <p className="text-xs text-gray-500">Как внедрили рекомендательную систему</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="TrendingUp" size={20} className="text-indigo-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">Топ-компетенций для IT</h4>
                <p className="text-xs text-gray-500">Аналитика по IT-специальностям</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Compass" size={20} className="text-indigo-600" />
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">Как построить траекторию</h4>
                <p className="text-xs text-gray-500">Гайд для студентов вуза</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-indigo-700 mb-4 md:mb-0">EduPath</div>
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