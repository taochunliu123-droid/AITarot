export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    // 處理 CORS 預檢請求
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        });
    }

    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { 
            status: 405,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const apiKey = process.env.OPENAI_API_KEY;
        
        if (!apiKey) {
            return new Response(JSON.stringify({ 
                error: 'API Key 未設定。請在 Vercel 專案設定中加入 OPENAI_API_KEY 環境變數。' 
            }), { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { prompt } = await req.json();

        if (!prompt) {
            return new Response(JSON.stringify({ error: '缺少 prompt 參數' }), { 
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

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

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `OpenAI API Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message);
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

    } catch (error) {
        console.error('Tarot API Error:', error);
        return new Response(JSON.stringify({ 
            error: error.message || '伺服器錯誤，請稍後再試'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
