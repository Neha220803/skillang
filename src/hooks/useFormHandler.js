import { useState, useEffect } from "react";
import axios from "axios";

const useFormHandler = () => {
  const [validated, setValidated] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState("success");
  const [status, setStatus] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    lookingFor: "",
    experience: "",
    county: "",
    origin:""
  });

  // Countdown logic for Resend OTP
  useEffect(() => {
    let timer;
    if (resendDisabled && otpVisible) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendDisabled, otpVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleExperienceSelect = (value) => {
    setFormData((prevState) => ({ ...prevState, experience: value }));
  };

  const sendFormData = async () => {
    try {
      const payload = { email: formData.email, name: formData.name };
      await axios.post(`https://skillang.com/api/send-otp`, payload);
      setStatus("📩 OTP has been sent to your mail!");
      setToastVariant("info");
      setShowToast(true);
    } catch (error) {
      console.error("❌ Error sending OTP:", error);
      setStatus("❌ Error sending OTP. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  const handleResendOtp = () => {
    sendFormData();
    setResendDisabled(true);
    setCountdown(30);
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`https://skillang.com/api/verify-otp`, {
        email: formData.email,
        otp: otp.trim(),
      });

      if (response.data.success) {
        setIsOtpVerified(true);
        setStatus("✅ OTP verified successfully!");
        setToastVariant("success");
      } else {
        setStatus("❌ Invalid OTP. Please check and enter the correct OTP.");
        setToastVariant("danger");
      }
    } catch (error) {
      console.error("❌ Error verifying OTP:", error);
      setStatus("❌ Error verifying OTP. Please try again.");
      setToastVariant("danger");
    }
    setShowToast(true);
  };

  const submitInquiry = async () => {
    try {
      const response = await axios.post(`https://skillang.com/api/submit-to-google-sheets`, formData);

      setStatus(response.data.message || "✅ Inquiry submitted successfully!");
      setToastVariant("success");
      setShowToast(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        pincode: "",
        lookingFor: "",
        experience: "",
      });

      setOtp("");
      setIsOtpVerified(false);
      setIsOtpSent(false);
      setOtpVisible(false);
      setValidated(false);
    } catch (error) {
      console.error("❌ Error submitting inquiry:", error);
      setStatus("❌ Error submitting inquiry. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  const handleOtpChange = (e) => {
  setOtp(e.target.value);
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (!isOtpSent) {
        sendFormData();
        setOtpVisible(true);
        setResendDisabled(true);
        setCountdown(30);
        setIsOtpSent(true);
        return;
      }

      if (!isOtpVerified) {
        setStatus("❌ Please verify the OTP before submitting.");
        setToastVariant("danger");
        setShowToast(true);
        return;
      }

      if (!formData.experience) {
        setStatus("❌ Please select your experience level.");
        setToastVariant("danger");
        setShowToast(true);
        return;
      }

      submitInquiry();
    }

    setValidated(true);
  };

  return {
    formData,
    otp,
    otpVisible,
    showToast,
    toastVariant,
    status,
    resendDisabled,
    countdown,
    isOtpVerified,
    isOtpSent,
    validated,
    handleInputChange,
    handleExperienceSelect,
    handleSubmit,
    handleVerifyOtp,
    handleResendOtp,
    setOtp,
    handleOtpChange,
    setShowToast,
  };
};

export default useFormHandler;
