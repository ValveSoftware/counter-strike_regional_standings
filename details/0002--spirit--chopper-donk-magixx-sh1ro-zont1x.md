### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Global Rank: [2](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1928.6<br />
<br />
Final Rank Value (1928.6) = Starting Rank Value (1904.0) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.664[<sup>2</sup>](#table1)
- Opponent Network: 0.261[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.731<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1904.0
- 400 + ( ( 0.731 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1904.0


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
|           30 |      109 | 2024-08-03 | Complexity    | W   | 1.000      | 0.581        | 0.341 (0.198)    | 0.364 (0.211)    | 1 (1.000) |     3.86 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |      279 | 2024-07-30 | HEROIC        | W   | 1.000      | 0.581        | 0.224 (0.130)    | 0.354 (0.206)    | 1 (1.000) |     3.88 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |      308 | 2024-07-29 | OG            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.20 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |      647 | 2024-07-18 | G2            | L   | 1.000      | -            | -                | -                | -         |   -14.57 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |      729 | 2024-07-17 | MIBR          | W   | 1.000      | 1.000        | 0.207 (0.207)    | 0.633 (0.633)    | 1 (1.000) |     1.42 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |     1056 | 2024-06-16 | Natus Vincere | W   | 0.860      | 0.729        | 1.000 (0.627)    | 0.357 (0.224)    | 1 (0.860) |    13.49 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     1090 | 2024-06-15 | Vitality      | W   | 0.853      | 0.729        | 0.647 (0.402)    | 0.366 (0.228)    | 1 (0.853) |    11.44 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     1156 | 2024-06-13 | Virtus.pro    | W   | 0.841      | 0.729        | 0.499 (0.306)    | 0.308 (0.189)    | 1 (0.841) |     5.28 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     1185 | 2024-06-12 | G2            | W   | 0.835      | -            | -                | -                | 1 (0.835) |     0.02 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     1649 | 2024-06-01 | Vitality      | L   | 0.760      | -            | -                | -                | -         |   -13.69 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     1733 | 2024-05-29 | FaZe          | W   | 0.741      | 0.624        | 0.625 (0.289)    | 0.382 (0.177)    | 1 (0.741) |     6.32 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     1762 | 2024-05-28 | Natus Vincere | W   | 0.733      | 0.624        | 1.000 (0.458)    | -                | 1 (0.733) |    12.79 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     1778 | 2024-05-27 | FlyQuest      | W   | 0.728      | -            | -                | -                | -         |     0.47 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     2000 | 2024-05-19 | MOUZ          | L   | 0.673      | -            | -                | -                | -         |   -10.94 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     2037 | 2024-05-18 | Falcons       | W   | 0.665      | -            | -                | -                | -         |     1.30 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     2101 | 2024-05-16 | HEROIC        | W   | 0.653      | 0.769        | -                | 0.354 (0.178)    | -         |     2.49 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     2159 | 2024-05-15 | Aurora        | W   | 0.645      | 0.769        | 0.420 (0.208)    | 0.758 (0.376)    | -         |     2.98 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     3347 | 2024-03-28 | FaZe          | L   | 0.328      | -            | -                | -                | -         |    -8.09 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     3455 | 2024-03-22 | Natus Vincere | W   | 0.287      | 1.000        | 1.000 (0.287)    | -                | -         |     5.44 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     3470 | 2024-03-21 | Imperial      | W   | 0.281      | 1.000        | -                | 0.658 (0.185)    | -         |     0.24 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     3482 | 2024-03-21 | Cloud9        | W   | 0.280      | -            | -                | -                | -         |     0.07 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3727 | 2024-03-10 | Metizport     | W   | 0.208      | -            | -                | -                | -         |     0.03 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3747 | 2024-03-09 | BIG           | W   | 0.201      | -            | -                | -                | -         |     0.21 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3782 | 2024-03-08 | Elevate       | W   | 0.193      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     4137 | 2024-02-21 | HEROIC        | W   | 0.087      | -            | -                | -                | -         |     0.35 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     4168 | 2024-02-20 | MOUZ          | L   | 0.080      | -            | -                | -                | -         |    -1.48 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     4187 | 2024-02-19 | Astralis      | W   | 0.074      | -            | -                | -                | -         |     0.63 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     4202 | 2024-02-19 | ENCE          | W   | 0.072      | -            | -                | -                | -         |     0.19 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     4385 | 2024-02-11 | FaZe          | W   | 0.020      | -            | -                | -                | -         |     0.14 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     4393 | 2024-02-10 | Falcons       | W   | 0.014      | -            | -                | -                | -         |     0.03 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($345,004.49)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $22,500.00     | $22,500.00      |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.860 | $200,000.00    | $171,990.37     |
| 2024-06-02 |      0.768 | $20,000.00     | $15,354.31      |
| 2024-05-19 |      0.673 | $100,000.00    | $67,271.65      |
| 2024-03-31 |      0.347 | $45,000.00     | $15,630.80      |
| 2024-03-10 |      0.208 | $20,000.00     | $4,154.09       |
| 2024-02-11 |      0.020 | $400,000.00    | $8,103.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
