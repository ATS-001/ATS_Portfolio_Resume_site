with open("next.config.ts", "r") as f:
    content = f.read()

if "unoptimized: true" not in content:
    content = content.replace("images: {", "images: {\n    unoptimized: true,")
    with open("next.config.ts", "w") as f:
        f.write(content)
    print("Updated next.config.ts")
else:
    print("Already unoptimized")
