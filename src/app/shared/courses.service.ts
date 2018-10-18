import {Injectable} from '@angular/core';

export interface Courses {
    id: number;
    name: string;
    description: string;    
    lessons: Array<string>;
    img: string;
}
@Injectable()
export class CoursesService {
   private courses: Courses[] = [
    {id: 1,
        name: 'HTML5 и CSS3 Starter',
    description: 'The course consists of eight logically interconnected lessons, in which the learner will get acquainted with the HTML markup language, learn how to create a html page. Familiarizes with Cascading Style Sheets - CSS for web page design.',
    
    lessons: [
        'Введение в HTML5',
         'Работа с изображениями, таблицами и списками',
          'Каскадные таблицы стилей CSS3 часть 1',
           'Каскадные таблицы стилей CSS3 часть 2',
           'Позиционирование элементов. Виды верстки.',
            'Семантика HTML5. Новые теги.',
             'Формы. Метатеги.',
              'Макет страницы. Практика'],
    img: 'src/assets/html5css3.jpg'},
    {id: 2,
        name: 'JavaScript Essential',
    description: 'This video course contains a set of video lessons that will help novice developers to understand JavaScript from scratch. During the course, the work will be considered with the conditions and cycles, also the coach will tell you about the implementation of classes and objects that help you understand the basics of object-oriented programming.',
   
    lessons: [
        'Введение в JavaScript',
         'Логические структуры',
          'Массивы',
           'Функции',
           'Объекты',
            'Практика',
             'Практика',
              ],
    img: 'src/assets/JS.png'},
    {id: 3,
        name: 'JavaScript Advanced',
    description: 'You will learn how to work with objects, create constructor functions, work with the DOM tree of a page, and process events of document elements. This video course will help you to move to the new level of ownership of the most common scripting programming language.',
   
    lessons: [
        'Конструкторы и прототипы',
         'Работа с документами',
          'Window. Регулярные выражения',
           'CSS и JavaScript',
           'События и обработка событий (Часть 1)',
            'События и обработка событий (Часть 2)',
             'Формы и элементы форм',
             'Cookies и механизмы сохранения данных на клиенте',
             'Работа с графикой на стороне клиента',
             'Ajax и работа с HTTP протоколами'
              ],
    img: 'src/assets/JS2.png'},
    {id: 4,
        name: 'Bootstrap 4',
    description: 'Bootstrap 4 is an HTML, CSS, JS framework for crossbrowser web-based interfaces development. Bootstrap presents a toolkit from Twitter designed to facilitate the development of web applications and websites, uses CSS and HTML for printing, forms, buttons, tables, grids, navigation, etc., as well as additional JavaScript extensions that simplify the work of the web developer.',
   
    lessons: [
        'Знакомство с Bootstrap 4',
         'Типографика Bootstrap 4',
          'Компоненты Bootstrap 4',
           'JavaScript Bootstrap 4',
           'Утилиты Bootstrap 4',
           
              ],
    img: 'src/assets/bootstrap.jpg'},
    {id: 5,
        name: 'HTML5&CSS3 Advanced',
    description: 'The course consists of 7 lessons, where students can familiarize themselves with the new features of HTML5 & CSS3. Students will consider the use of flexible layout, implementation of animation, use of browser vaults and multithreading, as well as connecting preprocessor and assembler to display the cross-browser of a web page on various devices.',
   
    lessons: [
        'Введение, микроданные и пользовательские данные. Геолокация',
         'Canvas',
          'Хранение данных на стороне клиента. Audio, Video',
           'Принципы построения разметки, Flex, Grid, Шаблоны сайтов',
           'Анимации и градиенты',
            'SASS основы',
             'Практика'   ],
    img: 'src/assets/html5&css3adv.jpg'},
    {id: 6,
        name: 'TypeScript fundamentals',
    description: 'You will learn how to work with objects, create constructor functions, work with the DOM tree of a page, and process events of document elements. This video course will help you to move to the new level of ownership of the most common scripting programming language.',
   
    lessons: [
        'Variables and Functions',
         'Classes and Interfaces',
          'Generics',
           'Modules and Namespaces',
           'Practice'              ],
    img: 'src/assets/typescript.png'},
    {id: 7,
        name: 'Angular essential',
    description: 'The Angular Essential video course is designed for studying Angular, which is a redesigned and improved version of the popular AngularJS framework.',
   
    lessons: [
        'Introduction',
         'Components',
          'Directives',
           'Services',
           'Routing',
            'Forms',
             'HTTP'
              ],
    img: 'src/assets/Angular.png'},
    ];
    getAll(): Courses[] {
        return this.courses;
    }
    getOne(id: number): Courses {
        return this.courses.find((elem) => elem.id === id);
    }
}