import { test, expect } from '@playwright/test';

test('Claim Sepolia ETH from Google Faucet', async ({ page }) => {
  // Navigate to the faucet page
  await page.goto('https://cloud.google.com/application/web3/faucet/ethereum/sepolia');

  // Optional: wait for the input to be ready (good for stability)
  await page.getByRole('textbox', { name: 'Wallet address or ENS name' }).waitFor();

  // Fill in the wallet address
  await page.getByRole('textbox', { name: 'Wallet address or ENS name' }).fill('0x14EC66a4118a029a80D7BaBF88403d9a6420CD92');

  // Click the Claim button
  await page.getByRole('button', { name: 'Receive 0.05 Sepolia ETH' }).click();

  // Optionally wait for a success message or confirmation
  await page.waitForTimeout(5000); // or wait for a toast/notification

  // Optionally: assert success (if element appears)
  // const success = await page.locator('text=Transaction sent').isVisible();
  // expect(success).toBeTruthy();
});
