// ==UserScript==
// @name         Bagelbot
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Discord automatic message sender
// @author       sketchedgrey
// @match        https://*.discord.com/app
// @match        https://*.discord.com/channels/*
// @match        https://*.discord.com/login
// @grant        none
// @icon         https://raw.githubusercontent.com/sketchedgrey/Bagelbot/main/icon.png
// @downloadURL  https://github.com/sketchedgrey/Bagelbot/raw/main/bagelbot.user.js
// @updateURL    https://github.com/sketchedgrey/Bagelbot/raw/main/bagelbot.user.js
// ==/UserScript==

(function() {
	'use strict';

	let token = localStorage.getItem("token").replace(/['"]+/g, '');
	let intervalId = null;
	let delay = 0;
	let offset = 0;

	function addElements() {
		const toolbar = document.querySelector('[class*="toolbar_e44302"]');
		if (!toolbar) {
			console.log('Toolbar not found');
			return;
		}

		if (document.getElementById('checkbox')) {
			return;
		}

		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.alignItems = 'center';

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'checkbox';
		checkbox.style.marginRight = '5px';
		checkbox.disabled = true; // Initially disabled

		const textNode = document.createTextNode('Bagelbot:');
		container.appendChild(checkbox);
		container.appendChild(textNode);

		const inputs = [];

		const inputConfigs = [{
				name: 'Message',
				defaultValue: ''
			},
			{
				name: 'Channel ID',
				defaultValue: ''
			},
			{
				name: 'Delay',
				defaultValue: ''
			},
			{
				name: 'Floor',
				defaultValue: '0'
			},
			{
				name: 'Ceiling',
				defaultValue: '0'
			},
		];

		inputConfigs.forEach(config => {
			const input = document.createElement('input');
			input.type = 'text';
			input.id = config.name.replace(/\s+/g, '-').toLowerCase();
			input.placeholder = config.name;
			input.value = config.defaultValue;
			input.style.width = '80px'; // Adjust width as needed
			input.style.marginLeft = '5px';
			inputs.push(input);
			container.appendChild(input);
		});

		toolbar.prepend(container);

		function checkInputs() {
			const allFilled = inputs.every(input => input.value.trim() !== '');
			checkbox.disabled = !allFilled;
		}

		inputs.forEach(input => {
			input.addEventListener('input', checkInputs);
		});

		checkbox.addEventListener('change', function() {
			if (this.checked) {
				startLoop();
			} else {
				stopLoop();
			}
		});

		console.log('Elements added');
	}

	function startLoop() {
		try {
			if (intervalId === null) {
				var messageObject = document.getElementById('message');
				var channelObject = document.getElementById('channel-id');
				var delayObject = document.getElementById('delay');
				var floorObject = document.getElementById('floor');
				var ceilingObject = document.getElementById('ceiling');

				const messageValue = messageObject.value;
				const channelValue = channelObject.value;
				const delayValue = delayObject.value * 1000;
				const floorValue = floorObject.value * 1000;
				const ceilingValue = ceilingObject.value * 1000;

				offset = (Math.random() * (ceilingValue - floorValue) + floorValue);
				delay = delayValue + offset;

				messageObject.disabled = true;
				channelObject.disabled = true;
				delayObject.disabled = true;
				floorObject.disabled = true;
				ceilingObject.disabled = true;

				intervalId = setInterval(() => {
					console.info("Sending '" + messageValue + "' from " + token + " to '" + channelValue + "' on " + Date().toLocaleString() + "in honor of Baron von Bagelbeard the Burnt...");
					message(messageValue, token, channelValue)
				}, delay);

				console.log(`Bagelbot started`);
			}
		} catch (error) {
			console.error(error);
			const checkboxObject = document.getElementById('checkbox');
			if (checkboxObject) {
				checkboxObject.checked = false;
			}
		}
	}

	function stopLoop() {
		var messageObject = document.getElementById('message');
		var channelObject = document.getElementById('channel-id');
		var delayObject = document.getElementById('delay');
		var floorObject = document.getElementById('floor');
		var ceilingObject = document.getElementById('ceiling');

		if (intervalId !== null) {
			clearInterval(intervalId);
			intervalId = null;
			messageObject.disabled = false;
			channelObject.disabled = false;
			delayObject.disabled = false;
			floorObject.disabled = false;
			ceilingObject.disabled = false;
			console.log('Bagelbot stopped');
		}
	}

	function message(message, token, channel) {
		const nonce = Math.floor(Math.random() * 9000000000000000000) + 1000000000000000000;

		const url = `https://discord.com/api/v9/channels/${channel}/messages`;

		const data = {
			content: message,
			flags: 0,
			mobile_network_type: "unknown"
			nonce: nonce.toString(),
			tts: false
		};

		const requestOptions = {
			method: 'POST',
			headers: {
				'Authorization': token,
				'Content-Type': 'application/json'
				'Host': 'discord.com'
				'Origin': 'https://discord.com'
				'Priority:u=1'
			},
			body: JSON.stringify(data)
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log('Message sent:', data);
			})
			.catch(error => {
				console.error('Error sending message:', error);
			});
	}

	window.addEventListener('load', () => {
		addElements();

		const observer = new MutationObserver(() => {
			addElements();
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});

})();
