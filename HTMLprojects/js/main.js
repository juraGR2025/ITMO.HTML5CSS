
var select = document.getElementById("chief-work");// Переменная для хранения выбора раскрывающегося списка.
var getValue = null; // Переменная для получения значения select id="chief-work" name="list1"
var getcheckboxValue = null; // Переменная для получения значения input type="checkbox"

function useRun(){
  console.log("Кнопка была нажата!");
  if(getValue === "наорать"){
   console.log("Вы собираетесь",  getValue, "на", getcheckboxValue + "!");
   alert("Вы собираетесь " +  getValue + " на " + getcheckboxValue + "!");
  }
  else{
    console.log("Вы собираетесь",  getValue, getcheckboxValue + "!"); 
    alert("Вы собираетесь " +  getValue + " " + getcheckboxValue + "!");
  }

}

select.addEventListener('change', function(){ 
  getValue = this.value;

// Добавляем слушателя для кнопки <input id="use-input" type="submit" value="Применить">
var btnUse = document.getElementById("use-input");
btnUse.addEventListener("click", useRun);

});

function getcheck(){
  var inputElements = document.getElementsByClassName('emploeeCheckbox');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
        getcheckboxValue = inputElements[i].value;
        break;
      }
}
console.log( getcheckboxValue );
}


function usenullRun(){// Если выбор не сделан страница напоминает об этом.
  if(getValue === null || getcheckboxValue === null){
    alert("Сделайте выбор!")
  }

}
var btnUse2 = document.getElementById("use-input");
btnUse2.addEventListener("click", getcheck);

btnUse2.addEventListener("click", usenullRun);

 function setNewEntry() {
  var EE = document.getElementById("EinstainEducation");
  var hyperlink = document.getElementById("EinstainEducationDetails");

  var content0 = EE.innerHTML;

   var content1 = "Образование";

//получить HTML содержимое элемента, имеющего id="EinstainEducation"
  if(content0.indexOf("Образование") != -1){

//изменить HTML содержимое элемента, имеющего id="EinstainEducation"
EE.innerHTML = "Начальное образование Альберт Эйнштейн получил в местной католической школе. \
По его собственным воспоминаниям, он в детстве пережил состояние глубокой религиозности, которое оборвалось в 12 лет. \
Через чтение научно-популярных книг он пришёл к убеждению, что многое из того, что изложено в Библии, не может быть правдой, \
а государство намеренно занимается обманом молодого поколения. Всё это сделало его вольнодумцем и навсегда породило скептическое отношение к авторитетам. \
Из детских впечатлений Эйнштейн позже вспоминал как наиболее сильные: компас, «Начала» Евклида и (около 1889 года) «Критику чистого разума» Иммануила Канта. \
Кроме того, по инициативе матери он с шести лет начал заниматься игрой на скрипке. Увлечение музыкой сохранялось у Эйнштейна на протяжении всей жизни. \
Уже находясь в США в Принстоне, в 1934 году Альберт Эйнштейн дал благотворительный концерт, где исполнял на скрипке произведения Моцарта в пользу \
эмигрировавших из нацистской Германии учёных и деятелей культуры. Эйнштейн в 14 лет В гимназии (ныне Гимназия имени Альберта Эйнштейна в Мюнхене) \
он не был в числе первых учеников (исключение составляли математика и латынь). Укоренившаяся система механического заучивания материала учащимися\
 (которая, как он позже говорил, наносит вред самому духу учёбы и творческому мышлению), а также авторитарное отношение учителей к ученикам вызывало \
 у Альберта Эйнштейна неприятие, поэтому он часто вступал в споры со своими преподавателями. В 1894 году Эйнштейны переехали из Мюнхена в итальянский город Павию, \
 близ Милана, куда братья Герман и Якоб перевели свою фирму. Сам Альберт оставался с родственниками в Мюнхене ещё некоторое время, чтобы окончить все шесть классов гимназии.\
  Так и не получив аттестата зрелости, в 1895 году он присоединился к своей семье в Павии. Аттестат Эйнштейна в Арау (оценки по шестибалльной шкале)\
  Осенью 1895 года Альберт Эйнштейн прибыл в Швейцарию, чтобы сдать вступительные экзамены в Высшее техническое училище (Политехникум) в Цюрихе и по окончании обучения \
  стать преподавателем физики. Блестяще проявив себя на экзамене по математике, он в то же время провалил экзамены по ботанике и французскому языку, \
  что не позволило ему поступить в Цюрихский Политехникум. Однако директор училища посоветовал молодому человеку поступить в выпускной класс школы в \
  Арау (Швейцария), чтобы получить аттестат и повторить поступление. В кантональной школе Арау Альберт Эйнштейн посвящал своё свободное время изучению\
   электромагнитной теории Максвелла, начал размышлять над физическими проблемами. В сентябре 1896 года он успешно сдал все выпускные экзамены в школе, \
   за исключением экзамена по французскому языку, и получил аттестат, а в октябре 1896 года был принят в Политехникум на педагогический факультет. \
   Здесь он подружился с однокурсником, математиком Марселем Гроссманом (1878—1936), а также познакомился с сербской студенткой факультета медицины Милевой Марич\
   (на 4 года старше его), впоследствии ставшей его женой. В этом же году Эйнштейн отказался от германского гражданства. Чтобы получить швейцарское гражданство, \
   требовалось уплатить 1000 швейцарских франков, однако бедственное материальное положение семьи позволило ему сделать это только спустя 5 лет. \
   Предприятие отца в этом году окончательно разорилось, родители Эйнштейна переехали в Милан, где Герман Эйнштейн, уже без брата, открыл фирму по торговле электрооборудованием. \
   Стиль и методика преподавания в Политехникуме существенно отличались от закостеневшей и авторитарной германской школы, поэтому дальнейшее обучение давалось юноше легче. \
   У него были первоклассные преподаватели, в том числе замечательный геометр Герман Минковский (его лекции Эйнштейн часто пропускал, о чём потом искренне сожалел) \
   и аналитик Адольф Гурвиц. В 1900 году Эйнштейн окончил Политехникум, получив диплом преподавателя математики и физики. Экзамены он сдал успешно, но не блестяще. \
   Многие профессора высоко оценивали способности студента Эйнштейна, но никто не захотел помочь ему продолжить научную карьеру";

hyperlink.innerHTML = "Свернуть";
  }
  else{

EE.innerHTML = content1;
//изменить HTML содержимое элемента, имеющего id="EinstainEducationDetails"
hyperlink.innerHTML = "Подробнее...";

  }

}

