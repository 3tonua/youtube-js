var key = 'AIzaSyD0KxGbBLA3r2EtQD6t0eUYIEztv2zKRHs';

var load = document.querySelector('#loader');

var YouTube = {
    getLastVideos: function () {
        var dfd = jQuery.Deferred();

        //
        $.ajax({
            beforeSend: function(){
                load.style.display = 'block';
                load.style.margin = '50%';
            },

            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: "snippet",
                key: key,
                chart: "mostPopular",
                maxResults: 10
            },
            success: function( result ) {
                dfd.resolve(result);
                load.style.display = 'none';
            }
        });
        return dfd.promise();
    }
};