### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, sh1ro, zont1x, zweih<br />
Global Rank: [4](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [2]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1847.5<br />
<br />
Final Rank Value (1847.5) = Starting Rank Value (1787.7) + Head To Head Adjustments (59.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.799[<sup>2</sup>](#table1)
- Opponent Network: 0.297[<sup>2</sup>](#table1)
- LAN Wins: 0.737[<sup>2</sup>](#table1)

The average of these factors is 0.708<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1787.7
- 400 + ( ( 0.708 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1787.7


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
|           29 |      991 | 2025-09-01 | G2                | L   | 0.968      | -            | -                | -                | -         |   -16.77 | chopper, donk, sh1ro, zont1x, zweih  |
|           28 |     1007 | 2025-08-31 | Liquid            | W   | 0.960      | 0.561        | 0.546 (0.294)    | 0.476 (0.257)    | -         |     7.48 | chopper, donk, sh1ro, zont1x, zweih  |
|           27 |     1027 | 2025-08-30 | FURIA             | L   | 0.955      | -            | -                | -                | -         |   -13.06 | chopper, donk, sh1ro, zont1x, zweih  |
|           26 |     1107 | 2025-08-28 | FlyQuest          | W   | 0.940      | -            | -                | -                | -         |     0.96 | chopper, donk, sh1ro, zont1x, zweih  |
|           25 |     1262 | 2025-08-20 | HEROIC            | L   | 0.888      | -            | -                | -                | -         |   -26.02 | chopper, donk, sh1ro, zont1x, zweih  |
|           24 |     1339 | 2025-08-17 | The MongolZ       | W   | 0.867      | 0.769        | 1.000 (0.666)    | 0.486 (0.324)    | 1 (0.867) |    16.27 | chopper, donk, sh1ro, zont1x, zweih  |
|           23 |     1382 | 2025-08-16 | MOUZ              | W   | 0.860      | 0.769        | 0.982 (0.649)    | 0.493 (0.326)    | 1 (0.860) |    12.15 | chopper, donk, sh1ro, zont1x, zweih  |
|           22 |     1421 | 2025-08-15 | Virtus.pro        | W   | 0.854      | -            | -                | -                | 1 (0.854) |     2.16 | chopper, donk, sh1ro, zont1x, zweih  |
|           21 |     1676 | 2025-08-09 | G2                | W   | 0.814      | 0.624        | 0.781 (0.397)    | 0.592 (0.301)    | -         |    12.22 | chopper, donk, sh1ro, zont1x, zweih  |
|           20 |     1728 | 2025-08-06 | Passion UA        | W   | 0.794      | 0.624        | -                | 0.504 (0.250)    | -         |     0.32 | chopper, donk, sh1ro, zont1x, zweih  |
|           19 |     1761 | 2025-08-03 | MOUZ              | W   | 0.774      | 1.000        | 0.982 (0.760)    | 0.493 (0.381)    | 1 (0.774) |    11.73 | chopper, donk, sh1ro, zont1x, zweih  |
|           18 |     1781 | 2025-08-02 | Natus Vincere     | W   | 0.767      | 1.000        | 0.935 (0.717)    | 0.345 (0.265)    | 1 (0.767) |    11.51 | chopper, donk, sh1ro, zont1x, zweih  |
|           17 |     1839 | 2025-07-29 | MOUZ              | W   | 0.741      | 1.000        | 0.982 (0.727)    | 0.493 (0.365)    | 1 (0.741) |    11.38 | chopper, donk, sh1ro, zont1x, zweih  |
|           16 |     1861 | 2025-07-28 | Aurora            | W   | 0.733      | 1.000        | 1.000 (0.733)    | 0.351 (0.257)    | 1 (0.733) |    10.79 | chopper, donk, sh1ro, zont1x, zweih  |
|           15 |     1900 | 2025-07-27 | HEROIC            | W   | 0.726      | 1.000        | -                | 0.343 (0.249)    | 1 (0.726) |     2.15 | chopper, donk, sh1ro, zont1x, zweih  |
|           14 |     2444 | 2025-06-19 | MOUZ              | L   | 0.475      | -            | -                | -                | -         |    -7.73 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     2586 | 2025-06-13 | Natus Vincere     | W   | 0.434      | 1.000        | 0.935 (0.406)    | -                | 1 (0.434) |     6.72 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     2611 | 2025-06-12 | Lynn Vision       | W   | 0.428      | -            | -                | -                | 1 (0.428) |     1.12 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     2622 | 2025-06-12 | paiN              | W   | 0.427      | -            | -                | -                | -         |     2.23 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     2987 | 2025-05-18 | Astralis          | W   | 0.260      | -            | -                | -                | -         |     3.67 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3002 | 2025-05-17 | FURIA             | W   | 0.254      | 1.000        | 1.000 (0.254)    | -                | -         |     6.06 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3025 | 2025-05-16 | Ninjas in Pyjamas | W   | 0.247      | -            | -                | -                | -         |     2.15 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3136 | 2025-05-12 | Astralis          | W   | 0.220      | -            | -                | -                | -         |     3.15 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3170 | 2025-05-11 | Ninjas in Pyjamas | W   | 0.212      | -            | -                | -                | -         |     1.92 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     3193 | 2025-05-10 | GamerLegion       | W   | 0.206      | -            | -                | -                | -         |     1.33 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     3374 | 2025-05-03 | Vitality          | L   | 0.161      | -            | -                | -                | -         |    -2.27 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     3399 | 2025-05-02 | Wildcard          | W   | 0.154      | -            | -                | -                | -         |     0.17 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     3413 | 2025-05-01 | Falcons           | L   | 0.148      | -            | -                | -                | -         |    -2.19 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     3466 | 2025-04-30 | FlyQuest          | W   | 0.138      | -            | -                | -                | -         |     0.18 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($766,452.14)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-01 |      0.968 | $10,000.00     | $9,683.21       |
| 2025-08-24 |      0.913 | $20,000.00     | $18,251.47      |
| 2025-08-17 |      0.867 | $287,813.00    | $249,524.81     |
| 2025-08-03 |      0.774 | $460,000.00    | $355,972.46     |
| 2025-06-22 |      0.495 | $45,000.00     | $22,275.68      |
| 2025-05-18 |      0.260 | $400,000.00    | $104,041.23     |
| 2025-05-04 |      0.168 | $40,000.00     | $6,703.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
