import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DemoPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(0, 0, 0, 0);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const isSelected = (day: number) =>
    selectedDate?.getFullYear() === viewYear &&
    selectedDate?.getMonth() === viewMonth &&
    selectedDate?.getDate() === day;

  const isToday = (day: number) =>
    today.getFullYear() === viewYear &&
    today.getMonth() === viewMonth &&
    today.getDate() === day;

  const handleDayClick = (day: number) => {
    if (isPast(day)) return;
    setSelectedDate(new Date(viewYear, viewMonth, day));
    setSelectedSlot(null);
  };

  const calendarCells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const canSubmit = selectedDate && selectedSlot;

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book a Demo</h1>
            <p className="text-muted-foreground">
              See CryNova in action. Fill out the form and our team will schedule a personalized demo for you.
            </p>
          </div>

          {submitted ? (
            <div className="bg-card rounded-2xl p-8 shadow-card text-center animate-fade-in">
              <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-mint-foreground">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">Thank you!</h2>
              <p className="text-muted-foreground">
                Your demo is booked for{" "}
                <span className="font-medium text-foreground">
                  {selectedDate?.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                </span>{" "}
                at <span className="font-medium text-foreground">{selectedSlot}</span>.
              </p>
              <p className="text-muted-foreground mt-2 text-sm">We'll send a confirmation to your email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone (Optional)</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Calendar */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Select a Date</label>
                <div className="border border-border rounded-xl overflow-hidden bg-background">
                  {/* Month navigation */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <span className="text-sm font-medium text-foreground">
                      {MONTHS[viewMonth]} {viewYear}
                    </span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 px-2 pt-2">
                    {DAYS.map(d => (
                      <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
                    ))}
                  </div>

                  {/* Day cells */}
                  <div className="grid grid-cols-7 px-2 pb-3 gap-y-1">
                    {calendarCells.map((day, i) => (
                      <div key={i} className="flex items-center justify-center">
                        {day === null ? null : (
                          <button
                            type="button"
                            disabled={isPast(day)}
                            onClick={() => handleDayClick(day)}
                            className={`w-9 h-9 rounded-full text-sm transition-colors
                              ${isPast(day)
                                ? "text-muted-foreground/40 cursor-not-allowed"
                                : isSelected(day)
                                ? "gradient-primary text-white font-medium"
                                : isToday(day)
                                ? "border border-primary text-primary font-medium hover:bg-primary/10"
                                : "text-foreground hover:bg-muted"
                              }`}
                          >
                            {day}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Slots — only show after date is picked */}
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select a Time Slot
                    <span className="text-muted-foreground font-normal ml-1">
                      ({selectedDate.toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" })})
                    </span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-1 rounded-xl text-sm border transition-colors
                          ${selectedSlot === slot
                            ? "gradient-primary text-white border-transparent font-medium"
                            : "border-border text-foreground hover:border-primary hover:text-primary bg-background"
                          }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                variant="hero"
                size="lg"
                type="submit"
                className="w-full"
                disabled={!canSubmit}
              >
                {canSubmit ? `Request Demo · ${selectedSlot}` : "Select a date & time"}
              </Button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DemoPage;