const replacements = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const reverseReplacements = Object.fromEntries(
    Object.entries(replacements).map(([key, value]) => [value, key])
);

function encrypt(text) {
    let encryptedText = '';
    for (const char of text) {
        encryptedText += replacements[char] || char;
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text;
    for (const [replacement, original] of Object.entries(reverseReplacements)) {
        decryptedText = decryptedText.split(replacement).join(original);
    }
    return decryptedText;
}

document.getElementById('process').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const action = document.getElementById('action').value;
    const outputText = action === 'encrypt' ? encrypt(inputText) : decrypt(inputText);
    document.getElementById('outputText').value = outputText;
});

document.getElementById('copy').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});
