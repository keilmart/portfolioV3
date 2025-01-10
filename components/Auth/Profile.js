import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const capitalizeWords = (str) => {
    if (!str) return ""; // If there's no string, return an empty string
    return str
      .split(" ") // Split the string into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(" "); // Join the words back into a single string
  };

  return (
    isAuthenticated && (
      <div className="p-20 bg-white border rounded shadow">
        <div className="flex justify-center w-full">
          <img className="w-24 rounded-full" src={user.picture} alt={user.name} />
        </div>
        <div className="mt-5">
          <h2 className="text-2xl">Welcome back.</h2>
          <p className="mt-1">Good to see you again {capitalizeWords(user.name)}.</p>
        </div>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;
