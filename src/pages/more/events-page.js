import React from "react";
import EventsHeader from "../../sections/more/events-sections/eventsHeader";
import UpComingEvents from "../../sections/more/events-sections/upComingEvents";

const EventsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Upcoming Events & Webinars | Skillang</title>
        <meta
          name="description"
          content="Join us for engaging events to help you navigate studying and working abroad. Connect with university reps and get practical application advice"
        />
        <meta
          name="keywords"
          content="upcoming events & webinars,study abroad events,work abroad programs"
        />
      </Helmet>
      <EventsHeader />
      <UpComingEvents />
    </div>
  );
};

export default EventsPage;
