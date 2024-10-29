import http from 'http';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
switch (req.url) {
case '/':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home</h1>');
    break;
case '/about':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About</h1>');
    break;
case '/my-account':
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('You have no access to this page');
    break;
default:
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found :(');
}
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is now working on the port ${PORT}, congratulations :)`);
});

