### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, Sapec<br />
Global Rank: [61](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [44]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  994.2<br />
<br />
Final Rank Value (994.2) = Starting Rank Value (910.1) + Head To Head Adjustments (84.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.273[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.1
- 400 + ( ( 0.261 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 910.1


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
|           34 |       56 | 2024-09-16 | 9INE              | W   | 1.000      | 0.384        | -                | 0.747 (0.287)    | 0 (0.000) |    15.01 | adamb, L00m1, nilo, Plopski, Sapec    |
|           33 |      212 | 2024-09-11 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.46 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |      266 | 2024-09-09 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -11.33 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |      412 | 2024-09-04 | Sampi             | W   | 1.000      | 0.384        | 0.036 (0.014)    | 1.000 (0.384)    | 0 (0.000) |    12.03 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |      474 | 2024-09-02 | FAVBET            | W   | 1.000      | 0.384        | -                | 0.808 (0.310)    | 0 (0.000) |    11.22 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |      626 | 2024-08-28 | Nemiga            | W   | 1.000      | 0.384        | 0.291 (0.112)    | 0.811 (0.312)    | 0 (0.000) |    23.98 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |      691 | 2024-08-27 | ex-Enterprise     | W   | 1.000      | 0.384        | 0.040 (0.015)    | 0.654 (0.251)    | 0 (0.000) |    13.34 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |      871 | 2024-08-22 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -0.53 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |      942 | 2024-08-21 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -15.41 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |      991 | 2024-08-20 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -11.05 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     1008 | 2024-08-19 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -9.57 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     1124 | 2024-08-15 | PARIVISION        | L   | 0.972      | -            | -                | -                | -         |    -9.39 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     1225 | 2024-08-12 | Sampi             | W   | 0.953      | 0.384        | 0.036 (0.013)    | 1.000 (0.366)    | 0 (0.000) |    11.66 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     1326 | 2024-08-08 | Into the Breach   | W   | 0.926      | -            | -                | -                | 0 (0.000) |    12.34 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     1355 | 2024-08-07 | Johnny Speeds     | W   | 0.921      | 0.143        | 0.103 (0.014)    | 0.949 (0.125)    | 0 (0.000) |    22.95 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     1364 | 2024-08-07 | TSM               | W   | 0.920      | 0.143        | -                | 0.864 (0.114)    | 0 (0.000) |    18.41 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     1411 | 2024-08-06 | BLEED             | W   | 0.913      | 0.143        | 0.106 (0.014)    | -                | 0 (0.000) |    23.88 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     1415 | 2024-08-06 | HAVU              | W   | 0.913      | -            | -                | -                | -         |     3.96 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     1420 | 2024-08-06 | Johnny Speeds     | L   | 0.912      | -            | -                | -                | -         |    -4.98 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     1576 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.881      | 0.143        | 0.110 (0.014)    | -                | -         |    15.47 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     1586 | 2024-08-01 | Insilio           | L   | 0.880      | -            | -                | -                | -         |   -11.44 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     1683 | 2024-07-30 | QUAZAR            | W   | 0.866      | -            | -                | -                | -         |     3.11 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     1738 | 2024-07-28 | Insilio           | L   | 0.854      | -            | -                | -                | -         |   -11.19 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     1904 | 2024-07-23 | RUBY              | L   | 0.819      | -            | -                | -                | -         |   -14.02 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     1922 | 2024-07-22 | Permitta          | L   | 0.814      | -            | -                | -                | -         |   -12.28 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     2023 | 2024-07-19 | Sampi             | W   | 0.794      | 0.435        | 0.036 (0.012)    | 1.000 (0.345)    | -         |    12.12 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     2079 | 2024-07-18 | BC.Game           | L   | 0.787      | -            | -                | -                | -         |   -13.31 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     2202 | 2024-07-16 | Endpoint          | W   | 0.773      | 0.435        | 0.073 (0.025)    | 0.715 (0.240)    | -         |    13.29 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3266 | 2024-05-23 | Space             | L   | 0.412      | -            | -                | -                | -         |    -8.11 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     3371 | 2024-05-20 | Zero Tenacity     | L   | 0.395      | -            | -                | -                | -         |    -3.68 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     3425 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.381      | 0.500        | 0.230 (0.044)    | -                | -         |    11.23 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     3512 | 2024-05-16 | Rare Atom         | W   | 0.366      | -            | -                | -                | -         |     4.76 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     3696 | 2024-05-11 | BetBoom           | L   | 0.333      | -            | -                | -                | -         |    -1.70 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     3711 | 2024-05-10 | EYEBALLERS        | W   | 0.327      | -            | -                | -                | -         |     3.79 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,182.29)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      1.000 | $500.00        | $500.00         |
| 2024-08-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      0.341 | $2,000.00      | $682.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
