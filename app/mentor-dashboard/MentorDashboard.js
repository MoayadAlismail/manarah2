// MentorDashboard.js
import { useState } from 'react';

const MentorDashboard = () => {
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send the time slot data to your backend
        const response = await fetch('/api/available-times', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, startTime, endTime }),
        });

        if (response.ok) {
            // Handle success (e.g., show a success message)
        } else {
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
            <button type="submit">Add Available Time Slot</button>
        </form>
    );
};

export default MentorDashboard;