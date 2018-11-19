$('.driver__img').click(function(){
    $('.driver__inform').toggleClass('driver__inform_active');
    $('.driver__img').toggleClass('driver__img_active');
});
$('.driver__img2').click(function(){
    $('.driver__inform2').toggleClass('driver__inform_active2');
    $('.driver__img2').toggleClass('driver__img_active');
});
function initMap() {
    pcRepairMarker = './images/pcRepair.svg',
    phoneRepairMarker = './images/phoneRepair.svg',
    pcRepairContent = '<div class="driver__inform2"> <img src="images/y_92c715d9.jpg" alt="" class="driver__photo"> <h3>Дмитрий Мурашкин</h3> <p class="inform__p">Ремонт ноутбуков за 30 минут, лучший в Санкт-Петербурге</p> <a class="inform__a" href="same1.html">Узнать больше</a> </div>',
    phoneRepairContent = '<div class = "driver__inform"> <img src="images/2bAMACkqtk8.jpg" alt="" class="driver__photo"> <h3>Глеб Протасов</h3>  <p class="inform__p">Ремонт iPhone за 30 минут, лучший в Европе</p> <a class="inform__a" href="inform.html">Узнать больше</a> </div>'
    var coordinates = {
        center: {lat: 59.8393, lng: 30.3351},
        zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map'), coordinates);
    var pcRepair = new google.maps.Marker({
        position: {lat: 59.8393, lng: 30.3351},
        map: map,
        icon: image = pcRepairMarker
    });
    var phoneRepair = new google.maps.Marker({
        position: {lat: 59.8493, lng: 30.3551},
        map: map,
        icon: image = phoneRepairMarker
    });
    pcRepairWindow = new google.maps.InfoWindow({
        content: pcRepairContent
    });
    pcRepair.addListener('click', function() {
        pcRepairWindow.open(map, pcRepair);
    });
    phoneRepairWindow = new google.maps.InfoWindow({
        content: phoneRepairContent
    });
    phoneRepair.addListener('click', function() {
        phoneRepairWindow.open(map, phoneRepair);
    });
}

$('.heart').click(function(){
    $(this).toggleClass('heart_red')
});

$('.heart_red').click(function(){
    $(this).toggleClass('heart_uncolored')
});

var favourite__master1 = document.querySelectorAll('.favourite__master')[0];
var favourite__master2 = document.querySelectorAll('.favourite__master')[1];
var favourite__master3 = document.querySelectorAll('.favourite__master')[2];
var favourite__master4 = document.querySelectorAll('.favourite__master')[3];
var heart_red1 = favourite__master1.querySelector('.heart_red');
var heart_red2 = favourite__master2.querySelector('.heart_red');
var heart1 = favourite__master3.querySelector('.heart');
var heart2 = favourite__master4.querySelector('.heart')

heart_red1.addEventListener("click", appending1)

function appending1(){
    if (heart_red1.classList.contains('heart_uncolored')){
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master1);
        document.querySelector('.nearest__masters').appendChild(fragment);
    }
    else{
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master1);
        document.querySelector('.masters__liked').appendChild(fragment);
    }
}

heart_red2.addEventListener("click", appending2)

function appending2(){
    if (heart_red2.classList.contains('heart_uncolored')){
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master2);
        document.querySelector('.nearest__masters').appendChild(fragment);
    }
    else{
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master2);
        document.querySelector('.masters__liked').appendChild(fragment);
    }
}

heart1.addEventListener("click", appending3)

function appending3(){
    if (heart1.classList.contains('heart_red')){
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master3);
        document.querySelector('.masters__liked').appendChild(fragment);
    }
    else {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master3);
        document.querySelector('.nearest__masters').appendChild(fragment);
    }
}

heart2.addEventListener("click", appending4)

function appending4(){
    if (heart2.classList.contains('heart_red')){
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master4);
        document.querySelector('.masters__liked').appendChild(fragment);
    }
    else {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(favourite__master4);
        document.querySelector('.nearest__masters').appendChild(fragment);
    }
}