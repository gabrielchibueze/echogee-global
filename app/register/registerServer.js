"use server";

import { redirect } from "next/navigation";

export const submitRegisterForm = async (prevState, formData) => {
  const registrationForm = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    disabilityRequest: formData.get("disabilityRequest"),
    disabilityInfo: formData.get("disabilityInfo"),
    prayerRequest: formData.get("prayerRequest"),
    prayer: formData.get("prayer"),
    pickupRequest: formData.get("pickupRequest"),
    pickupInfo: formData.get("pickupInfo"),
    healingServiceRequest: formData.get("healingServiceRequest"),
  };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationForm),
      }
    );

    const result = await response.json();
    if (response.ok) {
      return {
        status: "successful",
        message: "Thank you for registration for WCC 2024 Conference.",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message:
        "An Error occured/Invalid input entered. All form spaces must be completed",
    };
  }
};
