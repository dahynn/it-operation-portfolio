import { DatabaseZap, MonitorCheck, Workflow } from 'lucide-react';

export function PersonalStrengths() {
  return <section className="personal-strengths" aria-label="일하는 기준">
    <ol>
      <li><div className="strength-marker"><MonitorCheck aria-hidden="true" /></div><div><h3>운영 상태를 끝까지 확인</h3><p>오류를 고치는 데서 멈추지 않고, 사용자에게 어떤 결과로 돌아가는지까지 확인합니다.</p></div></li>
      <li><div className="strength-marker"><Workflow aria-hidden="true" /></div><div><h3>요구를 구현 가능한 과제로 전환</h3><p>사용자의 불편을 재현하고, 기능 개선과 검증 기준으로 구체화합니다.</p></div></li>
      <li><div className="strength-marker"><DatabaseZap aria-hidden="true" /></div><div><h3>데이터로 결과를 검증</h3><p>SQL 조회와 상태 기록을 대조해, 개선 전후의 결과가 정확한지 확인합니다.</p></div></li>
    </ol>
  </section>;
}