function setNewEntry2() {
  var EE = document.getElementById("MorrisonEducation");
  var hyperlink = document.getElementById("MorrisonEducationDetails");

    var content0 = EE.innerHTML;

   var content1 = "Образование";

//получить HTML содержимое элемента, имеющего id="EinstainEducation"
  if(content0.indexOf("Образование") != -1){

//изменить HTML содержимое элемента, имеющего id="EinstainEducation"
EE.innerHTML = "Джим Моррисон родился в Мелборне, штат Флорида. В Джиме были смешаны шотландская, английская и ирландская кровь. \
Провёл часть детства в Сан-Диего, Калифорния. В 1962 году поступил в Университет штата Флорида в Таллахасси. \
В январе 1964 года Моррисон переехал в Лос-Анджелес и поступил в UCLA на факультет кинематографии, где за время обучения снял два фильма. \
Ему нравились такие исполнители, как Элвис Пресли, Фрэнк Синатра, The Beach Boys, Love и Kinks. В Университете штата Флорида в \
Таллахасси Моррисон изучал историю эпохи Возрождения, в частности творчество Иеронима Босха и актёрскую игру, \
играл в студенческих постановках пьес. После этого учился на кинематографическом факультете Калифорнийского университета, \
но относился к учёбе не очень серьёзно, и больше интересовался вечеринками и алкоголем. В конце 1964 года Моррисон на Рождество \
приехал к родителям. Это был последний раз, когда он виделся с ними. Через несколько месяцев Моррисон написал письмо родителям, \
в котором сообщал, что хочет создать рок-группу. Но не нашёл понимания у отца, который ответил, что это неудачная шутка. \
После этого на вопрос о родителях Моррисон всегда говорил, что они умерли. Судя по всему, родители тоже прохладно относились к нему, \
потому что даже через много лет после его смерти отказывались комментировать творчество сына. Фильм, который был его выпускной работой, \
не восприняли ни преподаватели, ни студенты. Моррисон очень переживал и даже хотел покинуть университет за две недели до окончания, \
но преподаватели отговорили его от этого решения.";

hyperlink.innerHTML = "Свернуть";
  }
  else{

EE.innerHTML = content1;
//изменить HTML содержимое элемента, имеющего id="EinstainEducationDetails"
hyperlink.innerHTML = "Подробнее...";

  }

}

