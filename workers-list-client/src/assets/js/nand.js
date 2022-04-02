//show workers list

var num1 = 1;

function showList() {
    list = document.getElementById('peopleList');
    form = document.getElementById('addPeopleForm');

    if(num1 % 2 == 0){
        list.style.top = '102px';
        num1++;
    }else{
        list.style.top = '-1500px';
        num1--;
    }

    if (num2 % 2 != 0) {
        form.style.top = '-1500px';
        num2--;
    };

}

function focusList() {
  list = document.getElementById('peopleList');
  form = document.getElementById('addPeopleForm');
  list.style.top = '102px';
}

function blurList() {
  list = document.getElementById('peopleList');
  form = document.getElementById('addPeopleForm');
  list.style.top = '-900px';
}

//show add form

var num2 = 2;

function showAddForm() {
    form = document.getElementById('addPeopleForm');
    list = document.getElementById('peopleList');

    if(num1 % 2 != 0) {
        list.style.top = '-1500px';
        num1--;
    };

    if (num2 % 2 == 0) {
        form.style.top = '102px';
        num2++;
    } else {
        form.style.top = '-1500px';
        num2--;
    }

}

//reset log in form input values

var num3 = 2;

function reset() {
    var form = document.getElementById("logForm");
    form.reset();
}


function showAcceptDel() {
    accept = document.getElementById('acceptDel');

    if(num3 % 2 == 0){
        accept.style.top = '0px';
        num3++;
    }else{
        accept.style.top = '-3000px';
        num3--;
    }

}

//reload site

function reload() {
    location.reload(true);
 }

 //show chair on the map

 var circNum = 0;

 function showCircle(x) {
    let name = 'redCircle'+x;
    let circle = document.getElementById(name);

    if (circNum == 0){
        circNum = x;
        circle.style.display = "block";
    }else{
        let name2 = 'redCircle'+circNum;
        let circle2 = document.getElementById(name2);

        circle2.style.display = "none";

        circNum = x;
        circle.style.display = "block";
    };
 }

 function slide() {
   const right = document.querySelector('.right');
    right.classList.add('slide');
 }
