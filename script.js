const challenges = [
  {
    id: 1,
    title: 'Hidden Note',
    prompt: 'The developer left a welcome message somewhere you cannot see on the page. View the page source to find the passphrase.',
    placeholder: 'Enter the hidden passphrase',
    answerHash: 'eed5d1920fd340a3ed1a46027ac9546158c29249f2819c210fbcded1e7cb30ed'
  },
  {
    id: 2,
    title: 'Network Pulse',
    prompt: 'When this challenge loads, a background beacon fires. Open DevTools → Network and inspect the JSON response to find the code word.',
    placeholder: 'Code from the network ping',
    answerHash: 'cea960e958f08c21be430d6a1f6d9083fd28367cc17d1b87af6331991043cc87',
    onReveal: () => triggerNetworkPing()
  },
  {
    id: 3,
    title: 'OSINT Search',
    prompt: 'Use Google with an operator: search <code>site:nj.gov "New Jersey Cybersecurity & Communications Integration Cell" established</code>. What year was NJCCIC established?',
    placeholder: '4-digit year',
    answerHash: 'a85e9db4851f7cd3efb8db7bf69a07cfb97bc528b72785a9cff7bdfef7e2279d',
    hint: 'Search results highlight that NJCCIC launched in the mid-2010s on nj.gov pages.'
  },
  {
    id: 4,
    title: 'Header Hunt',
    prompt: 'Analyze the captured HTTP conversation. Follow the Location hint, then identify the custom header value that acts as the flag.',
    placeholder: 'Header value',
    answerHash: 'f2374abe286d300f44cdb76ecf8f3eba5e83f62e6e6f62d7c56eb2536baec126',
    extraContent: () => `
      <p>Download the capture and examine it with any text editor:</p>
      <a download="header-capture.txt" href="data:text/plain;base64,IyBDYXB0dXJlZCBIVFRQIGV4Y2hhbmdlCkdFVCAvdHJhaW5pbmcgSFRUUC8xLjEKSG9zdDogdGVhbTIubmpjY2ljClVzZXItQWdlbnQ6IEFuYWx5c3QKQXV0aG9yaXphdGlvbjogQmFzaWMgWm05eVpXNXphV002ZEhKaFkyVT0KLS0tCkhUVFAvMS4xIDMwMiBGb3VuZApMb2NhdGlvbjogL2Fzc2V0cy9yZWRpcmVjdC9zdGFydC50eHQKWC1GbGFnOiBoZWFkZXItc2lnbmFsCkNvbnRlbnQtTGVuZ3RoOiAwCg==">header-capture.txt</a>
    `,
    hint: 'Locate the custom header name starting with X- in the response section.'
  },
  {
    id: 5,
    title: 'Photo Secrets',
    prompt: 'This PNG contains descriptive metadata. Extract the Description field to reveal the hidden word.',
    placeholder: 'Metadata keyword',
    answerHash: 'c743b11d9643d06b444f94e1612671e3e7f12a29a4f49b2e265f8b6e44401369',
    extraContent: () => `
      <p>Download and analyze the image (any EXIF/metadata viewer works):</p>
      <a download="blueprint.png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAAIHRFWHREZXNjcmlwdGlvbgBwaG90by1rZXk6ZXhpZi10cmFpbKi5KIYAAAHfSURBVHic7dwxSgNBGEDh2axBRBTLWJg7KKig2FhpZ6cIniAoFp5CEETYWryJFgElkXgGFVSwFYuQxEJIoW3yfk3e182wxc9jmOk2mz05Txq+UvQA48LQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDDA0xNMTQEENDIkPfHx9c7m71l7eH+z8++L3zf0WGbnc6eSlbXqgEzoAJvjqK+kNtfTF2BkZw6LvHl5TSSnX0D3X8Y1jUW7W10T/U8aEbT6/dXm+1Ot/fudrbDpxnSCaiB0gppaLeOtpY6i/npiYrM9PlvPT+8Rk41WD9idDN57d2p1vO8+/l2U3zYmczpXR63Qida5Ay/03KiL+jx4ShIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGGBpiaIihIYaGfAF9oC3XertuFAAAAABJRU5ErkJggg==">blueprint.png</a>
    `,
    hint: 'Look for the Description field inside the metadata report.'
  },
  {
    id: 6,
    title: 'Magic Numbers',
    prompt: 'A file arrived without an extension. Inspect its first few bytes (magic number) to learn what it really is. Answer with the file type in uppercase letters.',
    placeholder: 'File type (e.g., PNG)',
    answerHash: '8f8cbb7dcf46e0bc7d53265749a6c17d116093a6ba95e442764060c76fd4a86c',
    extraContent: () => `
      <p>Download the mystery file and peek at it with a hex viewer:</p>
      <a download="mystery.bin" href="data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAY0lEQVR4nO3PQQ3AIADAQEAI6pCIwIngcVnSU9DOs+/4s6UDXjWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgNaA1oDWgfa8eAbaBGQRSAAAAAElFTkSuQmCC">mystery.bin</a>
    `,
    hint: '89 50 4E 47 is a giveaway signature for a popular image format.'
  },
  {
    id: 7,
    title: 'Cipher Wheel',
    prompt: 'Decrypt this Caesar-shifted note (shift of 13): <code>pnrfne-fbyirq</code>. Enter the decoded phrase in lowercase.',
    placeholder: 'Decoded phrase',
    answerHash: '885d06030fc0b8eb4153f10bb6cfdc27af3216051de485b3ae33de953150ce02',
    hint: 'ROT13 is its own inverse. Apply it once to reveal the answer.'
  },
  {
    id: 8,
    title: 'Stego Signal',
    prompt: 'An otherwise normal PNG might hide something after the end of the file. Download it and open it in a text viewer to uncover the appended secret.',
    placeholder: 'Hidden word',
    answerHash: '488fa5c99c7a76f99d110d7bdd05c720e05a6939eb93c5bc4374e63a1754ccd4',
    extraContent: () => `
      <p>Grab the image and inspect the raw bytes after the <code>IEND</code> chunk:</p>
      <a download="forest.png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAAeElEQVR4nO3PAQ3AIADAMEADchCG/Lv4k71VsM19z/iT9XXA2wzXGa4zXGe4znCd4TrDdYbrDNcZrjNcZ7jOcJ3hOsN1husM1xmuM1xnuM5wneE6w3WG6wzXGa4zXGe4znCd4TrDdYbrDNcZrjNcZ7jOcJ3hOsN1D63mAWh5mgdPAAAAAElFTkSuQmCCSGlkZGVuRmxhZzpzdGVnby1zbGV1dGg=">forest.png</a>
    `,
    hint: 'Open the PNG in a basic text editor—the clue is appended in plain text.'
  },
  {
    id: 9,
    title: 'Packet Peek',
    prompt: 'A short capture shows an HTTP Basic Authentication header. Decode it to reveal the flag.',
    placeholder: 'Flag from capture',
    answerHash: 'e6db465757b4c129ccc9653bf938dee0c35492035cdb918f9853eebfd49e7c2d',
    extraContent: () => `
      <p>Download the snippet and read the Authorization line:</p>
      <a download="packet.txt" href="data:text/plain;base64,RnJhbWUgNDI6IDE3OCBieXRlcyBvbiB3aXJlCkh5cGVydGV4dCBUcmFuc2ZlciBQcm90b2NvbApBdXRob3JpemF0aW9uOiBCYXNpYyBjMmx0Y0d4bExXSmhjMmxqT25CaGMzTjNiM0prCkRlY29kZWQgY3JlZGVudGlhbHMgLT4gc2ltcGxlLWJhc2ljOnBhc3N3b3JkCkZsYWcgcGllY2U6IHNpbXBsZS1jcmVkZW50aWFscwo=">packet.txt</a>
    `,
    hint: 'Basic auth is just Base64 of <code>username:password</code>.'
  },
  {
    id: 10,
    title: 'Final Layered Cipher',
    prompt: 'Final boss! Decode this string step-by-step: <code>MmYzYTI2MjUzMzJlMjUyZDZlN2IyZTIyMmYzYQ==</code>. 1) Base64 decode it. 2) Interpret the result as hex to get bytes. 3) Reverse the byte order. 4) XOR the bytes with the repeating ASCII key <code>NJCCIC</code>. Submit the final plaintext in lowercase.',
    placeholder: 'Final flag',
    answerHash: 'd86335b75066be47f80f13da108f3748bd25847ddc21035294fbc343998c87b3',
    hint: 'After reversing the bytes, use an XOR calculator with the provided key before converting to text.'
  }
];

