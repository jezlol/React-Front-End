import PropTypes from 'prop-types';

export default function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};