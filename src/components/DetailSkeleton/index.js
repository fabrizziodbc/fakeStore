import './styles.scss';

const DetailSkeleton = () => {
  return (
    <div className="detailSkeleton">
      <span className="detailSkeleton__title skeleton" />
      <span className="detailSkeleton__category skeleton" />
      <div className="detailSkeleton__rating">
        <span className="detailSkeleton__rate skeleton"> </span>
        <span className="detailSkeleton__count skeleton"> </span>
      </div>
      <span className="detailSkeleton__img skeleton" />
      <span className="detailSkeleton__price skeleton" />
      <span className="detailSkeleton__tag skeleton" />
      <span className="detailSkeleton__description skeleton" />
    </div>
  );
};

export default DetailSkeleton;
