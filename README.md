# Dusk Dunes

**Play it:** https://duskdunes.github.io  
**Source code:** https://github.com/duskdunes/duskdunes.github.io  (the game's menu links to both)

A browser-based 3D world with ten themed worlds, over thirty short games, live-generated music, positional sound, real stereoscopic 3D viewing modes, and peer-to-peer multiplayer. It is one self-contained HTML file with no build step, no accounts and no downloads, and it runs on desktop and on phones.

## Play

Open `index.html` in a modern browser (or host the folder on any static web server) and click **Start**.

| | Desktop | iPhone / touch | Game controller |
|---|---|---|---|
| Look | Mouse (click to capture) | Tilt or turn the phone, or swipe | Right stick |
| Move | `W A S D` or arrow keys | Always moving forward | Left stick |
| Run (dash) | Hold `Ctrl`, or double-tap `W` | Triple-tap | `A` |
| Jump | `Space` | Tap, or flick the phone up | `B` |
| Down: dive, swim, fly | `Shift` | Flick the phone down | `Y` |
| Fly (Zen Wander) | Double-tap `Space` to start, `Space` up, `Shift` down, double-tap again to land | Double-tap to start flying and rise; the next tap resumes walking forward; double-tap again to drop | |
| Emotes | Hold `E`, then `W` arrow, `A` thumbs down, `S` party, `D` thumbs up | n/a | D-pad up / left / down / right |
| Pause menu | `Esc` | **Menu** button | |
| Change 3D view | `M` | Pause menu | |

Jumps are high enough to land on house roofs (you slide off again).

## Cheat codes

These are deliberately not mentioned anywhere in the game. They work on a desktop keyboard, and the menus pause the game for you (other players keep playing in multiplayer).

| Keys | What it does |
|---|---|
| `F` + `L` + `Y` (hold together) | Toggle flight in any game |
| `?` (Shift + `/`) | **Become something.** The game pauses and a menu shows every creature, vehicle, scenery piece and item with a picture, plus a **Random** button. Pick one and you look like it: the camera pulls back so you can see yourself, other players see it instead of you, and your gamer tag is hidden. It is visual only: you keep your own speed, jump and abilities (a police officer has the sector but not the arrest). The models carry the real in-game effects: police show the red 48 m vision sector on the ground, helicopters hover with the same searchlight cone and ground spot, and vans have their beam. Creatures swing their arms and legs when they walk. Choose **Back to normal** to undo. |
| `/` | **Spawn something.** Same menu, but the pick appears 7 m in front of you and wanders around by itself Visual only. In multiplayer the host runs them and everyone sees them: up to 12 per player and 40 in total, and **Remove spawned** clears only your own. They vanish when you leave the game. |
| `T` + `P` | Pauses and shows the mouse. Click a point on the ground to teleport there; `Esc` cancels. Clicks line up best in the Normal 3D view. |
| Hold `J`, then hold `+` or `-` | Smoothly slide your base jump height up or down while you hold. A pop-up shows the percentage. |
| Hold `R`, then hold `+` or `-` | Smoothly slide your base walk speed up or down. (`R` on its own, tapped, still restarts the round.) |
| `I` + `N` + `V` | **Invisibility** (toggle). Creatures, zombies, statues, the forest hunters, police and search beams cannot sense or catch you, CPUs ignore you, and other players cannot see you or your gamer tag. You can still collect items. |
| `X` five times quickly | **Kill switch.** Disables every cheat code for everyone in the game (in multiplayer the host tells all players). Active cheats are switched off too, including the CCTV view. It lasts until the page is reloaded. |
| `C` + `L` + `N` | Add a mid-level (skill 5) CPU with your own name. **Anyone** can use it: players in a multiplayer game ask the host, who adds it next to them. Up to 7 CPUs; one every second. |

Jump and speed changes last until you reload the page. Holding `E` shows an on-screen emote viewer (`W` arrow, `A` thumbs down, `S` party, `D` thumbs up) that lights up the one you send.

The pause menu is where you pick the world, the game, the 3D view, effects and multiplayer. Hover (or tap) a game card to read a one-line description, and use the search box and category filter (multiplayer, single player, or a genre) to find a game quickly.

> Some browsers reserve `Ctrl+W` to close the tab. If that happens, double-tap `W` to sprint instead.

## Worlds

Each world changes the scenery, sky, lighting, music scale, footstep sound and how you move.

