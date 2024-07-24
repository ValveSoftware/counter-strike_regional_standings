### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kobe, TRIPLUS, versa, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  610.5<br />
<br />
Final Rank Value (610.5) = Starting Rank Value (676.0) + Head To Head Adjustments (-65.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.0
- 400 + ( ( 0.136 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 676.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       53 | 2024-07-23 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |    -9.76 | foggers, Kobe, TRIPLUS, versa, void      |
|           32 |       58 | 2024-07-23 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -10.54 | foggers, Kobe, TRIPLUS, versa, void      |
|           31 |       78 | 2024-07-22 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -15.18 | foggers, Kobe, TRIPLUS, versa, void      |
|           30 |       81 | 2024-07-22 | KZG                | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.130 (0.043)    | 0 (0.000) |    16.38 | foggers, Kobe, TRIPLUS, versa, void      |
|           29 |      232 | 2024-07-18 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -13.58 | foggers, kibstar, TRIPLUS, versa, void   |
|           28 |      239 | 2024-07-18 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.154 (0.051)    | 0 (0.000) |    18.13 | foggers, kibstar, TRIPLUS, versa, void   |
|           27 |     1714 | 2024-05-15 | Bad News Kangaroos | L   | 0.731      | -            | -                | -                | -         |    -9.44 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           26 |     1717 | 2024-05-15 | Bad News Kangaroos | L   | 0.731      | -            | -                | -                | -         |   -10.05 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           25 |     1906 | 2024-05-08 | Mindfreak          | L   | 0.684      | -            | -                | -                | -         |    -8.42 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           24 |     1908 | 2024-05-08 | Mindfreak          | L   | 0.684      | -            | -                | -                | -         |    -8.93 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           23 |     1924 | 2024-05-07 | DXA                | L   | 0.678      | -            | -                | -                | -         |   -11.20 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           22 |     1926 | 2024-05-07 | DXA                | W   | 0.678      | 0.333        | 0.003 (0.001)    | 0.217 (0.049)    | 0 (0.000) |    10.34 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           21 |     2416 | 2024-04-17 | Rooster            | L   | 0.545      | -            | -                | -                | -         |    -5.17 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           20 |     2429 | 2024-04-17 | Vantage            | W   | 0.544      | 0.143        | 0.003 (0.000)    | 0.096 (0.007)    | 0 (0.000) |     9.31 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           19 |     2591 | 2024-04-10 | Vantage            | L   | 0.498      | -            | -                | -                | -         |    -7.30 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           18 |     2598 | 2024-04-10 | Vantage            | L   | 0.498      | -            | -                | -                | -         |    -7.62 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           17 |     2826 | 2024-04-03 | FlyQuest           | L   | 0.451      | -            | -                | -                | -         |    -0.57 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           16 |     2830 | 2024-04-03 | FlyQuest           | L   | 0.451      | -            | -                | -                | -         |    -0.57 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           15 |     2952 | 2024-03-27 | Rooster            | L   | 0.405      | -            | -                | -                | -         |    -4.11 | apocdud, foggers, kibstar, Kobe, void    |
|           14 |     2955 | 2024-03-27 | Rooster            | L   | 0.404      | -            | -                | -                | -         |    -4.24 | apocdud, foggers, kibstar, Kobe, void    |
|           13 |     3000 | 2024-03-23 | KZG                | L   | 0.378      | -            | -                | -                | -         |    -5.90 | apocdud, foggers, Kobe, rekonz, void     |
|           12 |     3002 | 2024-03-23 | Bad News Kangaroos | L   | 0.377      | -            | -                | -                | -         |    -4.30 | apocdud, foggers, Kobe, rekonz, void     |
|           11 |     3395 | 2024-03-06 | KZG                | W   | 0.265      | 0.333        | 0.007 (0.001)    | 0.130 (0.011)    | 0 (0.000) |     4.34 | apocdud, foggers, Kobe, void, yourwombat |
|           10 |     3402 | 2024-03-06 | KZG                | W   | 0.264      | 0.333        | 0.007 (0.001)    | 0.130 (0.011)    | 0 (0.000) |     4.44 | apocdud, foggers, Kobe, void, yourwombat |
|            9 |     3570 | 2024-02-27 | Canon Event        | W   | 0.211      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     1.83 | apocdud, damyo, foggers, Kobe, void      |
|            8 |     3572 | 2024-02-27 | Canon Event        | W   | 0.211      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     1.85 | apocdud, damyo, foggers, Kobe, void      |
|            7 |     3707 | 2024-02-21 | Vantage            | L   | 0.171      | -            | -                | -                | -         |    -2.82 | apocdud, damyo, foggers, Kobe, void      |
|            6 |     3728 | 2024-02-20 | Cringexe           | W   | 0.164      | 0.143        | -                | 0.007 (0.000)    | 0 (0.000) |     1.33 | apocdud, damyo, foggers, Kobe, void      |
|            5 |     3730 | 2024-02-20 | The Art of War     | W   | 0.164      | 0.143        | -                | 0.041 (0.001)    | 0 (0.000) |     1.58 | apocdud, damyo, foggers, Kobe, void      |
|            4 |     3774 | 2024-02-18 | FlyQuest           | L   | 0.151      | -            | -                | -                | -         |    -0.20 | apocdud, damyo, foggers, Kobe, void      |
|            3 |     3775 | 2024-02-18 | KZG                | W   | 0.151      | 0.143        | 0.007 (0.000)    | 0.130 (0.003)    | -         |     2.66 | apocdud, damyo, foggers, Kobe, void      |
|            2 |     3778 | 2024-02-17 | FlyQuest           | L   | 0.149      | -            | -                | -                | -         |    -0.20 | apocdud, damyo, foggers, Kobe, void      |
|            1 |     3801 | 2024-02-16 | LYG                | W   | 0.143      | 0.303        | 0.004 (0.000)    | 0.043 (0.002)    | -         |     2.48 | apocdud, damyo, foggers, Kobe, void      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($974.57)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.897 | $600.00        | $538.43         |
| 2024-03-23 |      0.378 | $662.00        | $250.12         |
| 2024-02-17 |      0.149 | $1,250.00      | $186.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
