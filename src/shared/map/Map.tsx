import GoogleMapReact from 'google-map-react';
import { HtmlHTMLAttributes, useEffect, useState } from "react";
import Marker from './Marker';

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    selected: string;
    locations: any[];
}

export default function GoogleMap({ selected, locations, ..._props }: Props) {
    const [geolocation, setGeoLocation] = useState({
        lat: -12.047038,
        lng: -77.077199
    });

    const getCenter = () => {
        if (selected != "") {
            let data = locations.find(vc => vc.id == selected);
            return {
                lat: +data.location.lat,
                lng: +data.location.lng
            }
        }
        return geolocation
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((data) => {
            setGeoLocation({
                lat: data.coords.latitude,
                lng: data.coords.longitude
            })
        })
    }, []);

    const getZoom = () => {
        return 12;
    }

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY! }}
            center={getCenter()}
            zoom={getZoom()}
        >
            {
                locations.map((marker: any) => (
                    < Marker key={`${marker.id}-${marker.location.lat},${marker.location.lng}`}
                        selected={marker.id == selected}
                        lat={marker.location.lat}
                        lng={marker.location.lng}
                    />
                ))
            }
        </GoogleMapReact>
    );
}