(() => {
  const BASE_URL = 'http://192.168.0.111:3002/api/clients/';
  // const BASE_URL = 'http://172.20.10.2:3002/api/clients/'; // моб. телефон
  // const BASE_URL = 'http://192.168.0.105:3000/api/clients/'; // Coffee Garden
  // const BASE_URL = 'http://192.168.1.69:3002/api/clients';

  function statusMessageHTTP(id, text) {
    switch (id) {
      case 200:
        return `Запрос успешно выполнен (${text})`;
      case 201:
        return `Данные успешно сохранены (${text})`;
      case 202:
        return `Данные успешно переданы (${text})`;
      case 404:
        return `Данные не найдены (${text})`;
      case 422:
        return `Передан необрабатываемый экземпляр данных (${text})`;
      default:
        if (String(id).charAt(0) === '5') {
          return `Внутренняя ошибка сервера (${text})`;
        };
        return `Что-то пошло не так... (${text})`;
    }
  };

  // загрузка списка клиентов
  async function reloadClients({ onLoad, onError }, search, id = '') {
    const searchString = search ? `?search=${search}` : '';

    const url = `${BASE_URL}${id}${searchString}`;
    // const url = `http://192.168.1.69:3000/api/clients/${id}`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json()
      onLoad(response.status, statusMessageHTTP(response.status, response.statusText), data);
    } else {
      onError(response.status, statusMessageHTTP(response.status, response.statusText));
    }

    // const x = new XMLHttpRequest();
    // x.open('GET', url);
    // x.send();

    // x.onload = function () {
    //   // if ([200, 201].includes(x.status)) {
    //   alert('загрузка почему-то успешная. статус: ' + x.status);
    //   const clients = JSON.parse(x.response);
    //   onLoad(clients, x.status, x.message);
    //   // }
    // }
    // x.onerror = function () {
    //   onError(x.status, x.message);
    // }
  }

  async function saveClient({ onSave, onError }, client) {
    if (!client) return;

    const event = !client.id ? 'POST' : 'PATCH';
    const url = `${BASE_URL}${client.id}`;

    const contacts = client.contacts.map(item => {
      return { ...item, type: item.typeId, };
    });

    const response = await fetch(url, {
      method: event,
      body: JSON.stringify({
        name: client.name,
        surname: client.surname,
        lastName: client.lastName,
        contacts: contacts,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json()
      onSave(data);
    } else {
      onError(response.status, statusMessageHTTP(response.status, response.statusText));
    }
  }

  async function deleteClient({ onDelete, onError }, id) {
    const url = `${BASE_URL}${id}`;

    const response = await fetch(url, { method: 'DELETE' });

    if (response.ok) {
      const data = await response.json()
      onDelete(data);
    } else {
      onError(response.status, statusMessageHTTP(response.status, response.statusText));
    }
  }

  window.server = { reloadClients, saveClient, deleteClient };
})();
