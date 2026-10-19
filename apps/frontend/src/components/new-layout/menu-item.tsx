'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export const MenuItem: FC<{ label: string; icon: ReactNode; path: string; onClick?: () => void }> = ({
  label,
  icon,
  path,
  onClick,
}) => {
  const currentPath = usePathname();
  const isActive = currentPath.indexOf(path) === 0;

  const className = clsx(
    'group w-full minCustom:h-[54px] custom:h-[44px] py-[4px] px-[6px] minCustom:gap-[4px] custom:gap-[2px] flex flex-col font-[600] items-center justify-center hover:text-newTextColor transition-colors',
    isActive ? 'text-newTextColor' : 'text-textItemBlur'
  );

  const inner = (
    <>
      <div
        className={clsx(
          'w-[44px] h-[28px] flex items-center justify-center rounded-full transition-colors',
          isActive
            ? 'bg-btnPrimary text-btnPrimaryText'
            : 'group-hover:bg-newBgLineColor'
        )}
      >
        <div className="custom:scale-90 transition-transform">{icon}</div>
      </div>
      <div className="custom:text-[9px] minCustom:text-[10px] leading-[1.1] text-center">
        {label}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} title={label} className={className}>
        {inner}
      </button>
    );
  }

  return (
    <Link
      prefetch={true}
      href={path}
      title={label}
      {...path.indexOf('http') === 0 && { target: '_blank' }}
      className={className}
    >
      {inner}
    </Link>
  );
};
