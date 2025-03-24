<script setup lang="ts">
import { ref, onMounted } from 'vue';
import "@vscode-elements/elements/dist/vscode-button/index.js";
import "@vscode-elements/elements/dist/vscode-checkbox/index.js";
import "@vscode-elements/elements/dist/vscode-textfield/index.js";
import "@vscode-elements/elements/dist/vscode-icon/index.js";
import ToolConfirmation from './components/ToolConfirmation.vue';
import CodeBlock from './components/CodeBlock.vue';
import Message from './components/Message.vue';
import Chat from './components/Chat.vue';
import ChatDetails from './components/ChatDetails.vue';

const isDarkTheme = ref(true);

function toggleTheme(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  isDarkTheme.value = checkbox.checked;
  document.documentElement.classList.toggle('light-theme', !isDarkTheme.value);
  document.documentElement.classList.toggle('dark-theme', isDarkTheme.value);
}

onMounted(() => {
  // Set initial theme
  document.documentElement.classList.add('dark-theme');
});

function show(element: HTMLElement) {
  element.style.display = 'flex';
}

function hide(element: HTMLElement) {
  element.style.display = 'none';
}

function showTodo(element: HTMLElement, message: string) {
  const p = document.createElement('p');
  p.textContent = message;
  element.insertAdjacentElement('afterend', p);
}

function showFirstTimeConfirmation() {
  const confirmation = document.getElementById('first-time-warning');
  if (confirmation) {
    show(confirmation);
  }
}

function hideFirstTimeConfirmation() {
  const confirmation = document.getElementById('first-time-warning');
  if (confirmation) {
    showTodo(confirmation, '[TODO: Server Usage Denial UI]');
    hide(confirmation);
  }
}

function showListAllowedDirsConfirmation() {
  const confirmation = document.getElementById('list-allowed-directories');
  if (confirmation) {
    show(confirmation);
  }
  const firstTimeConfirmation = document.getElementById('first-time-warning');
  if (firstTimeConfirmation) {
    if (firstTimeConfirmation.style.display === 'flex') {
      const toolExecuted = document.getElementById('first-time-confirm');
      if (toolExecuted) {
        show(toolExecuted);
      }
      hide(firstTimeConfirmation);
    }
  }
}

function hideListAllowedDirsConfirmation() {
  const confirmation = document.getElementById('list-allowed-directories') as HTMLDialogElement;
  if (confirmation) {
    showTodo(confirmation, '[TODO: Tool Cancelled UI]');
    hide(confirmation);
  }
}

function showListDirsConfirmation() {
  const confirmation = document.getElementById('list-allowed-directories');
  if (confirmation) {
    const toolExecuted = document.getElementById('list-allowed-directories-confirm');

    if (toolExecuted) {
      show(toolExecuted);
    }
    hide(confirmation);
  }
}

const listAllowedInput = `{}`;
const listAllowedOutput = `{}

Allowed directories:
/Users/hawk/Desktop
/Users/hawk/Downloads`;
</script>

