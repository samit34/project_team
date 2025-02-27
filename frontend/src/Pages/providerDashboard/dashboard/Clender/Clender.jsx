import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Clender.css";

function Clender() {
    const [confirmedBookings, setConfirmedBookings] = useState([
        { date: "2025-03-01", status: "confirmed" },
        { date: "2025-03-05", status: "pending" }
    ]);
    const [pendingBookings, setPendingBookings] = useState([]);

    useEffect(() => {
        fetch("/api/bookings")
            .then((res) => res.json())
            .then((data) => {
                setConfirmedBookings(data.confirmed.map(date => ({ date })));
                setPendingBookings(data.pending.map(date => ({ date })));
            });
    }, []);

    const isConfirmed = (date) => 
        confirmedBookings.some(booking => booking.date === date.toISOString().split("T")[0]);

    const isPending = (date) => 
        pendingBookings.some(booking => booking.date === date.toISOString().split("T")[0]);

    return (
        <div>
            <h2>Booking Calendar</h2>
            <Calendar
                tileClassName={({ date, view }) => {
                    if (view !== "month") return "";
                    
                    let classes = [];
                    if (isConfirmed(date)) classes.push("confirmed-booking");
                    if (isPending(date)) classes.push("pending-booking");

                    return classes.join(" ");
                }}
            />
        </div>
    );
}

export default Clender;
