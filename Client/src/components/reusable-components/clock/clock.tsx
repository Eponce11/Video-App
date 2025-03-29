import { UseLiveDate } from "../../../hooks/uselivedate";

export const Clock = () => {
  const now = UseLiveDate();

  const weekdayoptions: Intl.DateTimeFormatOptions = { weekday: "short" };
  const monthoptions: Intl.DateTimeFormatOptions = { month: "long" };

  const hour = (now.getHours() % 12 || 12).toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const ampm = now.getHours() < 12 ? "AM" : "PM";
  const weekday = new Intl.DateTimeFormat("en-US", weekdayoptions).format(now);
  const month = new Intl.DateTimeFormat("en-US", monthoptions).format(now);
  const day = now.getDate();

  return (
    <div>
      {hour}:{minute}
      {ampm} • {weekday} {month} {day}
    </div>
  );
};
