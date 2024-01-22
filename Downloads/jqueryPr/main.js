//№1
// $('p').has('b').wrap(document.createElement('div'));

//№2
// $('p.www').prepend("!").add('h2').css({color:'blue'});

//№3
// $('p').wrapInner('<div></div>');
// $('div').unwrap();

//№4 №5 
// $('input').attr('value', function(index, value){
//     if(index%2==0){
//        return $(this).prop({disabled:'true'})
//     }else{
//         return $(this).prop({checked:'true'})
//     }
// });

//№6
// $('#test').before('<p>!</p>').after('<p>?</p>');

//№7
// $('#text').siblings().text('text');

//№8
// $('#text').prevAll('p').text('text');

//№9
// let sec = $($($('li').get(1)).addClass('www')).wrapInner('<i></i>').append(' hi');
// console.log(sec)
//№10
// $('li').parent().prev().wrap('<div class="www"></div>');