// Get the button
var mybutton = document.getElementById('myBtn');


// When the user scrolls down 100px from the top ,it will show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750)
    {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

//When the user clicks on the button, scroll to the top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// responsive slider using jquery
let btn = document.getElementById('btn1');
let image = document.getElementById('image')

btn.addEventListener('click' , function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err => console.log(err))
})

