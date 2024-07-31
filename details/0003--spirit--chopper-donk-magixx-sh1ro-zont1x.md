### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Global Rank: [3](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1938.3<br />
<br />
Final Rank Value (1938.3) = Starting Rank Value (1915.5) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.665[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.734<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1915.5
- 400 + ( ( 0.734 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1915.5


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
|           32 |       71 | 2024-07-30 | HEROIC        | W   | 1.000      | 0.581        | 0.210 (0.122)    | 0.382 (0.222)    | 1 (1.000) |     3.84 | chopper, donk, magixx, sh1ro, zont1x |
|           31 |      100 | 2024-07-29 | OG            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.19 | chopper, donk, magixx, sh1ro, zont1x |
|           30 |      439 | 2024-07-18 | G2            | L   | 1.000      | -            | -                | -                | -         |   -15.25 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |      521 | 2024-07-17 | MIBR          | W   | 1.000      | 1.000        | 0.202 (0.202)    | 0.610 (0.610)    | 1 (1.000) |     1.42 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |      848 | 2024-06-16 | Natus Vincere | W   | 0.899      | 0.729        | 1.000 (0.656)    | 0.331 (0.217)    | 1 (0.899) |    14.11 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |      882 | 2024-06-15 | Vitality      | W   | 0.893      | 0.729        | 0.592 (0.385)    | 0.385 (0.250)    | 1 (0.893) |    11.45 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |      948 | 2024-06-13 | Virtus.pro    | W   | 0.880      | 0.729        | 0.483 (0.310)    | 0.327 (0.210)    | 1 (0.880) |     5.68 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |      977 | 2024-06-12 | G2            | W   | 0.874      | -            | -                | -                | 1 (0.874) |     0.02 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     1441 | 2024-06-01 | Vitality      | L   | 0.800      | -            | -                | -                | -         |   -14.91 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     1525 | 2024-05-29 | FaZe          | W   | 0.780      | 0.624        | 0.643 (0.313)    | 0.410 (0.200)    | 1 (0.780) |     7.25 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     1554 | 2024-05-28 | Natus Vincere | W   | 0.773      | 0.624        | 1.000 (0.482)    | 0.331 (0.160)    | 1 (0.773) |    13.54 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     1570 | 2024-05-27 | FlyQuest      | W   | 0.767      | -            | -                | -                | 1 (0.767) |     0.54 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     1792 | 2024-05-19 | MOUZ          | L   | 0.712      | -            | -                | -                | -         |   -11.03 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     1829 | 2024-05-18 | Falcons       | W   | 0.705      | 0.769        | 0.208 (0.112)    | -                | -         |     1.51 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     1893 | 2024-05-16 | HEROIC        | W   | 0.692      | 0.769        | -                | 0.382 (0.203)    | -         |     2.69 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     1951 | 2024-05-15 | Aurora        | W   | 0.684      | 0.769        | 0.433 (0.228)    | 0.800 (0.420)    | -         |     3.01 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     3139 | 2024-03-28 | FaZe          | L   | 0.367      | -            | -                | -                | -         |    -8.71 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     3247 | 2024-03-22 | Natus Vincere | W   | 0.326      | 1.000        | 1.000 (0.326)    | -                | -         |     6.27 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     3262 | 2024-03-21 | Imperial      | W   | 0.320      | 1.000        | -                | 0.685 (0.219)    | -         |     0.31 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     3274 | 2024-03-21 | Cloud9        | W   | 0.319      | -            | -                | -                | -         |     0.09 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     3519 | 2024-03-10 | Metizport     | W   | 0.247      | -            | -                | -                | -         |     0.03 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     3539 | 2024-03-09 | BIG           | W   | 0.240      | -            | -                | -                | -         |     0.16 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     3574 | 2024-03-08 | Elevate       | W   | 0.232      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3929 | 2024-02-21 | HEROIC        | W   | 0.126      | -            | -                | -                | -         |     0.54 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3960 | 2024-02-20 | MOUZ          | L   | 0.119      | -            | -                | -                | -         |    -2.10 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3979 | 2024-02-19 | Astralis      | W   | 0.113      | -            | -                | -                | -         |     0.81 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3994 | 2024-02-19 | ENCE          | W   | 0.111      | -            | -                | -                | -         |     0.29 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     4177 | 2024-02-11 | FaZe          | W   | 0.059      | -            | -                | -                | -         |     0.47 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     4185 | 2024-02-10 | Falcons       | W   | 0.053      | -            | -                | -                | -         |     0.11 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     4234 | 2024-02-06 | FaZe          | W   | 0.026      | -            | -                | -                | -         |     0.20 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     4263 | 2024-02-04 | Complexity    | W   | 0.012      | -            | -                | -                | -         |     0.07 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     4284 | 2024-02-03 | Natus Vincere | W   | 0.006      | -            | -                | -                | -         |     0.12 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($353,248.56)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.899 | $200,000.00    | $179,823.26     |
| 2024-06-02 |      0.807 | $20,000.00     | $16,137.60      |
| 2024-05-19 |      0.712 | $100,000.00    | $71,188.09      |
| 2024-03-31 |      0.387 | $45,000.00     | $17,393.19      |
| 2024-03-10 |      0.247 | $20,000.00     | $4,937.38       |
| 2024-02-11 |      0.059 | $400,000.00    | $23,769.04      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
