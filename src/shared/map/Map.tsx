import GoogleMapReact from 'google-map-react';
import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> { }

export default function GoogleMap({ ...props }: Props) {
    const defaultProps = {
        center: {
            lat: -12.163513103408222,
            lng: -76.97230952925827
        },
        zoom: 17
    };
    const renderMarkers = (map: any, maps: any) => {
        const infoWindow = new google.maps.InfoWindow();

        let marker = new maps.Marker({
            position: { lat: -12.163513103408222, lng: -76.97230952925827 },
            map,
            title: 'IPD SJM',
            text: 'IPD SJM',
        });

        marker.addListener("click", () => {
            //TODO: Show the information of the vaccination center
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
        return marker;
    };

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY! }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >

        </GoogleMapReact>
    );
}