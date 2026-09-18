import { MISSION } from '../config/content'

export function MissionValues() {
  return (
    <section id="mission" className="scroll-mt-20 bg-ivory py-16 md:py-24" aria-labelledby="mission-h">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-primary">Our mission</p>
          <h2 id="mission-h" className="h2 mt-3">
            {MISSION.heading}
          </h2>
          <p className="lead mx-auto mt-5 max-w-prose">{MISSION.body}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MISSION.values.map((v) => (
            <div key={v.name} className="reveal card p-6">
              <h3 className="font-serif text-xl text-primary">{v.name}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
