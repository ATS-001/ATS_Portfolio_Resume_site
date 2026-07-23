with open("app/page.tsx", "r") as f:
    content = f.read()

content = content.replace('Image src="/search_call.jpg"', 'Image src="/search_call.jpg" unoptimized')
content = content.replace('Image src="/vaazhas.jpg"', 'Image src="/vaazhas.jpg" unoptimized')
content = content.replace('Image src="/study_ai.jpg"', 'Image src="/study_ai.jpg" unoptimized')

with open("app/page.tsx", "w") as f:
    f.write(content)

print("Home page images updated")
