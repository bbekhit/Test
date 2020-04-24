import React from "react";
const handleChange = ({ target: { value, name } }) => {
  // OfferModal
  if (name === "time") {
    const price = Math.round(value * service.price * 100) / 100;
    return setOffer({ ...offer, [name]: value, price });
  }
};

const shortText = (text, maxLength = 50) => {
  //serviceItem
  if (!text) {
    return " ";
  }
  if (text.length <= maxLength) {
    return text;
  }

  return text.substr(0, maxLength) + "...";
};

const statusClass = status => {
  if (status === "pending") return "is-warning";
  if (status === "accepted") return "is-success";
  if (status === "declined") return "is-danger";
};

const ProjectsHelperFunctions = () => {
  return (
    <div>
      <div className="card-text">
        <p>{shortText(service.description)}</p>
      </div>
      <div className={`tag is-large ${statusClass(offer.status)}`}>
        {offer.status}
      </div>
    </div>
  );
};

export default ProjectsHelperFunctions;
