# API Documentation

## Base URL
- **Development**: `http://localhost:5000/api`
- **Production**: `https://your-api-domain.com/api`

---

## Endpoints

### 1. Generate Bio

**Endpoint**: `POST /bio/generate`

**Request**
```json
{
  "keywords": "developer, photography, travel"
}
```

**Response** (200 OK)
```json
{
  "keywords": "developer, photography, travel",
  "bios": {
    "free": [
      "developer | photography | travel ✨",
      "developer | 📸 | 🌍 | Creating magic daily",
      "developer | 📷 | Traveling the world 🚀"
    ],
    "premium": [
      "🌟 developer | CEO | Entrepreneur | 📸 photographer | DM for collab",
      "✨ developer | Building amazing projects | 📷 Travel photographer | Follow ➡️"
    ],
    "ai": [
      "developer passionate about photography and world travel"
    ]
  },
  "tips": [
    "💡 Keep it short and memorable",
    "✨ Use emojis to stand out",
    "🚀 Include what makes you unique",
    "📱 Fit your brand personality"
  ]
}
```

**Status Codes**
- `200`: Success
- `400`: Missing/invalid keywords
- `429`: Too many requests

---

### 2. Get Free Templates

**Endpoint**: `GET /premium/templates/free/:platform`

**Parameters**
- `platform` (required): `instagram` or `twitter`

**Response** (200 OK)
```json
{
  "templates": [
    {
      "id": 1,
      "name": "Minimalist",
      "description": "Clean and simple design",
      "template": "NAME | KEYWORD | emoji emoji emoji",
      "premium": false
    }
  ]
}
```

---

### 3. Get Premium Templates

**Endpoint**: `GET /premium/templates/premium/:platform`

**Parameters**
- `platform` (required): `instagram` or `twitter`

**Response** (200 OK)
```json
{
  "templates": [
    {
      "id": 2,
      "name": "Professional",
      "description": "Business-focused template",
      "template": "NAME | CEO of KEYWORD | 📧 DM",
      "premium": true
    }
  ]
}
```

---

### 4. Get All Templates

**Endpoint**: `GET /premium/templates/all/:platform`

**Parameters**
- `platform` (required): `instagram` or `twitter`

**Response** (200 OK)
```json
{
  "templates": [
    // Mix of free and premium templates
  ]
}
```

---

### 5. Health Check

**Endpoint**: `GET /health`

**Response** (200 OK)
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "environment": "development"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Keywords are required"
}
```

### 429 Too Many Requests
```json
{
  "error": "Too many requests from this IP, please try again later."
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong"
}
```

### 404 Not Found
```json
{
  "error": "Route not found"
}
```

---

## Rate Limiting

- **Window**: 15 minutes
- **Max Requests**: 100 per IP
- **Headers**: Returns `X-RateLimit-*` headers

---

## Authentication

Currently no authentication required. Future versions may include:
- API keys for commercial use
- OAuth2 for user accounts
- JWT tokens for premium features

---

## CORS Configuration

- **Allowed Origins**: Configured in `.env` (CORS_ORIGIN)
- **Methods**: GET, POST
- **Credentials**: Allowed

---

## Example Client Usage

### JavaScript/Fetch

```javascript
// Generate bios
const response = await fetch('http://localhost:5000/api/bio/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    keywords: 'developer, photographer'
  })
});

const data = await response.json();
console.log(data);
```

### Using Axios (React/Node)

```javascript
import axios from 'axios';

const response = await axios.post('http://localhost:5000/api/bio/generate', {
  keywords: 'developer, photographer'
});

console.log(response.data);
```

### Using cURL

```bash
curl -X POST http://localhost:5000/api/bio/generate \
  -H "Content-Type: application/json" \
  -d '{"keywords":"developer"}'
```

---

## Response Times

| Endpoint | Avg Response Time | Notes |
|----------|------------------|-------|
| /bio/generate | 200-500ms | Depends on HF API |
| /premium/templates/* | 10-50ms | Fast, local data |
| /health | 5-10ms | Health check |

---

## Pagination

Not implemented yet. Consider adding for future features:

```javascript
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "pages": 15
  }
}
```

---

## Versioning

Current API Version: **v1** (v2 planned)

Future: Support for `/api/v2/bio/generate` etc.

---

## Deprecation Policy

- 3 months notice before deprecating endpoints
- Backward compatibility maintained when possible
- Migration guides provided

---

## Webhooks (Future)

Planned support for webhooks:
- New bio requested
- API quota exceeded
- Service status changes

---

## SDK/Libraries (Future)

Plan to create:
- Python SDK
- JavaScript/TypeScript SDK
- Go SDK

---

## Testing

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Generate Bio
```bash
curl -X POST http://localhost:5000/api/bio/generate \
  -H "Content-Type: application/json" \
  -d '{"keywords":"instagram"}'
```

### Get Templates
```bash
curl http://localhost:5000/api/premium/templates/all/instagram
```

---

## Performance Tips

1. **Cache responses** - Results are deterministic for same keywords
2. **Batch requests** - Not recommended, each keyword is lightweight
3. **Monitor rate limits** - Check headers for remaining quota
4. **Error handling** - Implement retry logic with exponential backoff

---

## Security

- CORS enabled only for whitelisted origins
- Rate limiting prevents abuse
- Helmet.js headers for security
- No sensitive data exposed in responses
- Input validation on all endpoints

---

## Future API Features

- [ ] User authentication
- [ ] Save favorite bios
- [ ] User profiles
- [ ] Analytics dashboard
- [ ] Custom templates
- [ ] Batch generation
- [ ] Webhook support
- [ ] GraphQL endpoint
- [ ] WebSocket for real-time
- [ ] Multi-language support

---

## Support

For API issues:
1. Check status at `/health`
2. Verify your API key/origin
3. Check rate limits
4. Review error codes above
5. Check GitHub issues
6. Email support@biogenerator.com

---

## Changelog

### v1.0.0 (Current)
- Initial release
- Bio generation
- Template management
- Rate limiting
- CORS support

---

This documentation covers everything you need to integrate the API!
