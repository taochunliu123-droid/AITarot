export const config = {
    runtime: 'edge', // 使用 Edge Runtime 速度更快
};

export default async function handler(req) {
    // 1. 只允許 POST 請求
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        // 2. 從環境變數取得 API Key (稍後在 Vercel 設定)
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'Server API Key not configured' }), { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { prompt } = await req.json();

        // 3. 呼叫 OpenAI
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // 推薦使用 mini 版本，便宜且快速
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

        // 4. 回傳結果給前端
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