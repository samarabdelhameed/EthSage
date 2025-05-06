import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { HttpServerTransport } from "@modelcontextprotocol/sdk/server/http.js";

console.log("🚀 index.ts started"); // تأكيد إن الملف شغال

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

    // إعداد النقل عبر HTTP
    const transport = new HttpServerTransport({ port: 3001 });

    // الاتصال بالسيرفر
    await server.connect(transport);

    console.log("✅ MCP HTTP server running on http://localhost:3001");

    // إبقاء السيرفر حي عن طريق interval
    const interval = setInterval(() => {
      console.log("⏳ Server is still alive...");
    }, 5000);

    // عند إغلاق السيرفر يتم إيقاف الـ interval
    process.on('SIGINT', async () => {
      clearInterval(interval);
      console.log("✅ Server stopped.");

      // تأكد من إغلاق السيرفر بشكل سليم
      await server.disconnect();
      process.exit();
    });
  } catch (err) {
    console.error("❌ Error during server startup:", err);
  }
}

main();  // <-- ضروري تتنفذ هنا
