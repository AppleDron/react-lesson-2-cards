import { EventBoard } from "./EvenrsBoard/EventsBoard";
import { PageTitle } from "./PageTitle/PageTitle";
import {events} from '../up-coming-events'

export const App = () => {
  return <div>
    <PageTitle text="24th Core Worlds Coalition Conference" />
    <EventBoard events={events } />
  </div>;
};

