import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSentOffers } from "../store/actions/offerActions";
import Private from "../components/Hoc/Private";
import ServiceItem from "../components/service/ServiceItem";
import Spinner from "../components/spinner/Spinner";

const ReceivedOffers = ({
  fetchSentOffers,
  auth: { user },
  offer: { offers, loading },
}) => {
  useEffect(() => {
    fetchSentOffers(user.uid);
  }, []);
  return (
    <div className="container">
      <div className="content-wrapper">
        <h1 className="title">Received Offers</h1>
        <div className="columns">
          {offers.length === 0 && loading ? (
            <Spinner />
          ) : offers.length !== 0 ? (
            offers.map(offer => (
              <div key={offer.id} className="column is-one-third">
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={offer.service}
                >
                  <div className="tag is-large">{offer.status}</div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">From User:</span>{" "}
                      {offer.toUser.fullName}
                    </div>
                    <div>
                      <span className="label">Note:</span> {offer.note}
                    </div>
                    <div>
                      <span className="label">Price:</span> ${offer.price}
                    </div>
                    <div>
                      <span className="label">Time:</span> {offer.time} hours
                    </div>
                  </div>
                </ServiceItem>
              </div>
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                border: "1px solid lightgrey",
                width: "100vw",
              }}
            >
              <h1>No Sent offers yet</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapstatetoProps = state => ({
  offer: state.offer,
});

export default connect(mapstatetoProps, { fetchSentOffers })(
  Private(ReceivedOffers, "auth")
);

//// Action
export const fetchSentOffers = userId => async dispatch => {
  const userRef = createRef("profiles", userId);
  dispatch({ type: RESET_LOADING }); /////////////////////////////VIP
  try {
    let sentOffers = await db
      .collection("offers")
      .where("fromUser", "==", userRef)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      )
      .then(
        async offers =>
          await Promise.all(
            offers.map(offer => extractDataFromOffer(offer, "toUser"))
          )
      );
    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      payload: sentOffers,
    });
    return "success";
  } catch (error) {
    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      payload: [],
    });
  }
};

////// Reducer
import { FETCH_OFFERS_SUCCESS, RESET_LOADING } from "../actions/types";

const initialState = {
  offers: [],
  loading: true,
};
const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload,
        loading: false,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default offerReducer;

// another Example
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { markMessageAsRead } from "../store/actions/collaborationActions";

const ReceivedMessages = ({ auth: { messages }, markMessageAsRead }) => {
  const renderMessages = messages => {
    const filteredMessages = messages
      .filter(m => !m.isRead)
      .map(message => (
        <div key={message.id}>
          <div className="from-user">
            <span>From: </span>
            {message.fromUser.name}
          </div>
          <hr />
          <div className="navbar-item navbar-item-message">
            <div>{message.text}</div>
            <Link onClick={() => {}} to={message.cta}>
              <div className="button is-success" style={{ margin: "0 10px" }}>
                Join
              </div>
            </Link>
            <button
              onClick={() => markMessageAsRead(message)}
              className="button is-warning"
            >
              Later
            </button>
          </div>
        </div>
      ));

    // *********************
    if (filteredMessages.length === 0) {
      return <div className="navbar-item">No Messages :(</div>;
    }
    // *********************

    return filteredMessages;
  };

  return renderMessages(messages);
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { markMessageAsRead })(
  ReceivedMessages
);
