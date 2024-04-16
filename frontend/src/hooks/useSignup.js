// import { useState } from "react";
// import toast from "react-hot-toast";

// const useSignup = () => {
//   const [loading, setLoading ] = useState(false);

//   const SignupFunction = async ({ fullname, username, password, confirmPassword, gender }) => {
//     const success = handleInputErrors({ fullname, username, password, confirmPassword, gender });
//     if (!success) return;

//     setLoading(true);
//     try {
//       const res = await fetch("https://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to sign up");
//       }

//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }


//   };
//   return { loading, SignupFunction };

// };
// export default useSignup;

// function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
//   if (!fullname || !username || !password || !confirmPassword || !gender) {
//     toast.error("Please fill in all fields");
//     return false;
//   }

//   if (password !== confirmPassword) {
//     toast.error("Passwords do not match");
//     return false;
//   }

//   if (password.length < 6) {
//     toast.error("Password must be at least 6 characters");
//     return false;
//   }

//   return true;
// }


