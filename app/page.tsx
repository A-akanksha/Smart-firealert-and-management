"use client"
import Image from "next/image";


import React, { useState, useEffect } from 'react';
import { database } from './firebaseConfig';
import { get, ref } from "firebase/database";


// components/Map.js

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  latitude: number;
  longitude: number;
}


const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};



export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, 'DHT');
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setData(snapshot.val());
        console.log(data);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])



  return (
    <div className="container">
      {/* Hello
      {data ? <>
       <p>Temperature : {data.temperature}</p>
       <p>Humidity : {data.humidity}</p>
       <p>Latitude : {data.latitude}</p>
       <p>Longitude : {data.longitude}</p>
      </>:<>
      <p>Fetching data from database....</p>
      </>} */}
      <div className="fireportal">
        <div id="p">FIRE BRIGADE PORTAL</div> 
      </div>
      {data ? <>
        <div className="content">
        <div className="dht">
            <div className="temp"><h3>Temperature</h3><span id="temp"> : {data.temperature}</span></div>
            <div className="humidity"><h3>Humidity</h3><span id="humidity"> : {data.humidity}</span></div>
        </div>
        <Map latitude={data.latitude} longitude={data.longitude} /> 
        
    </div>
      </> : <>
       <p>Fetching data from database...</p>
      </>}
      
    </div>
  );
}