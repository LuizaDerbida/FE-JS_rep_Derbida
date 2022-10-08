function createCalendar(elem, year, month) {

      let mont = month - 1;
      let dat = new Date(year, mont);

      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      for (let i = 0; i < getDay(dat); i++) {
        table += '<td></td>';
      }

      while (dat.getMonth() == mont) {
        table += '<td>' + dat.getDate() + '</td>';

        if (getDay(dat) % 7 == 6) { 
          table += '</tr><tr>';
        }

        dat.setDate(dat.getDate() + 1);
      }

      if (getDay(dat) != 0) {
        for (let i = getDay(dat); i < 7; i++) {
          table += '<td></td>';
        }
      }


      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) { 
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;
    }

    createCalendar(calendar, 2022, 10);