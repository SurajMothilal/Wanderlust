import React, { useState, useEffect } from "react";

import WanderlustApi from "src/services/WanderlustApi";

interface LocationObject {
  latitude: number;
  longitude: number;
}

const useCurrentLocationMarkers = (
  currentLatitude: number,
  currentLongitude: number
) => {
  const [locationMarkers, setLocationMarkers] = useState<Array<LocationObject>>(
    []
  );

  const handleSuccess = response => {
    setLocationMarkers(response);
  };

  useEffect(() => {
    const params = {
      latitude: currentLatitude,
      longitude: currentLongitude
    };
    WanderlustApi.fetchPointsOfInterest(params).then(data =>
      handleSuccess(data)
    );
  }, [currentLatitude, currentLongitude]);

  return locationMarkers;
};

export default useCurrentLocationMarkers;
