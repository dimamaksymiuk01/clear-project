/* core */
import { NextRequest, NextResponse } from 'next/server';
/* instruments */
import { getLanguage } from '@/app/language';

export async function GET(request: NextRequest) {
  const lang = await getLanguage();

  const message = lang === 'uk' ? 'Привіт' : 'Hello';

  return NextResponse.json({
    message,
    lang,
  });
}
