// import css from './Event.module.css'
import PropTypes from 'prop-types'
import { Card, Chip, EventName, Info } from './Event.styled';
import { formatEventDuration, formatEventStart } from 'helpers/dateFormat';
import { FaMapMarkedAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export const Event = (props) => {
  const { name, location, speaker, type, start, end } = props;
    return (<Card>
  <EventName>{name}</EventName>
  <Info>
    <i><FaMapMarkedAlt/></i>
    {location}
  </Info>
  <Info >
            <i><FaUserAlt/></i>
            {speaker}
  </Info>
  <Info >
            <i><FaCalendarAlt/></i>
            {formatEventStart(start)}
  </Info>
  <Info >
            <i><FaClock /></i>
            {formatEventDuration(start, end)}
  </Info>
        <Chip type={type}>{ type }</Chip>
</Card>)
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};