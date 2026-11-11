from PIL import Image
def find_bbox(filepath):
    img = Image.open(filepath).convert('RGBA')
    w, h = img.size
    pixels = img.load()
    top=h; bottom=0; left=w; right=0
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x,y]
            if a > 128 and r < 80 and g < 80 and b < 80:
                top = min(top, y)
                bottom = max(bottom, y)
                left = min(left, x)
                right = max(right, x)
    print(f'{filepath} bbox: left={left} top={top} right={right} bottom={bottom}')
    if left < right and top < bottom:
        # add some padding for the bottom of the laptop
        # The laptop bottom is silver, so the black bezel doesn't cover it.
        # We can just increase bottom by a percentage.
        bottom = min(h-1, int(bottom + (bottom - top) * 0.05))
        cropped = Image.open(filepath).crop((left, top, right, bottom))
        cropped.save(filepath.replace('.png', '-cropped.png'))
find_bbox('public/kaaty-pos.png')
