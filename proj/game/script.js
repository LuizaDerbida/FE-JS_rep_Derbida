let question = ['У чому, на поширену думку, повинно пощастити, якщо не везе в картах?', 'Який дизайн автомобільного кузова існує?','Як у народі називають збирання грибів?','Що є рекордом Пауля Гана для реєстрації 118.1 децибел?','Яке з цих міст знаходиться одразу в двох частинах світу?','В Україні скрутити "дулю" означає грубо відмовити. А що цей жест означає у Бразилії?','Що дозволяло законодавство США у 1913 році?','Ув\'язнені норвезької в\'язниці-острова Бастой мають один з найнижчих рівнів рецидивів у світі. В чому особливість цієї в\'язниці?','В чому особливість державного прапора Парагваю?','Японське рибацьке містечко Сусамі з населенням 5000 чоловік приваблює туристів незвичною поштовою скринею. Де вона знаходиться?','Що роблять з шайбою перед початком хокейного матчу?','З яким обладнанням жителі Африки рибачать на протоптера?','Який метал є найбільш тугоплавким??','Глибина якої станції київського метро теоретично дозволяє вмістити Батьківщину-Мати у повний зріст разом з постаментом?','Яку зброю під час Другої світової війни США планували використати проти Японії?'];
//масив питань
let answer = ['У коханні','В роботі','В лотереї','В рибалці', 'Кулька','Піраміда','Кубік','Рубік', 'Ручна риболовля','Сумна сауна','Тихе полювання','Весела гульня', 'Голосний крик','Найгучніший бурп','Свист','Ударна хвиля від стрибка', 'Куала-Лумпур','Шарм-Ель-Шейх','Стамбул','Пекін', 'Бажання образити','Побажання удачі','Непристойну пропозицію','Напрямок руху', 'Балотуватися тваринам у Конгрес','Брати участь у виборах жінкам ','Не сплачувати податки','Відправляти дітей поштою', 'В\'язнів приковують на ніч','Кожен в\'язень має свого охоронця','В\'язні мають активний відпочинок','Зовсім немає охорони', 'Він має дві різні сторони','Він п\'ятикутний','Він трикутний','Він зараз тимчасово відсутній', 'У повітрі','Під водою','В пляшці','На березі', 'Натирають мастилом','Заморожують','Сушать','Зважують', 'З палкою','З сокирою','З щипцями','З лопатою', 'Вольфрам','Ванадій','Хром','Цирконій', 'Золоті ворота','Арсенальна','Лук\'янівська','Шулявська', 'Липку бойову піну','Кажанів-бомб','Генератор грому','Блювальний пістолет'];
// масив відповідей
let key = [0, 2, 2, 1, 2, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];
// масив ключей для відображення правильної відповіді
let level = 0;

//функція для переходу з окна вітання
  $('#startGame').click(function(){
  
    $('.reStart').css('display', 'none');
    setTimeout(timer,1000);

  });

// функція для відображення блоку питань та відповідей
function show(level) {

  $('.question').text( question[level] );
  $('label[for=answer1]').text( answer[level*4+0] );
  $('label[for=answer2]').text( answer[level*4+1] );
  $('label[for=answer3]').text( answer[level*4+2] );
  $('label[for=answer4]').text( answer[level*4+3] );

}

let resultConst = [];  // змінна для результату 
show(level);

let tr = $('tr'); 



// запуск дій після натискання кнопки submit 
$('.btn1').click(function(){

  $("#countdown").text(60);
// якщо відповідь вірна - перейти до наступного рівня
  if( $('input[name=answer]:checked').val() == key[level] )
  {
    level++;
    show(level);
  }
  // інакше - закінчити гру
  else{gameOwer()}
  
  $('input').prop('checked', false);
  $(tr.css('background','#fff'));
  $(tr.removeClass('result'));
  $(tr[tr.length - (level + 1)]).css('background','#FF0');
  $(tr[tr.length - (level)]).css('color','#f0f');
  $(tr[tr.length - (level)]).addClass('result');
  $('label').css('color', 'cyan');

// якщо рівень 5, 10 чи 15 - перезаписати змінну, що містить фінальний виграш
  if (level == 5 || level == 10 || level == 15) 
  {
     resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
  }
})
// рандомайзер
Math.rand = function(min, max){
  return Math.round(Math.random() * (max-min) + min);
}

let inputLabel = document.getElementsByTagName('label');

// функціонал кнопки 50 на 50
$('.round50').click(function(){

let inputAnswer = document.getElementsByName('answer');
let exp = []; 
let count = 0;

// згенерувати дві випадкові відповіді, зафарбувати їх
  while(count < 2) {
    let index = Math.rand(0,3);
    if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level] ) 
    {
      $(inputLabel[index]).css('color', '#69f');
      count++;
      exp.push(index);
    }
  }
  // вимкнути кнопку
    $(this).off('click');
    //$(this).css('background-image', '4.png');

})
   
// функціонал кнопок дзвінок другу та поміч зала
$('.roundfr').click(function(){
    
    $(inputLabel[Math.rand(0,3)]).css('color', '#F90'),
    // вимкнути кнопку, замінити зображення
    $(this).off('click');
    //$(this).css('background-image', '5.png');
    
})
$('.round').click(function(){
    
    $(inputLabel[Math.rand(0,3)]).css('color', '#F90'),
    // вимкнути кнопку
    $(this).off('click');
    //$(this).css('background-image', '6.png');
    
})

let result = $('.result'); 

// функціонал кнопки закінчити гру
$('.roundEnd').click(function(){

  end();

})

// функція закінчення гри 
function end() {

  $('.end').css('display', 'block');

}
//функція програшу
function gameOwer() {

  $('.end').css('display', 'block');

  if (tr.hasClass('resultConst')) 
  {
    let tdResult1 = $(resultConst[resultConst.length - 1]).children();
    let tdText1 = tdResult1[1].textContent;
    $('.showResult').text('ВИ ВИГРАЛИ: ' + tdText1 + ' гривень');
  }
}
//функція відліку
function timer(){

   let objTimer=document.getElementById('countdown');
   objTimer.innerHTML--;
    //змінити колір коли спливає час
     if(objTimer.innerHTML==5)
    {
    $('#countdown').css('background', 'red');
    }
    //якщо час сплинув
   if(objTimer.innerHTML==0)
    {
    setTimeout(function(){},1000);
    gameOwer();
    }
   else{setTimeout(timer,1000)}

}

$('form').submit(function(e){ 

    e.preventDefault()
  
});

//зміна зображень на кнопках
function my_click_1()
            {
            document.getElementById("image1").src="4.png";
            };

function my_click_2()
            {
            document.getElementById("image2").src="5.png";
            };


function my_click_3()
            {
            document.getElementById("image3").src="6.png";
            };



