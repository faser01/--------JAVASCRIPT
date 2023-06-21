var car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2019,
    averageSpeed: 80,
    getInfo: function() {
        var info = "Производитель: " + this.manufacturer + "\n" +
                   "Модель: " + this.model + "\n" +
                   "Год выпуска: " + this.year + "\n" +
                   "Средняя скорость: " + this.averageSpeed + " kм/ч";
        alert(info);
    },
    getTime: function(distance) {
        if (distance < 0) {
            document.getElementById("carTime").innerHTML = "Расстояние не может быть отрицательным";
            return;
        }
        var time = distance / this.averageSpeed;
        var rest = Math.floor(time / 4);
        time += rest;
        document.getElementById("carTime").innerHTML = "Время в пути на дистанции " +  distance  +  " км = "  + time +  "часов";
    },
    getAge: function() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var age = currentYear - this.year;
        document.getElementById("carAge").innerHTML = "Возраст машины: " + age + " года";
    }
};