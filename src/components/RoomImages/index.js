import React from 'react';
import PropTypes from 'prop-types';
import './roomImages.css';

const RoomImages = ({ rooms }) => (
  <div className="room-container">
    {Object.values(rooms).map((room, idx) => (
      <div className="room-wrapper" key={`room-${idx}`}>
        <img className="room-image" src={room.room_image} alt="" />
        {room.book_button ? (
          <a className="book-button-room" href={room.book_button.url}>
            {room.book_button.title}
          </a>
        ) : null}
        <div className="room-type">{room.room_title}</div>
        {room.room_subtitle ? (
          <div className="room-location">{room.room_subtitle}</div>
        ) : null}
      </div>
    ))}
  </div>
);

RoomImages.propTypes = {
  rooms: PropTypes.object, //eslint-disable-line
};
RoomImages.defaultProps = {
  rooms: {},
};

export default RoomImages;
