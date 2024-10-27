export let assistantId = "asst_CexyVLvMc2cKxxWGl11fQmIp"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
