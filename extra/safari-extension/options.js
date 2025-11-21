const RPC_URL_KEY = 'rpcUrl';
const RPC_SECRET_KEY = 'rpcSecret';
const DEFAULT_RPC_URL = 'http://127.0.0.1:16800/jsonrpc';

function saveOptions() {
    const rpcUrl = document.getElementById('rpcUrl').value;
    const rpcSecret = document.getElementById('rpcSecret').value;

    chrome.storage.sync.set({
        [RPC_URL_KEY]: rpcUrl,
        [RPC_SECRET_KEY]: rpcSecret
    }, () => {
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
    });
}

function restoreOptions() {
    chrome.storage.sync.get({
        [RPC_URL_KEY]: DEFAULT_RPC_URL,
        [RPC_SECRET_KEY]: ''
    }, (items) => {
        document.getElementById('rpcUrl').value = items[RPC_URL_KEY];
        document.getElementById('rpcSecret').value = items[RPC_SECRET_KEY];
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
