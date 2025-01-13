### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Global Rank: [20](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_13.md)<br />
Regional Rank: [2]( ../../standings_asia_2025_01_13.md)<br />
<br />
Final Rank Value:  1325.4<br />
<br />
Final Rank Value (1325.4) = Starting Rank Value (1310.3) + Head To Head Adjustments (15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.572[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.785[<sup>2</sup>](#table1)

The average of these factors is 0.459<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1310.3
- 400 + ( ( 0.459 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1310.3


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
|           38 |      435 | 2024-12-02 | MIBR           | L   | 0.925      | -            | -                | -                | -         |   -11.65 | aliStair, dexter, INS, Liazz, Vexite |
|           37 |      454 | 2024-12-02 | paiN           | L   | 0.918      | -            | -                | -                | -         |   -10.31 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      473 | 2024-11-30 | Liquid         | L   | 0.911      | -            | -                | -                | -         |    -5.02 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      503 | 2024-11-30 | BIG            | W   | 0.905      | 0.143        | 0.257 (0.033)    | 0.469 (0.061)    | 1 (0.905) |    15.31 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      510 | 2024-11-29 | Complexity     | W   | 0.904      | 0.143        | 0.126 (0.016)    | 0.297 (0.038)    | 1 (0.904) |    16.03 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      865 | 2024-11-13 | Lynn Vision    | W   | 0.793      | 0.143        | 0.047 (0.005)    | -                | 1 (0.793) |     3.71 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |      875 | 2024-11-12 | DRILLAS        | W   | 0.791      | -            | -                | -                | 1 (0.791) |     2.03 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |      911 | 2024-11-11 | ex-GR          | W   | 0.784      | 0.143        | 0.027 (0.003)    | -                | 1 (0.784) |     1.32 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |      930 | 2024-11-11 | TALON          | L   | 0.780      | -            | -                | -                | -         |   -24.10 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     1340 | 2024-10-20 | Mindfreak      | W   | 0.631      | 0.333        | -                | 0.164 (0.034)    | -         |     0.62 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     1394 | 2024-10-18 | Mindfreak      | W   | 0.619      | 0.333        | -                | 0.164 (0.034)    | -         |     0.59 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     1637 | 2024-10-06 | BIG            | W   | 0.543      | 0.500        | 0.257 (0.070)    | 0.469 (0.127)    | 1 (0.543) |     9.59 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     1649 | 2024-10-06 | Wildcard       | W   | 0.540      | 0.500        | 0.227 (0.061)    | 0.634 (0.171)    | 1 (0.540) |     8.75 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     1710 | 2024-10-04 | SAW            | W   | 0.528      | 0.500        | 0.264 (0.070)    | 0.452 (0.119)    | 1 (0.528) |     9.83 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1722 | 2024-10-04 | BetBoom        | W   | 0.527      | 0.500        | 0.114 (0.030)    | 0.428 (0.113)    | 1 (0.527) |     4.62 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1876 | 2024-09-30 | Rooster        | W   | 0.499      | 0.333        | 0.013 (0.002)    | -                | -         |     0.52 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     1879 | 2024-09-30 | Rooster        | W   | 0.499      | -            | -                | -                | -         |     0.53 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     1987 | 2024-09-27 | The Art of War | W   | 0.479      | 0.333        | -                | 0.205 (0.033)    | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     1990 | 2024-09-27 | The Art of War | W   | 0.478      | -            | -                | -                | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     2033 | 2024-09-26 | Housebets      | W   | 0.472      | -            | -                | -                | -         |     0.35 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     2037 | 2024-09-26 | Housebets      | W   | 0.472      | -            | -                | -                | -         |     0.35 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     2089 | 2024-09-25 | Arcade         | W   | 0.465      | -            | -                | -                | -         |     0.32 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2093 | 2024-09-25 | Arcade         | W   | 0.465      | -            | -                | -                | -         |     0.32 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2624 | 2024-09-07 | Sangal         | L   | 0.346      | -            | -                | -                | -         |    -6.58 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2642 | 2024-09-06 | Lynn Vision    | W   | 0.341      | 0.889        | 0.047 (0.014)    | 0.264 (0.080)    | 1 (0.341) |     2.00 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2717 | 2024-09-04 | FaZe           | L   | 0.327      | -            | -                | -                | -         |    -0.36 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2759 | 2024-09-03 | Eternal Fire   | L   | 0.319      | -            | -                | -                | -         |    -3.78 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2844 | 2024-08-30 | Vantage        | W   | 0.292      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     2846 | 2024-08-30 | Vantage        | W   | 0.292      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     3075 | 2024-08-26 | MANTRA         | W   | 0.265      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3085 | 2024-08-26 | MANTRA         | W   | 0.265      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3268 | 2024-08-21 | KZG            | W   | 0.232      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3275 | 2024-08-21 | KZG            | W   | 0.232      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3491 | 2024-08-13 | DXA            | W   | 0.179      | -            | -                | -                | -         |     0.12 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3499 | 2024-08-13 | DXA            | W   | 0.178      | -            | -                | -                | -         |     0.12 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3634 | 2024-08-08 | The MongolZ    | L   | 0.146      | -            | -                | -                | -         |    -0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3682 | 2024-08-07 | BIG            | L   | 0.139      | -            | -                | -                | -         |    -1.62 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     4392 | 2024-07-18 | FURIA          | L   | 0.006      | -            | -                | -                | -         |    -0.03 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,243.64)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.926 | $10,000.00     | $9,256.79       |
| 2024-10-20 |      0.631 | $3,250.00      | $2,051.51       |
| 2024-10-06 |      0.543 | $50,000.00     | $27,127.29      |
| 2024-09-22 |      0.448 | $7,000.00      | $3,137.39       |
| 2024-08-09 |      0.155 | $2,500.00      | $387.52         |
| 2024-07-21 |      0.028 | $10,000.00     | $283.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
