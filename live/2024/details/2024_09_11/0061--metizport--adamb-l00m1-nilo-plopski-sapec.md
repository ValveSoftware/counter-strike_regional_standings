### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, Sapec<br />
Global Rank: [61](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [43]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  962.4<br />
<br />
Final Rank Value (962.4) = Starting Rank Value (893.3) + Head To Head Adjustments (69.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.3
- 400 + ( ( 0.254 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 893.3


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
|           33 |        7 | 2024-09-11 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.76 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |       61 | 2024-09-09 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -11.67 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |      207 | 2024-09-04 | Sampi             | W   | 1.000      | 0.384        | 0.032 (0.012)    | 1.000 (0.384)    | 0 (0.000) |    11.86 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |      269 | 2024-09-02 | FAVBET            | W   | 1.000      | 0.384        | -                | 0.673 (0.259)    | 0 (0.000) |    10.68 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |      421 | 2024-08-28 | Nemiga            | W   | 1.000      | 0.384        | 0.300 (0.115)    | 0.748 (0.287)    | 0 (0.000) |    24.29 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |      486 | 2024-08-27 | Enterprise        | W   | 1.000      | 0.384        | 0.039 (0.015)    | 0.673 (0.258)    | 0 (0.000) |    12.96 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |      666 | 2024-08-22 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -1.04 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |      737 | 2024-08-21 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -15.39 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |      786 | 2024-08-20 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -11.01 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |      803 | 2024-08-19 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -9.74 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |      919 | 2024-08-15 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |    -9.36 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     1020 | 2024-08-12 | Sampi             | W   | 0.999      | 0.384        | 0.032 (0.012)    | 1.000 (0.384)    | 0 (0.000) |    11.96 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     1121 | 2024-08-08 | Into the Breach   | W   | 0.972      | -            | -                | -                | 0 (0.000) |    11.65 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     1150 | 2024-08-07 | Johnny Speeds     | W   | 0.967      | 0.143        | 0.102 (0.014)    | 0.919 (0.127)    | 0 (0.000) |    24.29 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     1159 | 2024-08-07 | TSM               | W   | 0.966      | 0.143        | -                | 0.879 (0.121)    | 0 (0.000) |    19.39 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     1206 | 2024-08-06 | BLEED             | W   | 0.959      | 0.143        | 0.100 (0.014)    | -                | 0 (0.000) |    25.00 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     1210 | 2024-08-06 | HAVU              | W   | 0.959      | -            | -                | -                | 0 (0.000) |     4.30 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     1215 | 2024-08-06 | Johnny Speeds     | L   | 0.958      | -            | -                | -                | -         |    -4.90 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     1371 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.927      | 0.143        | 0.103 (0.014)    | 0.812 (0.107)    | -         |    16.09 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     1381 | 2024-08-01 | Insilio           | L   | 0.926      | -            | -                | -                | -         |   -12.68 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     1478 | 2024-07-30 | QUAZAR            | W   | 0.912      | -            | -                | -                | -         |     3.09 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     1533 | 2024-07-28 | Insilio           | L   | 0.900      | -            | -                | -                | -         |   -12.57 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     1699 | 2024-07-23 | RUBY              | L   | 0.865      | -            | -                | -                | -         |   -14.55 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     1717 | 2024-07-22 | Permitta          | L   | 0.860      | -            | -                | -                | -         |   -12.99 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     1818 | 2024-07-19 | Sampi             | W   | 0.840      | 0.435        | 0.032 (0.012)    | 1.000 (0.365)    | -         |    12.51 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     1874 | 2024-07-18 | BC.Game           | L   | 0.833      | -            | -                | -                | -         |   -13.65 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     1997 | 2024-07-16 | Endpoint          | W   | 0.819      | 0.435        | 0.066 (0.024)    | 0.703 (0.250)    | -         |    13.92 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3061 | 2024-05-23 | Space             | L   | 0.458      | -            | -                | -                | -         |    -8.68 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     3166 | 2024-05-20 | Zero Tenacity     | L   | 0.441      | -            | -                | -                | -         |    -4.23 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     3220 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.427      | 0.500        | 0.232 (0.050)    | -                | -         |    12.66 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     3307 | 2024-05-16 | Rare Atom         | W   | 0.412      | -            | -                | -                | -         |     5.57 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     3491 | 2024-05-11 | BetBoom           | L   | 0.379      | -            | -                | -                | -         |    -1.69 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     3506 | 2024-05-10 | EYEBALLERS        | W   | 0.373      | -            | -                | -                | -         |     3.81 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,774.23)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      0.387 | $2,000.00      | $774.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
