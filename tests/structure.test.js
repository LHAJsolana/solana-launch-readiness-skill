import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import test from 'node:test';

const requiredFiles = [
  'README.md',
  'LICENSE',
  'install.sh',
  'package.json',
  'skill/SKILL.md',
  'skill/launch-audit.md',
  'skill/token-launch.md',
  'skill/wallet-ux.md',
  'skill/rpc-production.md',
  'skill/security-checklist.md',
  'skill/analytics-monitoring.md',
  'skill/incident-response.md',
  'skill/grant-and-gtm.md',
  'skill/output-templates.md',
  'agents/launch-reviewer.md',
  'agents/security-triage.md',
  'agents/infra-reviewer.md',
  'agents/founder-gtm.md',
  'commands/launch-readiness.md',
  'commands/pre-mainnet-check.md',
  'commands/incident-plan.md',
  'rules/no-private-keys.md',
  'rules/safe-mainnet-behavior.md',
  'examples/sample-launch-readiness-report.md',
  'examples/sample-token-launch-checklist.md',
  'examples/sample-incident-response-plan.md'
];

test('required files exist', () => {
  for (const file of requiredFiles) {
    assert.equal(existsSync(file), true, `${file} should exist`);
  }
});

