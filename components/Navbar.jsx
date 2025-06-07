import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#fff', 
      padding: '10px 20px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 10 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontWeight: 'bold', fontSize: '24px' }}>Mohamed Benaich</Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/">Intro</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
        </div>
      </div>
    </nav>
  );
}
