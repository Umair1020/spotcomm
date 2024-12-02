import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isOpen, onClose }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        jobTitle: '',
        linkedIn: '',
        contact: '',
        cv: null,
    });
    const [fileName, setFileName] = useState("");

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, cv: file });
        setFileName(file.name);
    };

    const removeFile = () => {
        setFormData({ ...formData, cv: null });
        setFileName("");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("fullName", formData.fullName);
        form.append("email", formData.email);
        form.append("jobTitle", formData.jobTitle);
        form.append("linkedIn", formData.linkedIn);
        form.append("contact", formData.contact);
        form.append("cv", formData.cv);

        try {
            await axios.post("http://localhost:5000/send-email", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("🎉 Thank you for applying! We will review your application soon.");
            setFormData({
                fullName: "",
                email: "",
                jobTitle: "",
                linkedIn: "",
                contact: "",
                cv: null,
            });
            setFileName("");
            setFormSubmitted(true);

            // Close the modal after submission
            setTimeout(() => {
                onClose(); // Calls the parent function to close the modal
            }, 500); // Add a slight delay to ensure the toast displays
        } catch (error) {
            toast.error("❌ Error sending application. Please try again later.");
            console.error(error);
        }
    };

    return (
        <div
            id="cv-popup"
            className="modal fade popup show"
            tabIndex={-1}
            role="dialog"
            style={{ paddingRight: 0, display: "block" }}
            aria-modal="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button
                        type="button"
                        className="close modal-close"
                        onClick={onClose}
                    >
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {" "}
                            <path d="M13.9594 11.9339L23.6794 2.21394C23.8978 1.95887 24.012 1.63077 23.999 1.2952C23.986 0.959636 23.8469 0.641318 23.6095 0.403858C23.372 0.166399 23.0537 0.0272883 22.7181 0.0143267C22.3826 0.00136521 22.0545 0.115507 21.7994 0.333942L12.0794 10.0539L2.35939 0.320609C2.10432 0.102174 1.77622 -0.0119672 1.44065 0.000994381C1.10509 0.0139559 0.786767 0.153065 0.549308 0.390525C0.311849 0.627984 0.172738 0.946303 0.159777 1.28187C0.146815 1.61744 0.260957 1.94554 0.479392 2.20061L10.1994 11.9339L0.466059 21.6539C0.326483 21.7735 0.213123 21.9206 0.133091 22.086C0.0530604 22.2514 0.00808623 22.4316 0.000993573 22.6152C-0.00609909 22.7988 0.0248422 22.9819 0.0918749 23.153C0.158908 23.3241 0.260585 23.4795 0.390525 23.6095C0.520465 23.7394 0.675861 23.8411 0.846961 23.9081C1.01806 23.9752 1.20117 24.0061 1.3848 23.999C1.56842 23.9919 1.7486 23.9469 1.91402 23.8669C2.07944 23.7869 2.22653 23.6735 2.34606 23.5339L12.0794 13.8139L21.7994 23.5339C22.0545 23.7524 22.3826 23.8665 22.7181 23.8536C23.0537 23.8406 23.372 23.7015 23.6095 23.464C23.8469 23.2266 23.986 22.9082 23.999 22.5727C24.012 22.2371 23.8978 21.909 23.6794 21.6539L13.9594 11.9339Z" />{" "}
                        </svg>{" "}
                    </button>

                    <div className="row">
                        <div className="col-md-5 col-lg-6 popup-img">
                            <img
                                className="ls-is-cached lazyloaded"
                                src="https://piesoft.us/wp-content/themes/piesoft/img/bgModal.png"
                                alt=""
                            />
                        </div>
                        <div className="col-md-7 col-sm-12 col-lg-6 popup-content">
                            {/* <p className="h4">Join Spotcomm Global team</p> */}
                            <div className="popup-contacts ">
                                <p className="popup-contacts-item popup-contacts-tel">
                                    <a href="tel:+971 557015596">+971 557015596</a>
                                </p>
                                <p className="popup-contacts-item popup-contacts-email">
                                    <a href="mailto:career@spotcommglobal.com">career@spotcommglobal.com</a>
                                </p>
                            </div>
                            <form
                                className="validation-form apply-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group ">
                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-control input"
                                        placeholder=" "
                                        required
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                    />
                                    <label className="label control-label">Name</label>
                                </div>
                                <div className="form-group">
                                    <input

                                        className="form-control name-input input"
                                        type="email"
                                        name="email"
                                        required=""
                                        placeholder=" "
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    <label className="label control-label" htmlFor="email-apply">
                                        Email
                                    </label>
                                </div>
                                <div className="form-group">
                                    <input

                                        className="form-control name-input input"
                                        type="number"
                                        name="contact"
                                        required=""
                                        placeholder=" "
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                    />
                                    <label className="label control-label" htmlFor="email-apply">
                                        Contact
                                    </label>
                                </div>
                                <div className="form-group">
                                    <input

                                        className="form-control name-input input"

                                        type="text"
                                        name="jobTitle"
                                        required=""
                                        placeholder=" "
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                    <label className="label control-label" htmlFor="position-apply">
                                        Applying for position
                                    </label>
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control name-input input"
                                        type="text"
                                        name="linkedIn"
                                        required=""
                                        placeholder=" "
                                        value={formData.linkedIn}
                                        onChange={handleInputChange}
                                    />
                                    <label className="label control-label" htmlFor="position-apply">
                                        LinkedIn profile
                                    </label>
                                </div>


                                <div className="form-group" bis_skin_checked={1}>
                                    <div className="dropzone-wrapper" bis_skin_checked={1}>
                                        <div className="dropzone-desc" bis_skin_checked={1}>
                                            <p className="dropzone-desc__button">Upload your CV</p>
                                            <p>
                                                *File up to 1 MB. Accepted formats: .pdf, .docx, .odt, .txt
                                            </p>
                                        </div>{" "}
                                        <input
                                            className="dropzone-input file-input"
                                            type="file"


                                            name="cv"
                                            required
                                            onChange={handleFileChange}
                                        />
                                        <div className="preview-zone hidden" bis_skin_checked={1}>
                                            <p className="preview-zone-text" />{" "}
                                            <button
                                                className="remove-file-btn js-remove-file"
                                                type="button"
                                            >
                                                {" "}
                                                <noscript>
                                                    &lt;img
                                                    src="https://piesoft.us/wp-content/themes/piesoft/img/ico-close.svg"
                                                    alt="Remove file"&gt;
                                                </noscript>
                                                <img
                                                    className="lazyload"
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    data-src="https://piesoft.us/wp-content/themes/piesoft/img/ico-close.svg"
                                                    alt="Remove file"
                                                />{" "}
                                            </button>
                                        </div>
                                    </div>{" "}
                                    <small className="help-block" style={{ display: "none" }} />
                                </div>
                                <div className="form-group mb-2">
                                    {fileName && (
                                        <div className="preview-zone">
                                            <p className="preview-zone-text">{fileName}</p>
                                            <button className="remove-file-btn" type="button" onClick={removeFile}>
                                                ✖
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <p className="form-disclaimer">

                                    By clicking the send button, I authorize spotcomm global to contact me
                                    regarding the issues mentioned in the request and accept the terms
                                    and conditions of the spotcomm global{" "}
                                    <a href="/privacy-policy" target="_blank">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>{" "}

                                {/* <button className="btn btn-dark btn-submit" type="submit">
                                        Send
                                    </button> */}
                                <button
                                    className="btn btn-dark btn-submit"
                                    type="submit"
                                    disabled={formSubmitted}
                                >
                                    {formSubmitted ? "Submitted" : "Send"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

const styles = {
    successMessage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.5em",
        color: "#28a745", // green color

    },
};

export default Modal;
