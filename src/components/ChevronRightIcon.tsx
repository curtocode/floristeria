import Image from 'next/image';

interface Props {
  className?: string;
}

export const ChevronRightIcon = ({ className }: Props) => {
  return (
    <div 
      className={className}
      style={{
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Image
        src="/chevron-right.svg"
        alt=">"
        width={8}
        height={14}
      />
    </div>
  );
};