const stateKey = 'team2NJCCICCTF';
let appState = {
  playerName: '',
  challenges: {},
  totalScore: 0
};

const elements = {
  homeScreen: document.getElementById('homeScreen'),
  startButton: document.getElementById('startButton'),
  playerNameInput: document.getElementById('playerName'),
  challengeContainer: document.getElementById('challengeContainer'),
  playerNameDisplay: document.getElementById('playerNameDisplay'),
  scoreDisplay: document.getElementById('scoreDisplay'),
  progressDisplay: document.getElementById('progressDisplay'),
  progressFill: document.getElementById('progressFill'),
  resetButton: document.getElementById('resetButton'),
  confettiCanvas: document.getElementById('confettiCanvas')
};

let confetti; // will hold confetti controller

init();

function init() {
  loadState();
  renderChallenges();
  elements.startButton.addEventListener('click', handleStart);
  elements.resetButton.addEventListener('click', handleReset);
  if (appState.playerName) {
    lockPlayerName();
    showGame();
  }
}

function loadState() {
  const saved = localStorage.getItem(stateKey);
  if (saved) {
    try {
      appState = JSON.parse(saved);
    } catch (err) {
      console.error('Failed to parse saved state', err);
      appState = createFreshState();
    }
  } else {
    appState = createFreshState();
  }
  updateHeader();
}

