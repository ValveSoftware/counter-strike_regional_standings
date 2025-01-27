### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [197](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_27.md)<br />
Regional Rank: [23]( ../../standings_asia_2025_01_27.md)<br />
<br />
Final Rank Value:  610.4<br />
<br />
Final Rank Value (610.4) = Starting Rank Value (613.9) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.008[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 613.9
- 400 + ( ( 0.109 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 613.9


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
|           20 |     1782 | 2024-10-09 | DXA              | L   | 0.465      | -            | -                | -                | -         |    -7.33 | foggers, Kras, TRIPLUS, versa, void  |
|           19 |     1787 | 2024-10-09 | DXA              | W   | 0.464      | 0.333        | 0.001 (0.000)    | 0.080 (0.012)    | 0 (0.000) |     7.46 | foggers, Kras, TRIPLUS, versa, void  |
|           18 |     2305 | 2024-09-25 | FlyQuest         | L   | 0.371      | -            | -                | -                | -         |    -0.28 | foggers, Kras, TRIPLUS, versa, void  |
|           17 |     2309 | 2024-09-25 | FlyQuest         | L   | 0.371      | -            | -                | -                | -         |    -0.28 | foggers, Kras, TRIPLUS, versa, void  |
|           16 |     3155 | 2024-08-28 | Mindfreak        | L   | 0.185      | -            | -                | -                | -         |    -2.14 | foggers, supar, TRIPLUS, versa, void |
|           15 |     3174 | 2024-08-28 | The Art of War   | W   | 0.184      | 0.143        | 0.003 (0.000)    | 0.183 (0.005)    | 0 (0.000) |     3.22 | foggers, supar, TRIPLUS, versa, void |
|           14 |     3210 | 2024-08-27 | Housebets        | W   | 0.178      | 0.143        | 0.004 (0.000)    | 0.077 (0.002)    | 0 (0.000) |     3.11 | foggers, supar, TRIPLUS, versa, void |
|           13 |     3219 | 2024-08-27 | Mindfreak        | L   | 0.177      | -            | -                | -                | -         |    -2.01 | foggers, supar, TRIPLUS, versa, void |
|           12 |     3348 | 2024-08-24 | The Art of War   | L   | 0.158      | -            | -                | -                | -         |    -2.22 | foggers, supar, TRIPLUS, versa, void |
|           11 |     3352 | 2024-08-24 | Vantage          | W   | 0.158      | 0.143        | 0.000 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     1.72 | foggers, supar, TRIPLUS, versa, void |
|           10 |     3356 | 2024-08-24 | Abyss            | W   | 0.157      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.18 | foggers, supar, TRIPLUS, versa, void |
|            9 |     3477 | 2024-08-21 | MANTRA           | L   | 0.138      | -            | -                | -                | -         |    -2.08 | foggers, supar, TRIPLUS, versa, void |
|            8 |     3488 | 2024-08-21 | MANTRA           | L   | 0.138      | -            | -                | -                | -         |    -2.10 | foggers, supar, TRIPLUS, versa, void |
|            7 |     3710 | 2024-08-13 | Rooster          | L   | 0.085      | -            | -                | -                | -         |    -1.05 | foggers, supar, TRIPLUS, versa, void |
|            6 |     3713 | 2024-08-13 | Rooster          | W   | 0.084      | 0.333        | 0.012 (0.000)    | 0.194 (0.005)    | 0 (0.000) |     1.62 | foggers, supar, TRIPLUS, versa, void |
|            5 |     3797 | 2024-08-10 | Let's go golfing | L   | 0.065      | -            | -                | -                | -         |    -1.06 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            4 |     3801 | 2024-08-10 | The Art of War   | W   | 0.064      | 0.264        | 0.003 (0.000)    | 0.183 (0.003)    | 1 (0.064) |     1.10 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            3 |     3802 | 2024-08-09 | Freaky Saturday  | L   | 0.063      | -            | -                | -                | -         |    -1.09 | foggers, Kobe, Kras, TRIPLUS, versa  |
|            2 |     3903 | 2024-08-07 | The Art of War   | L   | 0.045      | -            | -                | -                | -         |    -0.64 | foggers, supar, TRIPLUS, versa, void |
|            1 |     3909 | 2024-08-07 | The Art of War   | L   | 0.044      | -            | -                | -                | -         |    -0.64 | foggers, supar, TRIPLUS, versa, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($97.71)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.537 | $150.00        | $80.56          |
| 2024-08-10 |      0.065 | $262.00        | $17.15          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
