export async function fetchData() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const newData = await res.json();
    return newData;
  } catch (error) {
    // Handle error
    throw error;
  }
}
