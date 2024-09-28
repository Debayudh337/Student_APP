import React, { useState, useEffect } from 'react';
import './otp.css'; // Import the CSS file

function OTPInput() {
  const [otp, setOtp] = useState(['', '', '', '']); // State to manage 4 OTP input boxes
  const [timeLeft, setTimeLeft] = useState(30); // Countdown timer
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update the timer every second
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [timeLeft]);

  // Handle input change for OTP boxes
  const handleChange = (index, event) => {
    const value = event.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    setIsSubmitting(true);
    // Here you can implement the logic for verifying the OTP
    console.log('Submitted OTP:', otp.join(''));
    // Reset OTP and timer if needed
  };

  // Handle resend OTP
  const handleResend = () => {
    setTimeLeft(60); // Reset the timer to 60 seconds
    setOtp(['', '', '', '']); // Clear the OTP input boxes
    // Add your logic to resend the OTP here
    console.log('OTP Resent');
  };

  return (
    <div className="otp-container">
      <h4>We have sent an OTP to your mobile.</h4>
      <h4>There is {timeLeft} sec left</h4>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
            className="otp-input"
            maxLength="1" // Only one character per box
          />
        ))}
      </div>
      <button 
        className="submit-button" 
        onClick={handleSubmit}
        disabled={isSubmitting || timeLeft === 0}
      >
        Submit
      </button>
      <p className="resend-message">
        {timeLeft === 0 ? (
          <span onClick={handleResend} className="resend-link">
            Resend OTP
          </span>
        ) : (
          `Resend OTP in ${timeLeft} sec`
        )}
      </p>
    </div>
  );
}

export default OTPInput;
