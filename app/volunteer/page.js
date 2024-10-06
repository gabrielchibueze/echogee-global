"use client";
import CtaButton from "../components/buttons/ctabuttonlink";
import VolunteerComponent from "../sections/volunteer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import classes from "./volunteer.module.css";
import VolunteerForm from "./volunteerForm";
import { submitVolunteerForm } from "./volunteerServer";
export default function Volunteer() {
  const [state, formAction] = useFormState(submitVolunteerForm, {
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
        alert(state.message);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "fitcontent", margin: "0 auto" }}>
        {errorMessage.trim().length > 0 && (
          <p
            style={{
              padding: "1rem",
              marginTop: "8rem",
              marginBottom: "-5rem",
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
      </div>

      <div className={classes.register}>
        <div className={classes.heading}>
          <h3 style={{ fontWeight: "lighter" }}>
            We appreciate you want to join our volunteer team!!!
          </h3>
        </div>
        <div className={classes.registerComponent}>
          <form action={formAction}>
            <VolunteerForm />
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
      <VolunteerComponent />
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
