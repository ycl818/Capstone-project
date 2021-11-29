import React, { useState, useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { debounce } from "lodash";

const AnyReactComponent = ({ text }) => (
  <div>
    <img
      style={{ height: "30px", width: "30px" }}
      src="https://e7.pngegg.com/pngimages/918/46/png-clipart-pegman-google-maps-google-street-view-google-goggles-google-angle-rectangle-thumbnail.png"
      alt="no image"
    />
    {text}
  </div>
);

const BankMarker = ({ icon, text, photos }) => (
  <div>
    <img style={{ height: "30px", width: "30px" }} src={icon} alt="no image" />
    <div className="markText">{text}</div>
    <img src={photos} alt="" />
  </div>
);

const Map = (props) => {
  // const [userlat, setUserlat] = useState(null);
  // const [userlng, setUserlng] = useState(null);

  //defualt position
  const [myPos, setMyPos] = useState({ lat: 42.4024, lng: -71.0841 });
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [places, setPlaces] = useState([]);
  const [mapType, setMaptype] = useState("roadmap");
  let inputRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [autoCompleteResults, setAutocompleteResults] = useState([]);
  const [currentCenter, setCurrentCenter] = useState({
    lat: 42.4024,
    lng: -71.0841,
  });

  const [openHours, setOpenhours] = useState([]);

  const handleInput = () => {
    setInputText(inputRef.current.value);
  };
  // when click the place switch it to the center

  const MapTypeChange = (e) => {
    setMaptype(e.target.name);
  };

  const apiHasLoaded = (map, maps) => {
    setMapInstance(map);
    setMapApi(maps);
    setMapApiLoaded(true);
  };

  const handleCenterChange = () => {
    if (mapApiLoaded) {
      setMyPos({
        lat: mapInstance.center.lat(),
        lng: mapInstance.center.lng(),
      });
    }
  };

  const findBankLocation = () => {
    if (mapApiLoaded) {
      const service = new mapApi.places.PlacesService(mapInstance);

      const request = {
        location: myPos,
        radius: 1500,
        type: ["bank"],
        ffields: [
          "geometry",
          "name",
          "rating",
          "formatted_address",
          "opening_hours",
        ],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === mapApi.places.PlacesServiceStatus.OK) {
          console.log(results);
          setPlaces(results);
        }
      });
    }
  };

  const handleAutocomplete = () => {
    if (mapApiLoaded) {
      const service = new mapApi.places.AutocompleteService();
      const request = {
        input: inputText, // input is inputText
      };

      service.getPlacePredictions(request, (results, status) => {
        setAutocompleteResults(results);
      });
    }
  };

  // when click autocomplete address change positions
  const handleClickToChangeMyPosition = (e) => {
    const placeId = e.target.getAttribute("dataid");
    const service = new mapApi.places.PlacesService(mapInstance);
    const request = {
      placeId,
      ffields: [
        "geometry",
        "name",
        "rating",
        "formatted_address",
        "opening_hours",
      ],
    };

    service.getDetails(request, (results, status) => {
      if (status === mapApi.places.PlacesServiceStatus.OK) {
        //console.log(results);
        //console.log(results.opening_hours);
        const newPosition = {
          lat: results.geometry.location.lat(),
          lng: results.geometry.location.lng(),
        };
        setOpenhours(results.opening_hours);
        setCurrentCenter(newPosition); // view of map
        setMyPos(newPosition); // change MyPosition
        setAutocompleteResults([]); // clear list
        inputRef.current.value = ""; //  clear <input>
        console.log(openHours)
      }
    });
  };

  useEffect(() => {
    handleAutocomplete();
  }, [inputText]);

  useEffect(() => {
    findBankLocation();
  }, [myPos, mapApiLoaded]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <div className="container">
        <div className="autoinput">
          <h2>Find Banks near me:</h2>
          <input
            ref={inputRef}
            type="text"
            onChange={debounce(handleInput, 500)}
          />
        </div>

        <div onClick={handleClickToChangeMyPosition}>
          {autoCompleteResults && inputText
            ? autoCompleteResults.map((item) => (
                <div className="des" key={item.id} dataid={item.place_id}>
                  　{item.description}
                </div>
              ))
            : null}
        </div>

        <div className="modebtn">
          <input
            type="button"
            value="hybrid"
            onClick={MapTypeChange}
            name="hybrid"
          />
          <input
            type="button"
            value="roadmap"
            onClick={MapTypeChange}
            name="roadmap"
          />
        </div>
      </div>
      <GoogleMapReact
        className="googlemapindex"
        bootstrapURLKeys={{
          key: "AIzaSyBRLG5zi49FkuriT5_ILjaAw6-iikN5aLo",
          libraries: ["places"],
        }}
        center={currentCenter}
        options={{ mapTypeId: mapType }}
        onBoundsChange={handleCenterChange}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        <AnyReactComponent lat={myPos.lat} lng={myPos.lng} text="***MyPos***" />

        {places.map((item) => (
          <BankMarker
            icon={item.icon}
            key={item.id}
            lat={item.geometry.location.lat()}
            lng={item.geometry.location.lng()}
            text={item.name}
            placeId={item.place_id}
            rating={item.rating}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.4024,
    lng: -71.0841,
  },
  zoom: 15,
};

export default Map;
