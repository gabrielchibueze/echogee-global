"use client";
import { useState } from "react";
import classes from "./volunteerForm.module.css";
import { isEmail, isRequired, length } from "../components/utils/validators";
import CtaButton from "../components/buttons/ctabuttonlink";
import InputComponent from "../components/input/inputComponent";

export default function VolunteerForm({ params }) {
  const Volunteer_FORM = {
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
    volunteerType: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },
    drivingLicence: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },
    drivingProhibition: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },
    drivingProhibitionInfo: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },

    description: {
      value: "",
      touched: false,
      valid: false,
      validators: [isRequired],
    },
  };
  const [currentState, setCurrentState] = useState({
    volunteerForm: Volunteer_FORM,
    isFormValid: false,
  });

  const inputChangeHandler = (id, value, files) => {
    // Set the corresponding values of the input to the form
    setCurrentState((prevState) => {
      let isValid = true;
      for (let validator of prevState.volunteerForm[id].validators) {
        isValid = isValid && validator(value);
      }
      // 1 use the validators in the inputs to check for validity
      // 2 check if the input is valid by mapping through them

      const updatedForm = {
        ...prevState.volunteerForm,
        [id]: {
          value: value,
          touched: true,
          valid: isValid,
          validators: prevState.volunteerForm[id].validators,
        },
        // 3 after checking if the inputs are valid, determin the overall form validity by checking if all the inputs are valid
      };
      if (
        updatedForm.volunteerType.value &&
        updatedForm.volunteerType.value != "logistics"
      ) {
        // updatedForm.drivingLicence.value = "none";
        updatedForm.drivingLicence.valid = true;
        // updatedForm.drivingProhibition.value = "none";
        updatedForm.drivingProhibition.valid = true;
        // updatedForm.drivingProhibitionInfo.value = "none";
        updatedForm.drivingProhibitionInfo.valid = true;
        // updatedForm.drivingProhibitionInfo.value = "none";
        updatedForm.drivingProhibitionInfo.valid = true;
      }
      if (updatedForm.drivingLicence.value === "no") {
        // updatedForm.drivingProhibition.value = "none";
        updatedForm.drivingProhibition.valid = true;
        // updatedForm.drivingProhibitionInfo.value = "none";
        updatedForm.drivingProhibitionInfo.valid = true;
      }

      if (updatedForm.drivingProhibition.value === "no") {
        // updatedForm.drivingProhibitionInfo.value = "none";
        updatedForm.drivingProhibitionInfo.valid = true;
      } else if (updatedForm.drivingProhibition.value === "yes") {
        // updatedForm.drivingProhibitionInfo.value = "none";
        updatedForm.drivingProhibitionInfo.valid = false;
      }

      let formValid = true;
      for (let inputName in updatedForm) {
        formValid = formValid && updatedForm[inputName].valid === true;
      }
      return {
        ...prevState,
        volunteerForm: updatedForm,
        isFormValid: formValid,
      };
    });
  };

  const inputBlurHandler = (id) => {
    // check if an input element has been touched. if yes, set it to be true
    setCurrentState((prevState) => {
      const currentInputForm = {
        ...prevState.volunteerForm,
        [id]: {
          ...prevState.volunteerForm[id],
          touched: true,
        },
      };
      return {
        ...prevState,
        volunteerForm: currentInputForm,
      };
    });
  };
  return (
    <div className={classes.formsection}>
      <div className={classes.form}>
        <InputComponent
          control="normal"
          type="text"
          id="name"
          name="name"
          label="Your Full Name"
          value={currentState.volunteerForm.name?.value}
          valid={currentState.volunteerForm.name?.valid}
          touched={currentState.volunteerForm.name?.touched}
          onChange={inputChangeHandler}
          onBlur={() => inputBlurHandler("name")}
        />
        <InputComponent
          required={true}
          control="normal"
          type="text"
          id="email"
          name="email"
          label="Your Email Address"
          value={currentState.volunteerForm.email?.value}
          valid={currentState.volunteerForm.email?.valid}
          touched={currentState.volunteerForm.email?.touched}
          onChange={inputChangeHandler}
          onBlur={() => inputBlurHandler("email")}
        />
        <InputComponent
          required={true}
          control="normal"
          type="number"
          id="phone"
          name="phone"
          label="Phone Number"
          value={currentState.volunteerForm.phone?.value}
          valid={currentState.volunteerForm.phone?.valid}
          touched={currentState.volunteerForm.phone?.touched}
          onChange={inputChangeHandler}
          onBlur={() => inputBlurHandler("phone")}
        />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <label htmlFor="volunteerType" style={{ fontWeight: "600" }}>
            Select Volunteer Type
          </label>
          <select
            id="volunteerType"
            name="volunteerType"
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              height: "2.5rem",
              color: "#0a0a0a",
              backgroundColor: "#ffffff",
              borderColor: `${
                currentState.volunteerForm.volunteerType.touched &&
                !currentState.volunteerForm.volunteerType.valid
                  ? "red"
                  : "#1f4c91"
              }`,
              borderRadius: "0.2rem",
            }}
            value={currentState.volunteerForm.volunteerType?.value}
            onChange={(e) =>
              inputChangeHandler("volunteerType", e.target.value)
            }
            onBlur={() => inputBlurHandler("volunteerType")}
          >
            <option value="">Select an option</option>
            <option value="logistics">Logistics</option>
            <option value="usher">Usher</option>
            <option value="hospitality">Hospitality</option>
          </select>
        </div>
        {currentState.volunteerForm.volunteerType?.value === "logistics" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
            }}
          >
            <label htmlFor="drivingLicence" style={{ fontWeight: "600" }}>
              Do you have a full UK drivers Licence?{" "}
            </label>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexDirection: "column",
              }}
            >
              <label
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <input
                  style={{ backgroundColor: "#ffffff" }}
                  type="radio"
                  name="drivingLicence"
                  value="yes"
                  checked={
                    currentState.volunteerForm.drivingLicence?.value === "yes"
                  }
                  onChange={(e) =>
                    inputChangeHandler("drivingLicence", e.target.value)
                  }
                />
                Yes
              </label>
              <label
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <input
                  style={{ backgroundColor: "#ffffff" }}
                  type="radio"
                  name="drivingLicence"
                  value="no"
                  checked={
                    currentState.volunteerForm.drivingLicence?.value === "no"
                  }
                  onChange={(e) =>
                    inputChangeHandler("drivingLicence", e.target.value)
                  }
                />
                No
              </label>
            </div>
          </div>
        )}
        {currentState.volunteerForm.drivingLicence.value === "yes" && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <label htmlFor="drivingProhibition" style={{ fontWeight: "600" }}>
                Do you have any driving prohibition
              </label>
              <select
                id="drivingProhibition"
                name="drivingProhibition"
                style={{
                  padding: "0.5rem",
                  cursor: "pointer",
                  height: "2.5rem",
                  color: "#0a0a0a",
                  backgroundColor: "#ffffff",
                  borderColor: `${
                    currentState.volunteerForm.drivingProhibition.touched &&
                    !currentState.volunteerForm.drivingProhibition.valid
                      ? "red"
                      : "#1f4c91"
                  }`,
                  borderRadius: "0.2rem",
                }}
                value={currentState.volunteerForm.drivingProhibition?.value}
                onChange={(e) =>
                  inputChangeHandler("drivingProhibition", e.target.value)
                }
                onBlur={() => inputBlurHandler("drivingProhibition")}
              >
                <option value="">Select an option</option>
                <option value="yes">yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {currentState.volunteerForm.drivingProhibition?.value === "yes" && (
              <InputComponent
                required={true}
                control="textarea"
                type="text"
                rows={4}
                id="drivingProhibitionInfo"
                name="drivingProhibitionInfo"
                label="Please let us know here"
                value={currentState.volunteerForm.drivingProhibitionInfo?.value}
                valid={currentState.volunteerForm.drivingProhibitionInfo?.valid}
                touched={
                  currentState.volunteerForm.drivingProhibitionInfo?.touched
                }
                onChange={inputChangeHandler}
                onBlur={() => inputBlurHandler("drivingProhibitionInfo")}
              />
            )}
          </div>
        )}
        <InputComponent
          required={true}
          control="textarea"
          type="text"
          rows={6}
          id="description"
          name="description"
          label="Please give a brief description of how you intend to participate in this volunteer (include days you want to volunteer)"
          value={currentState.volunteerForm.description?.value}
          valid={currentState.volunteerForm.description?.valid}
          touched={currentState.volunteerForm.description?.touched}
          onChange={inputChangeHandler}
          onBlur={() => inputBlurHandler("description")}
        />
        <div className={classes.submitmeal}>
          <CtaButton
            type="button"
            design="accent"
            loading="Submitting..."
            disabled={!currentState.isFormValid}
          >
            Volunteer
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
