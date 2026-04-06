### Roster Details<br />
Team Name: G2<br />
Roster: HeavyGod, huNter-, MATYS, NertZ, SunPayus<br />
Global Rank: [11](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [9]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1664.3<br />
<br />
Final Rank Value (1664.3) = Starting Rank Value (1708.9) + Head To Head Adjustments (-44.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.687[<sup>1</sup>](#table2)
- Bounty Collected: 0.634[<sup>2</sup>](#table1)
- Opponent Network: 0.356[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.669<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1708.9
- 400 + ( ( 0.669 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1708.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       39 | 2026-04-04 | BetBoom           | W   | 1.000      | 0.500        | -                | 0.748 (0.374)    | 1 (1.000) |    10.30 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           43 |       92 | 2026-04-03 | GamerLegion       | W   | 1.000      | 0.500        | 0.204 (0.102)    | -                | 1 (1.000) |    11.58 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           42 |      139 | 2026-04-02 | BetBoom           | W   | 1.000      | 0.500        | -                | 0.748 (0.374)    | 1 (1.000) |     9.97 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           41 |      215 | 2026-04-01 | Nemesis           | W   | 1.000      | 0.500        | -                | 1.000 (0.500)    | 1 (1.000) |     5.49 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           40 |      310 | 2026-03-30 | Acend             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.14 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           39 |      313 | 2026-03-30 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -22.65 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           38 |      332 | 2026-03-30 | Fluxo             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.34 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           37 |      348 | 2026-03-29 | Acend             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.72 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           36 |      354 | 2026-03-29 | cswalkers         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.06 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           35 |      367 | 2026-03-29 | ESC               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.91 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           34 |      373 | 2026-03-29 | CarritoSpain      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.05 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           33 |      554 | 2026-03-25 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -23.58 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           32 |      587 | 2026-03-25 | aimclub           | W   | 1.000      | -            | -                | -                | -         |     0.37 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           31 |     1306 | 2026-03-10 | FUT               | L   | 1.000      | -            | -                | -                | -         |   -18.59 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           30 |     1344 | 2026-03-09 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.25 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           29 |     1419 | 2026-03-08 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -13.49 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           28 |     1503 | 2026-03-07 | Natus Vincere     | W   | 1.000      | 0.805        | 1.000 (0.805)    | 0.344 (0.277)    | -         |    22.98 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           27 |     1537 | 2026-03-06 | FaZe              | W   | 0.994      | 0.805        | 0.374 (0.299)    | 0.350 (0.281)    | -         |     9.65 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           26 |     1589 | 2026-03-05 | Ninjas in Pyjamas | W   | 0.987      | 0.613        | 0.126 (0.076)    | 0.454 (0.275)    | -         |     6.60 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           25 |     1627 | 2026-03-04 | paiN              | L   | 0.981      | -            | -                | -                | -         |   -19.94 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           24 |     1676 | 2026-03-03 | M80               | W   | 0.975      | 0.613        | -                | 0.582 (0.347)    | -         |     6.98 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           23 |     1717 | 2026-03-02 | Legacy            | L   | 0.968      | -            | -                | -                | -         |   -24.95 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           22 |     1783 | 2026-03-01 | Gaimin Gladiators | W   | 0.960      | -            | -                | -                | -         |     4.46 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           21 |     2343 | 2026-02-18 | Natus Vincere     | L   | 0.887      | -            | -                | -                | -         |    -7.27 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           20 |     2418 | 2026-02-17 | HEROIC            | W   | 0.880      | 1.000        | 0.235 (0.207)    | 0.491 (0.432)    | -         |     8.35 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           19 |     2451 | 2026-02-16 | paiN              | W   | 0.874      | 1.000        | 0.271 (0.237)    | 0.391 (0.342)    | -         |     8.45 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           18 |     2530 | 2026-02-15 | PARIVISION        | L   | 0.866      | -            | -                | -                | -         |    -8.39 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           17 |     2563 | 2026-02-14 | Vitality          | L   | 0.861      | -            | -                | -                | -         |    -4.23 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           16 |     2858 | 2026-02-06 | MOUZ              | L   | 0.808      | -            | -                | -                | -         |   -10.44 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           15 |     2938 | 2026-02-03 | Spirit            | L   | 0.788      | -            | -                | -                | -         |   -12.72 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           14 |     3001 | 2026-02-01 | FUT               | W   | 0.774      | 1.000        | 0.330 (0.256)    | 0.467 (0.361)    | -         |     6.81 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           13 |     3050 | 2026-01-31 | The MongolZ       | W   | 0.766      | 1.000        | 0.554 (0.424)    | -                | -         |    11.19 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           12 |     3096 | 2026-01-29 | Liquid            | W   | 0.755      | 0.783        | 0.238 (0.140)    | -                | -         |     5.05 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           11 |     3117 | 2026-01-28 | Passion UA        | W   | 0.748      | -            | -                | -                | -         |     3.39 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           10 |     3997 | 2025-12-07 | Falcons           | L   | 0.402      | -            | -                | -                | -         |    -5.56 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            9 |     4019 | 2025-12-06 | The MongolZ       | L   | 0.395      | -            | -                | -                | -         |    -6.62 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            8 |     4046 | 2025-12-05 | FURIA             | L   | 0.388      | -            | -                | -                | -         |    -3.48 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            7 |     4080 | 2025-12-04 | paiN              | W   | 0.381      | 1.000        | 0.271 (0.103)    | -                | -         |     3.89 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            6 |     4088 | 2025-12-04 | Passion UA        | W   | 0.380      | -            | -                | -                | -         |     1.66 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            5 |     4943 | 2025-11-05 | Vitality          | L   | 0.185      | -            | -                | -                | -         |    -0.97 | HeavyGod, malbsMd, MATYS, sAw, SunPayus     |
|            4 |     4947 | 2025-11-04 | Virtus.pro        | W   | 0.184      | -            | -                | -                | -         |     0.03 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            3 |     4975 | 2025-11-03 | FURIA             | L   | 0.177      | -            | -                | -                | -         |    -1.74 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            2 |     4996 | 2025-11-03 | 3DMAX             | W   | 0.172      | -            | -                | -                | -         |     1.80 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            1 |     5814 | 2025-10-08 | 3DMAX             | L   | 0.000      | -            | -                | -                | -         |     0.00 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($160,638.63)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      1.000 | $25,000.00     | $25,000.00      |
| 2026-03-30 |      1.000 | $1,740.00      | $1,740.00       |
| 2026-03-26 |      1.000 | $750.00        | $750.00         |
| 2026-03-10 |      1.000 | $34,500.00     | $34,500.00      |
| 2026-02-22 |      0.914 | $31,250.00     | $28,570.45      |
| 2026-02-08 |      0.821 | $61,000.00     | $50,094.23      |
| 2025-12-14 |      0.448 | $20,000.00     | $8,963.10       |
| 2025-11-09 |      0.212 | $47,000.00     | $9,971.25       |
| 2025-10-12 |      0.027 | $38,500.00     | $1,049.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
