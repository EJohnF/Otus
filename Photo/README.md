# Получение фото из галереи

## Цели занятия
1. Научитсья получать изображение из галереи телефона
2. Сохранять фото в галерею
3. Сжимать фото

Видно. Слышно. Запись!

## План занятия

0. Ответы на вопросы по ДЗ
1. Самый простой и быстрый способ получения изображения [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker).
    - rotation: если некоторые фотографии получаются повёрнутыми на 90 градусов - попробуйте поставить rotation свойство в 360 градусов. 
2. Разрешения (ios с комментом о apple store & android)
3. Если необходимо обрезать фотографию - [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker). Но больше проблем (открытых issue) и меньше звёзд. Одна [проблема](https://github.com/ivpusic/react-native-image-crop-picker/issues/920#issuecomment-570285348) я столкнулся сам, и она, кажется, так и не разрешена.  
4. Отправка изображения на сервер сильно зависит от реализации сервера. [Понятная статья](https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855) про это.
5. Проблемный компонент 

## Дополнения

1. [Firebase](https://invertase.io/oss/react-native-firebase/) (обзор performance monitor, crashlytics, analytics)
2. Альтернатывы crashlytics: [bugsnag](https://www.bugsnag.com/) & [instabug](https://instabug.com/)
