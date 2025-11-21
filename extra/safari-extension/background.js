const RPC_URL_KEY = 'rpcUrl';
const RPC_SECRET_KEY = 'rpcSecret';
const DEFAULT_RPC_URL = 'http://127.0.0.1:16800/jsonrpc';

    chrome.contextMenus.create({
        id: 'download-with-motrix',
        title: 'Download with Motrix',
        contexts: ['link']
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'download-with-motrix') {
        sendToMotrix(info.linkUrl);
    }
});

async function sendToMotrix(url) {
    const config = await chrome.storage.sync.get([RPC_URL_KEY, RPC_SECRET_KEY]);
    const rpcUrl = config[RPC_URL_KEY] || DEFAULT_RPC_URL;
    const rpcSecret = config[RPC_SECRET_KEY];

    const payload = {
        jsonrpc: '2.0',
        method: 'aria2.addUri',
        id: Date.now().toString(),
        params: [
            ...(rpcSecret ? [`token:${rpcSecret}`] : []),
            [url]
        ]
    };

    try {
        const response = await fetch(rpcUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Motrix response:', result);
    } catch (error) {
        console.error('Failed to send to Motrix:', error);
    }
}
