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

function showFirstTimeConfirmation() {
  const confirmation = document.getElementById('first-time-warning');
  if (confirmation) {
    show(confirmation);
  }
}

function hideFirstTimeConfirmation() {
  const confirmation = document.getElementById('first-time-warning');
  if (confirmation) {
    hide(confirmation);
  }
}

function showListAllowedDirsConfirmation() {
  const confirmation = document.getElementById('list-allowed-directories');
  if (confirmation) {
    show(confirmation);
  }
}

function hideListAllowedDirsConfirmation() {
  const confirmation = document.getElementById('list-allowed-directories') as HTMLDialogElement;
  if (confirmation) {
    hide(confirmation);
  }
}

const code = `{}`;
</script>

<template>
  <div class="theme-toggle">
    <vscode-checkbox label="Toggle theme" id="theme-toggle" :checked="isDarkTheme"
      @change="toggleTheme"></vscode-checkbox>
  </div>
  <details class="proposed-changes">
    <summary>Proposed Changes</summary>
    <ol>
      <li>Change checkbox style to match checkboxes from Settings page</li>
      <ul>
        <li>Goal: Reduce visual noise and better match editor theming</li>
        <li>Goal: Let's the color of server contribution source / server state text stand out</li>
      </ul>
      <li>Remove icons and indent tool list items</li>
      <ul>
        <li>Goal: Reduce visual noise</li>
        <li>Goal: Improve the ability to distinguish servers and tools via stronger visual hierarchy</li>
      </ul>
      <li>Prefix server names with "MCP Server:"</li>
      <ul>
        <li>Note: Also demoed "MCP Extension:" – might be the wrong term but the idea is that there can be variations on
          the prefix name used</li>
        <li>Goal: Provide extra information to distinguish between servers and tools</li>
        <li>Goal: Reduce density of information on the right side of server list items</li>
      </ul>
      <li>Prefix all MCP contribution sources with "From"</li>
      <ul>
        <li>Goal: Makes it more clear that a server is *coming from* somewhere</li>
        <li>Example: "Claude Desktop" vs "From Claude Desktop"</li>
        <li>Bonus: Improves visual consistency / mental parse-ability of contribution sources text</li>
      </ul>
      <li>Suggestion: Add a contribution source label and server status to GitHub Copilot Chat server</li>
      <ul>
        <li>Goal: Improves consistency across all MCP contribution sources copy</li>
        <li>Note: "Built In" might be the wrong term – consider revising for clarity/accuracy</li>
      </ul>
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
        <vscode-icon name="warning"></vscode-icon>The <code class="snippet">filesystem</code> MCP Server is about to be
        used for the first time.
      </p>
      <p>
        Please carefully review any requested actions. Note that MCP Servers or malicious conversation content may
        attempt
        to misuse 'Code - Insiders' through tools.
      </p>
      <div style="display: flex; gap: 8px; margin-top: 8px;">
        <vscode-button @click="showListAllowedDirsConfirmation">Continue</vscode-button>
        <vscode-button @click="hideFirstTimeConfirmation" secondary>Cancel</vscode-button>
      </div>
    </ToolConfirmation>
    <ToolConfirmation :id="'list-allowed-directories'">
      <details class="tool-details">
        <summary>Run <code class="snippet">list_allowed_directories</code></summary>
        <div class="tool-confirmation__content">
          <p>This tool is from <code class="snippet">filesystem</code> (MCP Server).</p>
          <p>
            Returns the list of directories that this server is allowed to access. Use this to understand which
            directories are available before trying to access files.
          </p>
          <CodeBlock lang='typescript' :code="code" :theme="{
            light: 'light-plus',
            dark: 'dark-plus'
          }"></CodeBlock>
          <p>
            <vscode-icon name="info"></vscode-icon> Please carefully review the requested action.
          </p>
        </div>
      </details>
      <div style="display: flex; gap: 8px; margin-top: 8px;">
        <vscode-button>Continue</vscode-button>
        <vscode-button @click="hideListAllowedDirsConfirmation" secondary>Cancel</vscode-button>
      </div>
    </ToolConfirmation>
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