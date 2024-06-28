# Bagelbot

## About
Bagelbot is a Discord selfbot which mimics user input over HTTP POST to repeatedly schedule and send a set message in a specified Discord group or channel.

## Installation & Usage
1. Install [Violentmonkey (Reccomended)](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/) on a compatible web browser
2. Click [here](https://github.com/sketchedgrey/Bagelbot/raw/main/bagelbot.user.js) and proceed with the installation
3. Restart Discord and confirm that the Bagelbot bar appears
4. Configure parameters and toggle the Bagelbot checkbox to enable

## Parameters
| Parameter | Definition |
| --- | --- |
| Checkbox | Enable or disable Bagelbot |
| Message | Message content |
| Channel ID | ID of channel in which messages will be sent. ID can be found in the second numeric string in Discord's URL. Example: `0000000000000000000` in `discord.com/channels/@me/0000000000000000000` |
| Delay | The amount of time between sending messages in seconds |
| Floor | The minimum amount of the delay's random offset in seconds. This parameter defaults to 0 |
| Ceiling | The maximum amount of the delay's random offset in seconds. This parameter defaults to 0 |

## License
MIT License

Copyright (c) 2024 sketchedgrey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
