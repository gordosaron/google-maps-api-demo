let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.253, lng: 20.14824 },
    zoom: 15,
    gestureHandling: "none",
    zoomControl: false
  });

  const markers = [
    {
      coords: { lat: 46.253174646099104, lng: 20.139165592028643 },
      content: `
        <h2>Cool Club</h2>
        <small><strong>Location: </strong>Londoni krt. 22. Szeged 6722</small>
        <small><strong>Phone: </strong>+36 30 822 8913</small>
      `,
      icon: 'https://img.icons8.com/doodle/48/000000/beer--v1.png'
    },

    {
      coords: { lat: 46.25519448295372, lng: 20.152599077835 },
      content: `
        <h2>Vár Söröző</h2>
        <small><strong>Location: </strong>Deák Ferenc u. 24-26 Szeged 6720</small>
        <small><strong>Phone: </strong>+36 70 209 7353</small>
      `,
      icon: 'https://img.icons8.com/doodle/48/000000/beer--v1.png'
    },

    {
      coords: { lat: 46.250372450868674, lng: 20.14527220911518 },
      content: `
        <h2>DTK & Pub</h2>
        <small><strong>Location: </strong>Dugonics tér 11. Szeged 6720</small>
        <small><strong>Phone: </strong>+36 62 669 241</small>
      `,
      icon: 'https://img.icons8.com/doodle/48/000000/beer--v1.png'  
    },

    {
      coords: { lat: 46.25404091221701, lng: 20.152136347758237 },
      content: `
        <h2>Városi Rock Klub</h2>
        <small><strong>Location: </strong>Stefánia sétány 6. Szeged 6720</small>
        <small><strong>Phone: </strong>+36 62 658 769</small>
      `,
      icon: 'https://img.icons8.com/fluent/48/000000/rock-music.png' 
    }
  ];

  markers.forEach((marker) => {
    addMarker(marker);
  });

  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      animation: google.maps.Animation.DROP,
      map,
      icon: props.icon
    });

    const infowindow = new google.maps.InfoWindow({
      content: props.content
    });
  
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    })
  }
}