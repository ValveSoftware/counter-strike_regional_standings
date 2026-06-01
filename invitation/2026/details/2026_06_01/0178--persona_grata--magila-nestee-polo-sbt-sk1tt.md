### Roster Details<br />
Team Name: Persona Grata<br />
Roster: MAGILA, nestee, POLO, SBT, sk1tt<br />
Global Rank: [178](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [117]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  799.6<br />
<br />
Final Rank Value (799.6) = Starting Rank Value (801.0) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.203[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 801.0
- 400 + ( ( 0.211 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 801.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |     1609 | 2026-04-12 | MANA             | L   | 0.865      | -            | -                | -                | -         |    -7.46 | MAGILA, nestee, POLO, SBT, sk1tt |
|           55 |     1716 | 2026-04-08 | MASONIC          | W   | 0.838      | 0.384        | 0.006 (0.002)    | 0.595 (0.192)    | 0 (0.000) |    17.16 | MAGILA, nestee, POLO, SBT, sk1tt |
|           54 |     1734 | 2026-04-07 | Bebop            | L   | 0.834      | -            | -                | -                | -         |    -7.60 | MAGILA, nestee, POLO, SBT, sk1tt |
|           53 |     1765 | 2026-04-06 | Bebop            | L   | 0.828      | -            | -                | -                | -         |    -8.03 | MAGILA, nestee, POLO, SBT, sk1tt |
|           52 |     1774 | 2026-04-06 | EC BANGA         | W   | 0.826      | -            | -                | -                | 0 (0.000) |     2.26 | MAGILA, nestee, POLO, SBT, sk1tt |
|           51 |     1828 | 2026-04-05 | PsychoFace       | L   | 0.819      | -            | -                | -                | -         |    -3.50 | MAGILA, nestee, POLO, SBT, sk1tt |
|           50 |     1917 | 2026-04-04 | Imperial Academy | L   | 0.812      | -            | -                | -                | -         |   -21.12 | MAGILA, nestee, POLO, SBT, sk1tt |
|           49 |     1972 | 2026-04-03 | Ursa             | L   | 0.807      | -            | -                | -                | -         |    -6.21 | MAGILA, nestee, POLO, SBT, sk1tt |
|           48 |     2157 | 2026-04-01 | TNC              | W   | 0.793      | 0.435        | 0.022 (0.008)    | 1.000 (0.345)    | 0 (0.000) |    17.79 | ex1st, nestee, POLO, SBT, sk1tt  |
|           47 |     2231 | 2026-03-31 | ECSTATIC         | L   | 0.787      | -            | -                | -                | -         |    -3.22 | ex1st, nestee, POLO, SBT, sk1tt  |
|           46 |     2266 | 2026-03-31 | HEROIC Academy   | L   | 0.786      | -            | -                | -                | -         |    -8.94 | ex1st, nestee, POLO, SBT, sk1tt  |
|           45 |     2349 | 2026-03-30 | TNC              | W   | 0.779      | 0.435        | 0.022 (0.008)    | 1.000 (0.339)    | 0 (0.000) |    18.01 | ex1st, nestee, POLO, SBT, sk1tt  |
|           44 |     2357 | 2026-03-30 | ALGO             | W   | 0.779      | 0.435        | 0.008 (0.003)    | 0.352 (0.119)    | -         |    14.12 | ex1st, nestee, POLO, SBT, sk1tt  |
|           43 |     2430 | 2026-03-29 | ALGO             | L   | 0.772      | -            | -                | -                | -         |   -10.38 | ex1st, nestee, POLO, SBT, sk1tt  |
|           42 |     2575 | 2026-03-27 | Hashiras         | W   | 0.758      | 0.435        | -                | 0.633 (0.209)    | -         |    12.32 | ex1st, nestee, POLO, SBT, sk1tt  |
|           41 |     2644 | 2026-03-25 | ALGO             | L   | 0.747      | -            | -                | -                | -         |   -10.78 | ex1st, nestee, POLO, SBT, sk1tt  |
|           40 |     2664 | 2026-03-25 | Rebels           | L   | 0.745      | -            | -                | -                | -         |    -3.50 | ex1st, nestee, POLO, SBT, sk1tt  |
|           39 |     2718 | 2026-03-24 | megoshort        | W   | 0.739      | -            | -                | -                | -         |     3.65 | ex1st, nestee, POLO, SBT, sk1tt  |
|           38 |     2827 | 2026-03-22 | GenOne           | L   | 0.727      | -            | -                | -                | -         |    -9.54 | ex1st, nestee, POLO, SBT, sk1tt  |
|           37 |     2835 | 2026-03-22 | Bebop            | W   | 0.726      | 0.435        | 0.002 (0.001)    | 0.757 (0.239)    | -         |    15.07 | ex1st, nestee, POLO, SBT, sk1tt  |
|           36 |     2936 | 2026-03-20 | STATE            | L   | 0.714      | -            | -                | -                | -         |    -3.84 | ex1st, nestee, POLO, SBT, sk1tt  |
|           35 |     2962 | 2026-03-20 | MANA             | L   | 0.712      | -            | -                | -                | -         |    -6.76 | ex1st, nestee, POLO, SBT, sk1tt  |
|           34 |     2981 | 2026-03-19 | aAa              | L   | 0.708      | -            | -                | -                | -         |    -8.27 | ex1st, nestee, POLO, SBT, sk1tt  |
|           33 |     3067 | 2026-03-17 | UNiTY            | W   | 0.694      | -            | -                | -                | -         |     3.82 | ex1st, nestee, POLO, SBT, sk1tt  |
|           32 |     3086 | 2026-03-17 | BIG EQUIPA       | W   | 0.692      | 0.435        | 0.002 (0.000)    | -                | -         |     5.30 | ex1st, nestee, POLO, SBT, sk1tt  |
|           31 |     3122 | 2026-03-16 | KHAN             | W   | 0.687      | -            | -                | -                | -         |     1.99 | amanek, ex1st, POLO, SBT, sk1tt  |
|           30 |     4181 | 2026-02-22 | GamerLegion      | L   | 0.541      | -            | -                | -                | -         |    -0.12 | amanek, ex1st, POLO, SBT, sk1tt  |
|           29 |     4198 | 2026-02-22 | Avanti           | W   | 0.541      | -            | -                | -                | 1 (0.541) |     1.58 | amanek, ex1st, POLO, SBT, sk1tt  |
|           28 |     4208 | 2026-02-22 | Phantom          | L   | 0.540      | -            | -                | -                | -         |    -2.60 | amanek, ex1st, POLO, SBT, sk1tt  |
|           27 |     4225 | 2026-02-22 | ECSTATIC         | L   | 0.539      | -            | -                | -                | -         |    -2.23 | amanek, ex1st, POLO, SBT, sk1tt  |
|           26 |     4238 | 2026-02-22 | SINNERS          | L   | 0.539      | -            | -                | -                | -         |    -0.59 | amanek, ex1st, POLO, SBT, sk1tt  |
|           25 |     4576 | 2026-02-15 | Just Players     | L   | 0.495      | -            | -                | -                | -         |    -7.05 | amanek, ex1st, POLO, SBT, sk1tt  |
|           24 |     4700 | 2026-02-13 | INOX Division    | L   | 0.481      | -            | -                | -                | -         |    -6.18 | amanek, ex1st, POLO, SBT, sk1tt  |
|           23 |     5050 | 2026-02-02 | Just Players     | L   | 0.408      | -            | -                | -                | -         |    -6.07 | amanek, ex1st, POLO, SBT, sk1tt  |
|           22 |     5094 | 2026-02-01 | magic            | L   | 0.399      | -            | -                | -                | -         |    -0.17 | amanek, ex1st, POLO, SBT, sk1tt  |
|           21 |     5157 | 2026-01-30 | KOLESIE          | L   | 0.387      | -            | -                | -                | -         |    -1.52 | amanek, ex1st, POLO, SBT, sk1tt  |
|           20 |     5217 | 2026-01-28 | AM               | W   | 0.373      | -            | -                | -                | -         |     3.76 | amanek, ex1st, POLO, SBT, sk1tt  |
|           19 |     5281 | 2026-01-25 | 1win             | W   | 0.353      | 0.435        | 0.088 (0.013)    | 0.577 (0.088)    | -         |    10.37 | amanek, ex1st, POLO, SBT, sk1tt  |
|           18 |     5324 | 2026-01-24 | Hashiras         | W   | 0.345      | 0.384        | -                | 0.633 (0.084)    | -         |     4.91 | amanek, ex1st, POLO, SBT, sk1tt  |
|           17 |     5342 | 2026-01-23 | Eternal Fire     | W   | 0.341      | -            | -                | -                | -         |     2.75 | amanek, ex1st, POLO, SBT, sk1tt  |
|           16 |     5408 | 2026-01-22 | MASONIC          | W   | 0.333      | 0.384        | 0.006 (0.001)    | 0.595 (0.076)    | -         |     9.00 | amanek, ex1st, POLO, SBT, sk1tt  |
|           15 |     5436 | 2026-01-21 | Eternal Fire     | L   | 0.328      | -            | -                | -                | -         |    -7.79 | amanek, ex1st, POLO, SBT, sk1tt  |
|           14 |     5565 | 2026-01-17 | Betclic          | L   | 0.300      | -            | -                | -                | -         |    -0.83 | amanek, ex1st, POLO, SBT, sk1tt  |
|           13 |     5608 | 2026-01-16 | ARCRED           | L   | 0.294      | -            | -                | -                | -         |    -0.75 | amanek, ex1st, POLO, SBT, sk1tt  |
|           12 |     5630 | 2026-01-16 | SAW              | W   | 0.293      | -            | -                | -                | 1 (0.293) |     4.75 | amanek, ex1st, POLO, SBT, sk1tt  |
|           11 |     5646 | 2026-01-16 | DimoniX          | W   | 0.292      | -            | -                | -                | 1 (0.292) |     0.86 | amanek, ex1st, POLO, SBT, sk1tt  |
|           10 |     5678 | 2026-01-15 | STATE            | W   | 0.285      | 0.384        | 0.020 (0.002)    | 0.632 (0.069)    | -         |     8.08 | amanek, ex1st, POLO, SBT, sk1tt  |
|            9 |     5695 | 2026-01-14 | ARCRED           | L   | 0.279      | -            | -                | -                | -         |    -0.64 | amanek, ex1st, POLO, SBT, sk1tt  |
|            8 |     5794 | 2026-01-04 | ASTRAL           | L   | 0.212      | -            | -                | -                | -         |    -0.93 | amanek, ex1st, POLO, SBT, sk1tt  |
|            7 |     5797 | 2026-01-04 | Grindas          | W   | 0.212      | -            | -                | -                | 1 (0.212) |     1.08 | amanek, ex1st, POLO, SBT, sk1tt  |
|            6 |     5800 | 2026-01-04 | AaB              | L   | 0.212      | -            | -                | -                | -         |    -5.30 | amanek, ex1st, POLO, SBT, sk1tt  |
|            5 |     5807 | 2026-01-04 | Walczaki         | L   | 0.211      | -            | -                | -                | -         |    -0.73 | amanek, ex1st, POLO, SBT, sk1tt  |
|            4 |     5809 | 2026-01-04 | SINQU            | W   | 0.211      | -            | -                | -                | 1 (0.211) |     1.24 | amanek, ex1st, POLO, SBT, sk1tt  |
|            3 |     5866 | 2025-12-21 | TNC              | L   | 0.120      | -            | -                | -                | -         |    -0.92 | amanek, ex1st, POLO, SBT, sk1tt  |
|            2 |     5872 | 2025-12-21 | Phantom          | L   | 0.119      | -            | -                | -                | -         |    -0.38 | amanek, ex1st, POLO, SBT, sk1tt  |
|            1 |     5896 | 2025-12-20 | TNC              | W   | 0.113      | 0.296        | 0.022 (0.001)    | -                | 1 (0.113) |     2.71 | amanek, ex1st, POLO, SBT, sk1tt  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75.91)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.121 | $627.00        | $75.91          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
