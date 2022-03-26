import "./ratingCard.scss";

const RatingCard = () => {
  return (
    <div className="rating-card-container">
      <div className="head">
        <div className="section">
          <div className="overall-txt">Overall rating</div>

          <div className="votes">
            <span className="rating-txt">4.2</span>
            <span>
              <img
                src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648283850/4-stars_aiqewi.svg"
                alt="4 starts"
              />
            </span>

            <span className="vote-txt">3 votes</span>
          </div>
        </div>
        <div className="review-btn">Leave review</div>
      </div>

      <div className="sort">
        <div>
          Sort by: <span> Newest first</span>
        </div>
      </div>

      <div className="user-reviews">
        <div className="review">
          <div className="user-image">
            <img
              src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648284883/savannah_hmboli.png"
              alt=""
            />
          </div>

          <div className="user-detail">
            <div className="name">Savannah Miles</div>

            <div className="rating">
              <span>
                <img
                  src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648283850/4-stars_aiqewi.svg"
                  alt="4 starts"
                />
              </span>

              <span className="days">10 days ago</span>
            </div>
            <div className="comment">
              Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei
              doming aperiam delicata est.
            </div>

            <div className="like-action">
              <img
                src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648285852/like-dislike_zq78pi.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="review">
          <div className="user-image">
            <img
              src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648285496/jacob_pxo4qn.png"
              alt=""
            />
          </div>

          <div className="user-detail">
            <div className="name">Jacob Jones</div>
            <div className="rating">
              <span>
                <img
                  src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648283850/4-stars_aiqewi.svg"
                  alt="4 starts"
                />
              </span>

              <span className="days">1 day ago</span>
            </div>
            <div className="comment">
              Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei
              doming aperiam delicata est.
            </div>

            <div className="like-action">
              <img
                src="https://res.cloudinary.com/dyvivj6d5/image/upload/v1648285852/like-dislike_zq78pi.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
