import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Create a new assistant
export async function POST() {
  const assistant = await openai.beta.assistants.create({
    instructions:
      "You are a helpful assistant that will search for doctors and make an appoinment for a pactient",
    name: "Quickstart Assistant",
    model: "gpt-4o",
    tools: [
      // {
      //   type: "function",
      //   function: {
      //     name: "get_weather",
      //     description: "Determine weather in my location",
      //     parameters: {
      //       type: "object",
      //       properties: {
      //         location: {
      //           type: "string",
      //           description: "The city and state e.g. San Francisco, CA",
      //         },
      //         unit: {
      //           type: "string",
      //           enum: ["c", "f"],
      //         },
      //       },
      //       required: ["location"],
      //     },
      //   },
      // },
      {
        type: "function",
        function: {
          name: "get_doctors",
          description: "Get doctors list",
          // parameters: {
          //   type: "object",
          //   properties: {
          //     location: {
          //       type: "string",
          //       description: "The city and state e.g. San Francisco, CA",
          //     },
          //     unit: {
          //       type: "string",
          //       enum: ["c", "f"],
          //     },
          //   },
          //   required: ["location"],
          // },
        },
      },
    ],
  });
  return Response.json({ assistantId: assistant.id });
}
