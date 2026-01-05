### Roster Details<br />
Team Name: G2<br />
Roster: HeavyGod, huNter-, malbsMd, MATYS, SunPayus<br />
Global Rank: [12](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [9]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1663.5<br />
<br />
Final Rank Value (1663.5) = Starting Rank Value (1602.9) + Head To Head Adjustments (60.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.738[<sup>1</sup>](#table2)
- Bounty Collected: 0.669[<sup>2</sup>](#table1)
- Opponent Network: 0.296[<sup>2</sup>](#table1)
- LAN Wins: 0.723[<sup>2</sup>](#table1)

The average of these factors is 0.606<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1602.9
- 400 + ( ( 0.606 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1602.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      317 | 2025-12-07 | Falcons      | L   | 1.000      | -            | -                | -                | -         |    -6.53 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           37 |      339 | 2025-12-06 | The MongolZ  | L   | 1.000      | -            | -                | -                | -         |   -10.88 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           36 |      366 | 2025-12-05 | FURIA        | L   | 0.995      | -            | -                | -                | -         |    -4.24 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           35 |      400 | 2025-12-04 | paiN         | W   | 0.987      | 1.000        | 0.386 (0.381)    | 0.300 (0.296)    | 1 (0.987) |    11.33 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           34 |      408 | 2025-12-04 | Passion UA   | W   | 0.986      | 1.000        | 0.144 (0.142)    | 0.507 (0.500)    | 1 (0.986) |     9.71 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           33 |     1263 | 2025-11-05 | Vitality     | L   | 0.792      | -            | -                | -                | -         |    -3.69 | HeavyGod, malbsMd, MATYS, sAw, SunPayus     |
|           32 |     1267 | 2025-11-04 | Virtus.pro   | W   | 0.790      | -            | -                | -                | 1 (0.790) |     1.86 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           31 |     1295 | 2025-11-03 | FURIA        | L   | 0.783      | -            | -                | -                | -         |    -4.19 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           30 |     1316 | 2025-11-03 | 3DMAX        | W   | 0.778      | 1.000        | 0.523 (0.407)    | 0.515 (0.401)    | 1 (0.778) |    12.17 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           29 |     2134 | 2025-10-08 | 3DMAX        | L   | 0.606      | -            | -                | -                | -         |    -8.41 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           28 |     2176 | 2025-10-07 | Vitality     | L   | 0.601      | -            | -                | -                | -         |    -2.97 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           27 |     2237 | 2025-10-06 | Spirit       | L   | 0.594      | -            | -                | -                | -         |    -5.67 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           26 |     2300 | 2025-10-05 | FURIA        | W   | 0.587      | 1.000        | 1.000 (0.587)    | 0.563 (0.330)    | 1 (0.587) |    15.23 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           25 |     2361 | 2025-10-04 | FaZe         | W   | 0.579      | 1.000        | 0.634 (0.367)    | 0.579 (0.335)    | 1 (0.579) |    13.93 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           24 |     2438 | 2025-10-02 | ENCE         | W   | 0.566      | 0.769        | -                | 0.741 (0.322)    | 1 (0.566) |     3.27 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           23 |     2473 | 2025-10-01 | Fluxo        | W   | 0.559      | 0.769        | -                | 0.473 (0.203)    | 1 (0.559) |     1.97 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           22 |     2510 | 2025-09-30 | B8           | L   | 0.552      | -            | -                | -                | -         |    -7.34 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           21 |     2535 | 2025-09-29 | Gentle Mates | L   | 0.547      | -            | -                | -                | -         |   -12.40 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           20 |     2595 | 2025-09-28 | Rooster      | W   | 0.538      | -            | -                | -                | 1 (0.538) |     0.10 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           19 |     2899 | 2025-09-19 | The MongolZ  | L   | 0.478      | -            | -                | -                | -         |    -3.66 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           18 |     2994 | 2025-09-16 | GamerLegion  | W   | 0.459      | 1.000        | -                | 0.463 (0.212)    | 1 (0.459) |     5.10 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           17 |     3008 | 2025-09-15 | Legacy       | W   | 0.454      | 1.000        | 1.000 (0.454)    | 0.436 (0.198)    | -         |     8.94 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           16 |     3038 | 2025-09-14 | FURIA        | L   | 0.447      | -            | -                | -                | -         |    -2.15 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           15 |     3114 | 2025-09-13 | Lynn Vision  | W   | 0.439      | -            | -                | -                | -         |     1.24 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           14 |     3370 | 2025-09-07 | Vitality     | W   | 0.401      | 0.675        | 1.000 (0.271)    | 0.590 (0.160)    | -         |    11.06 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           13 |     3404 | 2025-09-06 | FURIA        | W   | 0.394      | 0.675        | 1.000 (0.266)    | -                | -         |    10.74 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           12 |     3423 | 2025-09-05 | FaZe         | W   | 0.388      | 0.675        | 0.634 (0.166)    | -                | -         |    10.01 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           11 |     3471 | 2025-09-01 | Spirit       | W   | 0.361      | 0.561        | 0.789 (0.160)    | -                | -         |     8.72 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           10 |     3485 | 2025-08-31 | FlyQuest     | W   | 0.354      | -            | -                | -                | -         |     1.94 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            9 |     3511 | 2025-08-30 | MOUZ         | L   | 0.347      | -            | -                | -                | -         |    -2.89 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            8 |     3590 | 2025-08-28 | Liquid       | W   | 0.333      | -            | -                | -                | -         |     6.27 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            7 |     3727 | 2025-08-21 | Falcons      | L   | 0.286      | -            | -                | -                | -         |    -1.61 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            6 |     4158 | 2025-08-09 | Spirit       | L   | 0.207      | -            | -                | -                | -         |    -1.51 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            5 |     4222 | 2025-08-05 | Nemiga       | W   | 0.180      | -            | -                | -                | -         |     0.30 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            4 |     4317 | 2025-07-29 | FURIA        | L   | 0.134      | -            | -                | -                | -         |    -0.51 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            3 |     4341 | 2025-07-28 | 3DMAX        | W   | 0.127      | -            | -                | -                | -         |     2.58 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            2 |     4371 | 2025-07-27 | Vitality     | L   | 0.120      | -            | -                | -                | -         |    -0.38 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            1 |     4407 | 2025-07-26 | FURIA        | W   | 0.113      | -            | -                | -                | -         |     3.13 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($189,352.73)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-11-09 |      0.819 | $47,000.00     | $38,471.88      |
| 2025-10-12 |      0.634 | $38,500.00     | $24,395.85      |
| 2025-09-21 |      0.494 | $67,500.00     | $33,375.27      |
| 2025-09-07 |      0.401 | $150,000.00    | $60,114.85      |
| 2025-08-24 |      0.306 | $20,000.00     | $6,114.45       |
| 2025-08-10 |      0.214 | $2,500.00      | $534.36         |
| 2025-08-03 |      0.167 | $38,000.00     | $6,346.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
