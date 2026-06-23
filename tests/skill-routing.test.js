import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const skill = readFileSync('skill/SKILL.md', 'utf8');

test('SKILL.md has required frontmatter', () => {
  assert.match(skill, /^---\nname: solana-launch-readiness\n/m);
  assert.match(skill, /description: Use this skill when preparing a Solana project for mainnet launch/);
});

test('SKILL.md references every focused skill file', () => {
  const focusedFiles = [
    'launch-audit.md',
    'token-launch.md',
    'wallet-ux.md',
    'rpc-production.md',
    'security-checklist.md',
    'analytics-monitoring.md',
    'incident-response.md',
    'grant-and-gtm.md',
    'output-templates.md'
  ];

  for (const file of focusedFiles) {
    assert.match(skill, new RegExp(file.replace('.', '\\.')), `${file} should be routed`);
  }
});

test('SKILL.md includes routing and private key safety language', () => {
  assert.match(skill, /Progressive Routing Map/);
  assert.match(skill, /Never request, print, store, or commit private keys or seed phrases/);
  assert.match(skill, /not claim legal, financial, or formal security-audit certainty/i);
});

