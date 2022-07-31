import React from 'react';
import moment from 'moment';

const formatDate = (birthDate) => moment(birthDate).format('DD MMM YYYY');

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile__name">{`${props.data.firstName} ${props.data.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate(
        props.data.birthDate
      )} in ${props.data.birthPlace}`}</div>
    </div>
  );
}

export default Profile;
