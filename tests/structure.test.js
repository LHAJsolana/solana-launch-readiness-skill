import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const requiredFiles = [
  'README.md',
  'LICENSE',
  'CHANGELOG.md',
  'CONTRIBUTING.md',
  'install.sh',
  'package.json',
  '.github/workflows/test.yml',
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
  'examples/sample-incident-response-plan.md',
  'schemas/launch-readiness.schema.json',
  'demo/input-example.md',
  'demo/output-report.md',
  'demo/before-after.md',
  'references/common-solana-launch-failures.md',
  'references/transaction-reliability-patterns.md',
  'references/founder-launch-risks.md'
];

test('required files exist', () => {
  for (const file of requiredFiles) {
    assert.equal(existsSync(file), true, `${file} should exist`);
  }
});

test('launch readiness schema is valid JSON with required report fields', () => {
  const schema = JSON.parse(readFileSync('schemas/launch-readiness.schema.json', 'utf8'));

  assert.equal(schema.title, 'Solana Launch Readiness Report');
  assert.deepEqual(
    schema.required,
    [
      'project',
      'review',
      'score',
      'verdict',
      'categories',
      'blockers',
      'risks',
      'manualVerification',
      'recommendedActions'
    ]
  );
  assert.deepEqual(schema.properties.verdict.enum, ['GO', 'CONDITIONAL_GO', 'NO_GO']);
});

test('GitHub Actions workflow runs npm test on push and pull request', () => {
  const workflow = readFileSync('.github/workflows/test.yml', 'utf8');

  assert.match(workflow, /push:/);
  assert.match(workflow, /pull_request:/);
  assert.match(workflow, /run: npm test/);
});
