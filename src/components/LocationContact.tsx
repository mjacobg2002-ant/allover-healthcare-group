import { MapPin, Phone, Clock, Printer, Mail, Navigation, AlertTriangle } from 'lucide-react'
import { ORG } from '../config/site'

export function LocationContact() {
  const { address, phone, email, emailHref, mapsDirections, mapsEmbed } = ORG

  return (
    <section id="contact" className="scroll-mt-20 bg-sage py-16 md:py-24" aria-labelledby="contact-h">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-primary">Location &amp; contact</p>
          <h2 id="contact-h" className="h2 mt-3">
            Visit, call or write to our team
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Details */}
          <div className="reveal card p-7">
            <address className="not-italic">
              <p className="font-serif text-xl text-ink">{ORG.name}</p>
              <p className="mt-2 flex items-start gap-2.5 text-body">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                  <br />
                  <span className="text-sm text-body/80">{address.note}</span>
                </span>
              </p>

              <dl className="mt-6 space-y-3 text-body">
                <div className="flex items-center gap-2.5">
                  <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <dt className="sr-only">Main phone</dt>
                  <dd>
                    <a href={phone.mainTel} className="font-semibold text-ink hover:text-primary">
                      {phone.main} {phone.mainExt}
                    </a>{' '}
                    <span className="text-sm text-body/80">· Main office</span>
                  </dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <dt className="sr-only">After-hours phone</dt>
                  <dd>
                    <a href={phone.afterHoursTel} className="font-semibold text-ink hover:text-primary">
                      {phone.afterHours}
                    </a>{' '}
                    <span className="text-sm text-body/80">· After-hours contact</span>
                  </dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Printer className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <dt className="sr-only">Fax</dt>
                  <dd>
                    {phone.fax} <span className="text-sm text-body/80">· Fax</span>
                  </dd>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href={emailHref} className="font-semibold text-ink hover:text-primary">
                      {email}
                    </a>
                  </dd>
                </div>
              </dl>
            </address>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a href={mapsDirections} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
              </a>
              <a href={phone.mainTel} className="btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call main office
              </a>
              <a href={emailHref} className="btn-ghost">
                <Mail className="h-4 w-4" aria-hidden="true" /> Email us
              </a>
            </div>

            <p className="mt-5 flex items-start gap-2 rounded-lg bg-primary-soft px-4 py-3 text-sm text-ink">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Email and website contact forms should not be used for emergencies. For crisis support,
              call or text 988; in an emergency call 911.
            </p>
          </div>

          {/* Embedded Google Map (keyless) with a directions overlay */}
          <div className="reveal card relative min-h-[340px] overflow-hidden p-0">
            <iframe
              src={mapsEmbed}
              title={`Map showing ${ORG.name} at ${address.street}, ${address.city}, ${address.state}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
            <a
              href={mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full bg-navy/95 px-5 py-3 text-sm font-semibold text-ivory shadow-lg backdrop-blur transition-colors hover:bg-navy sm:right-auto"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
