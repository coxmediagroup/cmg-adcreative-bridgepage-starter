// var plyr_options = { disableContextMenu : true, clickToPlay: true, controls: ['mute','volume','progress','play','fullscreen'] };
// var modalPlayer = plyr.setup('#modalPlayer',plyr_options);



$(document).ready(function () {
    $('#spinner').hide();

    // var videos = document.querySelectorAll("#video");
    // for (var i = 0; i < videos.length; i++) {
    //     videos[i].addEventListener("click", function(e) {
    //         track('Clicked ' + e.target.dataset.videoName + ' Video');
    //         changeSource(e.target.dataset.videoId, e.target.dataset.videoName);
    //         $('#myModal').modal('toggle');
    //         setTimeout(function(){
    //             modalPlayer[0].play();
    //         }, 700)
    //     });
    // }
    // $('#myModal').on('hide.bs.modal', function () {
    //     modalPlayer[0].pause();
    // });


});



// function changeSource(source, title) {
//     modalPlayer[0].source({
//         type:       'video',
//         title:      title || 'example',
//         sources: [{
//             src:    source || 'jeZtoEXSGXQ',
//             type:   'youtube'
//         }]
//     });
// }


$("#form").submit(function (e) {
    // Show the loader
    $('#form-contents').hide();
    $('#spinner').show();

    // Show some delay message
    var url = 'http://adforms.cmgdigital.com/forms/submit/9f10fac2';
    var form = $(e.target);

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            track('form submited');
            // goog_report_conversion();
            $('#spinner').hide();
            $('#form').append('' +
                '<h1 style="color: dodgerblue; margin-top: 170px; margin-bottom: 170px;">Thank you</h1>');
        }
    });


    e.preventDefault(); // avoid to execute the actual submit of the form.
});