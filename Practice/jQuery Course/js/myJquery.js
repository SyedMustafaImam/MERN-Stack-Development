$(document).ready(function () {

    console.log("We are using jQuery")
    // Syntax ==> $('selector').action()
    // $('p').click(); //click on p

    $('#body').hide()


    $('#ck').click(function () {
        $('#body').toggle();
        console.log($('p').show())

    })


    $('p').click(function () {
        console.log('you clicked on p');

    })

    $('.hideme').click(function () {
        $(this).hide()
    });
    // there are three main types of selector in jquery 
    // 1. element selector
    // 2. id selector 
    // 3. class selector 


    // other selectors 
    // $('*') // selects all the elements
    // $('p.odd').click(

    // console.log('you clicked on ', this)


    // ) // selects all the odd classes from the p tag

    // $('p:first').click();

    // Events in jQuery
    // mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, keyup
    // form events = submit, change, foucs, blur
    // doucment/ window events = load, resize, scroll, unload

// // double click 
// $('p').dblclick(function () {
//     console.log('you have double clicked on p', this);

// })


// // Mouse enter 
// $('p').mouseenter(function () {
//     console.log('you have entered in p', this);

// })

// // Mouse leave 
// $('p').mouseleave(function () {
//     console.log('you have leaved p', this);

// })
// // Mouse Hover 
// $('p').hover(function () {
//     console.log('you have hovered p', this);
// }, function () {console.log('you have leaved hover')})


// demoing the on method
$('p').on({
    click: function () {
    console.log('thank for clicking', this)
},
mouseleave:function () {
    console.log('leaving ', this)
}
})

// $('#about').hide(1000, function () {console.log('hidden');})
// $('#about').hide()


$('#showAbout').click(function () {
    $('#about').fadeToggle(1000)
})

// fadeIn()
// fadeOut()
// fadeTo()


$('#about').slideToggle(1000)
// slide.up
// slide.down


// animate in jquery
$('#oth').animate({
    opacity:0.3,
    
}, 2000);


// toGet text from div
$('#about').text()

// getting value from the form

$('#fsub').on('click', function () {

    let text = $('textarea').val();
    console.log(text)
    $('textarea').val(function(){
        $('textarea').empty();
    })
    })

    // remove will delete the element form the document
  
    // to add a class

    $('#oth').addClass('myClass')


// // to remove a class

$('#oth').removeClass('myClass')

// // toggle class
$('#oth').toggleClass('myClass2')

// CSS
$('#oth').css('color','red')

// AJAX Get request
// $.get('https://code.jquery.com/jquery-1.12.4.min.js', function(data, status){alert(data);
// alert(status)});

// $.post('https://code.jquery.com/jquery-1.12.4.min.js',
// {name:"mustafa", reg:"1812134"},
// function(data,status){
//     alert(status)
// });
    
})
