export function toggleHotels({ hotels }) {
  const bool = (hotels === undefined || hotels === false);
  return { type: 'TOGGLE_HOTELS_FULLFILLED', payload: bool };
}
