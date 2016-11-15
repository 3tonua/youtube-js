
var videos = [];

favorites = [];

var fav_string = JSON.parse(localStorage.getItem('favorites_string'));

var fav_localstorage = JSON.parse(localStorage.getItem('favorites_string'));
if (fav_localstorage) {
    favorites = fav_localstorage;
    renderVideos(favorites, 'favorites');
} else {
    favorites = [];
}
console.log(fav_localstorage);

// var favorites1 = [fav_string];

$.when(YouTube.getLastVideos()).then(function (result) {
    videos = result.items;

        renderVideos(videos, 'last');

        $('#last').on('click', '.watch', function () {
            $('#watch-video').modal('show');
            var index = $(this).parent().data('index');
            var video = videos[index];
            var id = video.id;
            var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +  id  + ' " frameborder="0" allowfullscreen></iframe>';
            var title = video.snippet.title;
            var channel = video.snippet.channelTitle;
            var date = video.snippet.publishedAt;
            // var prosm = video.snippet.
            $('.modal-body').html(iframe);
            $('.modal-title').html(title);
            $('.modal-channel').html(channel);
            $('.modal-date').html(date);
            // $('.modal-prosm').html(prosm);
            console.log(index);
            console.log(idprosm);
        });

        $('#favorites').on('click', '.watch', function () {
            $('#watch-video').modal('show');
            var index = $(this).parent().data('index');
            var video = favorites[index];
            var id = video.id;
            var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +  id  + ' " frameborder="0" allowfullscreen></iframe>';
            var title = video.snippet.title;
            $('.modal-body').html(iframe);
            $('.modal-title').html(title);
            console.log(index);
            console.log(idprosm)
        });

        $('#last').on('click', '.add-favorites', function () {
            var index = $(this).parent().data('index');
            var video = videos[index];
            favorites.push(video);
            renderVideos(favorites, 'favorites');
            var favorites_string = JSON.stringify(favorites);
            localStorage.setItem('favorites', favorites_string);
            console.log($(this))

        })
});


function renderVideos(videos, id) {
    $('#' + id + ' .row').html(' ');
    videos.forEach(function (data, index) {
        var video = '<div class="col-sm-6 col-md-4">' +
                        '<div class="thumbnail">' +
                            '<img src=" ' + data.snippet.thumbnails.high.url + ' " alt="...">' +
                                '<div class="caption">' +
                                    '<h3>' + data.snippet.title + '</h3>' +
                                    '<p>' + data.snippet.channelTitle + ' / ' + data.snippet.publishedAt + '</p>' +
                                    '<p>' + data.snippet.description.slice(0, 100) + '</p>' +
                                    '<p data-index="' + index + '"><button class="btn btn-primary watch" role="button">Watch</button>' +
                                    '<button class="btn btn-default add-favorites" role="button">Add to Favorites</button></p>' +
                            '</div>' +
                        '</div>' +
            '</div>';
        $('#' + id + ' .row').append(video);
})
}