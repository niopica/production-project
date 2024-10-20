npm i -D webpack@5.69.1 webpack-cli@4.9.2
npm i -D html-webpack-plugin@5.5.0
npm i -D typescript@4.5.5 ts-loader@9.2.6
npm i -D webpack-dev-server@4.7.4 @types/webpack-dev-server@4.7.2
npm install webpack-cli@4.10.0 - Без нее devServer не работает
не указаны типы с 2 - 3 4 урока

8 777 847 1363 Работа

# Слои

1. app - shared - entities - features - widgets - pages
2. pages - shared - entities - features - widgets
3. widgets - shared - entities - features
4. features - shared - entities
5. entities - shared
6. shared

Сущности
Пользователь
Статья
Комментарий
Корзина
Комментарий
Корзина
Реквизиты
Договор

Фичи
Регистрация
Покупка
Добавление в корзину
Удаление профиля
Восстановление пароля

useState(0) начальное состояние 0, при нажатии кнопки увелечения setCount,
react запоминает наше значение index 1, и вызывает новый рендер компонента
3 шаг наш компонент рендерится повторно 2 раз, реакт видит что наш useState(0),
но реакт помнит на пред шаге, мы сохранили index = 1, где он возращает
новый массив state, где первое значение 1, второй функция изменения состояния
и так повторяется по кругу

7:18
20 min + 1