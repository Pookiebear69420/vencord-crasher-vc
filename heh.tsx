import { ipcRenderer } from 'electron';

ipcRenderer.on('discord-call', () => {
  // Simulate a crash by throwing an error
  throw new Error('Discord call crash simulation');
});

ipcRenderer.on('screenshare-start', () => {
  // Trigger the crash when screensharing starts
  ipcRenderer.emit('discord-call');
});
