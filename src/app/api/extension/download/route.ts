import { NextResponse } from "next/server";
import path from "path";
import archiver from "archiver";

export async function GET() {
  const extensionDir = path.join(process.cwd(), "extension");

  const archive = archiver("zip", { zlib: { level: 9 } });
  const chunks: Buffer[] = [];

  return new Promise<NextResponse>((resolve, reject) => {
    archive.on("data", (chunk: Buffer) => chunks.push(chunk));
    archive.on("end", () => {
      const buffer = Buffer.concat(chunks);
      resolve(
        new NextResponse(buffer, {
          status: 200,
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition":
              'attachment; filename="commentflow-extension.zip"',
            "Content-Length": String(buffer.length),
          },
        })
      );
    });
    archive.on("error", (err: Error) => {
      reject(
        NextResponse.json(
          { error: "Failed to create ZIP: " + err.message },
          { status: 500 }
        )
      );
    });

    archive.directory(extensionDir, "commentflow-extension");
    archive.finalize();
  });
}
