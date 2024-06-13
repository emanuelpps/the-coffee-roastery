import { useState, useEffect } from "react";
function DevelopBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showBanner && (
        <div className="w-full relative">
          <div className="flex w-full absolute justify-center items-center bg-black text-white">
            <h2>This site is under development 👷‍♂️🛠️</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default DevelopBanner;