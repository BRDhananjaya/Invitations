/**
 * @author Nagbhushan
 */
$(document).ready(function () {
    $('.sakura-falling').sakura();
});
  
  
//$(document).on('click', function(){
//    document.getElementById("my_audio").play();
//    console.log('Thappade ellaru Banni');
//});


document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
        audio.pause();
    } else {
        // Optional: Resume playing when the page is visible again
        audio.play().catch(function(error) {
            // Handle play error
            console.error('Failed to resume audio:', error);
        });
    }
});

// Pause audio when the window loses focus
window.addEventListener("blur", function() {
    audio.pause();
});



// Set the date we're counting down to
var countDownDate = new Date("Feb 26, 2024 07:45:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 26th Feb, 2024!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Chethana & Nagbhushan', styles1, styles2);

console.log(
    `%cThappade ellaru Banni!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)



function openWhatsApp2() {
    var phoneNumber1 = "9113027128"; // Replace with your phone number
    var message1 = "Congratulations on your wedding! Wishing you a lifetime of love and happiness together. Cheers to the newlyweds!"; // Replace with your desired message
    var whatsappLink1 = "https://wa.me/" + phoneNumber1 + "?text=" + encodeURIComponent(message1);
    var fallbackLink1 = "https://web.whatsapp.com/send?phone=" + phoneNumber1 + "&text=" + encodeURIComponent(message1);

    var opened = window.open(whatsappLink1, '_blank');

    if (!opened || opened.closed || typeof opened.closed == 'undefined') {
        // WhatsApp link failed, fallback to web version
        window.open(fallbackLink1, '_blank');
    }
}

function openWhatsApp2() {
    var phoneNumber2 = "9380183106"; // Replace with your phone number
    var message2 = "Congratulations on your wedding! Wishing you a lifetime of love and happiness together. Cheers to the newlyweds!"; // Replace with your desired message
    var whatsappLink2 = "https://wa.me/" + phoneNumber2 + "?text=" + encodeURIComponent(message2);
    var fallbackLink2 = "https://web.whatsapp.com/send?phone=" + phoneNumber2 + "&text=" + encodeURIComponent(message2);

    var opened = window.open(whatsappLink2, '_blank');

    if (!opened || opened.closed || typeof opened.closed == 'undefined') {
        // WhatsApp link failed, fallback to web version
        window.open(fallbackLink2, '_blank');
    }
}
