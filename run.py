import http.server
import socketserver
import webbrowser
import threading
import time
import json
import os
import sys

# Ensure UTF-8 console output on Windows
try:
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')
except Exception:
    pass

PORT = 8000
DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.json")

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable caching for live editing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/save-data":
            try:
                content_length = int(self.headers.get("Content-Length", 0))
                post_data = self.rfile.read(content_length)
                parsed_json = json.loads(post_data.decode("utf-8"))

                # Write formatted JSON to data.json
                with open(DATA_FILE, "w", encoding="utf-8") as f:
                    json.dump(parsed_json, f, indent=2, ensure_ascii=False)

                print(f"[Admin Panel] Successfully saved updates to: {DATA_FILE}")

                response = json.dumps({"status": "success", "message": "Saved to data.json"}).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(response)
            except Exception as e:
                print(f"[Admin Panel Error] Could not save data.json: {e}")
                err_resp = json.dumps({"status": "error", "message": str(e)}).encode("utf-8")
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(err_resp)
        else:
            self.send_response(404)
            self.end_headers()

def open_browser():
    time.sleep(1)
    url = f"http://localhost:{PORT}"
    print(f"\nOpening portfolio in your browser: {url}")
    print(f"Access Admin Panel at: {url}/admin.html\n")
    webbrowser.open(url)

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), PortfolioHandler) as httpd:
        print("==================================================")
        print(" Muhammad Zeeshan - Portfolio & Admin Server")
        print(f" Main Website:  http://localhost:{PORT}")
        print(f" Admin Panel:   http://localhost:{PORT}/admin.html")
        print(" Press Ctrl + C to stop the server")
        print("==================================================")
        
        threading.Thread(target=open_browser, daemon=True).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server. Goodbye!")
