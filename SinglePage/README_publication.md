# Публикация

## Отличия release- и debug-версий

1. JS Bundle
2. symbolic information is not included in build

## App Icon & Splash
https://medium.com/better-programming/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c

https://github.com/crazycodeboy/react-native-splash-screen

## Android

Шаги для подписи и создания устанавливаемого apk - файла. 
https://facebook.github.io/react-native/docs/signed-apk-android 

1. Проверить как подпись создаётся для debug - в gradle file
2. [Создать keystore](https://stackoverflow.com/questions/3997748/how-can-i-create-a-keystore).
* Навигация в android/app
* `keytool -genkey -v -keystore release-key.keystore -alias singleApp -keyalg RSA -keysize 2048 -validity 10000`
3. Создать поля в gradle.properties
```.env
MYAPP_RELEASE_STORE_FILE=release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=singleApp
MYAPP_RELEASE_STORE_PASSWORD=singleapp
MYAPP_RELEASE_KEY_PASSWORD=singleapp
```  
4. И/или указать конфигурацию для подписи release
```.env
release {
    storeFile file(MYAPP_RELEASE_STORE_FILE)
    storePassword MYAPP_RELEASE_STORE_PASSWORD
    keyAlias MYAPP_RELEASE_KEY_ALIAS
    keyPassword MYAPP_RELEASE_KEY_PASSWORD
}
```
5. поменять строку `signingConfig signingConfigs.release`

Всё ли хорошо с данным подходом?


Дополнительные пояснения:
* `enableSeparateBuildPerCPUArchitecture`
* кто может рассказать что такое Hermes engine? Зачем он?
* что такое proguard?
* android bundle? `bundleRelease`

## iOS

С ним всё сложнее. Или проще - как повезёт.

*Автоматический вариант

Manual:
1. Создать AppID (совпадает с bundle identifier)
2. Создать CSR файл. 
3. Создать iOS development & iOS distribution сертификаты (и скачать их)
    * Если нужно где-то подписывать приложение (bitries) - то вас спросят .p12 файл - его нужно делать на компьютере, создавшего сертификат.
    Находите его в keychain - и у него есть опция экспорта
4. Создать provision profile. Для ad-hoc and app-store - они разные. Потому что с помощью них задаётся конфигурация на каких устройствах данное приложение может запускаться.

Общие шаги:
1. Архивироват
2. Распостранить 

## CodePush

## React-native-config

## Hermes
Разница в парсе JS и его запуске!

## Usefull libraries

react-native-localize & i18n-js

lodash & moment


