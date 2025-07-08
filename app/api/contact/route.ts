// This API route is currently disabled. To enable contact form functionality, implement your preferred email sending logic here.

export async function POST() {
    return new Response(JSON.stringify({ success: false, error: 'Email sending is disabled.' }), {
        status: 501,
        headers: { 'Content-Type': 'application/json' },
    });
} 