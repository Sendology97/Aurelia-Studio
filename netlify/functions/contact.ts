import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Tutti i campi sono obbligatori.' }),
      };
    }

    const response = await fetch('https://formsubmit.co/ajax/info@aureliastudio.it', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: "Nuovo messaggio dal sito Aurelia Studio (via Netlify)",
        _captcha: "false"
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, message: "Messaggio inviato con successo", data: result }),
      };
    } else {
      return {
        statusCode: response.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: "Errore nell'invio del messaggio", details: result }),
      };
    }
  } catch (err) {
    console.error("Errore nella funzione contact:", err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: "Errore interno del server." }),
    };
  }
};

export { handler };
