import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Event {
  id: number;
  title: string;
  sport: string;
  date: string;
  duration: string;
  location: string;
  price: string;
  spots: number;
  level: string;
  image: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Футбольный сбор',
    sport: 'Футбол',
    date: '15-22 января',
    duration: '7 дней',
    location: 'Турция, Анталья',
    price: '45 000 ₽',
    spots: 8,
    level: 'Любой',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Волейбольный лагерь',
    sport: 'Волейбол',
    date: '5-12 февраля',
    duration: '7 дней',
    location: 'Сочи, Красная поляна',
    price: '38 000 ₽',
    spots: 12,
    level: 'Средний',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Баскетбольный интенсив',
    sport: 'Баскетбол',
    date: '20-27 февраля',
    duration: '7 дней',
    location: 'Москва, ЦСП',
    price: '32 000 ₽',
    spots: 5,
    level: 'Продвинутый',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'Теннисная академия',
    sport: 'Теннис',
    date: '10-17 марта',
    duration: '7 дней',
    location: 'Испания, Коста-дель-Соль',
    price: '52 000 ₽',
    spots: 15,
    level: 'Любой',
    image: '/placeholder.svg'
  }
];

const testimonials = [
  {
    name: 'Алексей Морозов',
    role: 'Футболист',
    rating: 5,
    text: 'Отличная организация сбора! Профессиональные тренеры, современная база, качественное питание. Прогресс заметен уже после недели тренировок.',
    avatar: '/placeholder.svg'
  },
  {
    name: 'Мария Соколова',
    role: 'Волейболистка',
    rating: 5,
    text: 'Третий раз участвую в сборах. Всегда на высоте - и условия, и программа тренировок. Команда профессионалов своего дела!',
    avatar: '/placeholder.svg'
  },
  {
    name: 'Дмитрий Князев',
    role: 'Баскетболист',
    rating: 5,
    text: 'Рекомендую всем спортсменам! Отличное место для прокачки навыков и знакомства с единомышленниками.',
    avatar: '/placeholder.svg'
  }
];

const bases = [
  {
    name: 'База "Олимпийский резерв"',
    location: 'Сочи, Красная Поляна',
    description: 'Современный спортивный комплекс с олимпийскими стандартами',
    features: ['2 игровых зала', 'Бассейн 50м', 'Тренажерный зал', 'Медицинский центр'],
    image: '/placeholder.svg'
  },
  {
    name: 'Спортивный центр "Чемпион"',
    location: 'Турция, Анталья',
    description: 'Премиум база для футбольных и волейбольных сборов',
    features: ['3 поля с подогревом', 'Крытый манеж', 'СПА-центр', 'Ресторан'],
    image: '/placeholder.svg'
  },
  {
    name: 'Академия "Прорыв"',
    location: 'Москва, ЦСП',
    description: 'Городская база для интенсивных тренировок',
    features: ['Крытые корты', '2 спортзала', 'Кафе', 'Проживание рядом'],
    image: '/placeholder.svg'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('main');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Icon name="Trophy" className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">SportCamp</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('main')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('events')} className="text-sm font-medium hover:text-primary transition-colors">
              Календарь
            </button>
            <button onClick={() => scrollToSection('bases')} className="text-sm font-medium hover:text-primary transition-colors">
              Базы
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <Button onClick={() => scrollToSection('contacts')}>Записаться</Button>
        </div>
      </header>

      <section id="main" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/a010a460-2fd6-4656-a65a-7dcbd7c24102/files/3eeb6c8c-33a1-43f2-802b-22b9a26ccd46.jpg')` }}
        />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Профессиональные спортивные сборы
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Достигай новых высот в спорте
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Организуем спортивные сборы и мероприятия по всем видам спорта. Профессиональные тренеры, современные базы, индивидуальный подход.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('events')} className="gap-2">
                <Icon name="Calendar" className="h-5 w-5" />
                Смотреть календарь
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="gap-2">
                <Icon name="Phone" className="h-5 w-5" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-muted/30 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/a010a460-2fd6-4656-a65a-7dcbd7c24102/files/1d974674-7e6f-4a6e-87c2-bb4306c67254.jpg')` }}
        />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Icon name="Users" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Опытные тренеры</CardTitle>
                <CardDescription>
                  Работаем с мастерами спорта и заслуженными тренерами России
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Лучшие базы</CardTitle>
                <CardDescription>
                  Современные спортивные комплексы в России и за рубежом
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Результат</CardTitle>
                <CardDescription>
                  Гарантируем прогресс и улучшение спортивных показателей
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="events" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Календарь сборов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий сбор и запишитесь онлайн. Места ограничены!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {mockEvents.map((event, index) => (
              <Card key={event.id} className="hover-lift overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Dumbbell" className="h-16 w-16 text-primary/40" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{event.sport}</Badge>
                    <Badge variant="outline" className="gap-1">
                      <Icon name="Users" className="h-3 w-3" />
                      {event.spots} мест
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" className="h-4 w-4" />
                      <span>{event.date} • {event.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Target" className="h-4 w-4" />
                      <span>Уровень: {event.level}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{event.price}</div>
                      <div className="text-sm text-muted-foreground">за участника</div>
                    </div>
                    <Button onClick={() => { setSelectedEvent(event); scrollToSection('contacts'); }} className="gap-2">
                      <Icon name="CheckCircle" className="h-4 w-4" />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="bases" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши базы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Современные спортивные комплексы с лучшей инфраструктурой
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bases.map((base, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Icon name="Building2" className="h-16 w-16 text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{base.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" className="h-4 w-4" />
                    <span>{base.location}</span>
                  </div>
                  <CardDescription className="mt-2">{base.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {base.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/a010a460-2fd6-4656-a65a-7dcbd7c24102/files/44a84014-edb5-4bbf-9cb5-f8027422d370.jpg')` }}
        />
        <div className="container relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы спортсменов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Что говорят участники наших сборов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card className="hover-lift">
              <CardHeader>
                {selectedEvent && (
                  <div className="mb-4 p-4 bg-primary/5 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Выбранное мероприятие:</div>
                    <div className="font-semibold">{selectedEvent.title}</div>
                    <div className="text-sm text-muted-foreground">{selectedEvent.date} • {selectedEvent.location}</div>
                  </div>
                )}
                <CardTitle>Форма записи</CardTitle>
                <CardDescription>
                  Укажите ваши данные для бронирования места
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя и фамилия</label>
                    <div className="relative">
                      <Icon name="User" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Иван Иванов"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <div className="relative">
                      <Icon name="Phone" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Icon name="Mail" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="email" 
                        placeholder="ivan@example.com"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <textarea 
                      placeholder="Расскажите о вашем опыте в спорте..."
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Icon name="Send" className="h-4 w-4" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="text-center">
                  <Icon name="Phone" className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Телефон</CardTitle>
                  <CardDescription>+7 (999) 123-45-67</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Icon name="Mail" className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>info@sportcamp.ru</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Icon name="MapPin" className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Офис</CardTitle>
                  <CardDescription>Москва, ул. Спортивная, 1</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Icon name="Trophy" className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold">SportCamp</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 SportCamp. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}