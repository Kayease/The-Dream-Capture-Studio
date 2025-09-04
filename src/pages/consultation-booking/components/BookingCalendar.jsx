import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BookingCalendar = ({ selectedDate, onDateSelect, selectedTime, onTimeSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentMonth?.getFullYear();
    const month = currentMonth?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate?.setDate(startDate?.getDate() - firstDay?.getDay());
    
    const days = [];
    const today = new Date();
    today?.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date?.setDate(startDate?.getDate() + i);
      
      const isCurrentMonth = date?.getMonth() === month;
      const isPast = date < today;
      const isToday = date?.getTime() === today?.getTime();
      const isSelected = selectedDate && date?.toDateString() === selectedDate?.toDateString();
      
      // Mock availability (in real app, this would come from API)
      const isAvailable = isCurrentMonth && !isPast && Math.random() > 0.3;
      
      days?.push({
        date,
        isCurrentMonth,
        isPast,
        isToday,
        isSelected,
        isAvailable
      });
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth?.setMonth(currentMonth?.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const availableTimeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '1:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '6:00 PM', available: false }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-headline text-foreground mb-4">
              Select Your Preferred Date & Time
            </h2>
            <p className="text-body text-muted-foreground">
              Choose a date and time that works best for your schedule. All times are in your local timezone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="bg-card rounded-xl border border-border p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
                </h3>
                
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames?.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays()?.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day?.isAvailable && onDateSelect(day?.date)}
                    disabled={!day?.isAvailable}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200
                      ${!day?.isCurrentMonth ? 'text-muted-foreground/30' : ''}
                      ${day?.isPast || !day?.isAvailable ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}
                      ${day?.isToday ? 'bg-accent/20 text-accent font-semibold' : ''}
                      ${day?.isSelected ? 'bg-primary text-primary-foreground font-semibold' : ''}
                      ${day?.isAvailable && !day?.isSelected && !day?.isToday ? 'hover:bg-muted' : ''}
                    `}
                  >
                    {day?.date?.getDate()}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent/20 rounded"></div>
                  <span>Today</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-muted rounded"></div>
                  <span>Available</span>
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Available Time Slots
              </h3>

              {selectedDate ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedDate?.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>

                  {availableTimeSlots?.map((slot) => (
                    <button
                      key={slot?.time}
                      onClick={() => slot?.available && onTimeSelect(slot?.time)}
                      disabled={!slot?.available}
                      className={`
                        w-full p-3 rounded-lg text-left transition-all duration-200 border
                        ${slot?.available ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}
                        ${selectedTime === slot?.time 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : slot?.available 
                            ? 'bg-background border-border hover:border-primary/30 hover:bg-muted' :'bg-muted border-border'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{slot?.time}</span>
                        {!slot?.available && (
                          <span className="text-xs text-muted-foreground">Unavailable</span>
                        )}
                        {selectedTime === slot?.time && (
                          <Icon name="Check" size={16} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Calendar" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Please select a date to view available time slots
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;