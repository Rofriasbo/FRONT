import React from "react";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'; // Importa los componentes de Google Maps

const MapComponent = () => { // Función que renderiza el mapa
    const center = {
        lat: 19.358928376779094, 
        lng: -99.16729686623003
    };
    return (// Renderiza el mapa usando los componentes de Google Maps
        <LoadScript googleMapsApiKey="AIzaSyDFjty2zEocmDWYXdUXjlQAtoUSJ5zxuBQ">// API key de Google Maps
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={center}
                zoom={12} // Nivel de zoom
            >
                <Marker position={center} />
            </GoogleMap>

        </LoadScript>
    );
};

export default MapComponent; // Exporta el componente MapComponent