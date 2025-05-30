/**
 * Fetches and returns the data for section 4 from the data file.
 *
 * @returns {Promise<object[]>} A promise which resolves to an array of objects containing the data for section 4.
 */
export const getInfoSection4 = async () => {
  const response = await fetch('/data/section4.json')
  const data = await response.json()
  return data
}

/**
 * Fetches and returns the data for section 3 from the data file.
 *
 * @returns {Promise<object[]>} A promise which resolves to an array of objects containing the data for section 3.
 */
export const getInfoSection3 = async () => {
  const response = await fetch('/data/section3.json')
  const data = await response.json()
  return data
}
