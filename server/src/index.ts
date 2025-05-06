#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

async function main() {
  try {
    // إنشاء السيرفر
    const server = new McpServer({
      name: "EthSage MCP Agent",
      version: "0.0.1",
    });

    // إنشاء الأداة
    server.tool("hello", async () => {
      return {
        content: [
          {
            type: "text",
            text: "👋 Hello from MCP Agent!",
          },
        ],
      };
    });

    await server.connect(new StdioServerTransport());
    // إبقاء السيرفر حي عن طريق interval

    // عند إغلاق السيرفر يتم إيقاف الـ interval
  } catch (err) {
  }
}

main(); // <-- ضروري تتنفذ هنا
