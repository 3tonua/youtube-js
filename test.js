describe('YouTube', function () {
    describe('API', function () {
        it('Получение последний видео работает', function (done) {
            $.when(YouTube.getLastVideos()).then(function (result) {
                done();
            })
        });
        it('Количесвто видео больше 0', function (done) {
            $.when(YouTube.getLastVideos()).then(function (result) {
                if (result.items.length > 0){
                    done();
                }
            })
        })
    })
});