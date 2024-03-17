function shortenUrl() {
    const longUrl = document.getElementById('urlInput').value;
    
    if (!isValidUrl(longUrl)) {
        alert('Please enter a valid URL');
        return;
    }

    // You can implement your URL shortening logic here
    const shortUrl = generateShortUrl(longUrl);

    // Display the shortened URL
    document.getElementById('shortenedUrl').innerHTML = `
        <p>Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>
    `;
}

function isValidUrl(url) {
    // Simple URL validation regex
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
}

function generateShortUrl(longUrl) {
    // Dummy function to generate short URL
    // You can use external services or your own server-side logic to generate short URLs
    // For demo purposes, we'll just append a random string to the base URL
    const baseShortUrl = 'http://short.url/';
    const randomString = Math.random().toString(36).substring(7);
    return baseShortUrl + randomString;
}
