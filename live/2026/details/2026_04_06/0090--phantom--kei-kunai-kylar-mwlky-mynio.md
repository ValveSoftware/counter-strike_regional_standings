### Roster Details<br />
Team Name: Phantom<br />
Roster: KEi, Kunai, Kylar, mwlky, mynio<br />
Global Rank: [90](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [64]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1143.4<br />
<br />
Final Rank Value (1143.4) = Starting Rank Value (1322.3) + Head To Head Adjustments (-178.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.983[<sup>2</sup>](#table1)

The average of these factors is 0.472<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1322.3
- 400 + ( ( 0.472 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1322.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      183 | 2026-04-01 | B8                 | L   | 1.000      | -            | -                | -                | -         |    -3.97 | KEi, Kunai, Kylar, mwlky, mynio     |
|           54 |      207 | 2026-04-01 | AM                 | W   | 1.000      | 0.340        | 0.025 (0.008)    | 0.767 (0.261)    | 1 (1.000) |    20.85 | KEi, Kunai, Kylar, mwlky, mynio     |
|           53 |      220 | 2026-04-01 | BESTIA             | L   | 1.000      | -            | -                | -                | -         |    -7.37 | KEi, Kunai, Kylar, mwlky, mynio     |
|           52 |      244 | 2026-03-31 | B8                 | L   | 1.000      | -            | -                | -                | -         |    -3.57 | KEi, Kunai, Kylar, mwlky, mynio     |
|           51 |      252 | 2026-03-31 | Z7                 | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.70 | KEi, Kunai, Kylar, mwlky, mynio     |
|           50 |      262 | 2026-03-31 | maquinas           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.47 | KEi, Kunai, Kylar, mwlky, mynio     |
|           49 |      280 | 2026-03-31 | AM                 | L   | 1.000      | -            | -                | -                | -         |    -9.62 | KEi, Kunai, Kylar, mwlky, mynio     |
|           48 |      298 | 2026-03-31 | WAZABI             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.47 | KEi, Kunai, Kylar, mwlky, mynio     |
|           47 |      602 | 2026-03-24 | FOKUS              | L   | 1.000      | -            | -                | -                | -         |   -10.01 | KEi, Kunai, Kylar, mwlky, mynio     |
|           46 |      612 | 2026-03-24 | 3DMAX              | W   | 1.000      | 0.333        | 0.215 (0.072)    | -                | 1 (1.000) |    27.94 | KEi, Kunai, Kylar, mwlky, mynio     |
|           45 |      645 | 2026-03-24 | ASTRAL             | W   | 1.000      | 0.333        | -                | 0.533 (0.178)    | 1 (1.000) |     9.34 | KEi, Kunai, Kylar, mwlky, mynio     |
|           44 |      703 | 2026-03-23 | EC BANGA           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.99 | KEi, Kunai, Kylar, mwlky, mynio     |
|           43 |      707 | 2026-03-23 | KUUSAMO            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.49 | KEi, Kunai, Kylar, mwlky, mynio     |
|           42 |      713 | 2026-03-23 | The Night Club     | L   | 1.000      | -            | -                | -                | -         |   -26.75 | KEi, Kunai, Kylar, mwlky, mynio     |
|           41 |     1281 | 2026-03-11 | CYBERSHOKE         | L   | 1.000      | -            | -                | -                | -         |   -11.99 | KEi, Kunai, Kylar, mwlky, mynio     |
|           40 |     1383 | 2026-03-09 | Omega              | W   | 1.000      | 0.435        | 0.025 (0.011)    | 0.588 (0.255)    | -         |    13.91 | KEi, Kunai, Kylar, mwlky, mynio     |
|           39 |     1452 | 2026-03-08 | Leo                | L   | 1.000      | -            | -                | -                | -         |   -21.52 | KEi, Kunai, Kylar, mwlky, mynio     |
|           38 |     1539 | 2026-03-06 | Oxuji              | L   | 0.993      | -            | -                | -                | -         |   -18.76 | KEi, Kunai, Kylar, mynio, parad17se |
|           37 |     1584 | 2026-03-05 | ASTRAL             | W   | 0.988      | 0.435        | -                | 0.533 (0.229)    | -         |     7.62 | KEi, Kunai, Kylar, mwlky, mynio     |
|           36 |     1707 | 2026-03-03 | Oxuji              | W   | 0.972      | 0.435        | 0.011 (0.005)    | 0.474 (0.200)    | -         |    13.56 | KEi, Kunai, Kylar, mynio, parad17se |
|           35 |     1779 | 2026-03-01 | QWENTRY            | L   | 0.960      | -            | -                | -                | -         |   -17.74 | KEi, Kunai, Kylar, mynio, parad17se |
|           34 |     1947 | 2026-02-26 | Lazer Cats         | L   | 0.939      | -            | -                | -                | -         |   -20.39 | DGL, KEi, Kunai, Kylar, mynio       |
|           33 |     2067 | 2026-02-23 | ECSTATIC           | L   | 0.921      | -            | -                | -                | -         |    -8.79 | DGL, KEi, Kunai, Kylar, mynio       |
|           32 |     2073 | 2026-02-23 | Sashi              | W   | 0.920      | 0.342        | 0.015 (0.005)    | 0.631 (0.198)    | 1 (0.920) |    16.49 | DGL, KEi, Kunai, Kylar, mynio       |
|           31 |     2081 | 2026-02-23 | illwill            | L   | 0.919      | -            | -                | -                | -         |    -7.58 | DGL, KEi, Kunai, Kylar, mynio       |
|           30 |     2098 | 2026-02-22 | ECSTATIC           | L   | 0.915      | -            | -                | -                | -         |    -9.23 | DGL, KEi, Kunai, Kylar, mynio       |
|           29 |     2100 | 2026-02-22 | SINNERS            | W   | 0.915      | 0.342        | 0.178 (0.056)    | 0.675 (0.211)    | 1 (0.915) |    24.79 | DGL, KEi, Kunai, Kylar, mynio       |
|           28 |     2110 | 2026-02-22 | GamerLegion        | L   | 0.915      | -            | -                | -                | -         |    -3.75 | DGL, KEi, Kunai, Kylar, mynio       |
|           27 |     2126 | 2026-02-22 | MINLATE            | W   | 0.914      | -            | -                | -                | -         |     7.97 | DGL, KEi, Kunai, Kylar, mynio       |
|           26 |     2132 | 2026-02-22 | Avanti             | W   | 0.913      | -            | -                | -                | -         |     0.38 | DGL, KEi, Kunai, Kylar, mynio       |
|           25 |     2180 | 2026-02-21 | Young Ninjas       | L   | 0.908      | -            | -                | -                | -         |   -24.86 | DGL, KEi, Kunai, Kylar, mynio       |
|           24 |     2196 | 2026-02-21 | Acend              | L   | 0.907      | -            | -                | -                | -         |   -13.75 | DGL, KEi, Kunai, Kylar, mynio       |
|           23 |     2208 | 2026-02-21 | ex-Fingers Crossed | W   | 0.905      | 0.323        | 0.013 (0.004)    | -                | -         |     4.95 | DGL, KEi, Kunai, Kylar, mynio       |
|           22 |     2426 | 2026-02-17 | Alliance           | L   | 0.879      | -            | -                | -                | -         |    -6.39 | DGL, KEi, Kunai, Kylar, mynio       |
|           21 |     2463 | 2026-02-16 | ALGO               | W   | 0.873      | 0.435        | 0.013 (0.005)    | 0.456 (0.173)    | -         |     6.99 | DGL, KEi, Kunai, Kylar, mynio       |
|           20 |     2551 | 2026-02-14 | Nexus              | W   | 0.861      | 0.435        | -                | 0.449 (0.168)    | -         |     6.90 | DGL, KEi, Kunai, Kylar, mynio       |
|           19 |     2624 | 2026-02-13 | TNC                | L   | 0.854      | -            | -                | -                | -         |   -19.98 | DGL, KEi, Kunai, Kylar, mynio       |
|           18 |     2700 | 2026-02-11 | VP.Prodigy         | L   | 0.842      | -            | -                | -                | -         |   -17.79 | DGL, KEi, Kunai, Kylar, mynio       |
|           17 |     2778 | 2026-02-09 | SPARTA             | W   | 0.826      | 0.435        | 0.063 (0.023)    | 0.732 (0.263)    | -         |    17.90 | DGL, KEi, Kunai, Kylar, mynio       |
|           16 |     2790 | 2026-02-08 | OG                 | L   | 0.821      | -            | -                | -                | -         |   -11.97 | DGL, KEi, Kunai, Kylar, mynio       |
|           15 |     2797 | 2026-02-08 | Lazer Cats         | W   | 0.821      | -            | -                | -                | -         |     6.37 | DGL, KEi, Kunai, Kylar, mynio       |
|           14 |     3012 | 2026-02-01 | STATE              | L   | 0.773      | -            | -                | -                | -         |   -19.25 | DGL, KEi, Kunai, Kylar, mynio       |
|           13 |     3234 | 2026-01-24 | AM                 | L   | 0.719      | -            | -                | -                | -         |    -7.46 | DGL, KEi, Kunai, Kylar, mynio       |
|           12 |     3261 | 2026-01-23 | MASONIC            | L   | 0.714      | -            | -                | -                | -         |   -16.26 | DGL, KEi, Kunai, Kylar, mynio       |
|           11 |     3333 | 2026-01-22 | FORZE Reload       | W   | 0.706      | -            | -                | -                | -         |     2.93 | DGL, KEi, Kunai, Kylar, mynio       |
|           10 |     3394 | 2026-01-20 | FAVBET             | L   | 0.693      | -            | -                | -                | -         |   -18.66 | DGL, KEi, Kunai, Kylar, mynio       |
|            9 |     3428 | 2026-01-18 | Oramond            | L   | 0.681      | -            | -                | -                | -         |   -16.83 | DGL, KEi, Kunai, Kylar, mynio       |
|            8 |     3487 | 2026-01-17 | The Last Resort    | W   | 0.673      | 0.396        | 0.015 (0.004)    | -                | -         |     2.08 | DGL, KEi, Kunai, Kylar, mynio       |
|            7 |     3660 | 2026-01-10 | HYPERSPIRIT        | L   | 0.627      | -            | -                | -                | -         |   -17.53 | DGL, KEi, Kunai, Kylar, mynio       |
|            6 |     3775 | 2025-12-22 | GenOne             | L   | 0.501      | -            | -                | -                | -         |   -14.02 | DGL, KEi, Kunai, Kylar, mynio       |
|            5 |     3779 | 2025-12-21 | TNC                | W   | 0.495      | -            | -                | -                | -         |     2.10 | DGL, KEi, Kunai, Kylar, mynio       |
|            4 |     3789 | 2025-12-21 | MINLATE            | W   | 0.493      | -            | -                | -                | -         |     2.38 | DGL, KEi, Kunai, Kylar, mynio       |
|            3 |     3803 | 2025-12-20 | VP.Prodigy         | W   | 0.488      | -            | -                | -                | -         |     3.26 | DGL, KEi, Kunai, Kylar, mynio       |
|            2 |     3814 | 2025-12-20 | The Night Club     | W   | 0.486      | -            | -                | -                | -         |     0.81 | DGL, KEi, Kunai, Kylar, mynio       |
|            1 |     4684 | 2025-11-10 | K27                | L   | 0.220      | -            | -                | -                | -         |    -1.75 | bnox, hades, KEi, Kylar, mynio      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,533.77)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-24 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-12-21 |      0.495 | $2,090.00      | $1,033.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
