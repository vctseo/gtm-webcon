import { Router } from "express";

const lockGenRouter = Router();

lockGenRouter.get("/lock-gen", (_req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(`<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Lock Code Generator</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0f172a;color:#e2e8f0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
  .card{background:#1e293b;border:1px solid #334155;border-radius:16px;padding:32px;width:100%;max-width:620px;box-shadow:0 20px 60px rgba(0,0,0,.5)}
  h1{font-size:20px;font-weight:700;margin-bottom:4px;color:#f1f5f9}
  .sub{font-size:13px;color:#94a3b8;margin-bottom:28px}
  label{display:block;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px}
  input{width:100%;background:#0f172a;border:1px solid #475569;border-radius:8px;padding:10px 14px;color:#f1f5f9;font-size:15px;outline:none;transition:border .2s}
  input:focus{border-color:#6366f1}
  input::placeholder{color:#475569}
  button{margin-top:14px;width:100%;background:#6366f1;color:#fff;border:none;border-radius:8px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s}
  button:hover{background:#4f46e5}
  .result{margin-top:22px;display:none}
  .result-label{font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px}
  .code-block{position:relative;background:#0f172a;border:1px solid #334155;border-radius:8px;padding:14px 16px;font-family:'Fira Code','Cascadia Code',monospace;font-size:12px;color:#a5f3fc;word-break:break-all;line-height:1.7;white-space:pre-wrap}
  .copy-btn{position:absolute;top:10px;right:10px;background:#334155;color:#94a3b8;border:none;border-radius:6px;padding:5px 10px;font-size:11px;cursor:pointer;transition:all .2s}
  .copy-btn:hover{background:#475569;color:#f1f5f9}
  .copy-btn.done{background:#166534;color:#86efac}
  .how{margin-top:24px;background:#0f172a;border:1px solid #1e3a5f;border-radius:10px;padding:16px}
  .how h3{font-size:12px;font-weight:600;color:#60a5fa;margin-bottom:10px;text-transform:uppercase;letter-spacing:.05em}
  .how ol{padding-left:18px;font-size:12.5px;color:#94a3b8;line-height:2}
  .how code{background:#1e293b;color:#a5f3fc;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:11.5px}
  .badge{display:inline-block;background:#1e3a2f;color:#4ade80;font-size:11px;padding:2px 8px;border-radius:99px;margin-top:6px}
</style>
</head>
<body>
<div class="card">
  <h1>🔒 Lock Code Generator</h1>
  <p class="sub">Tạo dòng khóa domain cho script GTM — script sẽ thoát im lặng nếu chạy trên domain sai</p>

  <label for="domain">Domain cần khóa</label>
  <input id="domain" type="text" placeholder="VD: hungblack.vn" autocomplete="off" spellcheck="false" />
  <button onclick="generate()">⚡ Tạo Lock Code</button>

  <div class="result" id="result">
    <div class="result-label" style="margin-top:20px">Dòng lock — dán làm dòng đầu tiên trong <code style="color:#a5f3fc;font-size:11px">(function(){</code></div>
    <div class="code-block" id="code"><button class="copy-btn" id="copyBtn" onclick="copyCode()">Copy</button><span id="codeText"></span></div>
    <span class="badge" id="domainBadge"></span>

    <div class="how">
      <h3>Cách dùng</h3>
      <ol>
        <li>Copy dòng lock ở trên</li>
        <li>Mở script bất kỳ, tìm dòng <code>(function(){</code></li>
        <li>Dán dòng lock làm <strong>dòng đầu tiên</strong> bên trong</li>
        <li>Script sẽ <strong>thoát im lặng</strong> nếu chạy sai domain</li>
      </ol>
    </div>
  </div>
</div>

<script>
function djb2(s) {
  var h = 5381;
  for (var i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  }
  return h;
}

function normalizeDomain(d) {
  return d.trim().toLowerCase().replace(/^https?:\\/\\//, '').replace(/^www\\./, '').split('/')[0];
}

function generate() {
  var raw = document.getElementById('domain').value;
  if (!raw.trim()) { document.getElementById('domain').focus(); return; }
  var domain = normalizeDomain(raw);
  var hash = djb2(domain);

  var lockLine = "var _L=" + hash + ",_f=function(s){var h=5381;for(var i=0;i<s.length;i++){h=((h<<5)+h+s.charCodeAt(i))|0;}return h;},_d=location.hostname.replace(/^www\\./,'');if(_f(_d)!==_L)return;";

  document.getElementById('codeText').textContent = lockLine;
  document.getElementById('domainBadge').textContent = '✓ Khóa cho: ' + domain + '  (hash: ' + hash + ')';
  document.getElementById('result').style.display = 'block';
  document.getElementById('copyBtn').textContent = 'Copy';
  document.getElementById('copyBtn').className = 'copy-btn';
}

function copyCode() {
  var text = document.getElementById('codeText').textContent;
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.getElementById('copyBtn');
    btn.textContent = '✓ Đã copy';
    btn.className = 'copy-btn done';
    setTimeout(function(){ btn.textContent='Copy'; btn.className='copy-btn'; }, 2000);
  });
}

document.getElementById('domain').addEventListener('keydown', function(e){ if(e.key==='Enter') generate(); });
</script>
</body>
</html>`);
});

export default lockGenRouter;
