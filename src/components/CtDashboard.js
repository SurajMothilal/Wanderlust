import React, { PureComponent } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class CtDashboard extends PureComponent {
  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
      />
    );
  }
}

export default CtDashboard;
