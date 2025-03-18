import "dotenv/config";

const { SMTP_HOST, SMTP_USER, SMTP_PASS, EMAIL_RECEIVER } = process.env;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_RECEIVER) {
  throw new Error("Missing SMTP credentials in .env file");
}

export { SMTP_HOST, SMTP_USER, SMTP_PASS, EMAIL_RECEIVER };
