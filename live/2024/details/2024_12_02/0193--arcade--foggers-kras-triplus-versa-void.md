### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [193](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_02.md)<br />
Regional Rank: [19]( ../../standings_asia_2024_12_02.md)<br />
<br />
Final Rank Value:  636.8<br />
<br />
Final Rank Value (636.8) = Starting Rank Value (666.5) + Head To Head Adjustments (-29.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.5
- 400 + ( ( 0.133 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 666.5


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
|           26 |     1120 | 2024-10-09 | DXA              | L   | 0.838      | -            | -                | -                | -         |   -13.56 | foggers, Kras, TRIPLUS, versa, void    |
|           25 |     1125 | 2024-10-09 | DXA              | W   | 0.838      | 0.333        | 0.001 (0.000)    | 0.161 (0.045)    | 0 (0.000) |    12.98 | foggers, Kras, TRIPLUS, versa, void    |
|           24 |     1643 | 2024-09-25 | FlyQuest         | L   | 0.745      | -            | -                | -                | -         |    -0.31 | foggers, Kras, TRIPLUS, versa, void    |
|           23 |     1647 | 2024-09-25 | FlyQuest         | L   | 0.745      | -            | -                | -                | -         |    -0.31 | foggers, Kras, TRIPLUS, versa, void    |
|           22 |     2493 | 2024-08-28 | Mindfreak        | L   | 0.559      | -            | -                | -                | -         |    -6.29 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     2512 | 2024-08-28 | The Art of War   | W   | 0.558      | 0.143        | 0.003 (0.000)    | 0.293 (0.023)    | 0 (0.000) |    10.29 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     2548 | 2024-08-27 | Housebets        | W   | 0.552      | 0.143        | 0.004 (0.000)    | 0.128 (0.010)    | 0 (0.000) |     9.73 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2557 | 2024-08-27 | Mindfreak        | L   | 0.551      | -            | -                | -                | -         |    -5.78 | foggers, supar, TRIPLUS, versa, void   |
|           18 |     2686 | 2024-08-24 | The Art of War   | L   | 0.532      | -            | -                | -                | -         |    -6.94 | foggers, supar, TRIPLUS, versa, void   |
|           17 |     2690 | 2024-08-24 | Vantage          | W   | 0.531      | 0.143        | 0.000 (0.000)    | 0.087 (0.007)    | 0 (0.000) |     6.15 | foggers, supar, TRIPLUS, versa, void   |
|           16 |     2694 | 2024-08-24 | Abyss            | W   | 0.531      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.63 | foggers, supar, TRIPLUS, versa, void   |
|           15 |     2815 | 2024-08-21 | MANTRA           | L   | 0.512      | -            | -                | -                | -         |    -8.30 | foggers, supar, TRIPLUS, versa, void   |
|           14 |     2826 | 2024-08-21 | MANTRA           | L   | 0.512      | -            | -                | -                | -         |    -8.68 | foggers, supar, TRIPLUS, versa, void   |
|           13 |     3048 | 2024-08-13 | Rooster          | L   | 0.458      | -            | -                | -                | -         |    -6.44 | foggers, supar, TRIPLUS, versa, void   |
|           12 |     3051 | 2024-08-13 | Rooster          | W   | 0.458      | 0.333        | 0.013 (0.002)    | 0.204 (0.031)    | 0 (0.000) |     8.19 | foggers, supar, TRIPLUS, versa, void   |
|           11 |     3135 | 2024-08-10 | Let's go golfing | L   | 0.439      | -            | -                | -                | -         |    -5.99 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           10 |     3139 | 2024-08-10 | The Art of War   | W   | 0.438      | 0.264        | 0.003 (0.000)    | 0.293 (0.034)    | 1 (0.438) |     7.90 | foggers, Kobe, Kras, TRIPLUS, versa    |
|            9 |     3140 | 2024-08-09 | Freaky Saturday  | L   | 0.437      | -            | -                | -                | -         |    -6.70 | foggers, Kobe, Kras, TRIPLUS, versa    |
|            8 |     3241 | 2024-08-07 | The Art of War   | L   | 0.418      | -            | -                | -                | -         |    -5.72 | foggers, supar, TRIPLUS, versa, void   |
|            7 |     3247 | 2024-08-07 | The Art of War   | L   | 0.418      | -            | -                | -                | -         |    -5.93 | foggers, supar, TRIPLUS, versa, void   |
|            6 |     3769 | 2024-07-23 | Mindfreak        | L   | 0.318      | -            | -                | -                | -         |    -3.78 | foggers, Kobe, TRIPLUS, versa, void    |
|            5 |     3774 | 2024-07-23 | Mindfreak        | L   | 0.318      | -            | -                | -                | -         |    -3.88 | foggers, Kobe, TRIPLUS, versa, void    |
|            4 |     3794 | 2024-07-22 | KZG              | L   | 0.312      | -            | -                | -                | -         |    -5.03 | foggers, Kobe, TRIPLUS, versa, void    |
|            3 |     3797 | 2024-07-22 | KZG              | W   | 0.312      | 0.333        | 0.002 (0.000)    | 0.147 (0.015)    | 0 (0.000) |     4.88 | foggers, Kobe, TRIPLUS, versa, void    |
|            2 |     3948 | 2024-07-18 | Housebets        | L   | 0.285      | -            | -                | -                | -         |    -4.46 | foggers, kibstar, TRIPLUS, versa, void |
|            1 |     3955 | 2024-07-18 | Housebets        | W   | 0.285      | 0.333        | 0.004 (0.000)    | 0.128 (0.012)    | 0 (0.000) |     4.61 | foggers, kibstar, TRIPLUS, versa, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($251.74)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.911 | $150.00        | $136.64         |
| 2024-08-10 |      0.439 | $262.00        | $115.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
