import React, { FC } from "react"; // Make sure to import React

import { WeatherDataItem } from "../types/apiResponses";

interface SavedDataContainerProps {
  userSavedData: null | WeatherDataItem[];
}

const SavedDataContainer: FC<SavedDataContainerProps> = ({ userSavedData }) => {
  if (Array.isArray(userSavedData)) {
    // Use Array.isArray to check if it's an array
    console.log(userSavedData);
  }

  return null; // Return null or some JSX content here
};

export default SavedDataContainer;
