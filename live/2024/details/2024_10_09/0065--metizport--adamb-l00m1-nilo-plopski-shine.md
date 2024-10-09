### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [65](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [46]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  962.3<br />
<br />
Final Rank Value (962.3) = Starting Rank Value (886.4) + Head To Head Adjustments (75.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.250[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 886.4
- 400 + ( ( 0.252 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 886.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       45 | 2024-10-08 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.084 (0.037)    | 0.812 (0.353)    | 0 (0.000) |    12.93 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |       71 | 2024-10-07 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -9.87 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |      152 | 2024-10-04 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.754 (0.328)    | 0 (0.000) |    14.52 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |      197 | 2024-10-03 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.10 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |      274 | 2024-10-01 | G2 Ares           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.43 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |      611 | 2024-09-23 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -14.32 | adamb, L00m1, nilo, Plopski, Sapec    |
|           34 |      799 | 2024-09-16 | 9INE              | W   | 1.000      | 0.384        | 0.097 (0.037)    | 0.671 (0.258)    | 0 (0.000) |    15.91 | adamb, L00m1, nilo, Plopski, Sapec    |
|           33 |      955 | 2024-09-11 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.32 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |     1009 | 2024-09-09 | Zero Tenacity     | L   | 0.999      | -            | -                | -                | -         |   -11.17 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |     1155 | 2024-09-04 | Sampi             | W   | 0.967      | 0.384        | 0.049 (0.018)    | 0.716 (0.266)    | 0 (0.000) |    12.99 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |     1217 | 2024-09-02 | FAVBET            | W   | 0.953      | 0.384        | -                | 0.768 (0.281)    | 0 (0.000) |    12.41 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |     1369 | 2024-08-28 | Nemiga            | W   | 0.919      | 0.384        | 0.218 (0.077)    | 0.758 (0.268)    | 0 (0.000) |    21.37 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     1434 | 2024-08-27 | ex-Enterprise     | W   | 0.912      | 0.384        | -                | 0.457 (0.160)    | 0 (0.000) |    12.43 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     1614 | 2024-08-22 | Complexity        | L   | 0.880      | -            | -                | -                | -         |    -0.58 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     1685 | 2024-08-21 | 9INE              | L   | 0.872      | -            | -                | -                | -         |   -12.15 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     1734 | 2024-08-20 | TSM               | L   | 0.865      | -            | -                | -                | -         |    -9.82 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     1751 | 2024-08-19 | Sashi             | L   | 0.860      | -            | -                | -                | -         |    -9.37 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     1867 | 2024-08-15 | PARIVISION        | L   | 0.832      | -            | -                | -                | -         |    -8.81 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     1968 | 2024-08-12 | Sampi             | W   | 0.813      | 0.384        | 0.049 (0.015)    | 0.716 (0.224)    | 0 (0.000) |    11.98 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     2069 | 2024-08-08 | Into the Breach   | W   | 0.786      | -            | -                | -                | 0 (0.000) |    12.08 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     2098 | 2024-08-07 | Johnny Speeds     | W   | 0.781      | 0.143        | 0.121 (0.014)    | -                | -         |    19.01 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     2107 | 2024-08-07 | TSM               | W   | 0.780      | -            | -                | -                | -         |    15.49 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     2154 | 2024-08-06 | BLEED             | W   | 0.773      | -            | -                | -                | -         |    18.91 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     2158 | 2024-08-06 | HAVU              | W   | 0.773      | -            | -                | -                | -         |     3.31 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     2163 | 2024-08-06 | Johnny Speeds     | L   | 0.772      | -            | -                | -                | -         |    -4.87 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     2319 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.740      | -            | -                | -                | -         |    13.67 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     2329 | 2024-08-01 | Insilio           | L   | 0.739      | -            | -                | -                | -         |    -9.64 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     2426 | 2024-07-30 | QUAZAR            | W   | 0.725      | -            | -                | -                | -         |     2.92 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     2481 | 2024-07-28 | Insilio           | L   | 0.713      | -            | -                | -                | -         |    -9.29 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     2647 | 2024-07-23 | RUBY              | L   | 0.679      | -            | -                | -                | -         |   -12.34 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     2665 | 2024-07-22 | Permitta          | L   | 0.674      | -            | -                | -                | -         |    -9.77 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     2766 | 2024-07-19 | Sampi             | W   | 0.654      | 0.435        | 0.049 (0.014)    | 0.716 (0.203)    | -         |    12.08 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     2822 | 2024-07-18 | BC.Game           | L   | 0.646      | -            | -                | -                | -         |   -11.49 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     2945 | 2024-07-16 | Endpoint          | W   | 0.633      | 0.435        | 0.056 (0.015)    | 0.578 (0.159)    | -         |    10.99 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     4009 | 2024-05-23 | Space             | L   | 0.272      | -            | -                | -                | -         |    -5.49 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     4114 | 2024-05-20 | Zero Tenacity     | L   | 0.255      | -            | -                | -                | -         |    -2.43 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     4168 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.241      | 0.500        | 0.145 (0.017)    | -                | -         |     6.66 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     4255 | 2024-05-16 | Rare Atom         | W   | 0.226      | -            | -                | -                | -         |     2.74 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     4439 | 2024-05-11 | BetBoom           | L   | 0.193      | -            | -                | -                | -         |    -0.94 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     4454 | 2024-05-10 | EYEBALLERS        | W   | 0.187      | -            | -                | -                | -         |     1.85 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,906.84)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $500.00        | $500.00         |
| 2024-09-14 |      1.000 | $500.00        | $500.00         |
| 2024-08-25 |      0.901 | $5,000.00      | $4,505.24       |
| 2024-05-12 |      0.201 | $2,000.00      | $401.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
