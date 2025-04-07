### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Global Rank: [3](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [3]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1917.3<br />
<br />
Final Rank Value (1917.3) = Starting Rank Value (1915.5) + Head To Head Adjustments (1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.812[<sup>2</sup>](#table1)
- Opponent Network: 0.479[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.823<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1915.5
- 400 + ( ( 0.823 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 1915.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      145 | 2025-03-29 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -10.03 | chopper, donk, magixx, sh1ro, zont1x |
|           40 |      216 | 2025-03-28 | Natus Vincere     | W   | 1.000      | 0.715        | 0.718 (0.514)    | -                | 1 (1.000) |     8.59 | chopper, donk, magixx, sh1ro, zont1x |
|           39 |      348 | 2025-03-24 | Virtus.pro        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.49 | chopper, donk, magixx, sh1ro, zont1x |
|           38 |      353 | 2025-03-23 | FaZe              | W   | 1.000      | 0.715        | 0.724 (0.518)    | -                | 1 (1.000) |     7.18 | chopper, donk, magixx, sh1ro, zont1x |
|           37 |      390 | 2025-03-21 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |   -15.14 | chopper, donk, magixx, sh1ro, zont1x |
|           36 |      420 | 2025-03-19 | The Huns          | W   | 1.000      | 0.715        | -                | 0.479 (0.342)    | 1 (1.000) |     0.17 | chopper, donk, magixx, sh1ro, zont1x |
|           35 |      465 | 2025-03-15 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |   -16.40 | chopper, donk, magixx, sh1ro, zont1x |
|           34 |      500 | 2025-03-13 | Eternal Fire      | W   | 1.000      | 1.000        | 0.976 (0.976)    | 0.836 (0.836)    | 1 (1.000) |     9.02 | chopper, donk, magixx, sh1ro, zont1x |
|           33 |      618 | 2025-03-09 | The MongolZ       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.627 (0.627)    | 1 (1.000) |    14.38 | chopper, donk, magixx, sh1ro, zont1x |
|           32 |      666 | 2025-03-08 | SAW               | W   | 1.000      | 1.000        | -                | 0.436 (0.436)    | 1 (1.000) |     1.44 | chopper, donk, magixx, sh1ro, zont1x |
|           31 |      763 | 2025-03-07 | TYLOO             | W   | 0.992      | -            | -                | -                | 1 (0.992) |     0.16 | chopper, donk, magixx, sh1ro, zont1x |
|           30 |     1359 | 2025-02-09 | Vitality          | L   | 0.821      | -            | -                | -                | -         |   -10.24 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |     1402 | 2025-02-08 | Natus Vincere     | W   | 0.814      | 1.000        | 0.718 (0.585)    | 0.470 (0.383)    | 1 (0.814) |     7.54 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |     1450 | 2025-02-07 | Virtus.pro        | W   | 0.808      | 1.000        | -                | 0.435 (0.351)    | 1 (0.808) |     2.60 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |     1531 | 2025-02-04 | GamerLegion       | W   | 0.788      | 1.000        | -                | 0.541 (0.427)    | -         |     2.48 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |     1540 | 2025-02-04 | Liquid            | W   | 0.786      | 1.000        | -                | 0.477 (0.375)    | -         |     2.62 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |     1547 | 2025-02-03 | Natus Vincere     | L   | 0.781      | -            | -                | -                | -         |   -18.08 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     1562 | 2025-02-02 | Astralis          | W   | 0.773      | 1.000        | 0.638 (0.493)    | 0.710 (0.549)    | -         |     2.55 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     1612 | 2025-01-26 | Eternal Fire      | W   | 0.727      | 0.769        | 0.976 (0.546)    | 0.836 (0.468)    | -         |    10.39 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     1616 | 2025-01-25 | Natus Vincere     | W   | 0.721      | 0.769        | 0.718 (0.398)    | -                | -         |     6.14 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     1627 | 2025-01-23 | HEROIC            | W   | 0.707      | -            | -                | -                | -         |     0.13 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     1633 | 2025-01-18 | FlyQuest          | W   | 0.674      | -            | -                | -                | -         |     0.11 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     1648 | 2025-01-14 | fnatic            | W   | 0.648      | -            | -                | -                | -         |     0.13 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     1828 | 2024-12-15 | FaZe              | W   | 0.446      | -            | -                | -                | -         |     3.65 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     1856 | 2024-12-14 | MOUZ              | W   | 0.438      | 1.000        | 1.000 (0.438)    | -                | -         |     8.53 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     1892 | 2024-12-12 | Liquid            | W   | 0.425      | -            | -                | -                | -         |     1.70 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     1977 | 2024-12-07 | Falcons           | W   | 0.392      | 1.000        | 1.000 (0.392)    | -                | -         |     4.22 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     2014 | 2024-12-05 | Natus Vincere     | W   | 0.383      | -            | -                | -                | -         |     3.54 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     2032 | 2024-12-05 | Wildcard          | W   | 0.378      | -            | -                | -                | -         |     0.13 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     2043 | 2024-12-04 | FURIA             | L   | 0.377      | -            | -                | -                | -         |   -11.51 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     2241 | 2024-11-24 | Ninjas in Pyjamas | W   | 0.306      | -            | -                | -                | -         |     0.02 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     2246 | 2024-11-24 | Sashi             | W   | 0.305      | -            | -                | -                | -         |     0.03 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     2269 | 2024-11-23 | G2                | L   | 0.299      | -            | -                | -                | -         |    -6.46 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     2309 | 2024-11-21 | Aurora            | W   | 0.290      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     2325 | 2024-11-21 | Passion UA        | L   | 0.285      | -            | -                | -                | -         |    -8.95 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     2337 | 2024-11-20 | B8                | W   | 0.283      | -            | -                | -                | -         |     0.05 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     2735 | 2024-11-03 | G2                | L   | 0.165      | -            | -                | -                | -         |    -3.64 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     2757 | 2024-11-02 | Astralis          | W   | 0.160      | -            | -                | -                | -         |     0.65 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     2780 | 2024-11-01 | FaZe              | W   | 0.153      | -            | -                | -                | -         |     1.11 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     2798 | 2024-10-31 | G2                | L   | 0.147      | -            | -                | -                | -         |    -3.28 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     2821 | 2024-10-30 | Vitality          | W   | 0.140      | -            | -                | -                | -         |     2.70 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($771,012.44)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-30 |      1.000 | $40,000.00     | $40,000.00      |
| 2025-03-16 |      1.000 | $80,000.00     | $80,000.00      |
| 2025-02-09 |      0.821 | $216,000.00    | $177,276.92     |
| 2025-01-26 |      0.727 | $288,125.00    | $209,595.29     |
| 2024-12-15 |      0.446 | $500,000.00    | $222,779.36     |
| 2024-11-03 |      0.165 | $250,000.00    | $41,360.88      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
