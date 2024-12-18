### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [197](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_18.md)<br />
Regional Rank: [21]( ../../standings_asia_2024_12_18.md)<br />
<br />
Final Rank Value:  617.6<br />
<br />
Final Rank Value (617.6) = Starting Rank Value (640.1) + Head To Head Adjustments (-22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.1
- 400 + ( ( 0.125 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 640.1


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
|           26 |     1427 | 2024-10-09 | DXA              | L   | 0.731      | -            | -                | -                | -         |   -11.75 | foggers, Kras, TRIPLUS, versa, void    |
|           25 |     1432 | 2024-10-09 | DXA              | W   | 0.731      | 0.333        | 0.001 (0.000)    | 0.139 (0.034)    | 0 (0.000) |    11.47 | foggers, Kras, TRIPLUS, versa, void    |
|           24 |     1950 | 2024-09-25 | FlyQuest         | L   | 0.638      | -            | -                | -                | -         |    -0.41 | foggers, Kras, TRIPLUS, versa, void    |
|           23 |     1954 | 2024-09-25 | FlyQuest         | L   | 0.638      | -            | -                | -                | -         |    -0.41 | foggers, Kras, TRIPLUS, versa, void    |
|           22 |     2800 | 2024-08-28 | Mindfreak        | L   | 0.452      | -            | -                | -                | -         |    -5.22 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     2819 | 2024-08-28 | The Art of War   | W   | 0.450      | 0.143        | 0.003 (0.000)    | 0.265 (0.017)    | 0 (0.000) |     8.16 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     2855 | 2024-08-27 | Housebets        | W   | 0.445      | 0.143        | 0.003 (0.000)    | 0.112 (0.007)    | 0 (0.000) |     7.78 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2864 | 2024-08-27 | Mindfreak        | L   | 0.444      | -            | -                | -                | -         |    -4.86 | foggers, supar, TRIPLUS, versa, void   |
|           18 |     2993 | 2024-08-24 | The Art of War   | L   | 0.424      | -            | -                | -                | -         |    -5.72 | foggers, supar, TRIPLUS, versa, void   |
|           17 |     2997 | 2024-08-24 | Vantage          | W   | 0.424      | 0.143        | 0.000 (0.000)    | 0.077 (0.005)    | 0 (0.000) |     4.95 | foggers, supar, TRIPLUS, versa, void   |
|           16 |     3001 | 2024-08-24 | Abyss            | W   | 0.424      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.12 | foggers, supar, TRIPLUS, versa, void   |
|           15 |     3122 | 2024-08-21 | MANTRA           | L   | 0.405      | -            | -                | -                | -         |    -6.43 | foggers, supar, TRIPLUS, versa, void   |
|           14 |     3133 | 2024-08-21 | MANTRA           | L   | 0.404      | -            | -                | -                | -         |    -6.66 | foggers, supar, TRIPLUS, versa, void   |
|           13 |     3355 | 2024-08-13 | Rooster          | L   | 0.351      | -            | -                | -                | -         |    -4.92 | foggers, supar, TRIPLUS, versa, void   |
|           12 |     3358 | 2024-08-13 | Rooster          | W   | 0.351      | 0.333        | 0.012 (0.001)    | 0.181 (0.021)    | 0 (0.000) |     6.27 | foggers, supar, TRIPLUS, versa, void   |
|           11 |     3442 | 2024-08-10 | Let's go golfing | L   | 0.331      | -            | -                | -                | -         |    -4.79 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           10 |     3446 | 2024-08-10 | The Art of War   | W   | 0.330      | 0.264        | 0.003 (0.000)    | 0.265 (0.023)    | 1 (0.330) |     5.86 | foggers, Kobe, Kras, TRIPLUS, versa    |
|            9 |     3447 | 2024-08-09 | Freaky Saturday  | L   | 0.330      | -            | -                | -                | -         |    -5.21 | foggers, Kobe, Kras, TRIPLUS, versa    |
|            8 |     3548 | 2024-08-07 | The Art of War   | L   | 0.311      | -            | -                | -                | -         |    -4.35 | foggers, supar, TRIPLUS, versa, void   |
|            7 |     3554 | 2024-08-07 | The Art of War   | L   | 0.311      | -            | -                | -                | -         |    -4.47 | foggers, supar, TRIPLUS, versa, void   |
|            6 |     4076 | 2024-07-23 | Mindfreak        | L   | 0.211      | -            | -                | -                | -         |    -2.54 | foggers, Kobe, TRIPLUS, versa, void    |
|            5 |     4081 | 2024-07-23 | Mindfreak        | L   | 0.211      | -            | -                | -                | -         |    -2.59 | foggers, Kobe, TRIPLUS, versa, void    |
|            4 |     4101 | 2024-07-22 | KZG              | L   | 0.205      | -            | -                | -                | -         |    -3.21 | foggers, Kobe, TRIPLUS, versa, void    |
|            3 |     4104 | 2024-07-22 | KZG              | W   | 0.204      | 0.333        | 0.002 (0.000)    | 0.129 (0.009)    | 0 (0.000) |     3.27 | foggers, Kobe, TRIPLUS, versa, void    |
|            2 |     4255 | 2024-07-18 | Housebets        | L   | 0.178      | -            | -                | -                | -         |    -2.72 | foggers, kibstar, TRIPLUS, versa, void |
|            1 |     4262 | 2024-07-18 | Housebets        | W   | 0.178      | 0.333        | 0.003 (0.000)    | 0.112 (0.007)    | 0 (0.000) |     2.92 | foggers, kibstar, TRIPLUS, versa, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($207.55)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.804 | $150.00        | $120.55         |
| 2024-08-10 |      0.332 | $262.00        | $87.00          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
