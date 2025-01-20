### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [17](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_17.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_01_17.md)<br />
<br />
Final Rank Value:  1338.5<br />
<br />
Final Rank Value (1338.5) = Starting Rank Value (1307.2) + Head To Head Adjustments (31.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.570[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.778[<sup>2</sup>](#table1)

The average of these factors is 0.457<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1307.2
- 400 + ( ( 0.457 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1307.2


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
|           38 |       14 | 2025-01-14 | MIBR           | W   | 1.000      | 0.143        | 0.211 (0.030)    | 0.613 (0.088)    | -         |    19.62 | dexter, INS, Liazz, regali, Vexite   |
|           37 |      439 | 2024-12-02 | MIBR           | L   | 0.896      | -            | -                | -                | -         |   -11.29 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      458 | 2024-12-02 | paiN           | L   | 0.890      | -            | -                | -                | -         |    -9.99 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      477 | 2024-11-30 | Liquid         | L   | 0.883      | -            | -                | -                | -         |    -5.00 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      507 | 2024-11-30 | BIG            | W   | 0.877      | 0.143        | 0.257 (0.032)    | 0.492 (0.062)    | 1 (0.877) |    14.80 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      514 | 2024-11-29 | Complexity     | W   | 0.875      | 0.143        | 0.121 (0.015)    | 0.292 (0.037)    | 1 (0.875) |    15.09 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |      869 | 2024-11-13 | Lynn Vision    | W   | 0.764      | 0.143        | 0.032 (0.004)    | -                | 1 (0.764) |     2.71 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |      879 | 2024-11-12 | DRILLAS        | W   | 0.763      | -            | -                | -                | 1 (0.763) |     1.91 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |      915 | 2024-11-11 | ex-GR          | W   | 0.756      | 0.143        | 0.028 (0.003)    | -                | 1 (0.756) |     1.24 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |      934 | 2024-11-11 | TALON          | L   | 0.751      | -            | -                | -                | -         |   -23.22 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     1344 | 2024-10-20 | Mindfreak      | W   | 0.603      | 0.333        | -                | 0.159 (0.032)    | -         |     0.60 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     1398 | 2024-10-18 | Mindfreak      | W   | 0.590      | 0.333        | -                | 0.159 (0.031)    | -         |     0.57 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     1641 | 2024-10-06 | BIG            | W   | 0.514      | 0.500        | 0.257 (0.066)    | 0.492 (0.126)    | 1 (0.514) |     9.01 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     1653 | 2024-10-06 | Wildcard       | W   | 0.512      | 0.500        | 0.231 (0.059)    | 0.636 (0.163)    | 1 (0.512) |     8.32 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1714 | 2024-10-04 | SAW            | W   | 0.500      | 0.500        | 0.257 (0.064)    | 0.439 (0.110)    | 1 (0.500) |     8.87 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1726 | 2024-10-04 | BetBoom        | W   | 0.498      | 0.500        | 0.112 (0.028)    | 0.474 (0.118)    | 1 (0.498) |     4.36 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     1880 | 2024-09-30 | Rooster        | W   | 0.470      | -            | -                | -                | -         |     0.49 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     1883 | 2024-09-30 | Rooster        | W   | 0.470      | -            | -                | -                | -         |     0.50 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     1991 | 2024-09-27 | The Art of War | W   | 0.450      | -            | -                | -                | -         |     0.39 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     1994 | 2024-09-27 | The Art of War | W   | 0.450      | -            | -                | -                | -         |     0.39 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     2037 | 2024-09-26 | Housebets      | W   | 0.444      | -            | -                | -                | -         |     0.33 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     2041 | 2024-09-26 | Housebets      | W   | 0.443      | -            | -                | -                | -         |     0.34 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2093 | 2024-09-25 | Arcade         | W   | 0.437      | -            | -                | -                | -         |     0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2097 | 2024-09-25 | Arcade         | W   | 0.437      | -            | -                | -                | -         |     0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2628 | 2024-09-07 | HEROIC         | L   | 0.318      | -            | -                | -                | -         |    -6.22 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2646 | 2024-09-06 | Lynn Vision    | W   | 0.312      | 0.889        | 0.032 (0.009)    | 0.217 (0.060)    | 1 (0.312) |     1.27 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2721 | 2024-09-04 | FaZe           | L   | 0.299      | -            | -                | -                | -         |    -0.32 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2763 | 2024-09-03 | Eternal Fire   | L   | 0.291      | -            | -                | -                | -         |    -3.70 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     2848 | 2024-08-30 | Vantage        | W   | 0.264      | -            | -                | -                | -         |     0.09 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     2850 | 2024-08-30 | Vantage        | W   | 0.263      | -            | -                | -                | -         |     0.09 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3079 | 2024-08-26 | MANTRA         | W   | 0.237      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3089 | 2024-08-26 | MANTRA         | W   | 0.237      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3272 | 2024-08-21 | KZG            | W   | 0.204      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3279 | 2024-08-21 | KZG            | W   | 0.203      | -            | -                | -                | -         |     0.16 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3495 | 2024-08-13 | DXA            | W   | 0.150      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3503 | 2024-08-13 | DXA            | W   | 0.150      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3638 | 2024-08-08 | The MongolZ    | L   | 0.118      | -            | -                | -                | -         |    -0.15 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3686 | 2024-08-07 | BIG            | L   | 0.111      | -            | -                | -                | -         |    -1.31 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($39,889.42)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.897 | $10,000.00     | $8,972.10       |
| 2024-10-20 |      0.603 | $3,250.00      | $1,958.98       |
| 2024-10-06 |      0.514 | $50,000.00     | $25,703.87      |
| 2024-09-22 |      0.420 | $7,000.00      | $2,938.11       |
| 2024-08-09 |      0.127 | $2,500.00      | $316.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
