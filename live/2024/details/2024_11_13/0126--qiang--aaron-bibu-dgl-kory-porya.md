### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [126](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [90]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  763.5<br />
<br />
Final Rank Value (763.5) = Starting Rank Value (718.6) + Head To Head Adjustments (44.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.6
- 400 + ( ( 0.160 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 718.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     2316 | 2024-08-23 | Insilio       | L   | 0.651      | -            | -                | -                | -         |    -6.66 | Aaron, Bibu, DGL, kory, Porya |
|           24 |     2346 | 2024-08-22 | BIG           | L   | 0.645      | -            | -                | -                | -         |    -0.70 | Aaron, Bibu, DGL, kory, Porya |
|           23 |     2374 | 2024-08-21 | SAW           | L   | 0.640      | -            | -                | -                | -         |    -0.17 | Aaron, Bibu, DGL, kory, Porya |
|           22 |     2405 | 2024-08-21 | Sashi         | W   | 0.638      | 0.143        | 0.056 (0.005)    | 0.652 (0.059)    | 0 (0.000) |    15.90 | Aaron, Bibu, DGL, kory, Porya |
|           21 |     2761 | 2024-08-09 | Sashi         | L   | 0.558      | -            | -                | -                | -         |    -3.81 | Aaron, Bibu, DGL, kory, Porya |
|           20 |     2775 | 2024-08-08 | Permitta      | W   | 0.553      | 0.426        | 0.030 (0.007)    | 1.000 (0.236)    | 0 (0.000) |    15.64 | Aaron, Bibu, DGL, kory, Porya |
|           19 |     3073 | 2024-07-31 | B8            | L   | 0.501      | -            | -                | -                | -         |    -0.67 | Aaron, Bibu, DGL, kory, Porya |
|           18 |     3122 | 2024-07-30 | SovvyKiNG     | W   | 0.494      | 0.500        | 0.000 (0.000)    | 0.352 (0.087)    | 0 (0.000) |     8.22 | Aaron, Bibu, DGL, kory, Porya |
|           17 |     3157 | 2024-07-29 | ARCRED        | L   | 0.487      | -            | -                | -                | -         |    -5.65 | Aaron, Bibu, DGL, kory, Porya |
|           16 |     3482 | 2024-07-19 | Nexus         | L   | 0.420      | -            | -                | -                | -         |    -4.55 | Aaron, Bibu, DGL, kory, Porya |
|           15 |     3515 | 2024-07-18 | Nemiga        | L   | 0.414      | -            | -                | -                | -         |    -0.33 | Aaron, Bibu, DGL, kory, Porya |
|           14 |     3594 | 2024-07-17 | Verdant       | W   | 0.407      | 0.333        | 0.015 (0.002)    | 0.238 (0.032)    | 0 (0.000) |     9.37 | Aaron, Bibu, DGL, kory, Porya |
|           13 |     3650 | 2024-07-16 | Aurora        | L   | 0.400      | -            | -                | -                | -         |    -1.32 | Aaron, Bibu, DGL, kory, Porya |
|           12 |     3701 | 2024-07-15 | Betera        | W   | 0.393      | 0.333        | -                | 0.086 (0.011)    | 0 (0.000) |     3.64 | Aaron, Bibu, DGL, kory, Porya |
|           11 |     4018 | 2024-06-13 | ex-Enterprise | W   | 0.181      | 0.379        | 0.017 (0.001)    | 0.386 (0.026)    | 0 (0.000) |     4.61 | Aaron, Bibu, DGL, kory, Porya |
|           10 |     4054 | 2024-06-12 | Rebels        | W   | 0.174      | 0.379        | 0.035 (0.002)    | 0.469 (0.031)    | 0 (0.000) |     4.05 | Aaron, Bibu, DGL, kory, Porya |
|            9 |     4074 | 2024-06-11 | ECLOT         | W   | 0.167      | 0.379        | 0.077 (0.005)    | 1.000 (0.063)    | 0 (0.000) |     5.00 | Aaron, Bibu, DGL, kory, Porya |
|            8 |     4277 | 2024-06-07 | B8            | L   | 0.139      | -            | -                | -                | -         |    -0.14 | Aaron, Bibu, DGL, kory, Porya |
|            7 |     4281 | 2024-06-07 | Aurora        | L   | 0.139      | -            | -                | -                | -         |    -0.43 | Aaron, Bibu, DGL, kory, Porya |
|            6 |     4381 | 2024-06-05 | The Prodigies | W   | 0.127      | 0.379        | 0.005 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     1.63 | Aaron, Bibu, DGL, kory, Porya |
|            5 |     4464 | 2024-06-03 | GL Academy    | W   | 0.114      | -            | -                | -                | 0 (0.000) |     0.81 | Aaron, Bibu, DGL, kory, Porya |
|            4 |     4570 | 2024-05-30 | Rebels        | L   | 0.087      | -            | -                | -                | -         |    -0.71 | Aaron, Bibu, DGL, kory, Porya |
|            3 |     4750 | 2024-05-22 | System5       | W   | 0.034      | -            | -                | -                | -         |     0.36 | Aaron, Bibu, DGL, kory, Porya |
|            2 |     4798 | 2024-05-21 | EYEBALLERS    | W   | 0.027      | 0.500        | 0.000 (0.000)    | -                | -         |     0.36 | Aaron, Bibu, DGL, kory, Porya |
|            1 |     4837 | 2024-05-20 | Nexus         | W   | 0.020      | 0.379        | 0.015 (0.000)    | 0.470 (0.003)    | -         |     0.44 | Aaron, Bibu, DGL, kory, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,580.93)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.427 | $1,250.00      | $533.37         |
| 2024-06-13 |      0.181 | $10,895.00     | $1,970.65       |
| 2024-06-09 |      0.154 | $500.00        | $76.92          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