function setNewEntry3() {
  var EE = document.getElementById("SheldonEducation");
  var hyperlink = document.getElementById("SheldonEducationDetails");

    var content0 = EE.innerHTML;

   var content1 = "Образование";

//получить HTML содержимое элемента, имеющего id="EinstainEducation"
  if(content0.indexOf("Образование") != -1){

//изменить HTML содержимое элемента, имеющего id="EinstainEducation"
EE.innerHTML = "К пятому классу Шелдон изучил латынь. \
Шелдон поступил в Техасский университет в Остине, когда ему было всего 11 лет, \
сразу после окончания пятого класса; он окончил колледж с отличием в возрасте 14 лет. \
В возрасте 14 лет он начал писать докторскую диссертацию. Шелдон был самым молодым лауреатом премии \
Стивенсона в возрасте «четырнадцати с половиной лет». Шелдон работал в качестве приглашённого профессора\
 в Университете Гейдельберга в Германии в 16 лет и получил свою первую степень кандидата наук в 15. \
 Затем он провёл четыре года в работе над своей второй диссертацией.";

hyperlink.innerHTML = "Свернуть";
  }
  else{

EE.innerHTML = content1;
//изменить HTML содержимое элемента, имеющего id="EinstainEducationDetails"
hyperlink.innerHTML = "Подробнее...";

  }

}

function setLink() {
  var sLk = document.getElementById("Button-link");
  var hyperlink = document.getElementById("text-link");

  if(sLk.click && hyperlink.innerHTML.indexOf("текст") != -1){

    str = "Это ссылка!";
    hyperlink.innerHTML = str.link("Это ссылка!");
    hyperlink = document.getElementById("text-link");
    
  }
  else{

hyperlink.innerHTML = "Это текст";

  }

}

function calculation(){

  var string1 = "Первая строка ";
  var string2 = "Вторая строка";

//Создайте переменные 3.14 и FF, затем перемножьте их.
 var Pi = 3.14;
 var ff116 = 0xFF;

var rezstr = 'string1 + string2 = ' + (string1 + string2) +'. ' + 'Pi * ff = ' + (Pi * ff116);
console.log(rezstr);
alert(rezstr);

var n = 9;			
		// Записываем таблицу в html-документ
		document.write("<table border='2px' width='30%'>");
		// Цикл заполнения таблицы
		for (var tr = 1; tr <= n; tr++)
		{
			if (tr == 1)
				document.write('<tr bgcolor="braun">');
			else
				document.write("<tr>");
			// 
			for (var td = 1; td <= n; td++)
			{
				if (td == 1)
					document.write('<td bgcolor="braun">');
				else	
					document.write("<td>");
				
				document.write(tr*td);
				document.write("</td>");
			}
			// 
			document.write("</tr>");
		}
		// 
		document.write("</table>");

}

var personArray = new Array();
var pushArr = new Array();

function pushArray(name, pos, mail){

 personArray = [// Создаем массив с данными
['Albert Einstein', 'копирайтер', 'albert@einstein.com'],
['Jim Morrison', 'копирайтер', 'jim@morrison.com']
];

  var pers = [
  name, pos, mail
];
personArray.push(pers);
//pushArr.concat(personArray.push(pers));
return personArray;
}

function unReal(){

 console.log("Кнопка нажата.");
  var getName = null; // Переменная для получения значения id="name"
  var getPost = null; // Переменная для получения значения id="position"
  var getEmail = null; // Переменная для получения значения id="email"
  console.log("Переменные созданы.");

  getName = document.getElementById("name").value;
  getPost = document.getElementById("position").value;
  getEmail = document.getElementById("email").value;
  console.log("Переменные получены.");

console.log('------------------------------------------------------------------');
// Вызов функции pushArray.
pushArray(getName, getPost, getEmail);


 for (let i = 0; i< personArray.length; i++  ) {
     console.log('\t' + personArray[i][0] + '\t' + personArray[i][1] + '\t' + personArray[i][2]);
    }
}
/*Напишите функцию ChangeStyle(), которая будет изменять цвет, размер, 
добавлять подчеркивание и выделение полужирным шрифтом текста, находящегося в HTML-элементе с атрибутом id=“change”.*/
/*<p>
              <input id="hard" type="radio" value="hard" checked name="management style"/>жесткий
              <input id="soft" type="radio" value="soft" name="management style"/>мягкий
              <input id="semihard" type="radio" value="hard/soft" name="management style"/>полужесткий
              <input id="semi-soft" type="radio" value="soft/hard" name="management style"/>полумягкий
            </p>*/
function ChangeStyle(){
  var choice;
  var rad=document.getElementsByName('management style');
  for (var i=0;i<rad.length; i++) {
    if (rad[i].checked) {
      choice = i;
    }}

if(choice === 0){
  document.getElementById("radio-btn").style.background ="red";
  }
else if(choice === 1){
  document.getElementById("radio-btn").style.background = "#81cc63";
  }
else if(choice === 2){
  document.getElementById("radio-btn").style.background = "#dd6e60";
  }
else if(choice === 3){
    document.getElementById("radio-btn").style.background = "#acd832";
  }
}
