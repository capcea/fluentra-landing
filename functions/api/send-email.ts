export const onRequestPost = async ({ request, env }: { request: Request; env: Record<string, string> }) => {
  try {
    const { name, email, message } = await request.json();
    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Missing email or message' }), { status: 400, headers: { 'content-type': 'application/json' } });
    }

    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'RESEND_API_KEY not set' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }

    const recipient = env.CONTACT_TO_EMAIL;
    if (!recipient) {
      return new Response(JSON.stringify({ error: 'CONTACT_TO_EMAIL not set' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }

    const from = env.CONTACT_FROM_EMAIL;
    if (!from) {
      return new Response(JSON.stringify({ error: 'CONTACT_FROM_EMAIL not set' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }
    const subject = `New website contact${name ? ` - ${name}` : ''}`;
    const text = `From: ${name || 'Visitor'} <${email}>\n\n${message}`;

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: recipient, subject, text, reply_to: email }),
    });

    if (!r.ok) {
      let details: unknown;
      try {
        details = await r.json();
      } catch {
        details = await r.text();
      }
      return new Response(JSON.stringify({ error: 'Resend error', status: r.status, details }), { status: r.status, headers: { 'content-type': 'application/json' } });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || 'Unknown error' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
};


