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

    // الاتصال بنقل البيانات عبر الـ StdioServerTransport
    await server.connect(new StdioServerTransport());
    
    // التأكد من أن السيرفر بدأ
    console.log("✅ MCP Server is running...");

    // إبقاء السيرفر حي عن طريق interval
    setInterval(() => {
      console.log("⏳ Server is still alive...");
    }, 5000);

    // عند إغلاق السيرفر يتم إيقاف الـ interval
    process.on('SIGINT', () => {
      console.log("✅ Server stopped.");
      process.exit();
    });

  } catch (err) {
    console.error("❌ Error during server startup:", err);
  }
}

main(); // <-- ضروري تتنفذ هنا
