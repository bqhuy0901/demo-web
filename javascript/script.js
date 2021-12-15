$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {


                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

$('#exampleModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')

    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})


$(function() {
    $("#frmmodal").validate({
        rules: {
            txtname: "required"
        },
        messages: "Ban phai nhap ten"
    })
})

$('.carousel').carousel()

$('.carousel').carousel({
    interval: 2000
})

$('#myCarousel').on('slide.bs.carousel', function() {
    // do something…
})