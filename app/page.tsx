
import Carousel from '@/components/Carousel';

async function fetchJSON(path: string) {
  const res = await fetch(path, { next: { revalidate: 60 } });
  return res.json();
}

export default async function Home() {
  const [destinations, testimonials] = await Promise.all([
    fetchJSON(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/destinations`),
    fetchJSON(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/testimonials`),
  ]);

  return (
    <div>
      <section className="container py-12 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Discover Your Next Adventure</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore top destinations with exclusive deals and curated experiences.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#destinations">Browse Destinations</a>
            <a className="btn border" href="#testimonials">See Reviews</a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border shadow aspect-video bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center">
          <span className="text-3xl">✈️ 🌍</span>
        </div>
      </section>

      <section id="destinations" className="container py-12">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Top Destinations</h2>
          <a href="/dashboard" className="text-blue-600 hover:underline">Manage in Dashboard →</a>
        </div>
        <Carousel items={destinations.map((d: any) => (
          <div key={d._id}>
            <img src={d.imageUrl} alt={d.title} className="h-48 w-full object-cover rounded-xl" />
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{d.title}</h3>
                <span className="text-sm">⭐ {d.rating ?? 4.5}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{d.description}</p>
              <div className="mt-2 font-semibold">${"{"+ "d.price" +"}"}</div>
            </div>
          </div>
        ))} />
      </section>

      <section id="testimonials" className="container py-12">
        <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
        <Carousel items={testimonials.map((t: any) => (
          <div key={t._id} className="flex gap-3">
            <img src={t.avatarUrl} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-gray-600">{t.comment}</p>
            </div>
          </div>
        ))} />
      </section>
    </div>
  );
}
