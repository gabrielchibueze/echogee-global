"use client";
import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./registerComponent.module.css";
import { useFormState } from "react-dom";
import RegisterForm from "../register/registerForm";
import { submitRegisterForm } from "../register/registerServer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterComponent() {
  const [state, formAction] = useFormState(submitRegisterForm, {
    message: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Using useRouter for client-side redirect
  const pathname = usePathname();
  useEffect(() => {
    if (state.status === "successful" && pathname !== "/") {
      window.scrollTo({ top: 0 });
      setErrorMessage(state.message + " Redirecting...");
      alert(state.message);
      setTimeout(() => {
        router.push("/");
        setErrorMessage("");
      }, 3000);
      clearTimeout();
    } else {
      if (state.status === "failed") {
        setErrorMessage(state.message);
      }
      if (state.status === "successful") {
        setErrorMessage(state.message);

        alert(state.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    }
  }, [state.status, pathname, state.message, router]);

  return (
    <div className={classes.RegisterComponent}>
      {errorMessage.trim().length > 0 && (
        <p
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            backgroundColor: `${
              state?.status === "failed" ? "#f2b5d4" : "#b7e4c7"
            }`,
            textAlign: "center",
            border: "0.5px solid #grey",
          }}
        >
          {errorMessage}
        </p>
      )}

      <div className={classes.topsection}>
        <div className={classes.header}>
          <h1>Register for the Conference</h1>
          <p>
            For inquiries about the World Changers Conference, please reach out
            to us for assistance.
          </p>
        </div>
        <div className={classes.formsection}>
          <form className={classes.form} action={formAction}>
            <RegisterForm />
          </form>
          {state.message && (
            <p
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                marginTop: "1rem",
                color: `${state?.status === "failed" ? "#fb6f92" : "#b7e4c7"}`,
                textAlign: "center",
                // border: "0.5px solid #fb6f92",
              }}
            >
              {state.status === "failed" && state.message}
            </p>
          )}
        </div>
      </div>
      {/* <div className={classes.imageSection}>
        <div className={classes.registerImage}>
          <Image src={contactus} fill alt="register for WCC 2024" />
        </div>
      </div> */}
      <div className={classes.donate}>
        <div className={classes.innerDonate}>
          <h2>Support Our Mission</h2>
          <p>
            Your generous donations help us make the World Changers Conference a
            transformative experience for all attendees. Every contribution, big
            or small, brings us closer to our goal of spreading the gospel,
            touching lifes and creating a lasting change.
          </p>
          <div
            style={{
              backgroundColor: "white",
              margin: "auto",
              borderRadius: "2rem",
              color: "black",
              zIndex: "2",
            }}
          >
            <CtaButton
              action="/donate"
              design="flat"
              type="link"
              target="_blank"
            >
              Donate Now
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
