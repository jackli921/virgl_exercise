import React, { FC } from "react";
import { WeatherDataItem } from "../types/apiResponses";
import { nanoid } from "nanoid"; // Import nanoid

interface SavedDataContainerProps {
  userSavedData: null | WeatherDataItem[];
  showUserSavedData: boolean;
}

const SavedDataContainer: FC<SavedDataContainerProps> = ({
  userSavedData,
  showUserSavedData,
}) => {
  let userDataElement;
  if (Array.isArray(userSavedData)) {
    userDataElement = userSavedData.map((obj) => (
      <div key={nanoid()}>
        {" "}
        {/* Use nanoid() as the key */}
        <p>{obj.currentTimestamp}</p>
        <p>{obj.temperature}°C</p>
      </div>
    ));
  }

  return (<>{showUserSavedData ? userDataElement : null}</>);
};

export default SavedDataContainer;
