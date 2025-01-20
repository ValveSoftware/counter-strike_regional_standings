### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [17](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_16.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_01_16.md)<br />
<br />
Final Rank Value:  1339.3<br />
<br />
Final Rank Value (1339.3) = Starting Rank Value (1307.5) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.571[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.779[<sup>2</sup>](#table1)

The average of these factors is 0.458<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1307.5
- 400 + ( ( 0.458 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1307.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       36 | 2025-01-14 | MIBR           | W   | 1.000      | 0.143        | 0.211 (0.030)    | 0.614 (0.088)    | -         |    19.61 | dexter, INS, Liazz, regali, Vexite   |
|           37 |      462 | 2024-12-02 | MIBR           | L   | 0.902      | -            | -                | -                | -         |   -11.40 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      481 | 2024-12-02 | paiN           | L   | 0.896      | -            | -                | -                | -         |   -10.09 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      500 | 2024-11-30 | Liquid         | L   | 0.889      | -            | -                | -                | -         |    -4.92 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      530 | 2024-11-30 | BIG            | W   | 0.883      | 0.143        | 0.257 (0.032)    | 0.491 (0.062)    | 1 (0.883) |    15.02 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      537 | 2024-11-29 | Complexity     | W   | 0.882      | 0.143        | 0.122 (0.015)    | 0.293 (0.037)    | 1 (0.882) |    15.27 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |      892 | 2024-11-13 | Lynn Vision    | W   | 0.770      | 0.143        | 0.033 (0.004)    | -                | 1 (0.770) |     2.73 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |      902 | 2024-11-12 | DRILLAS        | W   | 0.769      | -            | -                | -                | 1 (0.769) |     1.94 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |      938 | 2024-11-11 | ex-GR          | W   | 0.762      | 0.143        | 0.028 (0.003)    | -                | 1 (0.762) |     1.25 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |      957 | 2024-11-11 | TALON          | L   | 0.757      | -            | -                | -                | -         |   -23.41 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     1367 | 2024-10-20 | Mindfreak      | W   | 0.609      | 0.333        | -                | 0.160 (0.033)    | -         |     0.61 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     1421 | 2024-10-18 | Mindfreak      | W   | 0.596      | 0.333        | -                | 0.160 (0.032)    | -         |     0.58 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     1664 | 2024-10-06 | BIG            | W   | 0.520      | 0.500        | 0.257 (0.067)    | 0.491 (0.128)    | 1 (0.520) |     9.20 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     1676 | 2024-10-06 | Wildcard       | W   | 0.518      | 0.500        | 0.230 (0.060)    | 0.636 (0.165)    | 1 (0.518) |     8.41 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1737 | 2024-10-04 | SAW            | W   | 0.506      | 0.500        | 0.259 (0.066)    | 0.441 (0.112)    | 1 (0.506) |     9.12 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1749 | 2024-10-04 | BetBoom        | W   | 0.504      | 0.500        | 0.112 (0.028)    | 0.425 (0.107)    | 1 (0.504) |     4.34 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     1903 | 2024-09-30 | Rooster        | W   | 0.476      | -            | -                | -                | -         |     0.50 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     1906 | 2024-09-30 | Rooster        | W   | 0.476      | -            | -                | -                | -         |     0.50 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     2014 | 2024-09-27 | The Art of War | W   | 0.456      | -            | -                | -                | -         |     0.39 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     2017 | 2024-09-27 | The Art of War | W   | 0.456      | -            | -                | -                | -         |     0.40 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     2060 | 2024-09-26 | Housebets      | W   | 0.450      | -            | -                | -                | -         |     0.34 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     2064 | 2024-09-26 | Housebets      | W   | 0.449      | -            | -                | -                | -         |     0.34 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2116 | 2024-09-25 | Arcade         | W   | 0.443      | -            | -                | -                | -         |     0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2120 | 2024-09-25 | Arcade         | W   | 0.443      | -            | -                | -                | -         |     0.31 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2651 | 2024-09-07 | HEROIC         | L   | 0.324      | -            | -                | -                | -         |    -6.28 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2669 | 2024-09-06 | Lynn Vision    | W   | 0.318      | 0.889        | 0.033 (0.009)    | 0.217 (0.061)    | 1 (0.318) |     1.30 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2744 | 2024-09-04 | FaZe           | L   | 0.305      | -            | -                | -                | -         |    -0.33 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2786 | 2024-09-03 | Eternal Fire   | L   | 0.297      | -            | -                | -                | -         |    -3.73 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     2871 | 2024-08-30 | Vantage        | W   | 0.270      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     2873 | 2024-08-30 | Vantage        | W   | 0.269      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3102 | 2024-08-26 | MANTRA         | W   | 0.243      | -            | -                | -                | -         |     0.17 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3112 | 2024-08-26 | MANTRA         | W   | 0.243      | -            | -                | -                | -         |     0.17 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3295 | 2024-08-21 | KZG            | W   | 0.210      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3302 | 2024-08-21 | KZG            | W   | 0.209      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3518 | 2024-08-13 | DXA            | W   | 0.156      | -            | -                | -                | -         |     0.11 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3526 | 2024-08-13 | DXA            | W   | 0.156      | -            | -                | -                | -         |     0.11 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3661 | 2024-08-08 | The MongolZ    | L   | 0.124      | -            | -                | -                | -         |    -0.15 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3709 | 2024-08-07 | BIG            | L   | 0.117      | -            | -                | -                | -         |    -1.38 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,333.68)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.903 | $10,000.00     | $9,033.17       |
| 2024-10-20 |      0.609 | $3,250.00      | $1,978.83       |
| 2024-10-06 |      0.520 | $50,000.00     | $26,009.21      |
| 2024-09-22 |      0.426 | $7,000.00      | $2,980.86       |
| 2024-08-09 |      0.133 | $2,500.00      | $331.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