function createFreshState() {
  const challengeState = {};
  challenges.forEach(c => {
    challengeState[c.id] = {
      solved: false,
      hintUsed: false,
      score: 10,
      revealed: false,
      answer: ''
    };
  });
  return {
    playerName: '',
    challenges: challengeState,
    totalScore: 0
  };
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(appState));
}

function handleStart() {
  const name = elements.playerNameInput.value.trim();
  if (!name) {
    alert('Enter a player name to begin.');
    return;
  }
  appState.playerName = name;
  saveState();
  lockPlayerName();
  showGame();
}

function lockPlayerName() {
  elements.playerNameInput.value = appState.playerName;
  elements.playerNameInput.disabled = true;
  elements.startButton.disabled = true;
  elements.startButton.textContent = 'Locked';
}

function showGame() {
  elements.homeScreen.style.display = 'none';
  elements.challengeContainer.style.display = 'flex';
  updateHeader();
  updateChallengeVisibility();
}

function renderChallenges() {
  elements.challengeContainer.innerHTML = '';
  challenges.forEach(challenge => {
    const wrapper = document.createElement('section');
    wrapper.classList.add('challenge', 'card');
    wrapper.dataset.challengeId = challenge.id;

    const title = document.createElement('h2');
    title.textContent = `${challenge.id}. ${challenge.title}`;
    wrapper.appendChild(title);

    const prompt = document.createElement('p');
    prompt.innerHTML = challenge.prompt;
    wrapper.appendChild(prompt);

    if (challenge.extraContent) {
      const extra = document.createElement('div');
      extra.innerHTML = challenge.extraContent();
      wrapper.appendChild(extra);
    }

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = challenge.placeholder;
    input.autocomplete = 'off';
    input.dataset.challengeId = challenge.id;

    const submit = document.createElement('button');
    submit.className = 'primary';
    submit.textContent = 'Submit';

    const feedback = document.createElement('div');
    feedback.className = 'feedback';

    submit.addEventListener('click', () => {
      checkAnswer(challenge, input.value, feedback, wrapper);
    });

    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        checkAnswer(challenge, input.value, feedback, wrapper);
      }
    });

    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.appendChild(input);
    controls.appendChild(submit);
    wrapper.appendChild(controls);

    const challengeState = appState.challenges[challenge.id];

    if (challenge.hint) {
      const hintButton = document.createElement('button');
      hintButton.className = 'hint-button';
      hintButton.textContent = 'Need a hint? (-2 pts)';
      const hintBox = document.createElement('div');
      hintBox.className = 'hint';
      hintBox.style.display = 'none';
      hintBox.innerHTML = challenge.hint;
      hintButton.addEventListener('click', () => {
        if (!challengeState.hintUsed) {
          challengeState.hintUsed = true;
          challengeState.score = Math.max(1, challengeState.score - 2);
          hintButton.classList.add('used');
          hintButton.textContent = 'Hint used (-2 pts)';
          saveState();
          updateHeader();
        }
        hintBox.style.display = 'block';
      });
      if (challengeState.hintUsed) {
        hintButton.classList.add('used');
        hintButton.textContent = 'Hint used (-2 pts)';
        hintBox.style.display = 'block';
      }
      wrapper.appendChild(hintButton);
      wrapper.appendChild(hintBox);
    }

    wrapper.appendChild(feedback);
    elements.challengeContainer.appendChild(wrapper);
  });
}