| World | What is different |
|---|---|
| Dusk Dunes | Downhill slopes speed you up; shooting stars |
| Coral Reef | Swim up and down (`Space` / `C`); bubbles and floating pickups |
| Moon Base | Low gravity for long leaps; Earth in the sky |
| Candy Kingdom | Speed pads give a short sugar rush |
| Haunted Moor | Lightning flashes light up the fog |
| Neon Grid | Flat synthwave plain; glowing lanes boost your speed |
| Cloud Peaks | Huge mountains; ride updraft columns |
| Ember Caverns | Lava pools slow you down; rising embers |
| Frozen Aurora | Icy ground: you slide and keep momentum; snow and aurora |
| Mushroom Jungle | Glowing mushrooms bounce you high |

## Games

- **Open world:** Treasure Island, Escape the Forest, Lost Explorer, Delivery Driver, Zombie Escape, Mountain Climber, Alien Planet, Bank Robbery Escape, Island Survival (co-operative), Mystery Village
- **Multiplayer:** Hide & Seek (hollow buildings with squeaky doors), Obstacle Race, King of the Hill, Treasure Rush, Rising Lava, Hot Tag, Team Defense, Hot Potato, Light Rush, Capture the Flag (Co-op), Capture the Flag (PvP, two teams)
- **Horror:** Statues, **Living Forest** (trees, houses and obelisks creep closer whenever you are not looking at them, slowly and from farther away, after a short grace period; dashing is disabled; if one touches you it is over)
- **Others:** Light Hunt, Hot & Cold, Safe Zone, Meteor Dodge, Stop and Go, Snake Trail, Demolition, Herding (co-operative), Zen Wander

The zombies, police, statue, villagers, sheep and meteors in the games use the same models you see in the `?` and `/` menus. In multiplayer games whoever is "it" in tag games runs 40% faster. If the host restarts a round, clients can also request a restart.

**Zen Wander** has no goals: fly freely like creative mode in Minecraft (double-tap `Space`; a single tap still jumps), float along a lazy river, swim in the ponds and wade the streams.

On-screen text is kept to what matters for play: direction arrows, villager messages, warnings and countdowns. A setting restores the full timers and counters.

## 3D viewing

Pick one **3D view** and stack any number of **effects** on top of it.

- **Views:** normal, red/cyan and optimized red/cyan anaglyph, parallel and cross-eyed side by side, Cardboard phone-headset view (with lens distortion), ChromaDepth, depth map, disparity map, random-dot and pattern autostereograms, sway parallax, double-image overlay, wipe compare.
- **Effects:** invert colors, fisheye dome, kaleidoscope, underwater ripple, tilt-shift miniature, chromatic split, toon outline, contour lines, neon depth edges, night vision, 8-bit dither, CRT scanlines.
- Side-by-side views (parallel, cross-eyed and Cardboard) crop each eye to half the screen instead of squashing the picture, so nothing is stretched. The Cardboard lens distortion is aspect-correct.
- In 3D views the on-screen text is drawn into both eyes at its natural proportions so it stays readable and fuses at a comfortable depth. The text size slider scales it.
- Depth strength can be adjusted and the eyes swapped in Settings.

Both eyes are rendered from the actual scene, so no depth estimation is involved.

## Water

Ponds, lakes and streams are carved into the terrain, so the water has real depth. You wade in the shallows and swim in deep water (slower, head at the surface; hold `Shift` to dive, with blue fog underwater). Streams and the lazy river carry you along with their current. Sliders in Settings set how many ponds and streams appear and how fast streams and the lazy river flow, and the multiplayer host's values are shared with everyone so all players see the same water. Trees, buildings and obelisks are never placed in water, and pickups float on the surface. Games that build their own arena (for example the obstacle race) skip the extra water.

## CCTV view

Pick **CCTV security cameras (CRT, night vision)** in **3D view** (or cycle to it with `M`). Twelve security cameras on poles around the map watch you in third person through the game's own night vision, retro 8-bit dither and CRT scanline effects, with a camera number and a date and time stamp. The mouse turns and tilts your character's head, not the camera. The camera cuts to the nearest pole as you walk, and the `Left` / `Right` arrows switch by hand. Switching back to another view restores the effects you had.

## Accessories and pets

The **Accessories** menu has a live preview that turns all the way around and about 160 choices across hats, glasses, face paint, moustaches and beards, outfits, shoes, back items, neckwear and auras, plus colours, size and a pet that follows you (cat, dog, rabbit, fish, parrot, monkey, turtle or chicken). **Fog Cape** (Back list) is a black mistcloak made of layered translucent mist, cloth tassels and drifting wisps that ripple in the wind, more at the hem than at the shoulders. Figures (you, other players, CPUs, zombies, police, villagers, sheep and the preview) swing their arms and legs as they walk, and boots and shoes move with the legs. Other players see your look and your pet in multiplayer.

## CPU players

