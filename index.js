
var videos = [];

$.when(YouTube.getLastVideos()).then(function (result) {
    videos = result.items;

        renderVideos(videos);
        console.log(videos);

});


function renderVideos(videos) {
    videos.forEach(function (data, index) {
        var video = '<div class="col-sm-6 col-md-4">' +
            '<div class="thumbnail">' +
            '<img src=" ' + data.snippet.thumbnails.high.url + ' " alt="...">' +
            '<div class="caption">' +
            '<h3>' + data.snippet.title + '</h3>' +
            '<p>' + data.snippet.channelTitle + ' / ' + data.snippet.publishedAt + '</p>' +
            '<p>' + data.snippet.description + '</p>' +
            '<p><a href="#" class="btn btn-primary" role="button">Button</a>' +
            '<a href="#" class="btn btn-default" role="button">Button</a></p>' +
            '</div>' +
            '</div>' +
            '</div>';
        $('#last .row').append(video);
    })
}