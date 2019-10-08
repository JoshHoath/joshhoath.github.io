$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 2300) {
            $('.main').addClass('bg-custom').removeClass('bg-transparent');
        } else {
            $('.main').removeClass('bg-custom').addClass('bg-transparents');
        }
    });
});

 // email form

$(document).ready(function (){
    $('.submit').click(function (event){

        event.preventDefault()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {

        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2 ) {

        } else {
            event.preventDefault()
            statusElm.append('<div>Subject needs to be at least two charecters long</div>')
        }

        if(message.length >= 5 ) {

        } else {
            event.preventDefault()
            statusElm.append('<div>Message must be at least 5 charecters long</div>')
        }
    })
})

// toggle for projects

$('#button-one').click(function(){
    $(".goal-one-project-one").toggle("slow");
})
$('#button-two').click(function(){
    $(".goal-one-project-two").toggle("slow");
})
$('#button-three').click(function(){
    $(".goal-one-project-three").toggle("slow");
})
$('#button-four').click(function(){
    $(".goal-two-project-four").toggle("slow");
})
$('#button-five').click(function(){
    $(".goal-two-project-five").toggle("slow");
})
