import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerAll } from './tools/index.js';
// Library exports
export { AirtableService } from './airtableService.js';
export { registerAll } from './tools/index.js';
export function createServer(config) {
    const server = new McpServer({
        name: 'airtable-mcp-server',
        version: '1.0.0',
    });
    registerAll(server, config);
    return server;
}
