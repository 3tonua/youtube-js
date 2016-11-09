var key = 'AIzaSyD0KxGbBLA3r2EtQD6t0eUYIEztv2zKRHs';

var YouTube = {
    getLastVideos: function () {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: "snippet",
                key: key,
                chart: "mostPopular",
                maxResults: 10
            },
            success: function( result ) {
                dfd.resolve(result)
            }
        });
        return dfd.promise();
    }
};