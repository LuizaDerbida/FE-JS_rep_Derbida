 let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
      let data = prompt("Введіть текст для пункту списку", "");

      if (!data) {
        break;
      }

      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }