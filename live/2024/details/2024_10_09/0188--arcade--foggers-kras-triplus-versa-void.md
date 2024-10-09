### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [188](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_09.md)<br />
Regional Rank: [20]( ../../standings_asia_2024_10_09.md)<br />
<br />
Final Rank Value:  621.2<br />
<br />
Final Rank Value (621.2) = Starting Rank Value (701.8) + Head To Head Adjustments (-80.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.8
- 400 + ( ( 0.156 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 701.8


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
|           34 |        3 | 2024-10-09 | DXA              | L   | 1.000      | -            | -                | -                | -         |   -16.42 | foggers, Kras, TRIPLUS, versa, void    |
|           33 |        8 | 2024-10-09 | DXA              | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.231 (0.077)    | 0 (0.000) |    15.02 | foggers, Kras, TRIPLUS, versa, void    |
|           32 |      526 | 2024-09-25 | FlyQuest         | L   | 1.000      | -            | -                | -                | -         |    -0.94 | foggers, Kras, TRIPLUS, versa, void    |
|           31 |      530 | 2024-09-25 | FlyQuest         | L   | 1.000      | -            | -                | -                | -         |    -0.95 | foggers, Kras, TRIPLUS, versa, void    |
|           30 |     1376 | 2024-08-28 | Mindfreak        | L   | 0.919      | -            | -                | -                | -         |   -11.45 | foggers, supar, TRIPLUS, versa, void   |
|           29 |     1395 | 2024-08-28 | The Art of War   | W   | 0.917      | 0.143        | 0.000 (0.000)    | 0.369 (0.048)    | 0 (0.000) |    17.51 | foggers, supar, TRIPLUS, versa, void   |
|           28 |     1431 | 2024-08-27 | Housebets        | W   | 0.912      | 0.143        | 0.001 (0.000)    | 0.159 (0.021)    | 0 (0.000) |    15.68 | foggers, supar, TRIPLUS, versa, void   |
|           27 |     1440 | 2024-08-27 | Mindfreak        | L   | 0.911      | -            | -                | -                | -         |   -10.26 | foggers, supar, TRIPLUS, versa, void   |
|           26 |     1569 | 2024-08-24 | The Art of War   | L   | 0.892      | -            | -                | -                | -         |   -10.71 | foggers, supar, TRIPLUS, versa, void   |
|           25 |     1573 | 2024-08-24 | Vantage          | W   | 0.891      | 0.143        | 0.000 (0.000)    | 0.119 (0.015)    | 0 (0.000) |    11.39 | foggers, supar, TRIPLUS, versa, void   |
|           24 |     1577 | 2024-08-24 | Abyss            | W   | 0.891      | 0.143        | -                | 0.000 (0.000)    | 0 (0.000) |     6.57 | foggers, supar, TRIPLUS, versa, void   |
|           23 |     1698 | 2024-08-21 | MANTRA           | L   | 0.872      | -            | -                | -                | -         |   -18.31 | foggers, supar, TRIPLUS, versa, void   |
|           22 |     1709 | 2024-08-21 | MANTRA           | L   | 0.872      | -            | -                | -                | -         |   -19.55 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     1931 | 2024-08-13 | Rooster          | L   | 0.818      | -            | -                | -                | -         |   -10.01 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     1934 | 2024-08-13 | Rooster          | W   | 0.818      | 0.333        | 0.022 (0.006)    | 0.266 (0.072)    | 0 (0.000) |    16.14 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2018 | 2024-08-10 | Let's go golfing | L   | 0.799      | -            | -                | -                | -         |    -8.83 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           18 |     2022 | 2024-08-10 | The Art of War   | W   | 0.798      | 0.264        | 0.000 (0.000)    | 0.369 (0.078)    | 1 (0.798) |    14.82 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           17 |     2023 | 2024-08-09 | Freaky Saturday  | L   | 0.797      | -            | -                | -                | -         |   -10.24 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           16 |     2124 | 2024-08-07 | The Art of War   | L   | 0.778      | -            | -                | -                | -         |   -10.04 | foggers, supar, TRIPLUS, versa, void   |
|           15 |     2130 | 2024-08-07 | The Art of War   | L   | 0.778      | -            | -                | -                | -         |   -10.74 | foggers, supar, TRIPLUS, versa, void   |
|           14 |     2652 | 2024-07-23 | Mindfreak        | L   | 0.678      | -            | -                | -                | -         |    -9.92 | foggers, Kobe, TRIPLUS, versa, void    |
|           13 |     2657 | 2024-07-23 | Mindfreak        | L   | 0.678      | -            | -                | -                | -         |   -10.54 | foggers, Kobe, TRIPLUS, versa, void    |
|           12 |     2677 | 2024-07-22 | KZG              | L   | 0.672      | -            | -                | -                | -         |   -11.68 | foggers, Kobe, TRIPLUS, versa, void    |
|           11 |     2680 | 2024-07-22 | KZG              | W   | 0.671      | 0.333        | 0.001 (0.000)    | 0.200 (0.045)    | 0 (0.000) |     9.62 | foggers, Kobe, TRIPLUS, versa, void    |
|           10 |     2831 | 2024-07-18 | Housebets        | L   | 0.645      | -            | -                | -                | -         |   -11.33 | foggers, kibstar, TRIPLUS, versa, void |
|            9 |     2838 | 2024-07-18 | Housebets        | W   | 0.645      | 0.333        | 0.001 (0.000)    | 0.159 (0.034)    | 0 (0.000) |     9.13 | foggers, kibstar, TRIPLUS, versa, void |
|            8 |     4313 | 2024-05-15 | Housebets        | L   | 0.218      | -            | -                | -                | -         |    -3.77 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            7 |     4316 | 2024-05-15 | Housebets        | L   | 0.218      | -            | -                | -                | -         |    -3.84 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            6 |     4505 | 2024-05-08 | Mindfreak        | L   | 0.172      | -            | -                | -                | -         |    -2.89 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            5 |     4507 | 2024-05-08 | Mindfreak        | L   | 0.171      | -            | -                | -                | -         |    -2.93 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            4 |     4523 | 2024-05-07 | DXA              | L   | 0.165      | -            | -                | -                | -         |    -3.05 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            3 |     4525 | 2024-05-07 | DXA              | W   | 0.165      | 0.333        | 0.000 (0.000)    | 0.231 (0.013)    | 0 (0.000) |     2.18 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            2 |     5015 | 2024-04-17 | Rooster          | L   | 0.032      | -            | -                | -                | -         |    -0.44 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            1 |     5028 | 2024-04-17 | Vantage          | W   | 0.032      | 0.143        | 0.001 (0.000)    | -                | -         |     0.27 | apocdud, foggers, Kobe, TRIPLUS, void  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($440.24)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-10 |      0.799 | $262.00        | $209.40         |
| 2024-06-09 |      0.385 | $600.00        | $230.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
