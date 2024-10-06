"use server";
// components/forms/registerForm.js
export const submitVolunteerForm = async (prevState, formData) => {
  const VolunteeringForm = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    volunteerType: formData.get("volunteerType"),
    drivingLicence: formData.get("drivingLicence"),
    drivingProhibition: formData.get("drivingProhibition"),
    drivingProhibitionInfo: formData.get("drivingProhibitionInfo"),
    description: formData.get("description"),
  };
  console.log(VolunteeringForm);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/volunteer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(VolunteeringForm),
      }
    );

    const result = await response.json();
    if (response.ok) {
      return {
        status: "successful",
        message: "Thank you for Volunteering for WCC 2024 Conference",
      };
    } else {
      return result;
    }
  } catch (error) {
    return {
      status: "failed",
      message:
        "An error occured/Invalid input entered. All form spaces must be completed",
    };
  }
};
