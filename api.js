var key = 'AIzaSyD0KxGbBLA3r2EtQD6t0eUYIEztv2zKRHs';

/*var idpr = videos[index];
var idprosm = idpr.id;*/


var load = document.querySelector('#loader');

var YouTube = {
    getLastVideos: function () {
        var dfd = jQuery.Deferred();

        //
        $.ajax({
            beforeSend: function(){
                load.style.display = 'block';
                load.style.marginLeft = '50%';
                load.style.marginTop = '20%';
            },

            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: "snippet,statistics",
                key: key,
                chart: "mostPopular",
                maxResults: 10
                // id: idprosm


            },
            success: function( result ) {
                dfd.resolve(result);
                load.style.display = 'none';
            }
        });
        /*$.ajax({
            beforeSend: function(){
            },
            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: "snippet",
                id: "idprosm"
            }
            },
            success: function( result ) {
            dfd.resolve(result);
        }
            });*/
        return dfd.promise();
    }
};