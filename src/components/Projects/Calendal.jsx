import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendal = () => {
  return (
    <>
      <FullCalendar
        height="530px"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        weekends={true}
        events={[
          { title: "event 1", date: "2024-08-14" },
          { title: "event 2", date: "2024-08-18" },
        ]}
      />
    </>
  );
};

export default Calendal;
