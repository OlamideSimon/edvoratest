export const filteredRides = (rides, user) => {
    const list = rides.rides?.filter((ride) => {
        const sort = ride.station_path.some((element) => {
          return Math.abs(element - user.user?.station_code) <= 2;
        });
        return sort;
    });
    return list
}

export const distance = (arr, user) => {
    let number = 0;
    arr?.map((fig) => {
      const diff = fig - user.user.station_code;
      if (diff <= 2) {
        number = Math.abs(diff);
      }
    });
    return number;
};