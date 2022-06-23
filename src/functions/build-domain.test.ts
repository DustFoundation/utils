import { expect } from 'chai';
import { buildDomain } from './build-domain';

describe('functions/buildDomain', () => {
  it('GIVEN valid stage THEN success', () => {
    expect(buildDomain('dev')).eql(`https://dev.dust.foundation`);
    expect(buildDomain('prod')).eql(`https://dust.foundation`);
  });

  it('GIVEN valid stage, subdomain THEN success', () => {
    expect(buildDomain('dev', 'content')).eql(`https://content.dev.dust.foundation`);
  });

  it('GIVEN valid stage, subdomain, protocol THEN success', () => {
    expect(buildDomain('dev', 'content', 'ws://')).eql(`ws://content.dev.dust.foundation`);
  });

  it('GIVEN invalid stage THEN throw error', () => {
    expect(() => buildDomain('###')).throw(`Invalid stage: ###`);
  });
});
