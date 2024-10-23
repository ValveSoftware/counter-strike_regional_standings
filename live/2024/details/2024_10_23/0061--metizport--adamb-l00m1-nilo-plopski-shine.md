### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [61](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [42]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1002.6<br />
<br />
Final Rank Value (1002.6) = Starting Rank Value (924.3) + Head To Head Adjustments (78.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.443[<sup>2</sup>](#table1)
- Opponent Network: 0.238[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 924.3
- 400 + ( ( 0.268 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 924.3


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
|           42 |      219 | 2024-10-12 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -8.81 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           41 |      243 | 2024-10-10 | fnatic            | W   | 1.000      | 0.435        | 0.314 (0.137)    | 0.508 (0.221)    | 0 (0.000) |    25.94 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           40 |      320 | 2024-10-08 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.081 (0.035)    | 0.794 (0.345)    | 0 (0.000) |    12.28 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |      346 | 2024-10-07 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -10.03 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |      427 | 2024-10-04 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.760 (0.330)    | 0 (0.000) |    14.23 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |      472 | 2024-10-03 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.25 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |      549 | 2024-10-01 | G2 Ares           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.93 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |      886 | 2024-09-23 | Into the Breach   | L   | 0.997      | -            | -                | -                | -         |   -15.13 | adamb, L00m1, nilo, Plopski, Sapec    |
|           34 |     1074 | 2024-09-16 | 9INE              | W   | 0.951      | 0.384        | 0.106 (0.039)    | 0.714 (0.261)    | 0 (0.000) |    15.29 | adamb, L00m1, nilo, Plopski, Sapec    |
|           33 |     1230 | 2024-09-11 | Zero Tenacity     | L   | 0.919      | -            | -                | -                | -         |    -9.56 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |     1284 | 2024-09-09 | Zero Tenacity     | L   | 0.905      | -            | -                | -                | -         |   -10.13 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |     1430 | 2024-09-04 | Sampi             | W   | 0.872      | 0.384        | 0.049 (0.017)    | 0.631 (0.211)    | 0 (0.000) |    11.34 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |     1492 | 2024-09-02 | FAVBET            | W   | 0.858      | 0.384        | 0.050 (0.016)    | 0.873 (0.288)    | 0 (0.000) |    12.21 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |     1644 | 2024-08-28 | Nemiga            | W   | 0.825      | 0.384        | 0.775 (0.246)    | 0.835 (0.265)    | 0 (0.000) |    23.77 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     1709 | 2024-08-27 | ex-Enterprise     | W   | 0.817      | 0.384        | -                | 0.434 (0.136)    | 0 (0.000) |    10.33 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     1889 | 2024-08-22 | Complexity        | L   | 0.786      | -            | -                | -                | -         |    -0.56 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     1960 | 2024-08-21 | 9INE              | L   | 0.778      | -            | -                | -                | -         |   -10.53 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     2009 | 2024-08-20 | TSM               | L   | 0.771      | -            | -                | -                | -         |    -9.58 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     2026 | 2024-08-19 | Sashi             | L   | 0.766      | -            | -                | -                | -         |    -9.31 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     2142 | 2024-08-15 | PARIVISION        | L   | 0.738      | -            | -                | -                | -         |    -6.64 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     2243 | 2024-08-12 | Sampi             | W   | 0.718      | 0.384        | 0.049 (0.014)    | 0.631 (0.174)    | 0 (0.000) |    10.48 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     2344 | 2024-08-08 | Into the Breach   | W   | 0.691      | -            | -                | -                | -         |    10.16 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     2373 | 2024-08-07 | Johnny Speeds     | W   | 0.686      | -            | -                | -                | -         |    16.13 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     2382 | 2024-08-07 | TSM               | W   | 0.686      | -            | -                | -                | -         |    12.82 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     2429 | 2024-08-06 | UNPAID            | W   | 0.679      | 0.143        | 0.202 (0.020)    | -                | -         |    19.28 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     2433 | 2024-08-06 | HAVU              | W   | 0.678      | -            | -                | -                | -         |     2.37 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     2438 | 2024-08-06 | Johnny Speeds     | L   | 0.678      | -            | -                | -                | -         |    -5.04 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     2594 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.646      | -            | -                | -                | -         |    11.31 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     2604 | 2024-08-01 | Insilio           | L   | 0.645      | -            | -                | -                | -         |    -8.89 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     2701 | 2024-07-30 | QUAZAR            | W   | 0.631      | -            | -                | -                | -         |     2.16 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     2756 | 2024-07-28 | Insilio           | L   | 0.619      | -            | -                | -                | -         |    -8.54 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     2922 | 2024-07-23 | RUBY              | L   | 0.584      | -            | -                | -                | -         |   -11.58 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     2940 | 2024-07-22 | Permitta          | L   | 0.580      | -            | -                | -                | -         |    -8.57 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     3041 | 2024-07-19 | Sampi             | W   | 0.559      | 0.435        | -                | 0.631 (0.153)    | -         |     9.94 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     3097 | 2024-07-18 | BC.Game           | L   | 0.552      | -            | -                | -                | -         |   -10.90 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     3220 | 2024-07-16 | Endpoint          | W   | 0.539      | 0.435        | 0.055 (0.013)    | -                | -         |     8.50 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     4284 | 2024-05-23 | Space             | L   | 0.177      | -            | -                | -                | -         |    -3.82 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     4389 | 2024-05-20 | Zero Tenacity     | L   | 0.160      | -            | -                | -                | -         |    -1.61 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     4443 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.147      | -            | -                | -                | -         |     3.90 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     4530 | 2024-05-16 | Rare Atom         | W   | 0.132      | -            | -                | -                | -         |     1.38 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     4714 | 2024-05-11 | BetBoom           | L   | 0.098      | -            | -                | -                | -         |    -0.65 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     4729 | 2024-05-10 | EYEBALLERS        | W   | 0.093      | -            | -                | -                | -         |     0.70 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,216.18)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-26 |      1.000 | $500.00        | $500.00         |
| 2024-09-14 |      0.940 | $500.00        | $469.89         |
| 2024-08-25 |      0.807 | $5,000.00      | $4,033.41       |
| 2024-05-12 |      0.106 | $2,000.00      | $212.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
