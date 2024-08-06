import "./Loan.css";

export default function Modal({ isVisible, errorMessage = null }) {
    if (isVisible) {
        return (
            <div id="modal">
                <div id="modal-content">
                    <h1
                        style={{ color: errorMessage ? "red" : "#228B22" }}
                    >
                        {errorMessage ? errorMessage : "Form has been submitted successfully ✅"}
                    </h1>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
