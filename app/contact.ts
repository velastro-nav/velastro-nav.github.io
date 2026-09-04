export type ContactMessage = {
  topic: string;
  name: string;
  organization: string;
  email: string;
  message: string;
};

// Encode all visitor-controlled content inside the mailto query values.
export function buildContactMailto(
  recipient: string,
  input: ContactMessage,
): string {
  const subject = `VELASTRO — ${input.topic}`;
  const body = [
    `Enquiry: ${input.topic}`,
    `Name: ${input.name.trim()}`,
    `Organization: ${input.organization.trim()}`,
    `Email: ${input.email.trim()}`,
    "",
    input.message.trim(),
  ].join("\r\n");
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
