module.exports = {
  pinArray: (data) => {
    const results = [];
    if (data.hotel) results.push(data.hotel);
    if (data.yelpEvents) {
      data.yelpEvents.forEach((event) => {
        results.push(event);
      });
    }
    return results;
  },
};
