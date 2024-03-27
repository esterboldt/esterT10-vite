import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Menu from "./components/Menu"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Contact = () => {
    const geoStat = ({lat: -25.4251954, lng: -49.272764})
    const position = [-25.4251954, -49.272764]
    return (
        <div>
            <Menu />
            <h1>Contato</h1>
            <div>
                <h2>Mapa</h2>
                <div>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "700px"}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                <a href={`https://www.google.com.br/maps/search/sesi+centro/@${geoStat.lat},${geoStat.lng},19z?entry=ttu`}>Google maps</a><br></br>
                                <p>R. Paula Gomes, 270 - Centro, Curitiba - PR, 80510-070</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}