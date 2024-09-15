import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
const ComponentResize = () => {
	const map = useMap();
	setTimeout(() => {
		map.invalidateSize();
	}, 0);

	return null;
};
const PopUpMaps = ({position}) =>{
console.log(position)
	if(position === '') return null
    return(
        <>
        		<MapContainer
			style={{
				height: "100%",
				width: "100%",
			}}
			center={position}
			attributionControl={true}
			zoom={8}
			minZoom={3}
			scrollWheelZoom={true}
		>
			<ComponentResize />
			<TileLayer
				// className={'ion-hide'}
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
        </>
    )
}

export default PopUpMaps