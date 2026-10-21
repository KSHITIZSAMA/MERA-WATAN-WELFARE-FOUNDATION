function escapePdfText(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

export function generateDonationReceiptPDF({
  receiptNo,
  date,
  donorName,
  email,
  amount,
  purpose,
}: {
  receiptNo: string;
  date: string;
  donorName: string;
  email?: string;
  amount: number;
  purpose: string;
}): Buffer {
  const safeReceipt = escapePdfText(receiptNo);
  const safeDate = escapePdfText(date);
  const safeDonor = escapePdfText(donorName);
  const safeEmail = escapePdfText(email || "N/A");
  const safePurpose = escapePdfText(purpose);
  const safeAmount = escapePdfText(`Rs. ${amount.toLocaleString("en-IN")}/-`);

  const stream = `
1 0 0 1 0 0 cm
0.086 0.231 0.4 1 rg
20 780 555 35 re f
1 1 1 rg
BT /F2 16 Tf 35 792 Td (MERA WATAN WELFARE FOUNDATION BETUL) Tj ET
BT /F1 9 Tf 35 782 Td (Reg. No: RJ/2024/0488921 | Section 80G & 12A Tax Exempted NGO) Tj ET

0 0 0 rg
BT /F2 14 Tf 35 745 Td (OFFICIAL DONATION RECEIPT) Tj ET
0.85 0.47 0.02 RG 2 w 35 735 m 565 735 l S

0.96 0.97 0.98 rg 35 520 530 195 re f
0.8 0.85 0.9 RG 1 w 35 520 530 195 re s

0.1 0.2 0.35 rg
BT /F2 10 Tf 50 690 Td (RECEIPT NUMBER:) Tj ET
BT /F1 10 Tf 160 690 Td (${safeReceipt}) Tj ET

BT /F2 10 Tf 350 690 Td (DATE:) Tj ET
BT /F1 10 Tf 420 690 Td (${safeDate}) Tj ET

BT /F2 10 Tf 50 660 Td (DONOR NAME:) Tj ET
BT /F2 11 Tf 160 660 Td (${safeDonor}) Tj ET

BT /F2 10 Tf 50 630 Td (EMAIL ADDRESS:) Tj ET
BT /F1 10 Tf 160 630 Td (${safeEmail}) Tj ET

BT /F2 10 Tf 50 600 Td (WING / PURPOSE:) Tj ET
BT /F1 10 Tf 160 600 Td (${safePurpose}) Tj ET

0.85 0.47 0.02 rg 50 540 500 40 re f
1 1 1 rg
BT /F2 12 Tf 65 554 Td (AMOUNT CONTRIBUTED:) Tj ET
BT /F2 14 Tf 240 554 Td (${safeAmount}) Tj ET

0.2 0.25 0.3 rg
BT /F1 9 Tf 35 480 Td (Note: Contributions to Mera Watan Welfare Foundation are eligible for Tax Deduction under Section 80G) Tj ET
BT /F1 9 Tf 35 465 Td (of the Income Tax Act. Please preserve this computer-generated receipt for your tax filings.) Tj ET

0.85 0.47 0.02 RG 1 w 35 445 m 565 445 l S

0.1 0.2 0.35 rg
BT /F1 9 Tf 35 410 Td (Head Office: Betul & Neighboring Rural Belts, Madhya Pradesh, India) Tj ET
BT /F1 9 Tf 35 395 Td (Contact: +91 9797633077 | Email: raghuwanshiashok34@gmail.com) Tj ET

BT /F2 10 Tf 380 380 Td (For Mera Watan Welfare Foundation Betul) Tj ET
BT /F1 9 Tf 370 330 Td (Authorized Signatory / DFR Ashok Raghuvanshi (Retd. Indian Army)) Tj ET
`;

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj`,
    `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj`,
    `6 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj`,
  ];

  let pdf = `%PDF-1.4\n`;
  const xref: number[] = [];

  objects.forEach((obj) => {
    xref.push(pdf.length);
    pdf += obj + `\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  xref.forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(pdf, "binary");
}
