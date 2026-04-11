import PageLayout from '@/components/PageLayout';
import ScrollReveal from '@/components/ScrollReveal';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { EXTERNAL_LINKS } from '@/config/externalLinks';

const events = [
  {
    title: 'Launch Day: Intro To Cloud Computing With AWS Cloud Club at UH',
    date: 'Thursday, April 2nd · 3:00 PM – 4:30 PM',
    location: 'University of Houston Sugar Land, SAB 1 Room 249',
    desc: 'Introduction to the AWS Cloud — Live Demo + Career Insights',
    status: 'upcoming' as const,
  },
  {
    title: 'TBD — Check Meetup for updates',
    date: 'TBD',
    location: 'TBD',
    desc: 'More events are being planned. RSVP on Meetup to get notified.',
    status: 'tbd' as const,
  },
];

const EventsPage = () => (
  <PageLayout>

    {/* ── Header ── */}
    <section className="relative z-10 min-h-[40vh] flex flex-col justify-end py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Events
          </p>
          <h1
            className="font-heading font-extrabold leading-[0.88] tracking-tight text-foreground mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Upcoming<br />
            <span style={{ color: 'var(--primary)' }}>meetups.</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-[50ch]">
            All events are published on Meetup. RSVP to save your spot —
            seats go fast.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* ── Event list ── */}
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-6">
        <div className="divide-y divide-border">
          {events.map((ev, i) => (
            <ScrollReveal key={ev.title} delay={i * 80}>
              <div className="py-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">

                {/* Left */}
                <div className="grid grid-cols-[2rem_1fr] gap-5 items-start">
                  <span className="text-xs font-mono text-primary/50 pt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[10px] uppercase tracking-[0.12em] font-medium px-2 py-0.5 rounded-full ${
                        ev.status === 'upcoming'
                          ? 'bg-primary/15 text-primary border border-primary/30'
                          : 'bg-muted text-muted-foreground border border-border'
                      }`}>
                        {ev.status === 'upcoming' ? 'Upcoming' : 'TBD'}
                      </span>
                    </div>
                    <h2 className="font-heading font-semibold text-foreground text-lg leading-snug mb-4 max-w-[55ch]">
                      {ev.title}
                    </h2>
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        {ev.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {ev.location}
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-[55ch]">
                      {ev.desc}
                    </p>
                  </div>
                </div>

                {/* Right — CTA */}
                <div className="lg:pt-1 pl-9 lg:pl-0">
                  <a
                    href={EXTERNAL_LINKS.meetup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-primary-foreground font-semibold text-sm transition-all duration-150 hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
                  >
                    RSVP on Meetup
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Meetup note ── */}
    <section className="relative z-10 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between gap-8 flex-wrap">
            <p className="text-base text-muted-foreground max-w-[50ch]">
              New events are announced on Meetup first. Follow the group to
              get notified when the next event drops.
            </p>
            <a
              href={EXTERNAL_LINKS.meetup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 whitespace-nowrap"
            >
              All events on Meetup
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>

  </PageLayout>
);

export default EventsPage;
