### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [192](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_03.md)<br />
Regional Rank: [22]( ../../standings_asia_2025_02_03.md)<br />
<br />
Final Rank Value:  602.6<br />
<br />
Final Rank Value (602.6) = Starting Rank Value (603.2) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.228[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 603.2
- 400 + ( ( 0.105 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 603.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1900 | 2024-10-09 | DXA             | L   | 0.418      | -            | -                | -                | -         |    -6.51 | foggers, Kras, TRIPLUS, versa, void  |
|           17 |     1905 | 2024-10-09 | DXA             | W   | 0.418      | 0.333        | 0.001 (0.000)    | 0.073 (0.010)    | 0 (0.000) |     6.79 | foggers, Kras, TRIPLUS, versa, void  |
|           16 |     2423 | 2024-09-25 | FlyQuest        | L   | 0.324      | -            | -                | -                | -         |    -0.30 | foggers, Kras, TRIPLUS, versa, void  |
|           15 |     2427 | 2024-09-25 | FlyQuest        | L   | 0.324      | -            | -                | -                | -         |    -0.30 | foggers, Kras, TRIPLUS, versa, void  |
|           14 |     3273 | 2024-08-28 | Mindfreak       | L   | 0.138      | -            | -                | -                | -         |    -1.56 | foggers, supar, TRIPLUS, versa, void |
|           13 |     3292 | 2024-08-28 | The Art of War  | W   | 0.137      | 0.143        | 0.003 (0.000)    | 0.170 (0.003)    | 0 (0.000) |     2.42 | foggers, supar, TRIPLUS, versa, void |
|           12 |     3328 | 2024-08-27 | Housebets       | W   | 0.132      | 0.143        | 0.004 (0.000)    | 0.138 (0.003)    | 0 (0.000) |     2.35 | foggers, supar, TRIPLUS, versa, void |
|           11 |     3337 | 2024-08-27 | Mindfreak       | L   | 0.131      | -            | -                | -                | -         |    -1.45 | foggers, supar, TRIPLUS, versa, void |
|           10 |     3466 | 2024-08-24 | The Art of War  | L   | 0.111      | -            | -                | -                | -         |    -1.54 | foggers, supar, TRIPLUS, versa, void |
|            9 |     3470 | 2024-08-24 | Vantage         | W   | 0.111      | 0.143        | 0.000 (0.000)    | 0.020 (0.000)    | 0 (0.000) |     1.20 | foggers, supar, TRIPLUS, versa, void |
|            8 |     3474 | 2024-08-24 | Abyss           | W   | 0.110      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.85 | foggers, supar, TRIPLUS, versa, void |
|            7 |     3595 | 2024-08-21 | MANTRA          | L   | 0.091      | -            | -                | -                | -         |    -1.31 | foggers, supar, TRIPLUS, versa, void |
|            6 |     3606 | 2024-08-21 | MANTRA          | L   | 0.091      | -            | -                | -                | -         |    -1.31 | foggers, supar, TRIPLUS, versa, void |
|            5 |     3828 | 2024-08-13 | Rooster         | L   | 0.038      | -            | -                | -                | -         |    -0.45 | foggers, supar, TRIPLUS, versa, void |
|            4 |     3831 | 2024-08-13 | Rooster         | W   | 0.038      | 0.333        | 0.012 (0.000)    | 0.193 (0.002)    | 0 (0.000) |     0.73 | foggers, supar, TRIPLUS, versa, void |
|            3 |     3915 | 2024-08-10 | Housebets       | L   | 0.018      | -            | -                | -                | -         |    -0.25 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            2 |     3919 | 2024-08-10 | The Art of War  | W   | 0.017      | 0.264        | 0.003 (0.000)    | 0.170 (0.001)    | 1 (0.017) |     0.30 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            1 |     3920 | 2024-08-09 | Freaky Saturday | L   | 0.017      | -            | -                | -                | -         |    -0.29 | foggers, Kobe, Kras, TRIPLUS, versa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($78.44)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.490 | $150.00        | $73.55          |
| 2024-08-10 |      0.019 | $262.00        | $4.90           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