function updateChallengeVisibility() {
  let unlockedThrough = 0;
  challenges.forEach(challenge => {
    const status = appState.challenges[challenge.id];
    if (status.solved) {
      unlockedThrough = challenge.id;
    }
  });

  challenges.forEach(challenge => {
    const wrapper = document.querySelector(`.challenge[data-challenge-id="${challenge.id}"]`);
    const status = appState.challenges[challenge.id];
    if (!wrapper) return;

    const shouldShow = challenge.id === 1 || appState.challenges[challenge.id - 1]?.solved || status.solved;
    wrapper.classList.toggle('visible', shouldShow);

    const input = wrapper.querySelector('input');
    const button = wrapper.querySelector('button.primary');
    const feedback = wrapper.querySelector('.feedback');

    if (status.solved) {
      input.value = status.answer || '';
      input.disabled = true;
      button.disabled = true;
      feedback.textContent = 'Correct!';
      feedback.classList.add('success');
    } else if (status.answer) {
      input.value = status.answer;
    }

    if (shouldShow && challenge.onReveal && !status.revealed) {
      status.revealed = true;
      challenge.onReveal();
      saveState();
    }
  });
}

async function checkAnswer(challenge, value, feedback, wrapper) {
  const rawInput = value.trim();
  const cleaned = rawInput.toLowerCase();
  if (!cleaned) {
    feedback.textContent = 'Enter an answer before submitting.';
    feedback.className = 'feedback error';
    return;
  }
  try {
    const hash = await hashString(cleaned);
    if (hash === challenge.answerHash) {
      const challengeState = appState.challenges[challenge.id];
      if (!challengeState.solved) {
        challengeState.solved = true;
        challengeState.answer = rawInput;
        const baseScore = challengeState.score;
        recalculateScore();
        feedback.textContent = `Correct! +${baseScore} pts`;
        feedback.className = 'feedback success';
        const input = wrapper.querySelector('input');
        const button = wrapper.querySelector('button.primary');
        input.disabled = true;
        button.disabled = true;
        updateChallengeVisibility();
        saveState();
        checkForCompletion();
      } else {
        feedback.textContent = 'Already solved.';
        feedback.className = 'feedback success';
      }
    } else {
      feedback.textContent = 'Not quite. Double-check your steps.';
      feedback.className = 'feedback error';
    }
  } catch (error) {
    console.error('Hashing failed', error);
    feedback.textContent = 'Something went wrong. Try again.';
    feedback.className = 'feedback error';
  }
}

