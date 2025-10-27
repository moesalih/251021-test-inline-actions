import { NextRequest, NextResponse } from "next/server";

import { appUrl, description, title } from '@/lib/metadata'

export async function GET(request: NextRequest) {
  const { origin } = new URL(request.url);
  const baseUrl = origin;

  let accountAssociation = {}
  if (baseUrl == 'https://251021-test-inline-actions.vercel.app') {
    accountAssociation = {
      "header": "eyJmaWQiOjIwNzMsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhkNjk3NTM4RWQ2MzUzMzQwNzRDNGM4MDM3MEU5MzQ0NjQzQWEwRGJhIn0",
      "payload": "eyJkb21haW4iOiIyNTEwMjEtdGVzdC1pbmxpbmUtYWN0aW9ucy52ZXJjZWwuYXBwIn0",
      "signature": "vIych9xkJ4OOPPPIenOtzJFmopdgrbL0F3MqbVUDgPc9bd62OLX/27QhpPyfMdbi+qBSAN0cKFWDvBSrLpDIBhw="
    }
  }

  const manifest = {
    accountAssociation,
    frame: {
      name: title,
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
