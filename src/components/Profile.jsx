import React from 'react';

const Profile = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossOrigin="anonymous"
      />

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3">
            {/* User Information Section */}
            <div className="card-box text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="rounded-circle avatar-xl img-thumbnail"
                alt="profile-image"
              />
              <h4 className="mb-0">Ram Mohan</h4>
              <p className="text-muted">rammohan@gmail.com</p>

              <div className="btn-group d-flex flex-column">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-xs waves-effect mb-2 waves-light"
                >
                  Dashboard
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary btn-xs waves-effect mb-2 waves-light"
                >
                  Perks
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary btn-xs waves-effect mb-2 waves-light"
                >
                  Addons
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary btn-xs waves-effect mb-2 waves-light"
                >
                  Logout
                </button>
              </div>
            </div>{" "}
            {/* end card-box */}
          </div>{" "}

          <div className="col-lg-9 col-xl-9">
            {/* Plan Selection Section */}
            <div className="card-box">
              <b>
                <h3>Choose a plan that's just right for you!</h3>
              </b>

              <div className="row">
                {/* Card 1 */}
                <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
  <div className="card-header"><h3>Premium</h3>
  <p>$199.99/mo</p>
  <button></button></div>
  
  <div className="card-body text-dark">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>

                {/* Card 2 */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card 2</h5>
                      <p className="card-text">Some content for Card 2.</p>
                      <a href="#" className="btn btn-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card 3</h5>
                      <p className="card-text">Some content for Card 3.</p>
                      <a href="#" className="btn btn-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card 4</h5>
                      <p className="card-text">Some content for Card 4.</p>
                      <a href="#" className="btn btn-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end card-box*/}
          </div>{" "}
          {/* end col */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
