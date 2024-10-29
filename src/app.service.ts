import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <html>
        <head>
          <title>Welcome to my Nest.js application</title>
        </head>
        <body>
          <h1>Hello World, this is my first time in Nest.js!</h1>
          <p>Check out the <a href="/docs">API documentation</a>.</p>
        </body>
      </html>
    `;
  }
}