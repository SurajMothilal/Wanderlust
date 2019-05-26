import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { mapTheme } from "src/styles";
import useCurrentLocationMarkers from "src/hooks/CurrentLocationMarker";

const CtDashboard: React.FunctionComponent<{}> = ({}) => {
  const locationMarkers = useCurrentLocationMarkers();
  console.log(locationMarkers);
  return (
    <MapView
      customMapStyle={mapTheme}
      initialRegion={{
        latitude: 43.6532,
        longitude: -79.3832,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      provider={PROVIDER_GOOGLE}
      {...{ style: { flex: 1 } }}
    />
  );
};

export default CtDashboard;
