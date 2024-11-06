### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [177](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_06.md)<br />
Regional Rank: [18]( ../../standings_asia_2024_11_06.md)<br />
<br />
Final Rank Value:  633.7<br />
<br />
Final Rank Value (633.7) = Starting Rank Value (682.5) + Head To Head Adjustments (-48.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.247[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.5
- 400 + ( ( 0.144 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 682.5


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
|           28 |      549 | 2024-10-09 | DXA              | L   | 1.000      | -            | -                | -                | -         |   -16.19 | foggers, Kras, TRIPLUS, versa, void    |
|           27 |      554 | 2024-10-09 | DXA              | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.209 (0.070)    | 0 (0.000) |    15.27 | foggers, Kras, TRIPLUS, versa, void    |
|           26 |     1072 | 2024-09-25 | FlyQuest         | L   | 0.918      | -            | -                | -                | -         |    -1.24 | foggers, Kras, TRIPLUS, versa, void    |
|           25 |     1076 | 2024-09-25 | FlyQuest         | L   | 0.918      | -            | -                | -                | -         |    -1.26 | foggers, Kras, TRIPLUS, versa, void    |
|           24 |     1922 | 2024-08-28 | Mindfreak        | L   | 0.732      | -            | -                | -                | -         |    -9.29 | foggers, supar, TRIPLUS, versa, void   |
|           23 |     1941 | 2024-08-28 | The Art of War   | W   | 0.731      | 0.143        | 0.002 (0.000)    | 0.359 (0.037)    | 0 (0.000) |    13.72 | foggers, supar, TRIPLUS, versa, void   |
|           22 |     1977 | 2024-08-27 | Housebets        | W   | 0.726      | 0.143        | 0.003 (0.000)    | 0.157 (0.016)    | 0 (0.000) |    12.79 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     1986 | 2024-08-27 | Mindfreak        | L   | 0.725      | -            | -                | -                | -         |    -8.47 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     2115 | 2024-08-24 | The Art of War   | L   | 0.705      | -            | -                | -                | -         |    -8.87 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2119 | 2024-08-24 | Vantage          | W   | 0.705      | 0.143        | 0.000 (0.000)    | 0.110 (0.011)    | 0 (0.000) |     8.42 | foggers, supar, TRIPLUS, versa, void   |
|           18 |     2123 | 2024-08-24 | Abyss            | W   | 0.704      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.85 | foggers, supar, TRIPLUS, versa, void   |
|           17 |     2244 | 2024-08-21 | MANTRA           | L   | 0.685      | -            | -                | -                | -         |   -11.41 | foggers, supar, TRIPLUS, versa, void   |
|           16 |     2255 | 2024-08-21 | MANTRA           | L   | 0.685      | -            | -                | -                | -         |   -12.12 | foggers, supar, TRIPLUS, versa, void   |
|           15 |     2477 | 2024-08-13 | Rooster          | L   | 0.632      | -            | -                | -                | -         |    -8.65 | foggers, supar, TRIPLUS, versa, void   |
|           14 |     2480 | 2024-08-13 | Rooster          | W   | 0.632      | 0.333        | 0.013 (0.003)    | 0.264 (0.056)    | 0 (0.000) |    11.53 | foggers, supar, TRIPLUS, versa, void   |
|           13 |     2564 | 2024-08-10 | Let's go golfing | L   | 0.612      | -            | -                | -                | -         |    -7.73 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           12 |     2568 | 2024-08-10 | The Art of War   | W   | 0.611      | 0.264        | 0.002 (0.000)    | 0.359 (0.058)    | 1 (0.611) |    11.29 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           11 |     2569 | 2024-08-09 | Freaky Saturday  | L   | 0.611      | -            | -                | -                | -         |    -8.88 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           10 |     2670 | 2024-08-07 | The Art of War   | L   | 0.592      | -            | -                | -                | -         |    -7.79 | foggers, supar, TRIPLUS, versa, void   |
|            9 |     2676 | 2024-08-07 | The Art of War   | L   | 0.592      | -            | -                | -                | -         |    -8.21 | foggers, supar, TRIPLUS, versa, void   |
|            8 |     3198 | 2024-07-23 | Mindfreak        | L   | 0.492      | -            | -                | -                | -         |    -6.99 | foggers, Kobe, TRIPLUS, versa, void    |
|            7 |     3203 | 2024-07-23 | Mindfreak        | L   | 0.492      | -            | -                | -                | -         |    -7.29 | foggers, Kobe, TRIPLUS, versa, void    |
|            6 |     3223 | 2024-07-22 | KZG              | L   | 0.485      | -            | -                | -                | -         |    -8.15 | foggers, Kobe, TRIPLUS, versa, void    |
|            5 |     3226 | 2024-07-22 | KZG              | W   | 0.485      | 0.333        | 0.002 (0.000)    | 0.186 (0.030)    | 0 (0.000) |     7.27 | foggers, Kobe, TRIPLUS, versa, void    |
|            4 |     3377 | 2024-07-18 | Housebets        | L   | 0.459      | -            | -                | -                | -         |    -7.50 | foggers, kibstar, TRIPLUS, versa, void |
|            3 |     3384 | 2024-07-18 | Housebets        | W   | 0.458      | 0.333        | 0.003 (0.001)    | 0.157 (0.024)    | 0 (0.000) |     7.10 | foggers, kibstar, TRIPLUS, versa, void |
|            2 |     4859 | 2024-05-15 | Housebets        | L   | 0.032      | -            | -                | -                | -         |    -0.50 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            1 |     4862 | 2024-05-15 | Housebets        | L   | 0.032      | -            | -                | -                | -         |    -0.50 | apocdud, foggers, Kobe, TRIPLUS, void  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($429.40)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $150.00        | $150.00         |
| 2024-08-10 |      0.613 | $262.00        | $160.52         |
| 2024-06-09 |      0.198 | $600.00        | $118.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
