# Занятие «Анимация»

## Цели/темы занятия

 * gif-изображения;
 * анимация;
 * Performance Monitor;
 * вибрация и звук.


### GIF

Поддерживаться by-default на iOS, на android требуется добавить:
```
dependencies {
  // If your app supports Android versions before Ice Cream Sandwich (API level 14)
  implementation 'com.facebook.fresco:animated-base-support:1.10.0'

  // For animated GIF support
  implementation 'com.facebook.fresco:animated-gif:1.12.0'

  // For WebP support, including animated WebP
  implementation 'com.facebook.fresco:animated-webp:1.10.0'
  implementation 'com.facebook.fresco:webpsupport:1.10.0'

  // For WebP support, without animations
  implementation 'com.facebook.fresco:webpsupport:1.10.0'
}
```
