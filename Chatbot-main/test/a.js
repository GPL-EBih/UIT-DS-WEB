const dialogflow = require('dialogflow');
const dotenv = require('dotenv');
const readline = require('readline');

// Load environment variables from .env file
dotenv.config();

// Set up Dialogflow credentials and project ID
const credentialsPath = process.env.CREDENTIALS_PATH || './Chatbot-main/test-9api-fba6804874be.json';
const projectId = process.env.PROJECT_ID || 'test-9api';

// Create a new session client
const sessionClient = new dialogflow.SessionsClient({
  projectId: projectId,
  keyFilename: credentialsPath,
});

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to send a query to Dialogflow
async function sendQuery(query) {
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, 'unique-session-id');
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: 'en',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    console.log('Response:', result.fulfillmentText);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to get user input and send queries to Dialogflow
function getUserInput() {
  rl.question('User: ', (query) => {
    if (query.toLowerCase() === 'quit') {
      rl.close();
      return;
    }

    sendQuery(query).then(() => {
      getUserInput();
    });
  });
}

// Start the conversation
getUserInput();