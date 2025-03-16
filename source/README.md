# Running This Challenge

Build
```
docker build -t athack-ctf/chall2025-xss-one:latest .
```

Run
```
docker run -d --name xss-one \
  --hostname xss-one \
  -p 52052:2025 \
  --memory 300m \
  --cpus 0.12 \
  athack-ctf/chall2025-xss-one:latest
```
