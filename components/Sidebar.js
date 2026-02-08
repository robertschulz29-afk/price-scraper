
import Link from 'next/link';

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside style={{ width: collapsed ? '60px' : '220px', background: '#111', color: '#fff', position: 'fixed', height: '100vh' }}>
      <button onClick={() => setCollapsed(!collapsed)} style={{ width: '100%' }}>☰</button>
      <nav>
        <Link href="/">Dashboard</Link><br/>
        <Link href="/scan">Scan</Link><br/>
        <Link href="/hotels">Hotels</Link><br/>
        <Link href="/results">Scan Results</Link>
      </nav>
    </aside>
  );
}
