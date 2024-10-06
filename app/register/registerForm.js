"use client";
import { useState } from "react";
import { isEmail, isRequired, length } from "../components/utils/validators";
import classes from "./registerForm.module.css";
import CtaButton from "../components/buttons/ctabuttonlink";
import InputComponent from "../components/input/inputComponent";

export default function RegisterForm({ params }) {
  const Register_Form = {
    name: {
      value: "",
      touched: false,
      valid: false,
      validators: [length({ min: 2 }), isRequired],
    },
    email: {
      value: "",
      touched: false,
      valid: false,
      validators: [isEmail, isRequired],
    },
    phone: {
      value: "",
      touched: false,
      valid: false,
      validators: [length({ min: 10 })],
    },
    healingServiceRequest: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },

    prayerRequest: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },
    prayer: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired, length({ min: 4 })],
    },
    disabilityRequest: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },
    disabilityInfo: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired, length({ min: 4 })],
    },
    pickupRequest: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },
    pickupInfo: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired, length({ min: 4 })],
    },
  };
  const [currentState, setCurrentState] = useState({
    registerForm: Register_Form,
    isFormValid: false,
  });

  const inputChangeHandler = (id, value, files) => {
    // Set the corresponding values of the input to the form
    setCurrentState((prevState) => {
      let isValid = true;
      for (let validator of prevState.registerForm[id].validators) {
        isValid = isValid && validator(value);
      }
      // 1 use the validators in the inputs to check for validity
      // 2 check if the input is valid by mapping through them

      const updatedForm = {
        ...prevState.registerForm,
        [id]: {
          value: value,
          touched: true,
          valid: isValid,
          validators: prevState.registerForm[id].validators,
        },
        // 3 after checking if the inputs are valid, determin the overall form validity by checking if all the inputs are valid
      };
      let formValid = true;
      for (let inputName in updatedForm) {
        formValid = formValid && updatedForm[inputName].valid === true;
      }
      if (updatedForm.prayerRequest.value === "no") {
        updatedForm.prayer.value = "none";
        updatedForm.prayer.valid = true;
      }
      if (updatedForm.disabilityRequest.value === "no") {
        updatedForm.disabilityInfo.value = "none";
        updatedForm.disabilityInfo.valid = true;
      }
      if (updatedForm.pickupRequest.value === "no") {
        updatedForm.pickupInfo.value = "none";
        updatedForm.pickupInfo.valid = true;
      }

      return {
        ...prevState,
        registerForm: updatedForm,
        isFormValid: formValid,
      };
    });
  };

  const inputBlurHandler = (id) => {
    // check if an input element has been touched. if yes, set it to be true
    setCurrentState((prevState) => {
      const currentInputForm = {
        ...prevState.registerForm,
        [id]: {
          ...prevState.registerForm[id],
          touched: true,
        },
      };
      return {
        ...prevState,
        registerForm: currentInputForm,
      };
    });
  };
  return (
    <div className={classes.formsection}>
      <div className={classes.form}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.2rem",
          }}
        >
          <label htmlFor="healingServiceRequest" style={{ fontWeight: "600" }}>
            Are you attending the healing service? (Saturday 19th oct. 2024, 12
            PM)
          </label>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexDirection: "row",
            }}
          >
            <label
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <input
                style={{ backgroundColor: "#ffffff" }}
                type="radio"
                name="healingServiceRequest"
                value="yes"
                checked={
                  currentState.registerForm.healingServiceRequest?.value ===
                  "yes"
                }
                onChange={(e) =>
                  inputChangeHandler("healingServiceRequest", e.target.value)
                }
              />
              Yes
            </label>
            <label
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <input
                style={{ backgroundColor: "#ffffff" }}
                type="radio"
                name="healingServiceRequest"
                value="no"
                checked={
                  currentState.registerForm.healingServiceRequest?.value ===
                  "no"
                }
                onChange={(e) =>
                  inputChangeHandler("healingServiceRequest", e.target.value)
                }
              />
              No
            </label>
          </div>
        </div>

        <InputComponent
          control="normal"
          type="text"
          id="name"
          name="name"
          label="Your Full Name"
          value={currentState.registerForm.name?.value}
          valid={currentState.registerForm.name?.valid}
          touched={currentState.registerForm.name?.touched}
          onChange={inputChangeHandler}
          onBlur={() => inputBlurHandler("name")}
        />
        <InputComponent
          required={true}
          control="normal"
          type="number"
          id="phone"
          name="phone"
          label="Phone Number"
          value={currentState.registerForm.phone?.value}
          valid={currentState.registerForm.phone?.valid}
          touched={currentState.registerForm.phone?.touched}
          onChange={inputChangeHandler}
          onBlur={() => inputBlurHandler("phone")}
        />

        <InputComponent
          required={true}
          control="normal"
          type="text"
          id="email"
          name="email"
          label="Your Email Address"
          value={currentState.registerForm.email?.value}
          valid={currentState.registerForm.email?.valid}
          touched={currentState.registerForm.email?.touched}
          onChange={inputChangeHandler}
          onBlur={() => inputBlurHandler("email")}
        />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <label htmlFor="prayerRequest" style={{ fontWeight: "600" }}>
            Do You have a Prayer Request?
          </label>
          <select
            id="prayerRequest"
            name="prayerRequest"
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              height: "2.5rem",
              color: "#0a0a0a",
              backgroundColor: "#ffffff",

              borderColor: `${
                currentState.registerForm.prayerRequest.touched &&
                !currentState.registerForm.prayerRequest.valid
                  ? "red"
                  : "#1f4c91"
              }`,
              borderRadius: "0.2rem",
            }}
            value={currentState.registerForm.prayerRequest?.value}
            onChange={(e) =>
              inputChangeHandler("prayerRequest", e.target.value)
            }
            onBlur={() => inputBlurHandler("prayerRequest")}
          >
            <option value="">Select an option</option>
            <option value="yes">yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {currentState.registerForm.prayerRequest?.value === "yes" && (
          <InputComponent
            required={true}
            control="textarea"
            type="text"
            id="prayer"
            name="prayer"
            label="Prayer request?"
            rows={3}
            value={currentState.registerForm.prayer?.value}
            valid={currentState.registerForm.prayer?.valid}
            touched={currentState.registerForm.prayer?.touched}
            onChange={inputChangeHandler}
            onBlur={() => inputBlurHandler("prayer")}
          />
        )}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <label htmlFor="disabilityRequest" style={{ fontWeight: "600" }}>
            Do you have any disability and need special assistance?
          </label>
          <select
            id="disabilityRequest"
            name="disabilityRequest"
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              height: "2.5rem",
              color: "#0a0a0a",
              backgroundColor: "#ffffff",

              borderColor: `${
                currentState.registerForm.disabilityRequest.touched &&
                !currentState.registerForm.disabilityRequest.valid
                  ? "red"
                  : "#1f4c91"
              }`,
              borderRadius: "0.2rem",
            }}
            value={currentState.registerForm.disabilityRequest?.value}
            onChange={(e) =>
              inputChangeHandler("disabilityRequest", e.target.value)
            }
            onBlur={() => inputBlurHandler("disabilityRequest")}
          >
            <option value="">Select an option</option>
            <option value="yes">yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {currentState.registerForm.disabilityRequest?.value === "yes" && (
          <InputComponent
            required={true}
            control="textarea"
            type="text"
            rows={4}
            id="disabilityInfo"
            name="disabilityInfo"
            label="Please let us know here "
            value={currentState.registerForm.disabilityInfo?.value}
            valid={currentState.registerForm.disabilityInfo?.valid}
            touched={currentState.registerForm.disabilityInfo?.touched}
            onChange={inputChangeHandler}
            onBlur={() => inputBlurHandler("disabilityInfo")}
          />
        )}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <label htmlFor="pickupRequest" style={{ fontWeight: "600" }}>
            Do you require Logistics support?
          </label>
          <select
            id="pickupRequest"
            name="pickupRequest"
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              height: "2.5rem",
              color: "#0a0a0a",
              backgroundColor: "#ffffff",

              borderColor: `${
                currentState.registerForm.pickupRequest.touched &&
                !currentState.registerForm.pickupRequest.valid
                  ? "red"
                  : "#1f4c91"
              }`,
              borderRadius: "0.2rem",
            }}
            value={currentState.registerForm.pickupRequest?.value}
            onChange={(e) =>
              inputChangeHandler("pickupRequest", e.target.value)
            }
            onBlur={() => inputBlurHandler("pickupRequest")}
          >
            <option value="">Select an option</option>
            <option value="yes">yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {currentState.registerForm.pickupRequest?.value === "yes" && (
          <InputComponent
            required={true}
            control="textarea"
            type="text"
            rows={3}
            id="pickupInfo"
            name="pickupInfo"
            label="Pickup location"
            placeholder="Please add the location and time for pickup, maximum of 1 hour before WCC starts"
            value={currentState.registerForm.pickupInfo?.value}
            valid={currentState.registerForm.pickupInfo?.valid}
            touched={currentState.registerForm.pickupInfo?.touched}
            onChange={inputChangeHandler}
            onBlur={() => inputBlurHandler("pickupInfo")}
          />
        )}

        <div className={classes.submitmeal}>
          <CtaButton
            type="button"
            design="accent"
            loading="Submitting..."
            disabled={!currentState.isFormValid}
          >
            Register for the conference
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
