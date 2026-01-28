import Image from 'next/image';

export default function Header() {
  return (
    <header 
      style={{
        position: 'fixed',
        width: '100%',
        height: '66px',
        left: '0px',
        top: '0px',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 4px',
        gap: '4px',
        boxSizing: 'border-box',
        zIndex: 1000,
      }}
    >
      <Image
        src="/header.svg"
        alt="Header Logo"
        width={50}
        height={50}
        priority
      />
    </header>
  );
}
