"use client";


interface ShowButtonProps {
  showUserSavedData: boolean,
  setShowUserSavedData: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowButton: React.FC<ShowButtonProps>=({
  showUserSavedData,
  setShowUserSavedData
})=> {

  return (
    <div>
      <button onClick={() => setShowUserSavedData(!showUserSavedData)}>
        Show Saved  Weather Data
      </button>
    </div>
  );
}
export default ShowButton;