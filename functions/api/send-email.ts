export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const { name, email, message, to } = await request.json();
    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Missing email or message' }), { status: 400, headers: { 'content-type': 'application/json' } });
    }

    const recipient = to || env.CONTACT_TO_EMAIL;
    if (!recipient) {
      return new Response(JSON.stringify({ error: 'CONTACT_TO_EMAIL not set' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }

    const from = env.CONTACT_FROM_EMAIL || 'Fluentra <onboarding@resend.dev>';
    const subject = `New website contact${name ? ` - ${name}` : ''}`;
    const text = `From: ${name || 'Visitor'} <${email}>\n\n${message}`;

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to: recipient, subject, text, reply_to: email }),
    });

    if (!r.ok) {
      const err = await r.text();
      return new Response(JSON.stringify({ error: err || 'Failed to send email' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || 'Unknown error' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
};


