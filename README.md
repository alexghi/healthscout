# HealthScout Assistant

How to start the app
![OpenAI Assistants API Quickstart](https://github.com/openai/openai-assistants-quickstart/assets/27232/755e85e9-3ea4-421f-b202-3b0c435ea270)

## Quickstart
### 1. Install dependencies

```shell
npm i
```

### 2. Set keys in `.env` file

```shell
export OPENAI_API_KEY="sk_..."
export OPENAI_ASSISTANT_ID="asst_..."
```

The assistant ID is the assistant we created and can be found once created in the OpenAI platform.

### 4. Run

```shell
npm run start
```

### 5. Navigate to [http://localhost:3000](http://localhost:3000).


## Overview

### Smart Referral Matching

AI-powered matching engine: Uses machine learning to match patients with the most suitable specialists based on:

- **Diagnosis**: Text-mining data from uploaded medical records (WIP).

- **Specialist availability**: Real-time availability updates from specialists.

- **Location**: Geographic preferences or restrictions, particularly helpful in rural/underserved areas.

- **Urgency**: Identifies high-risk cases needing faster care, routing them to the top of referral lists.

- **Referral prioritization**: Automates prioritization for cases that need immediate specialist intervention.

### Cost Estimation


- **Private medical system cost calculator**: Allows patients to receive a preliminary cost estimate for referrals to private healthcare services.

- **Insurance compatibility check**: Assesses whether suggested referrals are covered under the patient’s insurance plan.