The **CPUs** menu adds 0 to 7 computer players with auto-generated gamer names. Rename any of them, re-roll a name, and set each one's skill from 1 to 10. CPUs play the multiplayer games (collecting lights, fighting for the hill, hiding and seeking, racing, defending, and so on). In multiplayer the host controls CPUs and they appear to everyone.

## Sound

Everything is synthesized live with the Web Audio API; there are no audio files.

- **Music:** stereo, generated from the world (scale, tempo, instruments) and the game (calm, explore, mystery, tense, action or party mood).
- **Positional sound:** zombies growl, police sirens sweep past, boulders rumble, meteors whistle, sheep bleat, lights chime, and other players' footsteps are heard from where they actually are, using HRTF 3D audio. Headphones work best.
- **Effects:** pickups, jumps, landings, hits, splashes and swimming strokes, win or lose jingles, plus quiet stereo footsteps that change with each world's ground. Streams burble in 3D as you pass them.
- Music and sound effects have independent volume sliders. On iPhone the ring/silent switch can mute web audio.

## Multiplayer

Peer-to-peer over WebRTC using [PeerJS](https://peerjs.com). One player chooses **Host** and shares the four-letter code; others enter it and choose **Join**.

- The host runs the shared game state, so everyone sees the same objects, scores and results. Players appear as named avatars, bump into each other, and can be heard in 3D.
- The right to choose the next world and game rotates between players every round.
- Modes with real interaction include tag, bomb passing, contested hills, stealing treasure, a rising-lava race and hide and seek with a blind seeker.
- Matchmaking uses the free public PeerJS broker. Strict corporate networks may need a TURN server.

## Settings

Music and sound-effect volume, text size, phone mode, 3D depth, swap eyes, text in both eyes, full HUD text, and population sliders for **trees**, **buildings**, **obelisks**, **ponds and lakes**, **flowing streams** and **water speed**.

## Offline

Once the page has loaded over https, a service worker (`sw.js`) saves the game on your device, so it starts and plays with no connection (the menu shows **Offline: ready**). three.js and PeerJS are bundled into `index.html`, so nothing is fetched from a CDN. Only multiplayer needs the internet. Updates arrive automatically the next time you are online.

## Account (optional)

At the bottom of the menu, **Account** lets you sign up or log in to keep your settings: sliders, checkboxes, 3D view and effects, accessories, pet and CPUs. Everything saves automatically while you are signed in, and logging in restores it. Playing without an account works as before.

**How passwords and settings are protected.** Your password is never stored or sent. Your browser turns it into two secrets with PBKDF2-SHA-256 (600,000 rounds, salted per username): a login value and an encryption key. Only a salted SHA-256 of the login value is kept as the verifier, and your settings are encrypted with AES-GCM using the key, so storage (and the sync server, if you use one) holds nothing readable. Eight wrong guesses lock a server account for 15 minutes. There is no password recovery, because nobody else holds the key. Other features: a password-strength hint, show password, **Keep me signed in on this device**, **Change password** and **Delete account**.

**Using your account everywhere.** GitHub Pages only serves files, so "everywhere" needs a tiny server. `sync/` contains one (a free Cloudflare Worker, about five minutes to deploy; see `sync/README.md`). Paste its address into **Account > Sync across devices** (or set `DD_SYNC_URL` in the source) and the same login works on every device. Without a server, accounts stay on the device they were made on, and **Export / Import account file** moves an encrypted copy between devices.

## Install on a phone or desktop

- **iPhone:** in Safari choose Share, then Add to Home Screen. It opens full screen with the dusk icon.
- **Desktop:** the page ships with a rounded favicon and a web app manifest, so Chromium browsers offer to install it.

## Hosting

The repository root is the whole site. Any static host works. A GitHub Pages workflow is included (`.github/workflows/pages.yml`): set Pages to use GitHub Actions and push to `main`. Motion sensors (iPhone tilt) and the clipboard-free features need HTTPS, which Pages provides.

## Built with

- [three.js](https://threejs.org) r128 for rendering
- Web Audio API for music, effects and positional sound
- [PeerJS](https://peerjs.com) for multiplayer
- Plain HTML, CSS and JavaScript in a single file

## Browser support

Current Chrome, Edge, Firefox and Safari (desktop and iOS 14.5+ for device tilt). WebGL is required. Wake Lock keeps the screen on during play where the browser supports it (iOS 16.4+).

## Project layout

```
index.html              the entire game (three.js and PeerJS bundled in)
sw.js                   service worker for offline play
logo.svg                the logo
manifest.webmanifest    install metadata
icon-180.png            Apple touch icon (square)
icon-192.png, icon-512.png   rounded install icons
.github/workflows/      GitHub Pages deployment
```
