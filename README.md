# CRM SKB - Система управления клиентами компании

____
Запуск сервера базы данных осуществляется из папки ./server командой `node index.js`. Доступ к базе осуществляется API-запросами к серверу.
Запуск веб-сервера с обычным производится из папки ./project и не требует сборщиков (на момент написания приложения данный способ создания сайта еще не был изучен и освоен), путем обычного запуска файла index.html.

## Цель проекта

Предоставление доступа пользователя к веб-интерфейсу управления базой данных клиентов компании.

## Состояние проекта

Предварительно необходимо запустить сервер из папки ./server командой `node index.js`. Проект располагается в папке ./project и не требует сборщиков для запуска, открывается путем открытия файла `index.html`.

### Требования к ТЗ

Приложение представлено в виде главной страницы с таблицей, содержащей список клиентов, внесенных в базу ранее.
На текущий момент доступно управление списком:

   1. Добавление новых клиентов;
   2. Редактирование добавленных ранее клиентов;
   3. Удаление потерявших актуальность записей.

Управление списком клиентов доступно через управляющие команды, вызов которых производится путем нажатия кнопок в столбце "Действия" таблицы, а также в карточке клиента, доступной в виде модального окна.

В столбце "Контакты" в списке клиентов доступен переход по ссылкам контактов, расположенным внутри выпадающих вверху над контактом хинтов.

### Дополнительный функционал

   1. Анимация работы с модальным окном;
   2. Ссылка на карточку клиента - выполнено путем чтения данных из hash-части url-адреса;
   3. Валидация формы перед отправкой запроса на сервер - валидация производится динамически при вводе данных в поля формы в модальном окне, а также сразу после нажатия на кнопку сохранения данных - в этом случае при ошибке запрос к серверу не отправляется, а над кнопкой сохранения отображаются ошибки и/или рекомендации по их устранению;
   4. Индикация загрузки/отправки данных к серверу - работает для получения списка клиентов, для открытия карточки клиента, а также сохранения измененных данных по клиенту.

## Порядок работы

### Добавление новых клиентов

Доступно путем нажатия на кнопку "Добавить клиента", расположенную под таблицей. В этом случае открыается пустая карточка нового клиента в виде модального окна.

### Редактирование добавленных клиентов

Доступно путем нажатия на кнопку "Изменить", расположенную в последнем столбце таблицы в каждой из строк. В этом случае открывается доступная для внесения изменений карточка клиента в виде модального окна.

### Сохранение новых/измененных записей

Возможно после внесения обязательынх полей: фамилии, имени, а также заполнения всех добавленных полей с контактами - путем нажатия на кнопку "Сохранить" в карточке клиента. Контакты добавляются нажатием на кнопку "Добавить контакт" внутри карточки под полями с фамилией, именем и отчеством клиента.

В случае, если сохранение невозможно по тем или иным причинам, над кнопкой "Сохранить" отображаются ошибки и/или рекомендации по их устранению. В случае же успешного сохранения изменения вносятся в клиентскую базу, модального окно закрывается и происходит автоматическое обновление списка клиентов.

### Закрытие модального окна

Доступно по щелчку мыши на кнопку "Отмена", крестику в правом верхнем углу модального окна, либо в любом месте экрана вне модального окна. В этом случае модальное окно закрывается, а изменения не сохраняются.

### Удаление потерявших актуальность записей

Производится двумя способами:

   1. По нажатию кнопки "Удалить" в строке клиента в таблице на главной странице;
   2. Внутри карточки ранее добавленного клиента путем нажатия кнопки "Удалить клиента".
При удалении записи происходит безвозвратное удаление клиента из клиентской базы, а список клиентов обновляется автоматически. Если удаление было произведено в модальном окне, модальное окно при этом закрывается.

## Подключаемые библиотеки

В приложении используются следующие подключаемые библиотеки:

   1. <https://github.com/Choices-js/Choices> (Choices-js) - пользовательские выпадающие меню в карточке клиента;
   2. <https://github.com/RobinHerbots/Inputmask> (Inputmask) - маски для ввода данных в поля input в карточке клиента;
   3. <https://just-validate.dev/> (JustValidate) - система валидации введенных в форму данных в карточке клиента;
   4. <https://atomiks.github.io/tippyjs/> (Tippy.js) - пользовательские хинты, срабатывающие при наведенни мыши на значки контактов в списке клиентов.

Скриптовая база представлена двумя файлами:

   1. js/script.js - основные скрипты для управления элементами интерфейса и текущими данными приложения;
   2. js/server.js - скрипты для выполнения запросов к серверу.

## TODO (планируемые преобразования)

1. добавление авторизации;
2. перевод проекта на Webpack/Vue 3;
3. подключение всех библиотек через Node.js.
