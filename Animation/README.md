# Занятие «Анимация»

#### Вопросы по домашкам

* разница между `npx react-native` & `react-native`
* можно ли без cocoapods 
* использование [redux-persist](https://github.com/rt2zz/redux-persist) для сохранения стейта в async storage
* [react-native-navigation](https://github.com/wix/react-native-navigation)

## Цели/темы занятия

 * gif-изображения;
 * анимация;
 * Performance Monitor;
 * вибрация и звук.


### GIF

Поддерживаться by-default на iOS, на android требуется добавить:
```
dependencies {
  implementation 'com.facebook.fresco:fresco:2.0.0'
  implementation 'com.facebook.fresco:animated-gif:2.0.0'
}
```

[WebP](https://en.wikipedia.org/wiki/WebP) -  то же что и GIF, просто другой формат 

### Анимация

1. Animated API
* spring, timing, decay
* анимирование любого компонента (через transform)
* специальные компоненты `Animated.Text`
2. useNativeDriver - только для Opacity and Transform
3. [Animatable](https://github.com/oblador/react-native-animatable) библиотека
4. Lottie
5. [InteractionManager](https://facebook.github.io/react-native/docs/interactionmanager)
6. [Performance](https://facebook.github.io/react-native/docs/performance)

### Практика

1. Сделать из листа картинок с большим количеством анимации и, как следствие, долгим (подвисающим) удалением - отзывчивый и быстрый

### Вибрация и звук

1. [Вибрация](https://facebook.github.io/react-native/docs/vibration)
2. [Звук](https://medium.com/@emmettharper/the-state-of-audio-libraries-in-react-native-7e542f57b3b4) 


### Опционально - Drag & Drop
* Код из [поста](https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0)
* [Официальная документация](https://facebook.github.io/react-native/docs/panresponder)


**Важно помнить:**

Not everything you can do with Animated is currently supported by the native driver. The main limitation is that you can only animate non-layout properties: things like transform and opacity will work, but flexbox and position properties will not. When using Animated.event, it will only work with direct events and not bubbling events. This means it does not work with PanResponder but does work with things like ScrollView#onScroll.

When an animation is running, it can prevent VirtualizedList components from rendering more rows. If you need to run a long or looping animation while the user is scrolling through a list, you can use isInteraction: false in your animation's config to prevent this issue.


## Ссылка на опрос:
https://otus.ru/polls/5404/

## Домашнее задание
