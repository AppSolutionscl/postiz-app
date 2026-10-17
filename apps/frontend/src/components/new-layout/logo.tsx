'use client';

export const Logo = () => {
  return (
    <>
      <img
        src="/belevels-mark-light.png"
        alt="be levels"
        width={56}
        height={56}
        className="block dark:hidden mt-[8px] min-w-[56px] min-h-[56px] rounded-[12px]"
      />
      <img
        src="/belevels-mark-dark.png"
        alt="be levels"
        width={56}
        height={56}
        className="hidden dark:block mt-[8px] min-w-[56px] min-h-[56px] rounded-[12px]"
      />
    </>
  );
};
