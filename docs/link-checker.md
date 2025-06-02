# Link Checker Documentation

## Overview
The link checker is a tool that automatically scans the website for broken links and generates reports. It helps maintain the quality of the website by identifying and alerting about broken links.

## Features
- Automatic scanning of all internal and external links
- Daily scheduled checks
- HTML and JSON report generation
- Email alerts for broken links
- Dashboard for monitoring link status
- Integration with GitHub Actions

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
ALERT_RECIPIENTS=admin@progineer.fr
```

## Usage

### Running the Link Checker
```bash
# Run the link checker
npm run check-links

# Generate HTML report
npm run generate-report

# Send alerts
npm run send-alert
```

### Configuration
The link checker can be configured in `config/link-checker.json`:
```json
{
  "baseUrl": "https://progineer.fr",
  "excludePatterns": [
    "node_modules",
    "dist",
    "build"
  ],
  "alertThreshold": 5,
  "checkInterval": 86400000
}
```

## Dashboard
The link monitoring dashboard is available at `/admin/link-monitoring`. It provides:
- Total number of links
- Number of broken links
- Internal vs external link statistics
- Detailed list of broken links
- Source file and line number for each broken link

## GitHub Actions Integration
The link checker runs automatically:
- On every push to main branch
- On pull requests to main branch
- Daily at midnight (UTC)

## Alert System
Alerts are sent when:
- The number of broken links exceeds the threshold
- The link checker fails to run
- Critical internal links are broken

## Maintenance

### Adding New Links
1. Use the URL mapper for internal links
2. Follow the naming conventions
3. Update the documentation

### Checking Links
1. Run the link checker
2. Review the report
3. Fix broken links
4. Update the documentation

### Handling Alerts
1. Review the alert email
2. Check the broken links
3. Fix the issues
4. Update the documentation

## Troubleshooting

### Common Issues
1. **SMTP Connection Failed**
   - Check SMTP credentials
   - Verify network connectivity
   - Check firewall settings

2. **Link Checker Timeout**
   - Increase timeout in configuration
   - Check network connectivity
   - Verify target server status

3. **False Positives**
   - Add URLs to exclude patterns
   - Verify server configuration
   - Check redirect chains

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details. 