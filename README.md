# pizza-visual-test

Полностраничные скриншот-тесты для проверки стартовых проектов джуниор-разработчиков. Позволяет:

- Быстро проверять соответствие дизайна макетам
- Сократить ручную проверку
- Обнаружить визуальные регрессы на ранних этапах

## Установка и запуск
- `npm ci` (nodejs 20+)
- `npx playwright install`
- запустить тестовый проект - главная страница должна быть доступна на http://localhost:3000
- `npm run test`

Папка screenshot.test.mjs-snapshots содержит эталонные макеты figma (linux + mac)

## Добавление data-test-id
⚠️ **Для корректного прохождения тестов необходимо добавить атрибут data-test-id с соответствующим значением к указанным ниже элементам:**
- Кнопка "Заказать", добавляющая пиццу в корзину: **add-to-cart-button**
- Кнопка "Ваш заказ", открывающая модалку с корзиной: **cart-button**