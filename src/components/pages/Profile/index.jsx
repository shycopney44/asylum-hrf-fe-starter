import { useAuth0 } from "@auth0/auth0-react";

/**
 * Profile Page that shows Auth0 user info
 * - Uses Auth0 hook to get user data
 * - Shows loading state
 * - Only displays if authenticated
 */
const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div className="text-center p-6 text-lg">Loading profile...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="text-center p-6">
        ⚠️ You must be logged in to view this page.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 text-center">
      <img
        src={user.picture}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border border-gray-300 shadow-sm"
      />
      <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
      <p className="text-gray-600 mb-4">{user.email}</p>

      {/* 🔵 Logout Button */}
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
