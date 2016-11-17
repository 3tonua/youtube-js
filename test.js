


describe('YouTube', function () {
    describe('API', function () {

        /*before(function() { alert("Начало теста"); });
        after(function() { alert("Конец теста"); });*/

        it('Получение последнего видео работает', function (done) {
            $.when(YouTube.getLastVideos()).then(function (result) {
                done();
            })
        });
        it('Количество видео больше 0', function (done) {
            $.when(YouTube.getLastVideos()).then(function (result) {
                if (result.items.length > 0){
                    done();
                }
            })
        });
        it('ID присутствует', function (done) {
            $.when(YouTube.getLastVideos()).then(function (result) {

                for (var i = 0; i < 10; i++) {
                    if (result.items[i].id.length == 0){
                        var ok = false;
                    }
                }
                if (ok == true) {
                alert("123");
                } else {
                    done();
                }
            })
        });


        /*it('ID присутствует', function (done) {
            $.when(YouTube.getLastVideos()).then(function (result) {
                // var ok = ;
                for (var i = 0; i < 10; i++) {
                    if (result.items[i].id == null || result.items[i].id == undefined) {
                        alert("Все плохо")
                    }
                }
                done();
            })
        });*/

    });

});