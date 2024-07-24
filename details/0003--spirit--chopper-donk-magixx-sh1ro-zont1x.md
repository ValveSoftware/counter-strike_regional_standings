### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1940.3<br />
<br />
Final Rank Value (1940.3) = Starting Rank Value (1909.7) + Head To Head Adjustments (30.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.701[<sup>2</sup>](#table1)
- Opponent Network: 0.282[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.746<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1909.7
- 400 + ( ( 0.746 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1909.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      197 | 2024-07-18 | G2            | L   | 1.000      | -            | -                | -                | -         |   -15.72 | chopper, donk, magixx, sh1ro, zont1x |
|           31 |      279 | 2024-07-17 | MIBR          | W   | 1.000      | 1.000        | 0.257 (0.257)    | 0.561 (0.561)    | 1 (1.000) |     1.54 | chopper, donk, magixx, sh1ro, zont1x |
|           30 |      606 | 2024-06-16 | Natus Vincere | W   | 0.946      | 0.729        | 1.000 (0.690)    | 0.364 (0.251)    | 1 (0.946) |    14.82 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |      640 | 2024-06-15 | Vitality      | W   | 0.940      | 0.729        | 0.749 (0.513)    | 0.381 (0.261)    | 1 (0.940) |    12.87 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |      706 | 2024-06-13 | Virtus.pro    | W   | 0.927      | 0.729        | 0.595 (0.402)    | 0.374 (0.253)    | 1 (0.927) |     7.22 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |      735 | 2024-06-12 | G2            | W   | 0.921      | -            | -                | -                | 1 (0.921) |     0.02 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |     1199 | 2024-06-01 | Vitality      | L   | 0.847      | -            | -                | -                | -         |   -14.87 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |     1283 | 2024-05-29 | FaZe          | W   | 0.828      | 0.624        | 0.854 (0.441)    | 0.433 (0.224)    | 1 (0.828) |     9.35 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     1312 | 2024-05-28 | Natus Vincere | W   | 0.820      | 0.624        | 1.000 (0.512)    | 0.364 (0.186)    | 1 (0.820) |    14.48 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     1328 | 2024-05-27 | FlyQuest      | W   | 0.814      | 0.624        | -                | 0.349 (0.178)    | 1 (0.814) |     0.76 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     1550 | 2024-05-19 | MOUZ          | L   | 0.759      | -            | -                | -                | -         |   -10.38 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     1587 | 2024-05-18 | Falcons       | W   | 0.752      | 0.769        | 0.276 (0.159)    | -                | 1 (0.752) |     1.58 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     1651 | 2024-05-16 | HEROIC        | W   | 0.739      | 0.769        | 0.272 (0.155)    | 0.404 (0.229)    | 1 (0.739) |     3.36 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     1709 | 2024-05-15 | Aurora        | W   | 0.731      | 0.769        | 0.423 (0.238)    | 0.783 (0.440)    | -         |     2.20 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     2897 | 2024-03-28 | FaZe          | L   | 0.414      | -            | -                | -                | -         |    -8.94 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     3005 | 2024-03-22 | Natus Vincere | W   | 0.374      | 1.000        | 1.000 (0.374)    | -                | -         |     7.28 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     3020 | 2024-03-21 | Imperial      | W   | 0.367      | 1.000        | -                | 0.653 (0.240)    | -         |     0.51 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     3032 | 2024-03-21 | Cloud9        | W   | 0.366      | -            | -                | -                | -         |     0.14 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     3277 | 2024-03-10 | Metizport     | W   | 0.294      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     3297 | 2024-03-09 | BIG           | W   | 0.287      | -            | -                | -                | -         |     0.26 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     3332 | 2024-03-08 | Elevate       | W   | 0.279      | -            | -                | -                | -         |     0.06 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     3687 | 2024-02-21 | HEROIC        | W   | 0.173      | -            | -                | -                | -         |     0.87 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     3718 | 2024-02-20 | MOUZ          | L   | 0.166      | -            | -                | -                | -         |    -2.60 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3737 | 2024-02-19 | Astralis      | W   | 0.161      | -            | -                | -                | -         |     1.36 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3752 | 2024-02-19 | ENCE          | W   | 0.158      | -            | -                | -                | -         |     0.29 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3935 | 2024-02-11 | FaZe          | W   | 0.107      | -            | -                | -                | -         |     1.10 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3943 | 2024-02-10 | Falcons       | W   | 0.100      | -            | -                | -                | -         |     0.21 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     3992 | 2024-02-06 | FaZe          | W   | 0.073      | -            | -                | -                | -         |     0.74 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     4021 | 2024-02-04 | Complexity    | W   | 0.060      | -            | -                | -                | -         |     0.42 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     4042 | 2024-02-03 | Natus Vincere | W   | 0.053      | -            | -                | -                | -         |     1.05 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     4116 | 2024-02-01 | The MongolZ   | W   | 0.039      | -            | -                | -                | -         |     0.62 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     4129 | 2024-01-31 | Apeks         | W   | 0.033      | -            | -                | -                | -         |     0.01 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($390,369.37)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.946 | $200,000.00    | $189,280.79     |
| 2024-06-02 |      0.854 | $20,000.00     | $17,083.35      |
| 2024-05-19 |      0.759 | $100,000.00    | $75,916.86      |
| 2024-03-31 |      0.434 | $45,000.00     | $19,521.14      |
| 2024-03-10 |      0.294 | $20,000.00     | $5,883.13       |
| 2024-02-11 |      0.107 | $400,000.00    | $42,684.10      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
