export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const apiKey = process.env.OPENAI_API_KEY;
        
        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'Server: API Key is missing in Vercel Settings' }), { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { prompt } = await req.json();

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { 
                        role: "system", 
                        content: "你是「PM里長伯」，一位結合敏捷管理(Agile)與神秘學的塔羅占卜師。請用賽博龐克(Cyberpunk)風格，結合專案管理術語(如Sprint, Retrospective, Backlog)進行幽默且有洞見的解讀。請給出一個約 150 字的綜合建議。" 
                    },
                    { role: "user", content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message);
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
