// // contact-form.js
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contactForm');
//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const messageInput = document.getElementById('message');
//   const subjectInput = document.getElementById('subject');

//   const nameError = document.getElementById('nameError');
//   const emailError = document.getElementById('emailError');
//   const messageError = document.getElementById('messageError');
//   const successMsg = document.getElementById('formSuccess');
//   const errorMsg = document.getElementById('formError');

//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     // Reset errors
//     nameError.classList.add('hidden');
//     emailError.classList.add('hidden');
//     messageError.classList.add('hidden');
//     successMsg.classList.add('hidden');
//     errorMsg.classList.add('hidden');

//     let hasError = false;

//     if (!nameInput.value.trim()) {
//       nameError.classList.remove('hidden');
//       hasError = true;
//     }

//     if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
//       emailError.classList.remove('hidden');
//       hasError = true;
//     }

//     if (!messageInput.value.trim()) {
//       messageError.classList.remove('hidden');
//       hasError = true;
//     }

//     if (hasError) return;

//     const formData = {
//       name: nameInput.value,
//       email: emailInput.value,
//       subject: subjectInput.value,
//       message: messageInput.value,
//     };

//     try {
//       // Use Formspree for demo; replace with your real API/email server as needed
//       const response = await fetch("https://formspree.io/f/mzbqkjpv", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         successMsg.classList.remove('hidden');
//         form.reset();
//       } else {
//         throw new Error("Failed to submit");
//       }
//     } catch (error) {
//       errorMsg.classList.remove('hidden');
//     }
//   });
// });



// contact-form.js
function handleMailTo(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim() || "Fstack Enquiry";
  const message = document.getElementById('message').value.trim();

  let hasError = false;

  // Reset error visibility
  document.getElementById('nameError').classList.add('hidden');
  document.getElementById('emailError').classList.add('hidden');
  document.getElementById('messageError').classList.add('hidden');

  if (!name) {
    document.getElementById('nameError').classList.remove('hidden');
    hasError = true;
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('emailError').classList.remove('hidden');
    hasError = true;
  }

  if (!message) {
    document.getElementById('messageError').classList.remove('hidden');
    hasError = true;
  }

  if (hasError) return false;

  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  const mailtoLink = `mailto:sangeethskarumady@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailtoLink;
  return false;
}
