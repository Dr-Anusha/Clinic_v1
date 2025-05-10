import { test, expect } from '@playwright/test';

test('Claim Sepolia ETH from Google Faucet', async ({ page }) => {
  await page.goto('https://cloud.google.com/application/web3/faucet/ethereum/sepolia');
  await page.getByRole('textbox', { name: 'Wallet address or ENS name' }).fill('0x14EC66a4118a029a80D7BaBF88403d9a6420CD92');
  await page.getByRole('button', { name: 'Receive 0.05 Sepolia ETH' }).click();
  await page.waitForTimeout(5000);
});
