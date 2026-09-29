/* oxlint-disable next/no-img-element -- 로컬 정적 로고를 고정 비율로 표시합니다. */
import {
  BookOpen,
  CircleDollarSign,
  Compass,
  HandHeart,
  Heart,
  Lightbulb,
  Rocket,
  Scale,
  Sprout,
} from 'lucide-react';

const fiveActions = [
  { label: '독서', english: 'Reading', Icon: BookOpen },
  { label: '근검', english: 'Being simple', Icon: CircleDollarSign },
  { label: '적선', english: 'Sharing', Icon: HandHeart },
  { label: '겸손', english: 'Modesty', Icon: Heart },
  { label: '후보', english: 'Slow & Steady', Icon: Sprout },
];

const fourVirtues = [
  { label: '창조성', english: 'Creativity', Icon: Lightbulb },
  { label: '합리성', english: 'Rationality', Icon: Scale },
  { label: '적극성', english: 'Initiative', Icon: Rocket },
  { label: '자주성', english: 'Independence', Icon: Compass },
];

export function PersonalStrengths() {
  return <section className="personal-strengths kolmar-values" aria-label="한국콜마 4성 5행과 IT 운영 기준">
    <p className="kolmar-values-kicker">KOLMAR VALUES · 4성 5행</p>
    <div className="kolmar-values-orbit">
      <svg className="kolmar-values-geometry" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon className="kolmar-values-pentagon" points="50,8 90,35 75,87 25,87 10,35" />
        <polygon className="kolmar-values-square" points="32,30 68,30 68,70 32,70" />
      </svg>
      <ol className="kolmar-values-actions" aria-label="5행">
        {fiveActions.map(({ label, english, Icon }) => (
          <li key={label}>
            <Icon aria-hidden="true" />
            <span>{english}</span>
            <strong>{label}</strong>
          </li>
        ))}
      </ol>
      <ol className="kolmar-values-virtues" aria-label="4성">
        {fourVirtues.map(({ label, english, Icon }) => (
          <li key={label}>
            <Icon aria-hidden="true" />
            <span>{english}</span>
            <strong>{label}</strong>
          </li>
        ))}
      </ol>
      <div className="kolmar-values-core">
        <img src="/assets/kolmar-logo.png" alt="한국콜마" width="382" height="279" />
      </div>
    </div>
  </section>;
}
