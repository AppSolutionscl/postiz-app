'use client';

export const Logo = () => {
  return (
    <>
      <img
        src="/belevels-wordmark-white.png"
        alt="be levels"
        width={84}
        className="hidden dark:block mt-[8px] h-auto"
      />
      <img
        src="/belevels-wordmark-black.png"
        alt="be levels"
        width={84}
        className="block dark:hidden mt-[8px] h-auto"
      />
    </>
  );
};
