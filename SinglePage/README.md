# React-Native. Занятие 3. Создание одностраничного приложения

## Цели занятия (после занятия смогут...)
1. Подключать сторонние библеотеки к проекту
2. Читать документацию и искать в ней необходимые моменты
3. Находить проблемы когда приложение падает без "красного экрана"
4. Создавать собственные компоненты

### Для запуска текущего проекта:
0. Настройка окружения (должно было быть реализовано в течении/после предыдущих занятий)
1. `yarn install`
2. `cd ios && pod install`
3. `cd .. && react-native run-ios`

~~note: запуск тестировался только на iOS, возможны проблемы при запуске на Android~~

## План занятия

1. Создать новый проект
2. [Место, брать идеи для использования библиотк](https://github.com/jondot/awesome-react-native)
3. Создание простейщей структуры проекта - экран и папка для компонент
4. [Библиотека компонент](https://github.com/react-native-elements/react-native-elements)
5. Использование иконок (они SVG!) - как их искать. Добавить в xcode
6. ListItem - для отображения профиля и кнопки меню (с использованием Alert)
7. [Галлерея картинок](https://github.com/archriss/react-native-snap-carousel)
8. Pagination компонент. Использование useState
9. Like! [Lottie animation](https://github.com/react-native-community/lottie-react-native)
10. Проблемы при установке? 
11. Создать красивое [сердечко](https://lottiefiles.com/12363-heart)
12. Практика - ввод текста. Создать поле ввода комментария с кнопкой отправить

## Подсказки для практики
1. Изменять файл Comment
2. Необходимые импорты уже в файле (можно использовать и другие, если есть желание)
3. Смотреть документацию [TextInput](https://facebook.github.io/react-native/docs/textinput)

## Дополнение
1. Использование Theme. Что такое [Context](https://reactjs.org/docs/context.html)
2. Смотреть иерархию компонентов в XCode
3. Добавить возможность [выбирать фотки из Галлереи](https://github.com/react-native-community/react-native-image-picker)

## Встречаемые проблемы

List:
* [Put fonts to plist file](https://github.com/oblador/react-native-vector-icons#installation)
* [Put permissions to plist](https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Install.md)
* [Lottie installation problem](https://github.com/react-native-community/lottie-react-native/issues/575)

## Домашнее задание

https://docs.google.com/document/d/1bQw1Cxue9iXk76yPe4HcNO5lXJ6OSowwf98ynUlKXeA/edit

## Ссылка на опрос

https://otus.ru/polls/5400/