function recalculateScore() {
  let total = 0;
  challenges.forEach(challenge => {
    const status = appState.challenges[challenge.id];
    if (status.solved) {
      total += status.score;
    }
  });
  appState.totalScore = total;
  updateHeader();
  saveState();
}

function updateHeader() {
  const solvedCount = challenges.filter(c => appState.challenges[c.id]?.solved).length;
  elements.playerNameDisplay.textContent = `Player: ${appState.playerName || '--'}`;
  elements.scoreDisplay.textContent = `Score: ${appState.totalScore}`;
  elements.progressDisplay.textContent = `Progress: ${solvedCount}/10`;
  const progressPercent = (solvedCount / challenges.length) * 100;
  elements.progressFill.style.width = `${progressPercent}%`;
}

function handleReset() {
  const confirmReset = confirm('Reset all progress and clear your player name?');
  if (!confirmReset) return;
  localStorage.removeItem(stateKey);
  appState = createFreshState();
  elements.playerNameInput.disabled = false;
  elements.playerNameInput.value = '';
  elements.startButton.disabled = false;
  elements.startButton.textContent = 'Start';
  elements.homeScreen.style.display = 'block';
  elements.challengeContainer.style.display = 'none';
  triggerNetworkPing.triggered = false;
  updateHeader();
  renderChallenges();
}

function checkForCompletion() {
  const allSolved = challenges.every(c => appState.challenges[c.id].solved);
  if (allSolved) {
    launchConfetti();
  }
}

async function hashString(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function triggerNetworkPing() {
  if (triggerNetworkPing.triggered) return;
  triggerNetworkPing.triggered = true;
  fetch('assets/network-hint.json', {
    headers: {
      'X-Team': 'Team2',
      'Authorization': 'Basic c2ltcGxlLWJhc2ljOnBhc3N3b3Jk'
    }
  }).catch(() => {});
}

triggerNetworkPing.triggered = false;

function launchConfetti() {
  if (!confetti) {
    confetti = createConfetti(elements.confettiCanvas);
  }
  confetti.start();
}

function createConfetti(canvas) {
  const ctx = canvas.getContext('2d');
  let pieces = [];
  let animationFrame;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  function createPieces() {
    pieces = Array.from({ length: 180 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: 6 + Math.random() * 6,
      rotation: Math.random() * 2 * Math.PI,
      speed: 2 + Math.random() * 3,
      drift: -2 + Math.random() * 4,
      color: randomColor()
    }));
  }

  function randomColor() {
    const palette = ['#38bdf8', '#818cf8', '#f472b6', '#facc15', '#4ade80'];
    return palette[Math.floor(Math.random() * palette.length)];
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(piece => {
      piece.y += piece.speed;
      piece.x += piece.drift;
      piece.rotation += 0.02;

      if (piece.y > canvas.height) {
        piece.y = -20;
        piece.x = Math.random() * canvas.width;
      }

      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
      ctx.restore();
    });
    animationFrame = requestAnimationFrame(update);
  }

  return {
    start() {
      canvas.style.display = 'block';
      createPieces();
      let duration = 0;
      const maxDuration = 4000;
      const startTime = performance.now();
      function animate(time) {
        duration = time - startTime;
        update();
        if (duration < maxDuration) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          stop();
        }
      }
      animationFrame = requestAnimationFrame(animate);
    }
  };

  function stop() {
    cancelAnimationFrame(animationFrame);
    canvas.style.display = 'none';
  }
}
