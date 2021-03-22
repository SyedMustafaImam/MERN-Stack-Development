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


})