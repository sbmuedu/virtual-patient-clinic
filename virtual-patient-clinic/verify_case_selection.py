# verify_case_selection.py
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            print("Navigating to http://localhost:3000...")
            await page.goto("http://localhost:3000")

            print("Waiting for case selection modal to load...")
            await page.wait_for_selector("text=Select a Patient Case", timeout=10000)
            print("Case selection modal found.")

            screenshot_path = "virtual-patient-clinic/verification_screenshot.png"
            print(f"Taking screenshot: {screenshot_path}")
            await page.screenshot(path=screenshot_path)
            print("Verification successful!")

        except Exception as e:
            print(f"An error occurred during verification: {e}")
            screenshot_path = "virtual-patient-clinic/verification_error.png"
            await page.screenshot(path=screenshot_path)
            print(f"Error screenshot saved to {screenshot_path}")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
