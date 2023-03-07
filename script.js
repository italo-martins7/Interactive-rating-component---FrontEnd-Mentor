$('.gradeInactive').on('click', function(){
    $(this).removeClass('gradeInactive').addClass('gradeActive');
    $('.gradeActive').not(this).removeClass('gradeActive').addClass('gradeInactive');
});

 $(document).ready(function(){
    $('button').on('click', function(){
        var grade = $('.gradeActive').text();
        $('.hidden').removeAttr('hidden');
        $('.rate').hide();
        $('span').text(grade);
    });
});