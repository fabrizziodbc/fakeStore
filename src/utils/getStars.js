const getStars = (rate) => {
  const rateNumber = Math.floor(Number(rate));
  let stars;
  switch (rateNumber) {
    case 1:
      stars = <i className="fas fa-star" />;
      break;
    case 2:
      stars = (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </>
      );
      break;
    case 3:
      stars = (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </>
      );

      break;
    case 4:
      stars = (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </>
      );

      break;
    case 5:
      stars = (
        <>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </>
      );
      break;

    default:
      break;
  }
  return stars;
};
export default getStars;
