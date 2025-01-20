### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [193](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_16.md)<br />
Regional Rank: [22]( ../../standings_asia_2025_01_16.md)<br />
<br />
Final Rank Value:  619.3<br />
<br />
Final Rank Value (619.3) = Starting Rank Value (627.6) + Head To Head Adjustments (-8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.6
- 400 + ( ( 0.115 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 627.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1593 | 2024-10-09 | DXA              | L   | 0.536      | -            | -                | -                | -         |    -8.56 | foggers, Kras, TRIPLUS, versa, void  |
|           23 |     1598 | 2024-10-09 | DXA              | W   | 0.536      | 0.333        | 0.001 (0.000)    | 0.091 (0.016)    | 0 (0.000) |     8.52 | foggers, Kras, TRIPLUS, versa, void  |
|           22 |     2116 | 2024-09-25 | FlyQuest         | L   | 0.443      | -            | -                | -                | -         |    -0.30 | foggers, Kras, TRIPLUS, versa, void  |
|           21 |     2120 | 2024-09-25 | FlyQuest         | L   | 0.443      | -            | -                | -                | -         |    -0.31 | foggers, Kras, TRIPLUS, versa, void  |
|           20 |     2966 | 2024-08-28 | Mindfreak        | L   | 0.257      | -            | -                | -                | -         |    -2.99 | foggers, supar, TRIPLUS, versa, void |
|           19 |     2985 | 2024-08-28 | The Art of War   | W   | 0.255      | 0.143        | 0.003 (0.000)    | 0.200 (0.007)    | 0 (0.000) |     4.48 | foggers, supar, TRIPLUS, versa, void |
|           18 |     3021 | 2024-08-27 | Housebets        | W   | 0.250      | 0.143        | 0.004 (0.000)    | 0.078 (0.003)    | 0 (0.000) |     4.33 | foggers, supar, TRIPLUS, versa, void |
|           17 |     3030 | 2024-08-27 | Mindfreak        | L   | 0.249      | -            | -                | -                | -         |    -2.82 | foggers, supar, TRIPLUS, versa, void |
|           16 |     3159 | 2024-08-24 | The Art of War   | L   | 0.230      | -            | -                | -                | -         |    -3.24 | foggers, supar, TRIPLUS, versa, void |
|           15 |     3163 | 2024-08-24 | Vantage          | W   | 0.229      | 0.143        | 0.000 (0.000)    | 0.053 (0.002)    | 0 (0.000) |     2.53 | foggers, supar, TRIPLUS, versa, void |
|           14 |     3167 | 2024-08-24 | Abyss            | W   | 0.229      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.65 | foggers, supar, TRIPLUS, versa, void |
|           13 |     3288 | 2024-08-21 | MANTRA           | L   | 0.210      | -            | -                | -                | -         |    -3.21 | foggers, supar, TRIPLUS, versa, void |
|           12 |     3299 | 2024-08-21 | MANTRA           | L   | 0.209      | -            | -                | -                | -         |    -3.27 | foggers, supar, TRIPLUS, versa, void |
|           11 |     3521 | 2024-08-13 | Rooster          | L   | 0.156      | -            | -                | -                | -         |    -2.11 | foggers, supar, TRIPLUS, versa, void |
|           10 |     3524 | 2024-08-13 | Rooster          | W   | 0.156      | 0.333        | 0.013 (0.001)    | 0.130 (0.007)    | 0 (0.000) |     2.85 | foggers, supar, TRIPLUS, versa, void |
|            9 |     3608 | 2024-08-10 | Let's go golfing | L   | 0.137      | -            | -                | -                | -         |    -2.15 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            8 |     3612 | 2024-08-10 | The Art of War   | W   | 0.136      | 0.264        | 0.003 (0.000)    | 0.200 (0.007)    | 1 (0.136) |     2.34 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            7 |     3613 | 2024-08-09 | Freaky Saturday  | L   | 0.135      | -            | -                | -                | -         |    -2.26 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            6 |     3714 | 2024-08-07 | The Art of War   | L   | 0.116      | -            | -                | -                | -         |    -1.67 | foggers, supar, TRIPLUS, versa, void |
|            5 |     3720 | 2024-08-07 | The Art of War   | L   | 0.116      | -            | -                | -                | -         |    -1.69 | foggers, supar, TRIPLUS, versa, void |
|            4 |     4242 | 2024-07-23 | Mindfreak        | L   | 0.016      | -            | -                | -                | -         |    -0.19 | foggers, Kobe, TRIPLUS, versa, void  |
|            3 |     4247 | 2024-07-23 | Mindfreak        | L   | 0.016      | -            | -                | -                | -         |    -0.19 | foggers, Kobe, TRIPLUS, versa, void  |
|            2 |     4267 | 2024-07-22 | KZG              | L   | 0.010      | -            | -                | -                | -         |    -0.14 | foggers, Kobe, TRIPLUS, versa, void  |
|            1 |     4270 | 2024-07-22 | KZG              | W   | 0.009      | 0.333        | 0.002 (0.000)    | 0.086 (0.000)    | 0 (0.000) |     0.16 | foggers, Kobe, TRIPLUS, versa, void  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($127.29)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.609 | $150.00        | $91.33          |
| 2024-08-10 |      0.137 | $262.00        | $35.96          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
