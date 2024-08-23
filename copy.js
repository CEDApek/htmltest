function copyToClipboard() {
    const textToCopy = 'jonathansalim123';
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = textToCopy;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('WeChat ID copied!!');
}