const BASE_URL = 'dust.foundation';

export function buildDomain(stage: string, subdomain?: string, protocol?: string): string {
  if (!['dev', 'stage', 'prod'].includes(stage)) {
    throw new Error(`Invalid stage: ${stage}`);
  }

  return [
    protocol || 'https://',
    subdomain ? `${subdomain}.` : '',
    stage === 'dev' || stage === 'stage' ? `${stage}.` : '',
    BASE_URL,
  ].join('');
}
