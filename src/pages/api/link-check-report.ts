import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'fs/promises';
import { join } from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const reportPath = join(process.cwd(), 'link-check-report.json');
    const reportContent = await readFile(reportPath, 'utf-8');
    const report = JSON.parse(reportContent);

    res.status(200).json(report);
  } catch (error) {
    console.error('Error reading link check report:', error);
    res.status(500).json({ message: 'Error reading link check report' });
  }
} 