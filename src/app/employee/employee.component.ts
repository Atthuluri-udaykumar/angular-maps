import { Component, OnInit } from '@angular/core';
import { EmployeeList, IEmployee, Uday } from './employee';
import * as L from "leaflet"
import "leaflet-routing-machine"
import "leaflet.geodesic"
import "leaflet-ant-path"
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() {
  }
  public NameS: Uday = {
    name: 'uday',
    age: '89',
    location: "KU"
  }

  fromParent: any;
  ngOnInit(): void {
    // const Berlin = new L.LatLng(52.5, 13.35);
    // const LosAngeles = new L.LatLng(33.82, -118.38);
    // const Beijing = new L.LatLng(39.92, 116.39);
    // const Capetown = new L.LatLng(-33.94, 18.39);
    // const Santiago = new L.LatLng(-33.44, -70.71);

    let rajivGandhi = {
      latitude: 17.229132,
      longitude: 78.427282
    }

    let delhiAirport = {
      latitude: 28.562957,
      longitude: 77.103434
    }

    let rajivGandhPliline = [
      [17.228967, 78.413978],
      [17.228279, 78.413933],
      [17.228819, 78.452227],
      [17.229471, 78.452196]
    ]
    let delhi = [
      [28.567441, 77.085883],
      [28.566740, 77.085438],
      [28.557968, 77.123862],
      [28.558590, 77.124001]
    ]

    let mymap = L.map('mapid').setView([20.5937, 78.9629], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '2020 Copyright &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token',

    }).addTo(mymap);

    // to draw a circle
    // var circle = L.circle([rajivGandhi.latitude, rajivGandhi.longitude], {
    //   color: 'red',
    //   fillColor: '#f03',
    //   fillOpacity: 0.5,
    //   radius: 500
    // }).addTo(mymap);

    // to draw a rectangle
    // var rect = L.rectangle([[28.567401, 77.085984], [28.560606, 77.112180]], { color: 'blue', weight: 2 }).on('click', function (e) {
    //   // There event is event object
    //   // there e.type === 'click'
    //   // there e.lanlng === L.LatLng on map
    //   // there e.target.getLatLngs() - your rectangle coordinates
    //   // but e.target !== rect
    //   console.info(e);
    // }).addTo(mymap);

    var polygon = L.polygon([
      [28.567441, 77.085883],
      [28.566740, 77.085438],
      [28.557968, 77.123862],
      [28.558590, 77.124001]
    ], { color: 'red', weight: 2 }).addTo(mymap);

    // let route = L.Routing.control({
    //   waypoints: [
    //     L.latLng(13.461902, 79.071757),
    //     L.latLng(13.451741, 79.104804),
    //     L.latLng(13.427393, 79.132319)
    //   ]
    // }).addTo(mymap);


    const places = [
      [   // 2nd line
        new L.LatLng(19.097403, 72.874245), // mumbai
        new L.LatLng(22.6520, 88.4463), // kolkata
      ],
      [
        new L.LatLng(13.1986, 77.7066), // Bangaluru
        new L.LatLng(17.2403, 78.4294), //hyderabad
        new L.LatLng(28.556160, 77.100281), // delhi
        // new L.LatLng(33.636667, -84.428056), // usa
      ]
    ];


    var greenIcon = L.icon({
      iconUrl: '../../assets/flight.png',
      // shadowUrl: '../../assets/flight.png',
      iconSize: [70, 70], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-9, -76] // point from which the popup should open relative to the iconAnchor
    });

    places.forEach((item: any) => {
      item.forEach((data: any) => {
        var marker = L.marker([data?.lat, data?.lng], { icon: greenIcon }).addTo(mymap);
        // marker.bindPopup("<b></b><br>air port ").openPopup();
      })

    })
    const options = {
      weight: 2,
      opacity: 0.6,
      color: 'red',
    };
    const geodesic = new L.Geodesic(places, options).addTo(mymap);
  }
}
