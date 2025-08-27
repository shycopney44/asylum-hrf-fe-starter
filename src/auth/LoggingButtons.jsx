import { useAuth0 } from "@auth0/auth0-react";

export const LoggingButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleLogging = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect({
        authorizationParams: {
          prompt: "select_account", // 🔑 forces the Google account chooser
        },
      });
    }
  };

  return (
    <button className="nav-btn px-4 py-1" onClick={handleLogging}>
      {isAuthenticated ? "Log Out" : "Log In"}
    </button>
  );
};
