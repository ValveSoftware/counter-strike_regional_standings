### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [178](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_23.md)<br />
Regional Rank: [17]( ../../standings_asia_2024_10_23.md)<br />
<br />
Final Rank Value:  653.0<br />
<br />
Final Rank Value (653.0) = Starting Rank Value (710.0) + Head To Head Adjustments (-57.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.0
- 400 + ( ( 0.158 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 710.0


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
|           32 |      278 | 2024-10-09 | DXA              | L   | 1.000      | -            | -                | -                | -         |   -16.20 | foggers, Kras, TRIPLUS, versa, void    |
|           31 |      283 | 2024-10-09 | DXA              | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.221 (0.074)    | 0 (0.000) |    15.26 | foggers, Kras, TRIPLUS, versa, void    |
|           30 |      801 | 2024-09-25 | FlyQuest         | L   | 1.000      | -            | -                | -                | -         |    -1.00 | foggers, Kras, TRIPLUS, versa, void    |
|           29 |      805 | 2024-09-25 | FlyQuest         | L   | 1.000      | -            | -                | -                | -         |    -1.01 | foggers, Kras, TRIPLUS, versa, void    |
|           28 |     1651 | 2024-08-28 | Mindfreak        | L   | 0.824      | -            | -                | -                | -         |   -10.10 | foggers, supar, TRIPLUS, versa, void   |
|           27 |     1670 | 2024-08-28 | The Art of War   | W   | 0.823      | 0.143        | 0.004 (0.000)    | 0.364 (0.043)    | 0 (0.000) |    15.71 | foggers, supar, TRIPLUS, versa, void   |
|           26 |     1706 | 2024-08-27 | Housebets        | W   | 0.818      | 0.143        | 0.006 (0.001)    | 0.161 (0.019)    | 0 (0.000) |    14.57 | foggers, supar, TRIPLUS, versa, void   |
|           25 |     1715 | 2024-08-27 | Mindfreak        | L   | 0.817      | -            | -                | -                | -         |    -9.06 | foggers, supar, TRIPLUS, versa, void   |
|           24 |     1844 | 2024-08-24 | The Art of War   | L   | 0.797      | -            | -                | -                | -         |    -9.64 | foggers, supar, TRIPLUS, versa, void   |
|           23 |     1848 | 2024-08-24 | Vantage          | W   | 0.797      | 0.143        | 0.000 (0.000)    | 0.114 (0.013)    | 0 (0.000) |     9.49 | foggers, supar, TRIPLUS, versa, void   |
|           22 |     1852 | 2024-08-24 | Abyss            | W   | 0.797      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.10 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     1973 | 2024-08-21 | MANTRA           | L   | 0.777      | -            | -                | -                | -         |   -13.04 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     1984 | 2024-08-21 | MANTRA           | L   | 0.777      | -            | -                | -                | -         |   -13.95 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2206 | 2024-08-13 | Rooster          | L   | 0.724      | -            | -                | -                | -         |    -9.38 | foggers, supar, TRIPLUS, versa, void   |
|           18 |     2209 | 2024-08-13 | Rooster          | W   | 0.724      | 0.333        | 0.025 (0.006)    | 0.281 (0.068)    | 0 (0.000) |    13.76 | foggers, supar, TRIPLUS, versa, void   |
|           17 |     2293 | 2024-08-10 | Let's go golfing | L   | 0.704      | -            | -                | -                | -         |    -8.45 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           16 |     2297 | 2024-08-10 | The Art of War   | W   | 0.703      | 0.264        | 0.004 (0.001)    | 0.364 (0.068)    | 1 (0.703) |    13.29 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           15 |     2298 | 2024-08-09 | Freaky Saturday  | L   | 0.703      | -            | -                | -                | -         |    -9.92 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           14 |     2399 | 2024-08-07 | The Art of War   | L   | 0.684      | -            | -                | -                | -         |    -8.65 | foggers, supar, TRIPLUS, versa, void   |
|           13 |     2405 | 2024-08-07 | The Art of War   | L   | 0.684      | -            | -                | -                | -         |    -9.18 | foggers, supar, TRIPLUS, versa, void   |
|           12 |     2927 | 2024-07-23 | Mindfreak        | L   | 0.584      | -            | -                | -                | -         |    -8.02 | foggers, Kobe, TRIPLUS, versa, void    |
|           11 |     2932 | 2024-07-23 | Mindfreak        | L   | 0.584      | -            | -                | -                | -         |    -8.44 | foggers, Kobe, TRIPLUS, versa, void    |
|           10 |     2952 | 2024-07-22 | KZG              | L   | 0.577      | -            | -                | -                | -         |    -9.78 | foggers, Kobe, TRIPLUS, versa, void    |
|            9 |     2955 | 2024-07-22 | KZG              | W   | 0.577      | 0.333        | 0.003 (0.001)    | 0.193 (0.037)    | 0 (0.000) |     8.57 | foggers, Kobe, TRIPLUS, versa, void    |
|            8 |     3106 | 2024-07-18 | Housebets        | L   | 0.551      | -            | -                | -                | -         |    -8.95 | foggers, kibstar, TRIPLUS, versa, void |
|            7 |     3113 | 2024-07-18 | Housebets        | W   | 0.551      | 0.333        | 0.006 (0.001)    | 0.161 (0.030)    | 0 (0.000) |     8.58 | foggers, kibstar, TRIPLUS, versa, void |
|            6 |     4588 | 2024-05-15 | Housebets        | L   | 0.124      | -            | -                | -                | -         |    -1.94 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            5 |     4591 | 2024-05-15 | Housebets        | L   | 0.124      | -            | -                | -                | -         |    -1.96 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            4 |     4780 | 2024-05-08 | Mindfreak        | L   | 0.077      | -            | -                | -                | -         |    -1.18 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            3 |     4782 | 2024-05-08 | Mindfreak        | L   | 0.077      | -            | -                | -                | -         |    -1.18 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            2 |     4798 | 2024-05-07 | DXA              | L   | 0.071      | -            | -                | -                | -         |    -1.24 | apocdud, foggers, Kobe, TRIPLUS, void  |
|            1 |     4800 | 2024-05-07 | DXA              | W   | 0.071      | 0.333        | 0.002 (0.000)    | 0.221 (0.005)    | 0 (0.000) |     1.00 | apocdud, foggers, Kobe, TRIPLUS, void  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($508.90)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $150.00        | $150.00         |
| 2024-08-10 |      0.705 | $262.00        | $184.68         |
| 2024-06-09 |      0.290 | $600.00        | $174.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
