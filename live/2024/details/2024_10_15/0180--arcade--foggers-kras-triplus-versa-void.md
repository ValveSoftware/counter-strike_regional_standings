### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [180](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_15.md)<br />
Regional Rank: [19]( ../../standings_asia_2024_10_15.md)<br />
<br />
Final Rank Value:  633.9<br />
<br />
Final Rank Value (633.9) = Starting Rank Value (705.0) + Head To Head Adjustments (-71.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.0
- 400 + ( ( 0.157 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 705.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      100 | 2024-10-09 | DXA              | L   | 1.000      | -            | -                | -                | -         |   -16.04 | foggers, Kras, TRIPLUS, versa, void    |
|           31 |      105 | 2024-10-09 | DXA              | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.225 (0.075)    | 0 (0.000) |    15.43 | foggers, Kras, TRIPLUS, versa, void    |
|           30 |      623 | 2024-09-25 | FlyQuest         | L   | 1.000      | -            | -                | -                | -         |    -1.03 | foggers, Kras, TRIPLUS, versa, void    |
|           29 |      627 | 2024-09-25 | FlyQuest         | L   | 1.000      | -            | -                | -                | -         |    -1.04 | foggers, Kras, TRIPLUS, versa, void    |
|           28 |     1473 | 2024-08-28 | Mindfreak        | L   | 0.879      | -            | -                | -                | -         |   -11.21 | foggers, supar, TRIPLUS, versa, void   |
|           27 |     1492 | 2024-08-28 | The Art of War   | W   | 0.878      | 0.143        | 0.000 (0.000)    | 0.366 (0.046)    | 0 (0.000) |    16.32 | foggers, supar, TRIPLUS, versa, void   |
|           26 |     1528 | 2024-08-27 | Housebets        | W   | 0.873      | 0.143        | 0.001 (0.000)    | 0.156 (0.019)    | 0 (0.000) |    14.72 | foggers, supar, TRIPLUS, versa, void   |
|           25 |     1537 | 2024-08-27 | Mindfreak        | L   | 0.872      | -            | -                | -                | -         |   -10.13 | foggers, supar, TRIPLUS, versa, void   |
|           24 |     1666 | 2024-08-24 | The Art of War   | L   | 0.852      | -            | -                | -                | -         |   -10.77 | foggers, supar, TRIPLUS, versa, void   |
|           23 |     1670 | 2024-08-24 | Vantage          | W   | 0.852      | 0.143        | 0.000 (0.000)    | 0.116 (0.014)    | 0 (0.000) |    10.61 | foggers, supar, TRIPLUS, versa, void   |
|           22 |     1674 | 2024-08-24 | Abyss            | W   | 0.851      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.89 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     1795 | 2024-08-21 | MANTRA           | L   | 0.832      | -            | -                | -                | -         |   -13.74 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     1806 | 2024-08-21 | MANTRA           | L   | 0.832      | -            | -                | -                | -         |   -14.78 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2028 | 2024-08-13 | Rooster          | L   | 0.779      | -            | -                | -                | -         |    -9.79 | foggers, supar, TRIPLUS, versa, void   |
|           18 |     2031 | 2024-08-13 | Rooster          | W   | 0.779      | 0.333        | 0.023 (0.006)    | 0.290 (0.075)    | 0 (0.000) |    15.09 | foggers, supar, TRIPLUS, versa, void   |
|           17 |     2115 | 2024-08-10 | Let's go golfing | L   | 0.759      | -            | -                | -                | -         |    -8.70 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           16 |     2119 | 2024-08-10 | The Art of War   | W   | 0.758      | 0.264        | 0.000 (0.000)    | 0.366 (0.073)    | 1 (0.758) |    13.81 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           15 |     2120 | 2024-08-09 | Freaky Saturday  | L   | 0.758      | -            | -                | -                | -         |   -10.06 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           14 |     2221 | 2024-08-07 | The Art of War   | L   | 0.739      | -            | -                | -                | -         |    -9.86 | foggers, supar, TRIPLUS, versa, void   |
|           13 |     2227 | 2024-08-07 | The Art of War   | L   | 0.738      | -            | -                | -                | -         |   -10.51 | foggers, supar, TRIPLUS, versa, void   |
|           12 |     2749 | 2024-07-23 | Mindfreak        | L   | 0.639      | -            | -                | -                | -         |    -9.46 | foggers, Kobe, TRIPLUS, versa, void    |
|           11 |     2754 | 2024-07-23 | Mindfreak        | L   | 0.638      | -            | -                | -                | -         |   -10.02 | foggers, Kobe, TRIPLUS, versa, void    |
|           10 |     2774 | 2024-07-22 | KZG              | L   | 0.632      | -            | -                | -                | -         |   -11.11 | foggers, Kobe, TRIPLUS, versa, void    |
|            9 |     2777 | 2024-07-22 | KZG              | W   | 0.632      | 0.333        | 0.001 (0.000)    | 0.197 (0.041)    | 0 (0.000) |     8.94 | foggers, Kobe, TRIPLUS, versa, void    |
|            8 |     2928 | 2024-07-18 | Housebets        | L   | 0.606      | -            | -                | -                | -         |   -10.79 | foggers, kibstar, TRIPLUS, versa, void |
|            7 |     2935 | 2024-07-18 | Housebets        | W   | 0.605      | 0.333        | 0.001 (0.000)    | 0.156 (0.031)    | 0 (0.000) |     8.42 | foggers, kibstar, TRIPLUS, versa, void |
|            6 |     4410 | 2024-05-15 | Housebets        | L   | 0.179      | -            | -                | -                | -         |    -3.13 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            5 |     4413 | 2024-05-15 | Housebets        | L   | 0.178      | -            | -                | -                | -         |    -3.18 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            4 |     4602 | 2024-05-08 | Mindfreak        | L   | 0.132      | -            | -                | -                | -         |    -2.26 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            3 |     4604 | 2024-05-08 | Mindfreak        | L   | 0.132      | -            | -                | -                | -         |    -2.28 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            2 |     4620 | 2024-05-07 | DXA              | L   | 0.126      | -            | -                | -                | -         |    -2.22 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            1 |     4622 | 2024-05-07 | DXA              | W   | 0.126      | 0.333        | 0.002 (0.000)    | 0.225 (0.009)    | 0 (0.000) |     1.76 | apocdud, foggers, Kobe, TRIPLUS, void  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($556.09)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-10 |      1.000 | $150.00        | $150.00         |
| 2024-08-10 |      0.760 | $262.00        | $199.02         |
| 2024-06-09 |      0.345 | $600.00        | $207.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
