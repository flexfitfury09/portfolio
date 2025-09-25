export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
}

export const sendChatMessage = async (message: string, conversationHistory: ChatMessage[] = []): Promise<ChatResponse> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: conversationHistory,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { message: data.message };
  } catch (error) {
    console.error('Error sending chat message:', error);
    return { 
      message: "I'm sorry, I'm experiencing technical difficulties right now. Please try again later or contact Arman directly.",
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

export const generateResume = async (): Promise<{ url: string } | { error: string }> => {
  try {
    const response = await fetch('/api/generate-resume', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return { url };
  } catch (error) {
    console.error('Error generating resume:', error);
    return { error: 'Failed to generate resume. Please try again later.' };
  }
};
