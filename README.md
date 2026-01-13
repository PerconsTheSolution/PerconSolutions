<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1wDrR9WtwxCJitmO-OxqVfowdJNuM7vNq

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   ```bash
   npm install
   ```

2. **Get your Gemini API Key:**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Sign in with your Google account
   - Click on "Get API Key" or "Create API Key"
   - Copy the generated API key

3. **Set up your environment:**
   - Copy the example environment file:
     ```bash
     cp .env.local.example .env.local
     ```
   - Open `.env.local` and replace `your_api_key_here` with your actual Gemini API key:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

4. Run the app:
   ```bash
   npm run dev
   ```
