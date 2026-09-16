import re, json

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract CTAs
print("--- CTAs ---")
buttons = re.findall(r'<Button[^>]*>(.*?)</Button>', text, re.DOTALL)
for b in buttons:
    print(b.strip())

print("--- Links ---")
links = re.findall(r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', text, re.DOTALL)
for l in links:
    print(f"{l[0]} -> {re.sub(r'<[^>]+>', '', l[1]).strip()}")

