import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { FaArrowLeft, FaMapPin, FaCalendar, FaUser, FaTag } from 'react-icons/fa6';
import Link from 'next/link';

// Mock event data
const events = [
  { tag: 'Bootcamp', title: 'Campus Network Architecture',                        month: 'AUG', day: '12', year: '2026', location: 'Accra, Ghana',    track: 'Africa Digital Campus', slug: 'campus-network-architecture', description: 'A hands-on bootcamp focused on designing and implementing modern campus network architectures for African universities and research institutions.', objectives: ['Understand campus network design principles', 'Learn about scalable network topologies', 'Implement VLANs and subnetting', 'Practice network security best practices'], targetAudience: 'Network engineers, IT managers, and technical staff from African universities and NRENs' },
  { tag: 'Bootcamp', title: 'Cybersecurity Operations & Incident Response',       month: 'SEP', day: '08', year: '2026', location: 'Accra, Ghana',    track: 'TrustBroker Africa',    slug: 'cybersecurity-operations-incident-response', description: 'Intensive training on cybersecurity operations, threat detection, and incident response procedures tailored for research and education networks.', objectives: ['Set up security monitoring systems', 'Learn incident response workflows', 'Practice threat hunting techniques', 'Implement security incident documentation'], targetAudience: 'Security analysts, network engineers, and IT security professionals' },
  { tag: 'Workshop', title: 'Trust & Identity Infrastructure — eduroam & RADIUS', month: 'OCT', day: '21', year: '2026', location: 'Nairobi, Kenya', track: 'eduID.africa',          slug: 'trust-identity-infrastructure-eduroam-radius', description: 'Comprehensive workshop on deploying and managing eduroam and RADIUS infrastructure for federated identity in African research networks.', objectives: ['Understand eduroam architecture', 'Deploy RADIUS servers', 'Configure federated identity', 'Troubleshoot common eduroam issues'], targetAudience: 'Identity managers, network administrators, and IT staff responsible for eduroam services' },
  { tag: 'Webinar',  title: 'Routing & Interconnection — BGP Operations',         month: 'NOV', day: '05', year: '2026', location: 'Online',          track: 'NREN Connectivity',     slug: 'routing-interconnection-bgp-operations', description: 'Online webinar covering BGP routing operations and interconnection strategies for African NRENs and research networks.', objectives: ['Understand BGP fundamentals', 'Configure BGP peering', 'Implement routing policies', 'Learn about Internet Exchange Points (IXPs)'], targetAudience: 'Network engineers, NREN technical staff, and routing specialists' },
  { tag: 'Forum',    title: 'ATI Annual Community Forum 2026',                    month: 'DEC', day: '10', year: '2026', location: 'TBC',             track: 'Community',             slug: 'ati-annual-community-forum-2026', description: 'The annual gathering of the ATI community to share experiences, discuss challenges, and collaborate on future initiatives.', objectives: ['Network with peers', 'Share best practices', 'Collaborate on new projects', 'Learn about upcoming ATI programs'], targetAudience: 'ATI alumni, trainers, partners, and all members of the African research networking community' },
  { tag: 'Bootcamp', title: 'Research Infrastructure Operations',                 month: 'JAN', day: '19', year: '2027', location: 'TBC',             track: 'LIBSENSE · CLIMET',     slug: 'research-infrastructure-operations', description: 'Bootcamp on operating and managing research infrastructure, including data centers, cloud services, and research data platforms.', objectives: ['Manage research data platforms', 'Operate data center infrastructure', 'Implement cloud services for research', 'Ensure service reliability'], targetAudience: 'Research infrastructure managers, data center operators, and IT staff supporting research activities' },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find(e => e.slug === slug);
  return {
    title: event ? `${event.title} | WACREN ATI` : 'Event | WACREN ATI',
    description: event?.description,
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find(e => e.slug === slug);
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link href="/events" className="text-primary hover:underline">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Back to Events */}
        <section className="bg-white pt-8 border-b border-gray-100">
          <div className="container-wf">
            <Link href="/events" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-primary transition-colors no-underline">
              <FaArrowLeft className="text-[12px]" />
              Back to Events
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-bg-soft py-12 md:py-16">
          <div className="container-wf max-w-[800px]">
            <AnimateOnScroll animation="fadeInUp">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full">
                  <FaTag className="text-[9px]" />
                  {event.tag}
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }}>
              <h1 className="font-serif text-[32px] md:text-[48px] leading-[1.1] tracking-tighter text-zinc-900 font-normal mb-6">
                {event.title}
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
              <div className="flex flex-wrap gap-6 text-[14px] text-zinc-500 font-medium">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-primary/50" />
                  <span>{event.month} {event.day}, {event.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapPin className="text-primary/50" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-primary/50" />
                  <span>{event.track}</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container-wf max-w-[800px]">
            <AnimateOnScroll animation="fadeInUp">
              <div className="mb-10">
                <h2 className="font-serif text-[20px] md:text-[24px] text-zinc-900 font-semibold mb-4">About this Event</h2>
                <p className="text-[16px] text-zinc-700 leading-[1.8]">
                  {event.description}
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.1 }}>
              <div className="mb-10">
                <h2 className="font-serif text-[20px] md:text-[24px] text-zinc-900 font-semibold mb-4">Objectives</h2>
                <ul className="space-y-3">
                  {event.objectives.map((objective, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-[16px] text-zinc-700 leading-[1.6]">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" options={{ delay: 0.2 }}>
              <div className="p-6 bg-primary/5 rounded-[16px] border border-primary/10">
                <h2 className="font-serif text-[20px] md:text-[24px] text-zinc-900 font-semibold mb-4">Target Audience</h2>
                <p className="text-[16px] text-zinc-700 leading-[1.8]">
                  {event.targetAudience}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden border-t border-gray-100">
          <div className="container-wf relative z-10">
            <AnimateOnScroll animation="fadeInUp">
              <div className="max-w-[640px] mx-auto text-center">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-primary mb-3">Register Now</div>
                <h2 className="font-serif text-[26px] md:text-[36px] leading-[1.15] mb-4 tracking-tighter text-zinc-900 font-normal">
                  Join this <em className="not-italic text-primary">{event.tag}</em>
                </h2>
                <p className="text-[15px] text-zinc-500 leading-[1.7] mb-8 max-w-[500px] mx-auto">
                  Secure your spot today and take the next step in your professional development with the Africa Training Initiative.
                </p>
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-bold text-[13px] uppercase tracking-[0.06em] hover:bg-primary-dark transition-all shadow-lg whitespace-nowrap"
                >
                  Register Now
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
