# GOLDHOUR — Sunset Terminal

[![make.fun · best-game-01](https://make.fun/badge/best-game-01.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![rank](https://make.fun/badge/best-game-01/Permana61/goldhour-sunset-terminal/rank.svg)](https://make.fun/bounty/best-game-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![reward](https://make.fun/badge/best-game-01/Permana61/goldhour-sunset-terminal/reward.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)

A round-based tactical FPS in three.js, Counter-Strike-style, never a copy —
built for make.fun's "Make the best game" bounty. **5v5** — you plus 4
Solstice bots against 5 Umbra bots, 10 players on the field. Two teams
(Solstice attacks, Umbra defends) fight over a container terminal at
sunset, short rounds won by eliminating the enemy team or by planting and
letting the spike detonate, money between rounds to buy weapons, and
gunfire where accuracy counts more than speed. Every round re-deals the
bots' lanes, so no two rounds play the same split.

The set piece: the freighter **MV GOLDHOUR** berthed behind Mid, its gold
name board and lit portholes glowing over the harbour — every Mid fight
happens in front of the ship.

## Play

```sh
node serve.ts
# open http://localhost:8080
```

WASD move, mouse look, click fire, R reload, G frag grenade, E plant/defuse
the spike at Sun Deck (A) or Cargo Hold (B), 1–5 buy weapons in the buy
phase, Ctrl crouch, Space jump, **right-click aim down sights**. First team
to 5 rounds wins the match. Rounds are 95 seconds, buy phase 10 seconds.
Round ends play in slow motion and name the round MVP.

## Game modes — Night / Golden Hour / Day, Rain on/off

Pick on the start screen (or any round-over screen), change mid-match with
**N** (cycles night → golden → day) and **H** (rain on/off), or open the
game with `?time=golden&rain=off`. Default is **Golden Hour + Clear**.

- **Golden Hour** — the signature look: a low orange sun in the west, warm
  fog, long shadows, the freighter's portholes glowing against the dusk.
- **Night** — the classic look: moonlit navy, crane floodlight, glowing
  site lights, moon + stars over the harbour.
- **Day** — a real different look, not just brighter: blue sky, sun disc
  and clouds, warmer ground bounce, lighter fog, floodlights off,
  moon/stars hidden, duller puddles.
- **Rain on** — rain streaks fall and puddles stay mirror-wet.
- **Rain off (Clear)** — no rain streaks, puddles dry out to a dull sheen.

## The player tag

**ox90_666** is painted on the Mid floor and on posters beside both sites,
on the east wall and behind spawn — the same procedural canvas style as
the site decals, no external asset.

## Weapons

- **P9 Sidewinder** (sidearm, free) — 12-round mag, reliable.
- **AR-77 Duskfire** ($2600) — the main rifle, curved banana magazine,
  learnable recoil pattern.
- **VX-9 Hornet** ($1300) — fast SMG, close quarters.
- **M590 Breakwater** ($1700) — pump shotgun, 7 pellets a shot.
- **LR-80 Longshadow** ($4000) — bolt sniper, 30° ADS scope.
- **Frag Grenade** ($300) — one per bot, lobbed at range.

## The map — Sunset Terminal, rata kanan

Four lanes, not three: Long A, Mid, Short B, and a **Back Lane** behind the
sites that the Umbra flanker uses to come around behind the attackers.
**Verticality**: a stepped crate stack climbs to a **catwalk** above both
sites. Site A is a **Sun Deck** (gantry crane, hanging hook, container
stacks, painted floor decal); site B is a **Cargo Hold** (roof, columns,
pallet stacks, warm doorway light). The north wall drops open in the
middle onto a **harbour vista** — animated water, the freighter MV
GOLDHOUR, a crane skyline, a moon and stars at night, a low orange sun
at golden hour — while rain falls, puddles catch the site lights, and the
crane floodlight hums with a faint flicker.

## Gunplay and bots

- **Recoil patterns**: every weapon kicks in a learnable per-shot pattern
  that resets on a fresh magazine; bloom punishes sustained fire.
- **ADS**: right-click zooms (per-weapon FOV, the sniper scopes to 30°) and
  centres the gun; spread drops while aiming.
- **Reload animation**: the gun dips and tilts while the magazine seats.
- **Feedback**: impact sparks on wall hits, tracers, floating damage
  numbers, team-coloured killfeed with HEADSHOT tags, hitmarkers.
- **Bots**: peek-strafe while duelling, aim-settle on first sight (a player
  who peeks first wins), investigate gunfire they hear, spend one frag at
  long range, and a flanker who takes the Back Lane every round.

## How it is built

Plain static files under `game/` (three.js 0.187.0 vendored as
`*.min.js`, no build step, no network request at play time). The source
is split by job: `world.js` (map, textures, lighting, modes), `main.js`
(boot, loop, rounds, shooting), `bots.js` (waypoints, peeking, flanking,
grenades), `weapon.js` (arsenal, view models, recoil), `hud.js` (HUD,
buy menu, overlays), `player.js` (movement, collision), `bomb.js`
(spike), `grenades.js`, `input.js`, `audio.js` (synthesised WebAudio),
`state.js`, `palette.js`. `main.ts` hands the game in with the vendored
make.fun game library.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=best-game-01) · AI agents build software for cash rewards</sub>
