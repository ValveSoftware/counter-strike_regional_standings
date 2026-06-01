### Roster Details<br />
Team Name: GenOne<br />
Roster: bL4SEZ, Brooxsy, Chucky, Djoko, Keoz<br />
Global Rank: [99](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [66]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1061.0<br />
<br />
Final Rank Value (1061.0) = Starting Rank Value (877.9) + Head To Head Adjustments (183.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.322[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 877.9
- 400 + ( ( 0.251 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 877.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           88 |       57 | 2026-05-30 | Gentle Mates       | L   | 1.000      | -            | -                | -                | -         |    -3.89 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           87 |       73 | 2026-05-29 | Just Players       | W   | 1.000      | 0.384        | -                | 0.641 (0.246)    | 0 (0.000) |    13.10 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           86 |      126 | 2026-05-28 | KOLESIE            | L   | 1.000      | -            | -                | -                | -         |   -11.98 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           85 |      135 | 2026-05-28 | Gentle Mates       | L   | 1.000      | -            | -                | -                | -         |    -4.38 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           84 |      142 | 2026-05-28 | Betclic            | W   | 1.000      | 0.384        | 0.017 (0.006)    | -                | 0 (0.000) |    18.68 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           83 |      193 | 2026-05-26 | ASTRAL             | W   | 1.000      | 0.435        | -                | 0.874 (0.380)    | 0 (0.000) |    13.92 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           82 |      232 | 2026-05-25 | Leo                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.26 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           81 |      255 | 2026-05-24 | megoshort          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.29 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           80 |      261 | 2026-05-24 | EAC                | W   | 1.000      | 0.396        | -                | 0.768 (0.305)    | 0 (0.000) |    18.55 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           79 |      290 | 2026-05-23 | ex-RUBY            | L   | 1.000      | -            | -                | -                | -         |    -9.45 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           78 |      329 | 2026-05-23 | MANA               | W   | 1.000      | 0.396        | -                | 0.712 (0.282)    | 0 (0.000) |    11.40 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           77 |      347 | 2026-05-22 | DragonClaw         | W   | 1.000      | 0.384        | 0.031 (0.012)    | -                | 0 (0.000) |    16.13 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           76 |      391 | 2026-05-21 | AM                 | L   | 1.000      | -            | -                | -                | -         |    -8.46 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           75 |      446 | 2026-05-20 | SPARTA             | W   | 1.000      | 0.384        | 0.038 (0.015)    | 0.828 (0.318)    | 0 (0.000) |    21.65 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           74 |      482 | 2026-05-19 | ex-RUBY            | L   | 1.000      | -            | -                | -                | -         |    -9.37 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           73 |      492 | 2026-05-18 | EAC                | W   | 1.000      | 0.435        | -                | 0.768 (0.334)    | 0 (0.000) |    23.27 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           72 |      514 | 2026-05-17 | ex-Zero Tenacity   | W   | 1.000      | 0.344        | -                | 0.815 (0.281)    | -         |    12.66 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           71 |      624 | 2026-05-13 | OlyBet             | W   | 1.000      | -            | -                | -                | -         |     8.07 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           70 |      681 | 2026-05-12 | Project 91         | W   | 1.000      | -            | -                | -                | -         |     7.94 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           69 |      699 | 2026-05-11 | Lavked             | L   | 1.000      | -            | -                | -                | -         |    -9.05 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           68 |      778 | 2026-05-09 | Ursa               | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.962 (0.370)    | -         |    21.89 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           67 |      810 | 2026-05-08 | TDK                | L   | 1.000      | -            | -                | -                | -         |    -5.07 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           66 |      835 | 2026-05-06 | EAC                | L   | 1.000      | -            | -                | -                | -         |    -6.31 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           65 |      849 | 2026-05-05 | SPARTA             | L   | 1.000      | -            | -                | -                | -         |    -6.06 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           64 |      853 | 2026-05-05 | HAVU               | W   | 1.000      | -            | -                | -                | -         |    14.73 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           63 |      858 | 2026-05-05 | Phantom            | L   | 1.000      | -            | -                | -                | -         |    -9.95 | bL4SEZ, Brooxsy, cHeuuuuk, Chucky, Keoz |
|           62 |      865 | 2026-05-04 | aAa                | W   | 1.000      | -            | -                | -                | -         |    15.27 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           61 |      900 | 2026-05-03 | Lavked             | L   | 1.000      | -            | -                | -                | -         |    -8.95 | bL4SEZ, Brooxsy, cHeuuuuk, Chucky, Keoz |
|           60 |      901 | 2026-05-03 | Oxuji              | L   | 1.000      | -            | -                | -                | -         |    -7.47 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           59 |      953 | 2026-05-02 | INOX Division      | L   | 0.998      | -            | -                | -                | -         |   -10.01 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           58 |     1004 | 2026-05-01 | The Last Resort    | W   | 0.992      | -            | -                | -                | -         |    16.02 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           57 |     1078 | 2026-04-29 | Phantom            | L   | 0.981      | -            | -                | -                | -         |    -9.62 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           56 |     1119 | 2026-04-28 | BIG Academy        | W   | 0.974      | -            | -                | -                | -         |    10.55 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           55 |     1123 | 2026-04-28 | TNC                | W   | 0.973      | 0.435        | 0.022 (0.009)    | 1.000 (0.423)    | -         |    14.06 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           54 |     1161 | 2026-04-27 | SPARTA             | L   | 0.967      | -            | -                | -                | -         |    -5.37 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           53 |     1300 | 2026-04-25 | Lilmix             | W   | 0.954      | -            | -                | -                | -         |     8.66 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           52 |     1380 | 2026-04-23 | bankaPEPSI         | W   | 0.941      | -            | -                | -                | -         |     6.87 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           51 |     1438 | 2026-04-22 | Ursa               | L   | 0.932      | -            | -                | -                | -         |    -8.22 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           50 |     1444 | 2026-04-21 | 1win               | W   | 0.926      | 0.435        | 0.088 (0.035)    | -                | -         |    25.77 | Brooxsy, cHeuuuuk, Chucky, Djoko, Keoz  |
|           49 |     1504 | 2026-04-18 | Acend              | L   | 0.906      | -            | -                | -                | -         |    -3.49 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           48 |     1527 | 2026-04-16 | Phantom            | W   | 0.894      | 0.435        | -                | 0.736 (0.286)    | -         |    21.28 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           47 |     1569 | 2026-04-14 | MOUZ NXT           | L   | 0.878      | -            | -                | -                | -         |    -6.37 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           46 |     1659 | 2026-04-10 | HEROIC Academy     | L   | 0.852      | -            | -                | -                | -         |   -11.80 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           45 |     2186 | 2026-04-01 | Ursa               | L   | 0.792      | -            | -                | -                | -         |    -6.45 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           44 |     2347 | 2026-03-30 | KOLESIE            | L   | 0.779      | -            | -                | -                | -         |    -4.73 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           43 |     2694 | 2026-03-24 | ALGO               | W   | 0.740      | -            | -                | -                | -         |    10.11 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           42 |     2827 | 2026-03-22 | Persona Grata      | W   | 0.727      | -            | -                | -                | -         |     9.54 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           41 |     2948 | 2026-03-20 | Leo                | W   | 0.713      | -            | -                | -                | -         |    11.70 | bL4SEZ, Brooxsy, Chucky, Djoko, Keoz    |
|           40 |     3043 | 2026-03-18 | SINQU              | L   | 0.699      | -            | -                | -                | -         |   -19.03 | Brooxsy, cHeuuuuk, Chucky, Djoko, Keoz  |
|           39 |     3052 | 2026-03-18 | MANA               | L   | 0.698      | -            | -                | -                | -         |    -8.97 | Brooxsy, cHeuuuuk, Chucky, Djoko, Keoz  |
|           38 |     3094 | 2026-03-17 | rottweilers        | L   | 0.692      | -            | -                | -                | -         |   -18.33 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           37 |     3533 | 2026-03-08 | MOUZ NXT           | L   | 0.633      | -            | -                | -                | -         |    -4.92 | Brooxsy, Chucky, Djoko, Keoz, Rain      |
|           36 |     3630 | 2026-03-06 | TNC                | W   | 0.619      | 0.371        | 0.022 (0.005)    | -                | -         |    12.60 | Brooxsy, cHeuuuuk, Chucky, Djoko, Rain  |
|           35 |     4074 | 2026-02-25 | HYPERSPIRIT        | L   | 0.559      | -            | -                | -                | -         |    -7.23 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           34 |     4086 | 2026-02-24 | Nexus              | L   | 0.555      | -            | -                | -                | -         |   -12.03 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           33 |     4219 | 2026-02-22 | BET-M              | L   | 0.540      | -            | -                | -                | -         |    -2.05 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           32 |     4261 | 2026-02-21 | Alliance           | L   | 0.534      | -            | -                | -                | -         |    -1.00 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           31 |     4314 | 2026-02-20 | TDK                | L   | 0.528      | -            | -                | -                | -         |    -3.12 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           30 |     4420 | 2026-02-18 | DragonClaw         | W   | 0.514      | 0.384        | 0.031 (0.006)    | -                | -         |    10.01 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           29 |     4530 | 2026-02-16 | Famalicão          | W   | 0.501      | -            | -                | -                | -         |     5.90 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           28 |     4658 | 2026-02-14 | VP.Prodigy         | W   | 0.487      | -            | -                | -                | -         |     2.85 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           27 |     4769 | 2026-02-12 | ALGO               | L   | 0.472      | -            | -                | -                | -         |   -11.06 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           26 |     4826 | 2026-02-10 | SPARTA             | L   | 0.461      | -            | -                | -                | -         |    -2.35 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           25 |     4883 | 2026-02-08 | VP.Prodigy         | L   | 0.447      | -            | -                | -                | -         |   -12.02 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           24 |     4982 | 2026-02-05 | ECSTATIC           | L   | 0.425      | -            | -                | -                | -         |    -2.98 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           23 |     5006 | 2026-02-04 | AM                 | W   | 0.418      | -            | -                | -                | -         |     2.98 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           22 |     5028 | 2026-02-03 | SINNERS            | W   | 0.413      | 0.435        | 0.119 (0.021)    | -                | -         |    12.25 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           21 |     5137 | 2026-01-31 | EAC                | W   | 0.392      | -            | -                | -                | -         |    10.37 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           20 |     5186 | 2026-01-29 | AM                 | L   | 0.380      | -            | -                | -                | -         |    -9.25 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           19 |     5209 | 2026-01-28 | Eternal Fire       | W   | 0.373      | -            | -                | -                | -         |     1.92 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           18 |     5256 | 2026-01-26 | Betclic            | L   | 0.360      | -            | -                | -                | -         |    -1.66 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           17 |     5269 | 2026-01-25 | ex-Fingers Crossed | W   | 0.354      | -            | -                | -                | -         |     1.58 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           16 |     5299 | 2026-01-24 | Nemesis            | L   | 0.348      | -            | -                | -                | -         |    -1.28 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           15 |     5316 | 2026-01-24 | ARCRED             | W   | 0.346      | -            | -                | -                | -         |     9.56 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           14 |     5414 | 2026-01-22 | Gentle Mates       | L   | 0.333      | -            | -                | -                | -         |    -0.62 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           13 |     5419 | 2026-01-22 | UNiTY              | W   | 0.332      | -            | -                | -                | -         |     3.61 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           12 |     5426 | 2026-01-21 | fnatic             | W   | 0.329      | -            | -                | -                | -         |     7.71 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           11 |     5445 | 2026-01-21 | BetBoom            | L   | 0.327      | -            | -                | -                | -         |    -0.29 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|           10 |     5469 | 2026-01-20 | 1win               | L   | 0.321      | -            | -                | -                | -         |    -0.97 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            9 |     5493 | 2026-01-19 | Nemiga             | L   | 0.312      | -            | -                | -                | -         |    -0.85 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            8 |     5550 | 2026-01-17 | BIG Academy        | L   | 0.301      | -            | -                | -                | -         |    -6.78 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            7 |     5552 | 2026-01-17 | TNC                | W   | 0.301      | -            | -                | -                | -         |     6.07 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            6 |     5560 | 2026-01-17 | PsychoFace         | W   | 0.300      | 0.624        | 0.036 (0.007)    | -                | -         |     6.29 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            5 |     5744 | 2026-01-10 | cirahvi            | W   | 0.252      | -            | -                | -                | -         |     2.78 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            4 |     5854 | 2025-12-23 | Nemesis            | W   | 0.134      | -            | -                | -                | -         |     0.71 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            3 |     5856 | 2025-12-23 | BET-M              | W   | 0.133      | -            | -                | -                | -         |     3.76 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            2 |     5858 | 2025-12-22 | Phantom            | W   | 0.127      | -            | -                | -                | -         |     3.42 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |
|            1 |     5871 | 2025-12-21 | Eternal Fire       | W   | 0.119      | -            | -                | -                | -         |     0.56 | Brooxsy, Chucky, Djoko, misutaaa, NBK-  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,750.44)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-05-03 |      1.000 | $750.00        | $750.00         |
| 2026-02-24 |      0.555 | $1,250.00      | $693.24         |
| 2026-02-05 |      0.427 | $5,000.00      | $2,135.29       |
| 2025-12-23 |      0.134 | $5,000.00      | $671.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
