export const createEmailTemplate = (
  senderName: string,
  letter: string,
  attachmentUrl: string | null = null,
  sentDate: string
): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A message from your past</title>
    <style>
        /* Reset styles for email compatibility */
        body, table, td, p, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        body {
            background-color: #f8f6ff;
            padding: 20px 0;
            line-height: 1.6;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .email-header {
            background: linear-gradient(135deg, #c8b5db 0%, #8b5fbf 100%);
            padding: 40px 20px;
            text-align: center;
        }
        
        .email-header h1 {
            color: #ffffff;
            font-size: 36px;
            font-weight: 300;
            margin-bottom: 8px;
            letter-spacing: 2px;
        }
        
        .email-header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            margin: 0;
        }
        
        .email-body {
            padding: 40px 30px;
        }
        
        .message-header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .message-header p {
            color: #6b46c1;
            font-size: 18px;
            margin-bottom: 15px;
        }
        
        .divider {
            height: 1px;
            background-color: #e5d9f2;
            margin: 20px 0;
        }
        
        .letter-content {
            background-color: rgba(248, 246, 255, 0.5);
            border-radius: 12px;
            padding: 30px;
            border: 1px solid #e5d9f2;
            margin-bottom: 20px;
        }
        
        .letter-text {
            color: #6b46c1;
            font-size: 16px;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        
        .signature {
            text-align: right;
            margin-top: 20px;
        }
        
        .signature p {
            color: rgba(107, 70, 193, 0.8);
            font-style: italic;
            font-size: 16px;
        }
        
        .attachment-section {
            margin-top: 30px;
        }
        
        .attachment-box {
            background-color: rgba(248, 246, 255, 0.7);
            border-radius: 8px;
            padding: 20px;
            border: 1px solid #e5d9f2;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .attachment-info {
            display: flex;
            align-items: center;
        }
        
        .attachment-icon {
            font-size: 20px;
            margin-right: 12px;
        }
        
        .attachment-details h4 {
            color: #6b46c1;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 4px;
        }
        
        .attachment-details p {
            color: rgba(107, 70, 193, 0.6);
            font-size: 14px;
            margin: 0;
        }
        
        .download-btn {
            background-color: transparent;
            border: 2px solid #c8b5db;
            color: #6b46c1;
            padding: 8px 12px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .download-btn:hover {
            background-color: #c8b5db;
            color: #ffffff;
        }
        
        .footer-message {
            text-align: center;
            margin-top: 30px;
        }
        
        .footer-message p {
            color: rgba(107, 70, 193, 0.6);
            font-size: 14px;
            font-style: italic;
            margin: 0;
        }
        
        .back-to-valea {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
        }
        
        .back-to-valea p {
            color: rgba(107, 70, 193, 0.6);
            font-size: 14px;
            margin-bottom: 15px;
        }
        
        .valea-btn {
            background-color: #c8b5db;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 25px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .valea-btn:hover {
            background-color: #8b5fbf;
        }
        
        /* Mobile responsiveness */
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0 10px;
                border-radius: 12px;
            }
            
            .email-body {
                padding: 30px 20px;
            }
            
            .email-header {
                padding: 30px 20px;
            }
            
            .email-header h1 {
                font-size: 28px;
            }
            
            .letter-content {
                padding: 20px;
            }
            
            .attachment-box {
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Email Header -->
        <div class="email-header">
            <h1>Valea</h1>
            <p>A message from the past has arrived</p>
        </div>

        <!-- Email Body -->
        <div class="email-body">
            <!-- Message Header -->
            <div class="message-header">
                <p><strong>${senderName}</strong> sent you this on <strong>${sentDate}</strong></p>
                <div class="divider"></div>
            </div>

            <!-- Letter Content -->
            <div class="letter-content">
                <div class="letter-text">${letter}</div>
            </div>

            <!-- Signature -->
            <div class="signature">
                <p>Love,<br><strong>${senderName}</strong></p>
            </div>

            ${attachmentUrl ? `
            <!-- Attachment Section -->
            <div class="attachment-section">
                <div class="divider"></div>
                <div class="attachment-box">
                    <div class="attachment-info">
                        <div class="attachment-details">
                            <h4 style="font-size: 14px;">Attachment</h4>
                            <p style="font-size: 12px;">Click to view your attachment</p>
                        </div>
                    </div>
                    <a href="${attachmentUrl}" class="download-btn">View Attachment</a>
                </div>
            </div>
            ` : ''}

            <!-- Footer Message -->
            <div class="footer-message">
                <div class="divider"></div>
                <p>This message found its way to you at just the right time ✨</p>
            </div>
        </div>

        <!-- Back to Valea -->
        <div class="back-to-valea">
            <p>Want to send another letter to your future self?</p>
            <a href="https://valea.vercel.app" class="valea-btn">Visit Valea</a>
        </div>
    </div>
</body>
</html>
  `;
};