from PIL import Image
def find_bbox(filepath):
    img = Image.open(filepath).convert('RGB')
    w, h = img.size
    pixels = img.load()
    top=h; bottom=0; left=w; right=0
    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x,y]
            if r < 50 and g < 50 and b < 50:
                top = min(top, y)
                bottom = max(bottom, y)
                left = min(left, x)
                right = max(right, x)
    print(f'{filepath} bbox: left={left} top={top} right={right} bottom={bottom}')
    if left < right and top < bottom:
        cropped = Image.open(filepath).crop((left, top, right, bottom))
        cropped.save(filepath.replace('.png', '-cropped.png'))
find_bbox('public/kaaty-kds.png')
find_bbox('public/kaaty-pos.png')
