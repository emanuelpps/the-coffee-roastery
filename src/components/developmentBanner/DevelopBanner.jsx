import { useState, useEffect } from "react";
function DevelopBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showBanner && (
        <div className="w-full relative">
          <div className="flex w-full absolute justify-center items-center bg-black text-white">
            <h2>WARNING! ⚠️ This site is currently under development 👷‍♂️🛠️ - certain features may not function properly</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default DevelopBanner;
