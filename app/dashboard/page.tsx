
import Link from 'next/link';

export default function DashboardHome() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link className="card hover:shadow" href="/dashboard/destinations">Manage Destinations →</Link>
        <Link className="card hover:shadow" href="/dashboard/testimonials">Manage Testimonials →</Link>
      </div>
      <form action="/api/auth/logout" method="post">
        <button className="btn border">Logout</button>
      </form>
    </div>
  );
}
