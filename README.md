# HealthScout Assistant

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
  
### User Flows
#### Patient Experience

- Patient registers, completes their profile, and uploads relevant medical records. (optional to some point)
- Receives a recommended referral pathway for their condition and schedules an appointment with a specialist. 
- Tracks referral progress and receives notifications on email, phone etc for upcoming appointments, reminders, and follow-up recommendations.

### Upcoming Challenges
**Data privacy and security**: Ensuring compliance with international data protection standards, especially for sensitive patient data.

**Model accuracy**: Building and continuously improving the AI model to accurately match patients with specialists.

**Integration with existing systems**: Ensuring seamless data flow and compatibility with electronic health record (EHR) systems.


Goal here is to reduce administrative loads, and make specialist care more accessible for chronic patients, ultimately improving health outcomes across the system.
