import css from './Event.module.css'
import PropTypes from 'prop-types'
import { formatEventDuration, formatEventStart } from 'helpers/dateFormat';
import { FaMapMarkedAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export const Event = ({ name, location, speaker, type, start, end }) => {
    // console.log(event.name);
    return (<div className={css.event}>
  <h2 className={css.title}>{name}</h2>
  <p className={css.info}>
    <i className={css.icon}><FaMapMarkedAlt className={css.icon}/></i>
    {location}
  </p>
  <p className={css.info}>
            <i className={css.icon}><FaUserAlt className={css.icon}/></i>
            {speaker}
  </p>
  <p className={css.info}>
            <i className={css.icon}><FaCalendarAlt className={css.icon}/></i>
            {formatEventStart(start)}
  </p>
  <p className={css.info}>
            <i className={css.icon}><FaClock className={css.icon} /></i>
            {formatEventDuration(start, end)}
  </p>
        <span className={`${css[type]} ${css.chip}`}>{ type }</span>
</div>)
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};