<template>
  <div class="theme-toggle">
    <vscode-checkbox label="Toggle theme" id="theme-toggle" :checked="isDarkTheme"
      @change="toggleTheme"></vscode-checkbox>
  </div>
  <details class="proposed-changes">
    <summary>Proposed Changes</summary>
    <ol>
      <li>Add a confirmation for the first time a new MCP server is used.</li>
      <ul>
        <li>Goal: Make it *very* clear that a new MCP server is about to be used and get explicit permission to move
          forward.</li>
        <li>Goal: Prominently display the security implications of using the MCP server early.</li>
        <li>Bonus: Showing the fully security warning early means we can clean up individual tool call confirmations.
        </li>
      </ul>
      <li>Run tool confirmation: Prominently display source server.</li>
      <ul>
        <li>Goal: Make it clear which server the tool is coming from. Previously it was easy to miss.</li>
      </ul>
      <li>Run tool confirmation: Explicitly label tool input.</li>
      <ul>
        <li>Goal: Clearly indicate that included code snippets represent the tool input.</li>
      </ul>
      <li>Run tool confirmation: Clean up security warning copy.</li>
      <ul>
        <li>Since we moved security language to the initial confirmation dialog, we can streamline the language used in
          subsequent confirmations.</li>
      </ul>
      <li>TODO: More to come... this demo is still WIP</li>
    </ol>
  </details>
  <section class="chat-thread">
    <Message>
      <div style="display: flex; gap: 8px; align-items: center;">
        <span
          style="display: block; width: 30px; height: 30px; background-color: var(--vscode-descriptionForeground); border-radius: 50%;"></span>
        <p style="font-weight: bold; font-size: 1.1rem;">hawkticehurst</p>
      </div>
      <p>Can you tell me what files are in my desktop folder?</p>
    </Message>
    <Message>
      <p style="font-weight: bold; font-size: 1.1rem;">GitHub Copilot</p>
      <p>Let me help you check the contents of your desktop folder. I'll first check which directories are allowed and
        then list the contents of the desktop folder if it's accessible.</p>
    </Message>
    <ToolConfirmation :id="'first-time-warning'">
      <p class="tool-confirmation-first-time-title">
        <vscode-icon name="warning"></vscode-icon>The <code class="snippet">filesystem</code> MCP server is being
        used for the first time.
      </p>
      <p>
        Do you trust "filesystem"? Executing its tools may pose risks. Proceed only if you trust the server.
      </p>
      <div style="display: flex; gap: 8px; margin-top: 8px;">
        <vscode-button @click="showListAllowedDirsConfirmation">Continue</vscode-button>
        <vscode-button @click="hideFirstTimeConfirmation" secondary>Cancel</vscode-button>
      </div>
    </ToolConfirmation>
    <ChatDetails :id="'first-time-confirm'" :toggleable="false">
      <p class="tool-executed-title">
        <vscode-icon name="check" style="color: var(--vscode-debugIcon-startForeground);"></vscode-icon> Confirmed
        permission to use the <code class="snippet">filesystem</code> MCP server
      </p>
    </ChatDetails>
    <ChatDetails :id="'list-allowed-directories'">
      <p class="tool-executed-title">
        Run <code class="snippet">list_allowed_directories</code>
      </p>
      <template #content>
        <p>
          Input:
        </p>
        <CodeBlock lang='json' :code="listAllowedInput" :theme="{
          light: 'light-plus',
          dark: 'dark-plus'
        }"></CodeBlock>
        <p>
          <vscode-icon name="info"></vscode-icon> Carefully review the proposed action and input.
        </p>
        <div class="tool-information">
          <p>This tool is from the <a href="#">filesystem</a> MCP server.</p>
          <p>
            Returns the list of directories that this server is allowed to access. Use this to understand which
            directories are available before trying to access files.
          </p>
        </div>
      </template>
      <template #footer>
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <vscode-button @click="showListDirsConfirmation">Continue</vscode-button>
          <vscode-button @click="hideListAllowedDirsConfirmation" secondary>Cancel</vscode-button>
        </div>
      </template>
    </ChatDetails>
    <ChatDetails :id="'list-allowed-directories-confirm'">
      <p class="tool-executed-title">
        <vscode-icon name="check" style="color: var(--vscode-debugIcon-startForeground);"></vscode-icon> Ran <code
          class="snippet">list_allowed_directories</code>
      </p>
      <template #content>
        <p>
          Input:
        </p>
        <CodeBlock lang='json' :code="listAllowedInput" :theme="{
          light: 'light-plus',
          dark: 'dark-plus'
        }"></CodeBlock>
        <p>
          Output:
        </p>
        <CodeBlock lang='json' :code="listAllowedOutput" :theme="{
          light: 'light-plus',
          dark: 'dark-plus'
        }"></CodeBlock>
        <div class="tool-information">
          <p>This tool is from the <a href="#">filesystem</a> MCP server.</p>
          <p>
            Returns the list of directories that this server is allowed to access. Use this to understand which
            directories are available before trying to access files.
          </p>
        </div>
      </template>
    </ChatDetails>
    <!-- <Message>
      <p>I see that I actually do have permission to access your Desktop folder. Let me check its contents for you:</p>
    </Message> -->
    <Chat>
      <vscode-textfield value="I'm a fake prompt. Click submit."></vscode-textfield>
      <vscode-button @click="showFirstTimeConfirmation">Submit (first timer)</vscode-button>
      <vscode-button @click="showListAllowedDirsConfirmation">Submit</vscode-button>
    </Chat>
  </section>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 500;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  user-select: none;
}

.theme-toggle label {
  cursor: pointer;
}

details.proposed-changes {
  position: absolute;
  top: 20px;
  left: 20px;
  max-width: 800px;
  background: var(--vscode-editor-background);
  border: solid 1px var(--vscode-checkbox-border);
  padding: 10px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  z-index: 1000;
}

details.proposed-changes summary {
  cursor: pointer;
  user-select: none;
  font-weight: bold;
}

details.proposed-changes ul {
  padding-left: 20px;
}

details.proposed-changes ul li,
details.proposed-changes ol li {
  margin-bottom: 2px;
}

details.proposed-changes ul li ul {
  list-style: disc;
  padding-left: 20px;
}

details.proposed-changes ul li ul li {
  margin-bottom: 0;
}

.chat-thread {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 575px;
  gap: 2rem;
  margin-top: 40px;
  overflow: scroll;
  height: 100vh;
}
</style>