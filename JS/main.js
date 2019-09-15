//Google maps API
function initMap() {
  const myLocation = {
    lat: -29.687124,
    lng: -53.804677
  };
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: myLocation,
    zoom: 14
  });

  const marker = new google.maps.Marker({
    position: myLocation,
    map: map
  });
}

// Makes the nav bar background transparent once the page is scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 150){
    this.document.querySelector('#nav-bar').style.background =  'rgba(51, 51, 51, 0.9)';
  } else{
    this.document.querySelector('#nav-bar').style.background = '#333';
  }
});

//jQuery smooth scrolling
$('#nav-bar a, .btn').on('click',function(event){
  if (this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
      scrollTop: $(hash).offset().top - 100
      },800
    );
  }
});