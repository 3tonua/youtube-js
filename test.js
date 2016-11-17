
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
        /*it('ID присутствует', function (done) {
            $.when(YouTube.getVideoInfo()).then(function (result) {
                if (result.id != null){
                    done();
                }
            })
        })*/
    });

    describe('ID', function () {
        
        function getID() {

            it('ID присутствует', function (done) {
                $.when(YouTube.getVideoInfo()).then(function (result) {
                    for (i = 0; i != id; i++){
                        if (getid != null){
                            getID();

                        }

                    }
                    done();
                });

            });

        }



    })
});