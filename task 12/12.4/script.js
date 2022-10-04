for (let li of document.querySelectorAll('li')) {
      let name = li.firstChild.data;
      name = name.trim();
      let count = li.getElementsByTagName('li').length;
      alert(name + '- ' + count);
    }