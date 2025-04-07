### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [41](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [7]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  971.6<br />
<br />
Final Rank Value (971.6) = Starting Rank Value (945.9) + Head To Head Adjustments (25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.484[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.352[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 945.9
- 400 + ( ( 0.296 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 945.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      833 | 2025-03-05 | TYLOO        | L   | 0.980      | -            | -                | -                | -         |   -16.04 | dexter, INS, Liazz, regali, Vexite   |
|           22 |      852 | 2025-03-04 | Eternal Fire | L   | 0.973      | -            | -                | -                | -         |    -0.31 | dexter, INS, Liazz, regali, Vexite   |
|           21 |      862 | 2025-03-03 | paiN         | W   | 0.968      | 0.143        | 0.378 (0.052)    | 0.550 (0.076)    | 1 (0.968) |    28.75 | dexter, INS, Liazz, regali, Vexite   |
|           20 |      895 | 2025-03-02 | Lynn Vision  | W   | 0.959      | 0.143        | 0.021 (0.003)    | 0.328 (0.045)    | 1 (0.959) |    10.47 | dexter, INS, Liazz, regali, Vexite   |
|           19 |      927 | 2025-03-01 | M80          | L   | 0.952      | -            | -                | -                | -         |   -11.15 | dexter, INS, Liazz, regali, Vexite   |
|           18 |     1161 | 2025-02-16 | SAW          | L   | 0.867      | -            | -                | -                | -         |    -3.67 | dexter, INS, Liazz, regali, Vexite   |
|           17 |     1204 | 2025-02-15 | BIG          | L   | 0.858      | -            | -                | -                | -         |    -7.85 | dexter, INS, Liazz, regali, Vexite   |
|           16 |     1228 | 2025-02-14 | Falcons      | L   | 0.853      | -            | -                | -                | -         |    -0.35 | dexter, INS, Liazz, regali, Vexite   |
|           15 |     1586 | 2025-01-30 | Astralis     | L   | 0.754      | -            | -                | -                | -         |    -0.99 | dexter, INS, Liazz, regali, Vexite   |
|           14 |     1600 | 2025-01-29 | 3DMAX        | L   | 0.745      | -            | -                | -                | -         |    -0.74 | dexter, INS, Liazz, regali, Vexite   |
|           13 |     1633 | 2025-01-18 | Spirit       | L   | 0.674      | -            | -                | -                | -         |    -0.11 | dexter, INS, Liazz, regali, Vexite   |
|           12 |     1651 | 2025-01-14 | MIBR         | W   | 0.646      | 0.143        | 0.142 (0.013)    | 0.471 (0.043)    | 0 (0.000) |    16.66 | dexter, INS, Liazz, regali, Vexite   |
|           11 |     2080 | 2024-12-02 | MIBR         | L   | 0.364      | -            | -                | -                | -         |    -2.20 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     2100 | 2024-12-02 | paiN         | L   | 0.358      | -            | -                | -                | -         |    -0.53 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     2119 | 2024-11-30 | Liquid       | L   | 0.351      | -            | -                | -                | -         |    -0.41 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     2149 | 2024-11-30 | BIG          | W   | 0.345      | 0.143        | 0.206 (0.010)    | 0.415 (0.020)    | 1 (0.345) |     8.43 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     2156 | 2024-11-29 | Complexity   | W   | 0.344      | 0.143        | 0.128 (0.006)    | 0.600 (0.029)    | 1 (0.344) |     6.69 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     2515 | 2024-11-13 | Lynn Vision  | W   | 0.232      | 0.143        | 0.021 (0.001)    | 0.328 (0.011)    | 1 (0.232) |     2.25 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     2525 | 2024-11-12 | Adventurers  | W   | 0.231      | 0.143        | 0.001 (0.000)    | 0.023 (0.001)    | 1 (0.231) |     1.12 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     2562 | 2024-11-11 | ex-GR        | W   | 0.224      | 0.143        | 0.006 (0.000)    | 0.023 (0.001)    | 1 (0.224) |     1.24 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     2581 | 2024-11-11 | TALON        | L   | 0.219      | -            | -                | -                | -         |    -6.35 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     2999 | 2024-10-20 | Mindfreak    | W   | 0.071      | 0.333        | 0.011 (0.000)    | 0.073 (0.002)    | 0 (0.000) |     0.43 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3053 | 2024-10-18 | Mindfreak    | W   | 0.058      | 0.333        | 0.011 (0.000)    | 0.073 (0.001)    | 0 (0.000) |     0.35 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,603.21)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-05 |      0.982 | $6,500.00      | $6,380.91       |
| 2025-02-23 |      0.915 | $12,500.00     | $11,435.86      |
| 2025-01-31 |      0.761 | $2,500.00      | $1,902.34       |
| 2024-12-03 |      0.365 | $10,000.00     | $3,653.63       |
| 2024-10-20 |      0.071 | $3,250.00      | $230.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
