export const fetchData = async (url) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      // Handle non-OK responses
      console.log(await response.json())
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    // Handle errors during the fetch operation
    console.error('Error fetching data:', error.message)
    throw error
  }
}
