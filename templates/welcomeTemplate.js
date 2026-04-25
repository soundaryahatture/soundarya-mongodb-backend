const welcomeTemplate = (name) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome Email</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">

    <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; margin-top:20px; border-radius:8px; overflow:hidden;">
    
    <!-- Header -->
    <tr>
        <td style="background:#28a745; padding:20px; text-align:center; color:#ffffff; font-size:24px; font-weight:bold;">
        🎉 Welcome to LeadSoft
        </td>
    </tr>

    <!-- Body -->
    <tr>
        <td style="padding:30px; color:#333;">
        
        <h2 style="margin-top:0;">Hi ${name},</h2>

        <p style="font-size:16px; line-height:1.6;">
            Your account has been successfully created. We're excited to have you onboard!
        </p>

        <p style="font-size:16px; line-height:1.6;">
            Start your journey towards placement success with our structured programs, coding practice, and live sessions.
        </p>

        <!-- Button -->
        <div style="text-align:center; margin-top:30px;">
            <a href="https://yourwebsite.com" 
                style="background:#28a745; color:#ffffff; padding:12px 25px; text-decoration:none; border-radius:5px; font-size:16px; display:inline-block;">
                🚀 Get Started
            </a>
        </div>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="background:#f4f4f4; padding:15px; text-align:center; font-size:12px; color:#777;">
        © 2026 LeadSoft. All rights reserved.
        </td>
    </tr>

    </table>

</body>
</html>
`;
};

module.exports = welcomeTemplate;