import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const categories = [
    { name: 'Художественная литература', icon: 'BookOpen', count: '2,847' },
    { name: 'Научная литература', icon: 'Microscope', count: '1,245' },
    { name: 'Справочная литература', icon: 'Search', count: '856' },
    { name: 'Учебная литература', icon: 'GraduationCap', count: '1,567' },
    { name: 'Техническая литература', icon: 'Settings', count: '934' },
    { name: 'Мемуарная литература', icon: 'User', count: '423' },
    { name: 'Публицистика', icon: 'FileText', count: '678' }
  ];

  const featuredBooks = [
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: '2,890₽',
      country: 'Великобритания',
      cover: '/img/dac932a5-0659-4d06-8f51-9922405a382e.jpg',
      category: 'Художественная'
    },
    {
      title: 'Sapiens: A Brief History',
      author: 'Yuval Noah Harari',
      price: '3,250₽',
      country: 'Израиль',
      cover: '/img/dac932a5-0659-4d06-8f51-9922405a382e.jpg',
      category: 'Научная'
    },
    {
      title: 'Educated',
      author: 'Tara Westover',
      price: '2,650₽',
      country: 'США',
      cover: '/img/dac932a5-0659-4d06-8f51-9922405a382e.jpg',
      category: 'Мемуарная'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={24} className="text-rose-500" />
              <h1 className="text-xl font-semibold text-slate-900">Global Reads
</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Каталог</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Доставка</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">О нас</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingCart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-400 to-rose-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Книги из других стран
                <br />
                <span className="text-rose-100">недоступные в России</span>
              </h2>
              <p className="text-xl mb-8 text-rose-50">Получите доступ к мировой литературе с доставкой из Европы, Дубай и других стран. Эксклюзивные издания, которые нельзя купить в российских магазинах</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-rose-500 hover:bg-rose-50">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-500">
                  Узнать о доставке
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/dac932a5-0659-4d06-8f51-9922405a382e.jpg" 
                alt="Международные книги" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={20} className="text-rose-500" />
                  <span className="text-sm font-medium text-slate-900">Доставка 14-21 день</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Категории литературы</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-100 transition-colors">
                    <Icon name={category.icon} size={24} className="text-rose-500" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{category.name}</h4>
                  <p className="text-sm text-slate-600">{category.count} книг</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">Рекомендуемые книги</h3>
            <Button variant="outline">
              Смотреть всё
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] bg-slate-100">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">{book.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="MapPin" size={12} className="mr-1" />
                      {book.country}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">{book.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{book.author}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-rose-500">{book.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={14} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Delivery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Международная доставка</h3>
              <p className="text-slate-600 mb-8 text-lg">
                Мы работаем с надёжными логистическими партнёрами для доставки книг 
                из Европы, США, Канады и других стран прямо к вам домой.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Package" size={20} className="text-rose-300" />
                  <span>Безопасная упаковка для международной пересылки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-rose-300" />
                  <span>Страхование всех посылок</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-rose-300" />
                  <span>Доставка от 14 до 21 рабочего дня</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CreditCard" size={20} className="text-rose-300" />
                  <span>Оплата российскими картами</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-rose-100 shadow-lg">
              <h4 className="text-xl font-semibold mb-6 text-slate-900">Стоимость доставки</h4>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-rose-100">
                  <span className="text-slate-700">Европа (1-3 книги)</span>
                  <span className="font-semibold text-rose-600">от 1,200₽</span>
                </div>
                <div className="flex justify-between py-3 border-b border-rose-100">
                  <span className="text-slate-700">США/Канада (1-3 книги)</span>
                  <span className="font-semibold text-rose-600">от 1,800₽</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-700">Другие страны</span>
                  <span className="font-semibold text-rose-600">от 2,200₽</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-rose-500 hover:bg-rose-600">
                Рассчитать доставку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Globe" size={20} className="text-rose-500" />
                <span className="font-semibold text-slate-900">International Books</span>
              </div>
              <p className="text-slate-600 text-sm">
                Ваш надёжный источник книг из других стран с быстрой и безопасной доставкой.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Категории</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Художественная</a></li>
                <li><a href="#" className="hover:text-slate-900">Научная</a></li>
                <li><a href="#" className="hover:text-slate-900">Техническая</a></li>
                <li><a href="#" className="hover:text-slate-900">Учебная</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Помощь</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Доставка</a></li>
                <li><a href="#" className="hover:text-slate-900">Оплата</a></li>
                <li><a href="#" className="hover:text-slate-900">Возврат</a></li>
                <li><a href="#" className="hover:text-slate-900">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Контакты</h5>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>info@international-books.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-600">
            © 2024 International Books. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;