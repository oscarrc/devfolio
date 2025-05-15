import { atom } from 'nanostores';

// Store to track command typing state
export const isCommandComplete = atom(false);

// Store to track which command was typed
export const currentCommand = atom('');

// Function to reset state
export function resetCommand() {
  isCommandComplete.set(false);
  currentCommand.set('');
}

// Function to set command as complete
export function completeCommand(command: string) {
  currentCommand.set(command);
  isCommandComplete.set(true);
}