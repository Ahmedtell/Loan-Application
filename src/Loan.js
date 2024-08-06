import { useState } from "react";
import "./Loan.css";
import Modal from "./Modal";

export default function Loan() {

    const [loanForm, setLoanForm] = useState({
        name: "",
        phone: "",
        age: "",
        isEmployye: false,
        salary: "",
    });

    const [showModal, setShowModal] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(null);

    function handleFormSubmit(event) {
        event.preventDefault();
        setShowErrorMessage(null); // to reset the function, and prevent the error messege to be showing after correct the error
        if (loanForm.age < 18) {
            setShowErrorMessage("Age can't be less than 18 years ⚠️");
        }
        else if (loanForm.age > 100) {
            setShowErrorMessage("Age can't be more than 100 year ⚠️")
        }
        else if (loanForm.phone.length !== 10) {

            setShowErrorMessage("Phone number can't be less than 10 numbers ⚠️")
        }
        else if (loanForm.name.length < 5) {
            setShowErrorMessage("Name can't be less than 5 characters ⚠️")
        }
        setShowModal(true);
    }

    function handleDivClick() {
        if (showModal === true) {
            setShowModal(false)
        }
    }

    const btnIsDisabled = loanForm.name.length === 0 ||
        loanForm.phone.length === 0 ||
        loanForm.age.length === 0;

    return (
        <div
            onClick={handleDivClick}
            className="flex" style={{ flexDirection: "column", height: "100vh" }}>
            <form className="flex" id="loan-form" style={{ flexDirection: "column" }}>
                <h1>Requesting a Loan</h1>
                <hr />

                <label>Name:</label>
                <input type="text"
                    value={loanForm.name}
                    onChange={(event) => {
                        setLoanForm({ ...loanForm, name: event.target.value });
                    }}
                />

                <label>Phone Number:</label>
                <input
                    value={loanForm.phone}
                    onChange={(event) => {
                        setLoanForm({ ...loanForm, phone: event.target.value });
                    }}
                />

                <label>Age:</label>
                <input
                    value={loanForm.age}
                    onChange={(event) => {
                        setLoanForm({ ...loanForm, age: event.target.value });
                    }}
                />

                <label id="check">Are you an employee?</label>
                <input type="checkbox"
                    style={{
                        width: "16px"
                    }}
                    checked={loanForm.isEmployye}
                    onChange={(event) => {
                        setLoanForm({ ...loanForm, isEmployye: event.target.checked });
                    }}
                />

                <label>Salary:</label>
                <select
                    value={loanForm.salary}
                    onChange={(event) => {
                        setLoanForm({ ...loanForm, salary: event.target.value });
                    }}
                >
                    <option>less than 500$</option>
                    <option>between 500$ and 2000$</option>
                    <option>above 2000$</option>
                </select>

                <button id="submit-loan-btn" type="submit"
                    className={btnIsDisabled ? "disabled" : ""}
                    disabled={btnIsDisabled}
                    onClick={handleFormSubmit}
                >Submit Loan</button>

            </form>
            <Modal errorMessage={showErrorMessage} isVisible={showModal} />
        </div>
    );
}


