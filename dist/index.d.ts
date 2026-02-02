import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { type ToolContext } from './tools/index.js';
export { AirtableService } from './airtableService.js';
export type { IAirtableService } from './types.js';
export { registerAll, type ToolContext } from './tools/index.js';
export type ServerConfig = ToolContext;
export declare function createServer(config: ServerConfig): McpServer;
