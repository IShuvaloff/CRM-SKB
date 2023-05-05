(() => {
  const contactTypes = [
    {
      id: 'phone',
      name: 'Телефон',
      hrefPrefix: 'tel:',
      hrefEnabled: true,
      mask: '+7 (999) 999-99-99',
      inputType: 'tel',
      iconTag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8"/>
        <path
          d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
        </svg>`,
    },
    {
      id: 'email',
      name: 'Email',
      hrefPrefix: 'mailto:',
      hrefEnabled: true,
      mask: '',
      inputType: 'email',
      iconTag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" />
        </svg>`,
    },
    {
      id: 'vk',
      name: 'ВКонтакте',
      hrefPrefix: '',
      hrefEnabled: true,
      inputType: 'url',
      iconTag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" />
      </svg>`,
    },
    {
      id: 'fb',
      name: 'Facebook',
      hrefPrefix: '',
      hrefEnabled: true,
      inputType: 'url',
      iconTag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" />
      </svg>`,
    },
    // ----- другое
    {
      id: 'twitter',
      name: 'Twitter',
      hrefPrefix: '',
      hrefEnabled: true,
      inputType: 'url',
      iconTag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" />
      </svg>`,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      hrefPrefix: '',
      hrefEnabled: true,
      inputType: 'url',
      iconTag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" />
      </svg>`,
    },
    {
      id: 'other',
      name: 'Другое',
      hrefPrefix: '',
      hrefEnabled: false,
      inputType: 'text',
      iconTag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" />
      </svg>`,
    },
  ];

  const actionsList = [
    {
      id: 'edit',
      iconTag: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10.5002V13.0002H2.5L9.87333 5.62687L7.37333 3.12687L0 10.5002ZM11.8067 3.69354C12.0667 3.43354 12.0667 3.01354 11.8067 2.75354L10.2467 1.19354C9.98667 0.933535 9.56667 0.933535 9.30667 1.19354L8.08667 2.41354L10.5867 4.91354L11.8067 3.69354Z" />
      </svg>`,
    },
    {
      id: 'cancel',
      iconTag: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" />
      </svg>`,
    },
    {
      id: 'delete',
      iconTag: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" />
      </svg>`,
    },
    {
      id: 'add',
      iconTag: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.99998 3.66668C6.63331 3.66668 6.33331 3.96668 6.33331 4.33334V6.33334H4.33331C3.96665 6.33334 3.66665 6.63334 3.66665 7.00001C3.66665 7.36668 3.96665 7.66668 4.33331 7.66668H6.33331V9.66668C6.33331 10.0333 6.63331 10.3333 6.99998 10.3333C7.36665 10.3333 7.66665 10.0333 7.66665 9.66668V7.66668H9.66665C10.0333 7.66668 10.3333 7.36668 10.3333 7.00001C10.3333 6.63334 10.0333 6.33334 9.66665 6.33334H7.66665V4.33334C7.66665 3.96668 7.36665 3.66668 6.99998 3.66668ZM6.99998 0.333344C3.31998 0.333344 0.333313 3.32001 0.333313 7.00001C0.333313 10.68 3.31998 13.6667 6.99998 13.6667C10.68 13.6667 13.6666 10.68 13.6666 7.00001C13.6666 3.32001 10.68 0.333344 6.99998 0.333344ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.94001 1.66665 7.00001C1.66665 4.06001 4.05998 1.66668 6.99998 1.66668C9.93998 1.66668 12.3333 4.06001 12.3333 7.00001C12.3333 9.94001 9.93998 12.3333 6.99998 12.3333Z" />
        </svg>`,
    },
  ];

  function toDate(value) {
    return typeof value === 'string' ? new Date(value.trim()) : value;
  }

  function formatPhone(value) {
    const valueStr = value.toString();
    if (valueStr.length !== 10) return value;
    return `+7 (${valueStr.slice(0, 3)}) ${valueStr.slice(3, 6)}-${valueStr.slice(6, 8)}-${valueStr.slice(8, 10)}`;
  }

  // ! ИНТЕРФЕЙС
  const intf = {
    // быстрый доступ к элементам
    getModal() { return document.getElementById('modal'); },
    getModalClient() { return document.getElementById('modal-client'); },
    getModalDialog() { return document.getElementById('modal-dialog'); },
    getTableFilter() { return document.getElementById('header-search'); },
    getTableHeaders() {
      return [
        document.getElementById('cell-header-id'),
        document.getElementById('cell-header-fio'),
        document.getElementById('cell-header-createdAt'),
        document.getElementById('cell-header-updatedAt'),
      ];
    },
    getFormContacts() { return document.getElementById('form-contacts'); },
    getFormContactsWrapper() { return document.getElementById('form-wrapper-contacts'); },

    getFormValueElementName(id) { return `client-contact-value-${id}`; },

    getCreateElement(tag, classes, id, parent) {
      const el = document.createElement(tag);

      classes.forEach(cl => { el.classList.add(cl); });
      if (id) el.id = id;
      if (parent) parent.append(el);

      return el;
    },
    deleteElement(id) {
      document.getElementById(id).remove();
    },
    deleteAllElements(className) {
      document.querySelectorAll(`.${className}`).forEach(el => {
        el.textContent = '';
        el.remove();
      });
    },

    updateModuleContactAddBtn() {
      if (data.client.contactsCount() >= data.client.contactsMaxCount) {
        document.getElementById('contacts-btn-add').classList.add('invisible');
      } else {
        document.getElementById('contacts-btn-add').classList.remove('invisible');
      }
    },
    updateFormContacts() {
      if (data.client.contactsCount() === 0) {
        this.getFormContacts().classList.add('form__contacts--empty');
        this.getFormContactsWrapper().classList.add('invisible');
      } else {
        this.getFormContacts().classList.remove('form__contacts--empty');
        this.getFormContactsWrapper().classList.remove('invisible');
      }
    },

    showClientSaving() {
      document.getElementById('client-saving').classList.remove('invisible');
    },
    hideClientSaving() {
      document.getElementById('client-saving').classList.add('invisible');
    },

    disableForm() {
      const form = document.getElementById('modal-client-form');
      const disabledElement = this.getCreateElement('div', ['disabledBlock'], 'modal-client-form-disable', form);
    },
    enableForm() {
      document.getElementById('modal-client-form-disable').remove();
    },

    // * инициализация постоянных компонентов на странице
    initPage() {
      // для закрытия модалки при щелчке вне ее
      document.onclick = function (e) {
        // ! убрать preventDefault(), т.к. иначе перестают работать ссылки!
        // e.preventDefault();
        if (e.target.id === 'modal') {
          intf.closeModal();
        }
      };

      // изменение hash-change
      window.addEventListener('hashchange', (e) => {
        intf.checkHashOpenClient();
      });

      // обработчики и инициализация шапки таблицы
      intf.getTableHeaders().forEach(header => {
        header.addEventListener('click', (e) => {
          e.preventDefault();

          data.updateSort(header.id);
          data.sort();

          intf.updateHeader(header.id);
          intf.refreshTable(data.clients);
        });

        header.addEventListener('keyup', function (e) {
          if (['Enter'].includes(e.key) || ['Space'].includes(e.code)) {
            e.preventDefault();
            header.click();
          }
        });

        this.updateHeader(header.id);
      });

      // обработчик кнопки "Добавить"
      document.getElementById('btn-client-add').addEventListener('click', (e) => {
        e.preventDefault();
        intf.openModal('add');
      });

      // обработчик фильтра
      this.getTableFilter().addEventListener('input', (e) => {
        e.preventDefault();

        data.setFilter(this.getTableFilter().value, false);

        clearTimeout(data.filterTimeout);
        data.filterTimeout = setTimeout(data.syncClients, 300);
      })
    },

    // проверка хэша страницы и открытие модального окна с клиентом при наличии
    checkHashOpenClient() {
      const regex = /\d+/g; // ? извлечь только число из хэша через RegExp
      const hash = location.hash.match(regex);
      if (!hash) return false;

      data.loadClient(hash, () => {
        intf.openModal('edit');
        intf.updateFormContacts();
        return true;
      });
    },

    // * работа с валидацией
    initValidate() {
      data.client.validation = new JustValidate('#modal-client-form', {
        focusInvalidField: true,
        validateBeforeSubmitting: true,
        errorsContainer: document.getElementById('client-error'),
        errorFieldCssClass: 'invalidated',
      })
        .addField('#client-surname', [
          {
            rule: 'required',
            errorMessage: 'Введите фамилию',
          }
        ])
        .addField('#client-name', [
          {
            rule: 'required',
            errorMessage: 'Введите имя',
          }
        ]);
      this.revalidate();
    },

    revalidate() {
      data.client.validation.revalidate();
    },

    addValidateField(contactValueElement, contactTypeId) {
      if (!data.client.validation) return;
      const type = contactTypes.find(item => item.id === contactTypeId);
      if (!type) return;

      const id = `#${contactValueElement.id}`;

      switch (type.id) {
        case 'phone':
          data.client.validation.addField(id, [
            {
              rule: 'required',
              errorMessage: `Введите номер телефона`,
            },
            {
              validator: function (value, context) {
                const numValue = contactValueElement.inputmask.unmaskedvalue();
                return Boolean(Number(numValue) && numValue.length === 10);
              },
              errorMessage: 'Некорректный номер телефона',
            },
          ]);
          break;

        case 'email':
          data.client.validation.addField(id, [
            {
              rule: 'required',
              errorMessage: 'Введите e-mail',
            },
            {
              rule: 'email',
              errorMessage: 'Неправильный формат e-mail',
            }
          ]);
          break;

        default:
          data.client.validation.addField(id, [
            {
              rule: 'required',
              errorMessage: `Введите значение для контакта ${type.name}`,
            }
          ])
      };

      data.client.validation.revalidateField(id);
    },

    deleteValidateField(id) {
      data.client.validation?.removeField(`#${id}`);
    },

    // * инициализация модальных окон
    initModal() {
      // закрытие модалки при нажатии на крестик в углу
      document.querySelectorAll('.modal__close').forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          intf.closeModal();
        })
      });

      // закрытие модалки при нажатии на кнопку "Отмена"
      document.querySelectorAll('.modal__cancel').forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          intf.closeModal();
        });
      });

      // добавить обработчики на инпуты ФИО
      document.querySelectorAll('.form__input').forEach(input => {
        input.addEventListener('change', (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();

          const id = input.id.slice(7, input.id.length);
          data.client[id] = input.value;
        });
      });

      // обработчик нажатия на кнопку "Добавить контакт"
      document.getElementById('contacts-btn-add').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        if (data.client.contactsCount() === data.client.contactsMaxCount) return;
        data.client.contactsAdd('phone', '');

        intf.updateModuleContactAddBtn();
        intf.modalAddContactNew();
      });

      // сохранение и закрытие модалки при щелчке на кнопку "Сохранить"
      document.getElementById('btn-modal-save').addEventListener('click', (e) => {
        e.preventDefault();

        function doSave() {
          document.getElementById('client-error').textContent = '';
          intf.showClientSaving();
          intf.disableForm();
          server.saveClient(
            {
              onSave: function () {
                intf.hideClientSaving();
                intf.enableForm();
                intf.closeModal();
                data.syncClients();
              },
              onError: function (status, message) {
                document.getElementById('client-error').textContent = message;
                intf.hideClientSaving();
                intf.enableForm();
              }
            },
            data.client
          );
        }

        if (!data.client.validation) {
          doSave();
        } else {
          data.client.validation.revalidate()
            .then(isValid => {
              if (!isValid) {
                alert('Введите корректные данные!'); // ? временное решение, можно и не показыать вовсе
              } else {
                doSave();
              }
            });
        }

      });

      // удаление и закрытие модалки при щелчке на кнопку "Удалить"
      document.querySelectorAll('.btn-modal-delete').forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();

          if (element.id === 'link-modal-delete') {
            // ? показать диалог подтверждения удаления
            this.getModalClient().classList.add('transparent');
            // this.getModalClient().classList.add('invisible');
            // this.getModalDialog().classList.remove('invisible');
            this.getModalDialog().classList.remove('transparent');
          } else {
            // ? в диалоге подтверждения уже удалить
            data.deleteClient();
          }
        });
      });
    },

    initModalAdd() {
      document.getElementById('modal-header').textContent = 'Новый клиент';
      document.getElementById('modal-descr').textContent = '';
      document.getElementById('client-surname-id').classList.add('transparent');
      document.getElementById('client-surname').value = '';
      document.getElementById('client-name-id').classList.add('transparent');
      document.getElementById('client-name').value = '';
      document.getElementById('client-lastName-id').classList.add('transparent');
      document.getElementById('client-lastName').value = '';
      this.setModalClientError('');
      document.getElementById('link-modal-delete').classList.add('invisible');
      this.updateFormContacts();
      this.initValidate();
    },

    initModalEdit(client) {
      document.getElementById('modal-header').textContent = 'Изменить данные';
      document.getElementById('modal-descr').textContent = 'ID: ' + client?.id;
      document.getElementById('client-surname-id').classList.remove('transparent');
      document.getElementById('client-surname').value = client?.surname;
      document.getElementById('client-name-id').classList.remove('transparent');
      document.getElementById('client-name').value = client?.name;
      document.getElementById('client-lastName-id').classList.remove('transparent');
      document.getElementById('client-lastName').value = client?.lastName ?? '';
      this.setModalClientError(client?.error);
      document.getElementById('link-modal-delete').classList.remove('invisible');
      this.initValidate();

      client.contacts.forEach((contact, index) => {
        this.modalAddContact(contact, index);
      });
      this.updateModuleContactAddBtn();
    },

    closeModal() {
      data.client.clear();
      location.hash = '';

      this.clearModalElements();
      this.getModalClient().classList.add('transparent');
      // this.getModalClient().classList.add('invisible');
      this.getModalDialog().classList.add('transparent');
      // this.getModalDialog().classList.add('invisible');
      this.getModal().classList.remove('opaque');
      document.body.style.overflow = 'visible';
    },

    clearModalElements() {
      document.getElementById('client-surname').value = '';
      document.getElementById('client-name').value = '';
      document.getElementById('client-lastName').value = '';
      document.getElementById('client-error').textContent = '';
      this.deleteAllElements('form__contact');
      document.getElementById('modal-client-form').reset();
      this.updateFormContacts();
    },

    openModal(action) {
      document.body.style.overflow = 'hidden';

      switch (action) {
        case 'delete':
          this.getModal().classList.add('opaque');
          // this.getModalDialog().classList.remove('invisible');
          this.getModalDialog().classList.remove('transparent');
          break;
        case 'add':
          this.initModalAdd();
          this.getModal().classList.add('opaque');
          // this.getModalClient().classList.remove('invisible');
          this.getModalClient().classList.remove('transparent');
          break;
        case 'edit':
          this.initModalEdit(data.client);
          this.getModal().classList.add('opaque');
          // this.getModalClient().classList.remove('invisible');
          this.getModalClient().classList.remove('transparent');
          break;
      }
    },

    setModalClientError(value) {
      document.getElementById('client-error').innerText = value ? String(value).trim() : '';
    },

    // * работа с контактами модального окна
    getCreateContactTypesElement(id, parent, val) {
      const select = this.getCreateElement('select', ['contact__types'], `client-contact-types-${id}`, parent);
      select.setAttribute('name', `client-types-${id}`)

      contactTypes.forEach(item => {
        const option = this.getCreateElement('option', [], null, select);
        option.setAttribute('value', item.id);
        option.innerText = item.name;
      });

      if (val) select.value = val;

      select.addEventListener('change', (e) => {
        e.preventDefault();
        const valueElementName = intf.getFormValueElementName(id);
        const valueElement = document.getElementById(valueElementName);

        intf.deleteValidateField(valueElementName);

        intf.updateContactValueType(valueElement, select.value);
        data.client.contactsEdit(id, select.value, null);

        intf.addValidateField(valueElement, select.value);
        intf.revalidate();
      });

      const choices = new Choices(select, {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',
        allowHTML: true,
        position: 'bottom',
      });

      return select;
    },

    getCreateContactValueElement(id, parent, val) {
      const valueInput = this.getCreateElement('input', ['contact__value'], this.getFormValueElementName(id), parent);
      valueInput.setAttribute('placeholder', 'Введите контактные данные клиента');
      if (val) valueInput.value = val;

      valueInput.addEventListener('change', (e) => { // change для инпута - выполняется после изменения сразу при смене фокуса
        e.preventDefault();
        const value = valueInput.inputmask ? valueInput.inputmask.unmaskedvalue() : valueInput.value;
        data.client.contactsEdit(id, null, value);
      });

      return valueInput;
    },
    updateContactValueType(contactValueElement, contactTypeId) {
      const type = contactTypes.find(item => item.id === contactTypeId);
      if (!type) return;

      // обозначить тип поля
      contactValueElement.type = type.inputType;

      // обработать маску
      if (contactValueElement.inputmask) {
        contactValueElement.inputmask.remove();
      }
      if (type.mask) {
        Inputmask(type.mask).mask(contactValueElement);
      }
    },

    getCreateContactDeleteElement(id, parent) {
      const deleteBtn = this.getCreateElement('button', ['contact__btn', 'contact__btn--delete'], `client-contact-delete-${id}`, parent);
      deleteBtn.setAttribute('type', 'button');

      const deleteIconTag = actionsList.find(act => act.id === 'delete').iconTag;
      const svg = this.getCreateElement('svg', [], null, deleteBtn);
      svg.outerHTML = deleteIconTag;

      deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // произвести удаление из JustValidate
        this.deleteValidateField(this.getFormValueElementName(id));

        data.client.contactsDelete(id);
        this.deleteElement(`client-contact-${id}`);

        this.updateModuleContactAddBtn();
        this.updateFormContacts();

        data.client.validation.revalidate();
      });

      return deleteBtn;
    },

    modalAddContactNew() {
      const newContactIndex = data.client.newContactIndex;

      const contact = this.getCreateElement('div', ['form__contact', 'contact'], `client-contact-${newContactIndex}`);
      const contactTypes = this.getCreateContactTypesElement(newContactIndex, contact);
      const contactValue = this.getCreateContactValueElement(newContactIndex, contact);
      const contactDelete = this.getCreateContactDeleteElement(newContactIndex, contact);

      // настроить ввод данных в соответствии с типом контакта
      this.updateContactValueType(contactValue, contactTypes.value);

      // вставляем новый контакт перед кнопкой
      this.getFormContactsWrapper().append(contact);

      this.updateFormContacts();

      this.addValidateField(contactValue, contactTypes.value);
    },

    modalAddContact(clientContact, index) {
      const newContactIndex = index;

      const contact = this.getCreateElement('div', ['form__contact'], `client-contact-${newContactIndex}`);
      const contactTypes = this.getCreateContactTypesElement(newContactIndex, contact, clientContact.type);
      const contactValue = this.getCreateContactValueElement(newContactIndex, contact, clientContact.value);
      const contactDelete = this.getCreateContactDeleteElement(newContactIndex, contact);

      // настроить ввод данных в соответствии с типом контакта
      this.updateContactValueType(contactValue, contactTypes.value);

      // вставляем новый контакт перед кнопкой
      this.getFormContactsWrapper().append(contact);

      this.updateFormContacts();

      this.addValidateField(contactValue, contactTypes.value);
    },

    // * работа с таблицей
    clearTable() {
      let rows = document.querySelectorAll('.clients__row');
      rows.forEach(row => {
        row.remove();
      });
    },

    showTableLoading() {
      document.getElementById('clients-loading').classList.remove('invisible');
    },

    hideTableLoading() {
      document.getElementById('clients-loading').classList.add('invisible');
    },

    showTableError(syncResults) {
      // document.getElementById('').innerText = '';
      alert(`Ошибка выполнения запроса #${syncResults.status}: ${syncResults.message}`); // ? временное решение
    },

    updateHeader(id) {
      const imgID = 'cell-img-' + id.slice(12, id.length);
      const imgClasses = document.getElementById(imgID).classList;

      if (!data.sorts || !Array.isArray(data.sorts) || data.sorts.length === 0 || !data.sorts[0].id || data.sorts[0].id !== id) {
        imgClasses.remove('rotate-sort');
        imgClasses.add('invisible');
      } else {
        // выставить цвет заголовка
        document.getElementById(id).classList.add('cell-sorted');

        // изменить направление стрелки
        switch (data.sorts[0].direction) {
          case 0: break;
          case -1:
            imgClasses.add('rotate-sort');
            imgClasses.remove('invisible');
            break;
          case 1:
            imgClasses.remove('rotate-sort');
            imgClasses.remove('invisible');
            break;
        }

        this.getTableHeaders().forEach(header => {
          if (header.id !== id) {
            // убрать стрелки с других столбцов
            const headerImgId = 'cell-img-' + header.id.slice(12, header.id.length);
            document.getElementById(headerImgId).classList.add('invisible');

            // сбросить цвет заголовка с других столбцов
            header.classList.remove('cell-sorted');
          }
        });
      }
    },

    showClientLoading(id) {
      document.getElementById(`${id}-img-edit-client`).classList.add('invisible');
      document.getElementById(`cell-client-loading-${id}`).classList.remove('invisible');
    },

    hideClientLoading(id) {
      document.getElementById(`cell-client-loading-${id}`).classList.add('invisible');
      document.getElementById(`${id}-img-edit-client`).classList.remove('invisible');
    },

    getCreateContactsCell(client, parent) {
      const cell = this.getCreateElement('td', ['cell', 'cell-links'], null, parent);
      const wrapper = this.getCreateElement('div', ['cell-links__wrapper'], null, cell);

      client.contacts.forEach((contact, index) => {
        const contactType = contactTypes.find(item => item.id === contact.type);

        const link = this.getCreateElement('div', ['cell__link', 'cell__link--icon'], null, wrapper);
        // link.setAttribute('href', '#');

        let hrefValue = contactType.id === 'phone' ? formatPhone(contact.value) : contact.value;
        let hrefLink = contactType.hrefPrefix + (contactType.hrefEnabled ? hrefValue : '#');
        let hreftarget = ['phone', 'email'].includes(contactType.id) ? '' : 'target="_blank"';
        let hintContent = contactType.hrefEnabled
          ? `<span class="cell__hint">${contactType.name}: <a class="hint-link" href="${hrefLink}" ${hreftarget}>${hrefValue}</a></span>`
          : `<span class="cell__hint">${hrefValue}</span>`;

        tippy(link, {
          content: hintContent,
          allowHTML: true,
          interactive: true,
          theme: 'cellLink',
        });

        const svg = this.getCreateElement('svg', [], null, link);
        svg.outerHTML = contactType.iconTag;
      });
    },

    getCreateActionsCell(client, parent) {
      const cell = this.getCreateElement('td', ['cell', 'cell-btn'], null, parent);
      const wrapper = this.getCreateElement('div', ['cell-btn__wrapper'], null, cell);

      [{ action: 'edit', caption: 'Изменить' }, { action: 'delete', caption: 'Удалить' }].forEach(item => {
        const link = this.getCreateElement('a', ['cell__link', 'link-action', `link-${item.action}`], `${client.id}-btn-${item.action}-client`, wrapper);
        link.setAttribute('href', '#');
        link.addEventListener('click', (e) => {
          e.preventDefault();
          data.client.id = parseInt(link.id);

          if (link.id.includes('edit')) {
            // при редактировании перевыгружаем клиента из базы
            this.showClientLoading(data.client.id);
            data.loadClient(data.client.id, () => {
              this.openModal('edit');
              this.updateFormContacts();
              this.hideClientLoading(data.client.id);
            });
          } else {
            // в остальных случаях просто открываем модалку
            this.openModal(item.action);
          }
        });

        const actionIconTag = actionsList.find(act => act.id === item.action).iconTag;
        const svgWrapper = this.getCreateElement('div', [], `${client.id}-img-${item.action}-client`, link);
        const svg = this.getCreateElement('svg', [], null, svgWrapper);
        svg.outerHTML = actionIconTag;

        if (item.action === 'edit') {
          const imgContainer = this.getCreateElement('div', ['loading', 'cell__loading', 'invisible'], `cell-client-loading-${client.id}`, link);
          imgContainer.innerHTML = `<img class="loading__img cell-btn__img" src="img/i-loading.svg" alt="">`;
        }

        const span = this.getCreateElement('span', ['cell-btn__text'], null, link);
        span.innerText = item.caption;
      });

      return cell;
    },

    refreshTable(clients) {
      this.clearTable();
      const table = document.getElementById('clients-list');

      const arr = Array.isArray(clients) ? clients : [clients];

      arr.forEach(client => {
        const row = this.getCreateElement('tr', ['clients__row']); // не присоединять, пока вся строка не заполнится
        // id
        let cell = this.getCreateElement('td', ['cell', 'cell--light', 'cell-id'], null, row);
        cell.innerText = client.id;
        // фио
        cell = this.getCreateElement('td', ['cell'], null, row);
        cell.innerText = [client.surname, client.name, client.lastName].join(' ');
        // создано
        cell = this.getCreateElement('td', ['cell'], null, row);
        let span = this.getCreateElement('span', ['cell__date'], null, cell);
        span.innerText = new Date(client.createdAt).toLocaleDateString();
        span = this.getCreateElement('span', ['cell__time'], null, cell);
        span.innerText = new Date(client.createdAt).toLocaleTimeString().slice(0, -3);
        // изменено
        cell = this.getCreateElement('td', ['cell'], null, row);
        span = this.getCreateElement('span', ['cell__date'], null, cell);
        span.innerText = new Date(client.updatedAt).toLocaleDateString();
        span = this.getCreateElement('span', ['cell__time'], null, cell);
        span.innerText = new Date(client.updatedAt).toLocaleTimeString().slice(0, -3);
        // контакты
        cell = this.getCreateContactsCell(client, row);
        // действия
        cell = this.getCreateActionsCell(client, row);
        //
        table.append(row);
      });
    }
  };

  // -------------------------------------------------------------------------------------------

  // ! БАЗА ДАННЫХ
  const data = {
    // выгруженные клиенты + их актуальность (по последнему запросу)
    clients: [],
    clientsSyncData: {
      status: '',
      message: '',
      success: true,
    },
    // фильтр
    _filter: '',
    get filter() {
      return this._filter;
    },
    set filter(value) {
      this._filter = value.toString().trim();
      intf.getTableFilter().value = this.filter; // ? немного реактивности для упрощения... а надо ли, если в основном будем пользоваться интерфейсом?
    },
    filterTimeout: null,
    clearFilter() {
      this.filter = '';
    },
    setFilter(value, updateInterface = true) {
      if (updateInterface) {
        this.filter = value;
      } else {
        this._filter = value;
      }
    },
    // сортировка
    sorts: [{ id: 'cell-header-id', direction: 1, }],
    sort() {
      // ? изменить список в соответствии с имеющимися сортировками
      if (!this.sorts || !Array.isArray(this.sorts) || this.sorts.length === 0 || !this.sorts[0].id) return;

      this.clients.sort((a, b) => {
        let valueA, valueB;

        const idFull = this.sorts[0].id;
        const id = idFull.slice(12, idFull.length);
        const reverse = this.sorts[0].direction;

        switch (id) {
          case 'id':
            valueA = parseInt(a.id);
            valueB = parseInt(b.id);
            break;
          case 'fio':
            valueA = a.fio();
            valueB = b.fio();
            break;
          case 'createdAt':
            valueA = toDate(a.createdAt);
            valueB = toDate(b.createdAt);
            break;
          case 'updatedAt':
            valueA = toDate(a.updatedAt);
            valueB = toDate(b.updatedAt);
            break;
          default:
            valueA = a[id];
            valueB = b[id];
        }

        return reverse * ((valueA > valueB) - (valueB > valueA));
      });
    },
    clearSort() {
      this.sorts = [];
    },
    updateSort(id) {
      // ? определить наличие элемента под кодом id в sort и обратить направление
      const index = this.sorts.findIndex(value => value.id === id);
      if (index === -1) {
        // * пока делаем с сортировкой только по одному столбцу, поэтому удаляем предыдущую
        this.clearSort();
        this.sorts.push({ id, direction: 1 });
      } else {
        this.sorts[index].direction = parseInt(this.sorts[index].direction) * -1;
      }
    },
    // выбранный/редактируемый клиент + его актуальность (по последнему запросу)
    client: {
      id: '',
      surname: '',
      name: '',
      lastName: '',
      contacts: [],
      validation: null,
      contactsChangeTimeout: null,
      contactsMaxCount: 10,
      newContactIndex: -1,
      contactsCount() {
        return this.contacts.length;
      },
      getContact(id) {
        return this.contacts.find(item => item.sid === id);
      },
      getContactIndex(id) {
        return this.contacts.findIndex(item => item.sid === id);
      },
      contactsAdd(typeId, value) {
        // alert('contactsAdd: ' + JSON.stringify(this.contacts));
        this.newContactIndex += 1;
        this.contacts.push({
          id: this.newContactIndex,
          typeId,
          value,
          sid: this.newContactIndex
        });
      },
      contactsEdit(id, typeId, value) {
        const contact = this.getContact(id);
        if (!typeId && !value.toString()) return false;

        contact.typeId = typeId ?? contact.typeId;
        contact.value = value ?? contact.value;
      },
      contactsDelete(id) {
        // alert('contactsDelete: ' + JSON.stringify(this.contacts));
        const index = this.getContactIndex(id);
        this.contacts.splice(index, 1);
      },
      clear() {
        this.id = '';
        this.surname = '';
        this.name = '';
        this.lastName = '';
        this.contacts = [];
        this.newContactIndex = -1;
        this.contactsChangeTimeout = null;
        this.validation?.destroy();
        this.validagtion = null;
      },
    },
    clientSyncData: {
      status: '',
      message: '',
      success: true,
    },
    // синхронизация списка клиентов
    syncClients() {
      intf.showTableLoading();
      server.reloadClients(
        {
          onLoad: function (status, message, clients) {
            data.clients = clients.map((item) => {
              return {
                ...item,
                fio() { return `${item.surname} ${item.name} ${item.lastName}`.trim(); },
              };
            });
            data.clientsSyncData = { status, message, success: true };
            data.sort();
            intf.refreshTable(data.clients);
            intf.hideTableLoading();
          },
          onError: function (status, message) {
            data.clientsSyncData = { status, message, success: false };
            intf.showTableError(data.clientsSyncData);
            intf.hideTableLoading();
          }
        },
        //! использовать фильтр
        data.filter,
      );
    },
    // удаление клиента
    deleteClient() {
      if (!data.client.id) return;

      server.deleteClient(
        {
          onDelete: function (info) {
            intf.closeModal();
            data.syncClients();
          },
          onError: function (status, message) {
            intf.setModalClientError(`Ошибка удаления ${status}: ${message}`);
          }
        },
        data.client.id);
    },
    // загрузка клиента
    loadClient(id, action) {
      server.reloadClients(
        {
          onLoad: function (status, message, clients) {
            data.client.id = clients.id;
            data.client.surname = clients.surname;
            data.client.name = clients.name;
            data.client.lastName = clients.lastName;
            data.client.contacts = clients.contacts.map((item, index) => {
              return {
                ...item,
                typeId: item.type,
                sid: index,
              };
            });
            data.client.newContactIndex = (clients.contacts?.length - 1) || 0;

            action();
          },
          onError: function (status, message) {
            intf.setModalClientError(`Ошибка удаления ${status}: ${message}`);
          }
        },
        '', // при извлечении клиента фильтром не пользуемся
        id);
    }
  };


  // ! -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    intf.initModal();
    intf.initPage();

    intf.checkHashOpenClient();

    data.syncClients();
  });

})();
