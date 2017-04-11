import { getDays } from '../../utils/calendarDates';

export function getBudget({ Budget }) {
  return { type: 'GET_BUDGET_FULFILLED', payload: Budget };
}

export function flightBudget({ price, original }) {
  const newBudget = original - price;
  return { type: 'FLIGHT_BUDGET_FULFILLED', payload: { original, flight: newBudget } };
}

export function hotelBudget(props) {
  const flight = props.budget.flight;
  const hotel = props.hotel;
  const original = Number(props.budget.original);
  const days = getDays(props.arrivalDate, props.departureDate);
  console.log('NUMBUR OF DUSHHSDKFL', days);
  const newBudget = flight - (hotel * days);
  return { type: 'HOTEL_BUDGET_FULFILLED', payload: { original, flight, hotel: newBudget } };
}
export function eventBudget(props) {
  console.log('EVENTTTT', props.event);
  let newBudget;
  if (hotel) {
    newBudget = hotel;
  }
  return { type: 'EVENT_BUDGET_FULFILLED', payload: { original, flight, hotel, events: newBudget } };
}
