### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, sh1ro, zont1x, zweih<br />
Global Rank: [8](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  1772.9<br />
<br />
Final Rank Value (1772.9) = Starting Rank Value (1695.6) + Head To Head Adjustments (77.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.979[<sup>1</sup>](#table2)
- Bounty Collected: 0.688[<sup>2</sup>](#table1)
- Opponent Network: 0.360[<sup>2</sup>](#table1)
- LAN Wins: 0.738[<sup>2</sup>](#table1)

The average of these factors is 0.691<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1695.6
- 400 + ( ( 0.691 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 1695.6


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
|           29 |      451 | 2025-10-10 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -18.82 | chopper, donk, sh1ro, tN1R, zweih    |
|           28 |      656 | 2025-10-06 | G2                | W   | 1.000      | 1.000        | 0.442 (0.442)    | 0.496 (0.496)    | 1 (1.000) |    16.13 | chopper, donk, sh1ro, tN1R, zweih    |
|           27 |      727 | 2025-10-05 | HOTU              | W   | 1.000      | 1.000        | -                | 0.548 (0.548)    | 1 (1.000) |     3.22 | chopper, donk, sh1ro, tN1R, zweih    |
|           26 |      785 | 2025-10-04 | Inner Circle      | W   | 0.998      | 1.000        | -                | 0.672 (0.671)    | 1 (0.998) |     2.17 | chopper, donk, sh1ro, tN1R, zweih    |
|           25 |     1890 | 2025-09-01 | G2                | L   | 0.781      | -            | -                | -                | -         |   -13.04 | chopper, donk, sh1ro, zont1x, zweih  |
|           24 |     1906 | 2025-08-31 | Liquid            | W   | 0.773      | 0.561        | 0.583 (0.253)    | 0.570 (0.247)    | -         |    11.83 | chopper, donk, sh1ro, zont1x, zweih  |
|           23 |     1926 | 2025-08-30 | FURIA             | L   | 0.767      | -            | -                | -                | -         |    -6.66 | chopper, donk, sh1ro, zont1x, zweih  |
|           22 |     2006 | 2025-08-28 | FlyQuest          | W   | 0.753      | -            | -                | -                | -         |     1.69 | chopper, donk, sh1ro, zont1x, zweih  |
|           21 |     2161 | 2025-08-20 | HEROIC            | L   | 0.701      | -            | -                | -                | -         |   -16.15 | chopper, donk, sh1ro, zont1x, zweih  |
|           20 |     2238 | 2025-08-17 | The MongolZ       | W   | 0.680      | 0.769        | 1.000 (0.523)    | 0.487 (0.254)    | 1 (0.680) |    14.87 | chopper, donk, sh1ro, zont1x, zweih  |
|           19 |     2281 | 2025-08-16 | MOUZ              | W   | 0.673      | 0.769        | 0.547 (0.283)    | 0.513 (0.265)    | 1 (0.673) |    10.70 | chopper, donk, sh1ro, zont1x, zweih  |
|           18 |     2320 | 2025-08-15 | Virtus.pro        | W   | 0.667      | -            | -                | -                | 1 (0.667) |     1.81 | chopper, donk, sh1ro, zont1x, zweih  |
|           17 |     2577 | 2025-08-09 | G2                | W   | 0.627      | -            | -                | -                | -         |    10.09 | chopper, donk, sh1ro, zont1x, zweih  |
|           16 |     2629 | 2025-08-06 | Passion UA        | W   | 0.607      | -            | -                | -                | -         |     0.20 | chopper, donk, sh1ro, zont1x, zweih  |
|           15 |     2662 | 2025-08-03 | MOUZ              | W   | 0.587      | 1.000        | 0.547 (0.321)    | 0.513 (0.301)    | 1 (0.587) |     9.79 | chopper, donk, sh1ro, zont1x, zweih  |
|           14 |     2682 | 2025-08-02 | Natus Vincere     | W   | 0.580      | 1.000        | 0.798 (0.463)    | -                | 1 (0.580) |    12.26 | chopper, donk, sh1ro, zont1x, zweih  |
|           13 |     2740 | 2025-07-29 | MOUZ              | W   | 0.553      | 1.000        | 0.547 (0.302)    | 0.513 (0.284)    | 1 (0.553) |     9.37 | chopper, donk, sh1ro, zont1x, zweih  |
|           12 |     2762 | 2025-07-28 | Aurora            | W   | 0.546      | 1.000        | 1.000 (0.546)    | 0.544 (0.297)    | 1 (0.546) |    13.57 | chopper, donk, sh1ro, zont1x, zweih  |
|           11 |     2801 | 2025-07-27 | HEROIC            | W   | 0.539      | 1.000        | 0.340 (0.183)    | 0.437 (0.236)    | -         |     6.46 | chopper, donk, sh1ro, zont1x, zweih  |
|           10 |     3345 | 2025-06-19 | MOUZ              | L   | 0.288      | -            | -                | -                | -         |    -4.20 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3487 | 2025-06-13 | Natus Vincere     | W   | 0.247      | 1.000        | 0.798 (0.197)    | -                | -         |     5.53 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3512 | 2025-06-12 | Lynn Vision       | W   | 0.241      | -            | -                | -                | -         |     0.43 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3523 | 2025-06-12 | paiN              | W   | 0.240      | -            | -                | -                | -         |     2.18 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3888 | 2025-05-18 | Astralis          | W   | 0.073      | -            | -                | -                | -         |     1.08 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     3903 | 2025-05-17 | FURIA             | W   | 0.066      | -            | -                | -                | -         |     1.77 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     3926 | 2025-05-16 | Ninjas in Pyjamas | W   | 0.060      | -            | -                | -                | -         |     0.28 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     4037 | 2025-05-12 | Astralis          | W   | 0.033      | -            | -                | -                | -         |     0.48 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     4071 | 2025-05-11 | Ninjas in Pyjamas | W   | 0.025      | -            | -                | -                | -         |     0.12 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     4094 | 2025-05-10 | GamerLegion       | W   | 0.019      | -            | -                | -                | -         |     0.27 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($588,913.75)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.95) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-12 |      1.000 | $58,000.00     | $58,000.00      |
| 2025-09-01 |      0.781 | $10,000.00     | $7,811.83       |
| 2025-08-24 |      0.725 | $20,000.00     | $14,508.70      |
| 2025-08-17 |      0.680 | $287,813.00    | $195,663.98     |
| 2025-08-03 |      0.587 | $460,000.00    | $269,888.85     |
| 2025-06-22 |      0.308 | $45,000.00     | $13,854.45      |
| 2025-05-18 |      0.073 | $400,000.00    | $29,185.93      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
