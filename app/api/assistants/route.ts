import { openai } from "@/app/openai";

export const runtime = "nodejs";
export async function POST() {
  const assistant = await openai.beta.assistants.create({
    instructions:
      "You are a helpful assistant that will search for doctors and make an appointment for a patient. You can provide a list of doctors and submit an appointment for the patient.",
    name: "Doctor Appointment Assistant",
    model: "gpt-4o",
    tools: [
      {
        type: "function",
        function: {
          name: "appointment_submitter",
          description: "Submit an appointment for the patient based on the provided parameters. Make sure to include the patient's name and email, the date of the appointment, the time of the appointment, and the doctor's name.",
          parameters: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    description: 'The name of the patient'
                },
                email: {
                    type: 'string',
                    description: 'The email of the patient'
                },
                date: {
                    type: 'string',
                    description: 'The date of the appointment'
                },
                time: {
                    type: 'string',
                    description: 'The time of the appointment'
                },
                doctor: {
                    type: 'string',
                    description: 'The name of the doctor'
                },
                phoneNumber: {
                    type: 'string',
                    description: 'The phone number of the patient'
                }
            },
            required: ['name', 'date', 'time', 'doctor', 'email']
          }
        }
      },
      {
        type: "function",
        function: {
          name: "get_doctors",
          description: "Get doctors list",
        },
      },
    ],
  });
  return Response.json({ assistantId: assistant.id });
}
