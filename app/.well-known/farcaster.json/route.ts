import { NextRequest, NextResponse } from "next/server";

import { appUrl, description, title } from '@/lib/metadata'

export async function GET(request: NextRequest) {
  const { origin } = new URL(request.url);
  const baseUrl = origin;

  let accountAssociation = {}
  if (baseUrl == 'https://251021-test-inline-actions.vercel.app') {
    accountAssociation = {
      header: 'xx',
      payload: 'xx',
      signature: 'xx',
    }
  }

  const manifest = {
    accountAssociation,
    frame: {
      name: name,
      version: '1',
      iconUrl: baseUrl + '/icon',
      homeUrl: baseUrl,
      splashImageUrl: baseUrl + '/icon?rounded=1',
      splashBackgroundColor: '#111111',
      primaryCategory: 'social',
      subtitle: description,
      description: description,
      webhookUrl: baseUrl + '/webhook',
      castShareUrl: baseUrl,
    },
  }
  return Response.json(manifest);
}
