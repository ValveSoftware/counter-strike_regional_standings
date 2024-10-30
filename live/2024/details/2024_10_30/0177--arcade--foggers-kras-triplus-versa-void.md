### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [177](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_30.md)<br />
Regional Rank: [17]( ../../standings_asia_2024_10_30.md)<br />
<br />
Final Rank Value:  658.2<br />
<br />
Final Rank Value (658.2) = Starting Rank Value (710.7) + Head To Head Adjustments (-52.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.7
- 400 + ( ( 0.157 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 710.7


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
|           32 |      408 | 2024-10-09 | DXA              | L   | 1.000      | -            | -                | -                | -         |   -16.24 | foggers, Kras, TRIPLUS, versa, void    |
|           31 |      413 | 2024-10-09 | DXA              | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.208 (0.069)    | 0 (0.000) |    15.22 | foggers, Kras, TRIPLUS, versa, void    |
|           30 |      931 | 2024-09-25 | FlyQuest         | L   | 0.965      | -            | -                | -                | -         |    -0.88 | foggers, Kras, TRIPLUS, versa, void    |
|           29 |      935 | 2024-09-25 | FlyQuest         | L   | 0.964      | -            | -                | -                | -         |    -0.89 | foggers, Kras, TRIPLUS, versa, void    |
|           28 |     1781 | 2024-08-28 | Mindfreak        | L   | 0.778      | -            | -                | -                | -         |    -9.66 | foggers, supar, TRIPLUS, versa, void   |
|           27 |     1800 | 2024-08-28 | The Art of War   | W   | 0.777      | 0.143        | 0.005 (0.001)    | 0.350 (0.039)    | 0 (0.000) |    14.73 | foggers, supar, TRIPLUS, versa, void   |
|           26 |     1836 | 2024-08-27 | Housebets        | W   | 0.772      | 0.143        | 0.007 (0.001)    | 0.153 (0.017)    | 0 (0.000) |    13.66 | foggers, supar, TRIPLUS, versa, void   |
|           25 |     1845 | 2024-08-27 | Mindfreak        | L   | 0.771      | -            | -                | -                | -         |    -8.73 | foggers, supar, TRIPLUS, versa, void   |
|           24 |     1974 | 2024-08-24 | The Art of War   | L   | 0.751      | -            | -                | -                | -         |    -9.26 | foggers, supar, TRIPLUS, versa, void   |
|           23 |     1978 | 2024-08-24 | Vantage          | W   | 0.751      | 0.143        | 0.000 (0.000)    | 0.108 (0.012)    | 0 (0.000) |     8.74 | foggers, supar, TRIPLUS, versa, void   |
|           22 |     1982 | 2024-08-24 | Abyss            | W   | 0.751      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.67 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     2103 | 2024-08-21 | MANTRA           | L   | 0.731      | -            | -                | -                | -         |   -12.28 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     2114 | 2024-08-21 | MANTRA           | L   | 0.731      | -            | -                | -                | -         |   -13.09 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2336 | 2024-08-13 | Rooster          | L   | 0.678      | -            | -                | -                | -         |    -8.90 | foggers, supar, TRIPLUS, versa, void   |
|           18 |     2339 | 2024-08-13 | Rooster          | W   | 0.678      | 0.333        | 0.026 (0.006)    | 0.263 (0.059)    | 0 (0.000) |    12.77 | foggers, supar, TRIPLUS, versa, void   |
|           17 |     2423 | 2024-08-10 | Let's go golfing | L   | 0.658      | -            | -                | -                | -         |    -8.08 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           16 |     2427 | 2024-08-10 | The Art of War   | W   | 0.657      | 0.264        | 0.005 (0.001)    | 0.350 (0.061)    | 1 (0.657) |    12.30 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           15 |     2428 | 2024-08-09 | Freaky Saturday  | L   | 0.657      | -            | -                | -                | -         |    -9.46 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           14 |     2529 | 2024-08-07 | The Art of War   | L   | 0.638      | -            | -                | -                | -         |    -8.23 | foggers, supar, TRIPLUS, versa, void   |
|           13 |     2535 | 2024-08-07 | The Art of War   | L   | 0.638      | -            | -                | -                | -         |    -8.69 | foggers, supar, TRIPLUS, versa, void   |
|           12 |     3057 | 2024-07-23 | Mindfreak        | L   | 0.538      | -            | -                | -                | -         |    -7.48 | foggers, Kobe, TRIPLUS, versa, void    |
|           11 |     3062 | 2024-07-23 | Mindfreak        | L   | 0.538      | -            | -                | -                | -         |    -7.84 | foggers, Kobe, TRIPLUS, versa, void    |
|           10 |     3082 | 2024-07-22 | KZG              | L   | 0.531      | -            | -                | -                | -         |    -8.97 | foggers, Kobe, TRIPLUS, versa, void    |
|            9 |     3085 | 2024-07-22 | KZG              | W   | 0.531      | 0.333        | 0.004 (0.001)    | 0.184 (0.033)    | 0 (0.000) |     7.93 | foggers, Kobe, TRIPLUS, versa, void    |
|            8 |     3236 | 2024-07-18 | Housebets        | L   | 0.505      | -            | -                | -                | -         |    -8.22 | foggers, kibstar, TRIPLUS, versa, void |
|            7 |     3243 | 2024-07-18 | Housebets        | W   | 0.505      | 0.333        | 0.007 (0.001)    | 0.153 (0.026)    | 0 (0.000) |     7.85 | foggers, kibstar, TRIPLUS, versa, void |
|            6 |     4718 | 2024-05-15 | Housebets        | L   | 0.078      | -            | -                | -                | -         |    -1.22 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            5 |     4721 | 2024-05-15 | Housebets        | L   | 0.078      | -            | -                | -                | -         |    -1.23 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            4 |     4910 | 2024-05-08 | Mindfreak        | L   | 0.031      | -            | -                | -                | -         |    -0.47 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            3 |     4912 | 2024-05-08 | Mindfreak        | L   | 0.031      | -            | -                | -                | -         |    -0.47 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            2 |     4928 | 2024-05-07 | DXA              | L   | 0.025      | -            | -                | -                | -         |    -0.43 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            1 |     4930 | 2024-05-07 | DXA              | W   | 0.025      | 0.333        | 0.002 (0.000)    | 0.208 (0.002)    | 0 (0.000) |     0.35 | apocdud, foggers, Kobe, TRIPLUS, void  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($469.22)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $150.00        | $150.00         |
| 2024-08-10 |      0.659 | $262.00        | $172.62         |
| 2024-06-09 |      0.244 | $600.00        | $146.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
