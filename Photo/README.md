# Получение фото из галереи

## Цели занятия
1. Научитсья получать изображение из галереи телефона
2. Сжимать фото

Видно. Слышно. Запись!

## План занятия

0. Ответы на вопросы по ДЗ
1. Самый простой и быстрый способ получения изображения [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker).
    - rotation: если некоторые фотографии получаются повёрнутыми на 90 градусов - попробуйте поставить rotation свойство в 360 градусов.
    - часто возможно сталкнуться с [issue](https://github.com/react-native-community/react-native-image-picker/issues/107) 
2. Разрешения (ios с комментом о apple store & android)
3. Если необходимо обрезать фотографию - [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker). Но больше проблем (открытых issue) и меньше звёзд. Одна [проблема](https://github.com/ivpusic/react-native-image-crop-picker/issues/920#issuecomment-570285348) я столкнулся сам, и она, кажется, так и не разрешена.  
4. Отправка изображения на сервер сильно зависит от реализации сервера. [Понятная статья](https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855) про это.
5. Проблемный компонент 

## Дополнения

1. [Firebase](https://invertase.io/oss/react-native-firebase/) (обзор performance monitor, crashlytics, analytics)
2. Альтернатывы crashlytics: [bugsnag](https://www.bugsnag.com/) & [instabug](https://instabug.com/)
3. Базы данных: https://realm.io/docs/javascript/latest/ ; https://github.com/Nozbe/WatermelonDB

## Следующее занятие:

1. widgets на главный экран: [tutorial](https://medium.com/better-programming/react-native-how-to-build-a-home-screen-widget-for-ios-and-android-8b2d7db343cb), [android-example](https://github.com/netbeast/react-native-android-widget-poc). Но нет поддержки "из коробки" - https://react-native.canny.io/feature-requests/p/android-home-screen-widget 
2. ТЗ по проекту

