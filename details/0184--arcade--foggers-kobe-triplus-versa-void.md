### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kobe, TRIPLUS, versa, void<br />
Global Rank: [184](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
<br />
Final Rank Value:  606.0<br />
<br />
Final Rank Value (606.0) = Starting Rank Value (670.8) + Head To Head Adjustments (-64.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.8
- 400 + ( ( 0.131 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 670.8


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
|           33 |      295 | 2024-07-23 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -10.09 | foggers, Kobe, TRIPLUS, versa, void      |
|           32 |      300 | 2024-07-23 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |   -10.91 | foggers, Kobe, TRIPLUS, versa, void      |
|           31 |      320 | 2024-07-22 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -15.04 | foggers, Kobe, TRIPLUS, versa, void      |
|           30 |      323 | 2024-07-22 | KZG                | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.113 (0.038)    | 0 (0.000) |    16.53 | foggers, Kobe, TRIPLUS, versa, void      |
|           29 |      474 | 2024-07-18 | Bad News Kangaroos | L   | 1.000      | -            | -                | -                | -         |   -13.63 | foggers, kibstar, TRIPLUS, versa, void   |
|           28 |      481 | 2024-07-18 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.143 (0.048)    | 0 (0.000) |    18.06 | foggers, kibstar, TRIPLUS, versa, void   |
|           27 |     1956 | 2024-05-15 | Bad News Kangaroos | L   | 0.684      | -            | -                | -                | -         |    -8.86 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           26 |     1959 | 2024-05-15 | Bad News Kangaroos | L   | 0.683      | -            | -                | -                | -         |    -9.39 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           25 |     2148 | 2024-05-08 | Mindfreak          | L   | 0.637      | -            | -                | -                | -         |    -7.93 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           24 |     2150 | 2024-05-08 | Mindfreak          | L   | 0.637      | -            | -                | -                | -         |    -8.38 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           23 |     2166 | 2024-05-07 | DXA                | L   | 0.631      | -            | -                | -                | -         |   -10.29 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           22 |     2168 | 2024-05-07 | DXA                | W   | 0.631      | 0.333        | 0.002 (0.001)    | 0.228 (0.048)    | 0 (0.000) |     9.77 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           21 |     2658 | 2024-04-17 | Rooster            | L   | 0.498      | -            | -                | -                | -         |    -4.88 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           20 |     2671 | 2024-04-17 | Vantage            | W   | 0.497      | 0.143        | 0.002 (0.000)    | 0.076 (0.005)    | 0 (0.000) |     8.48 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           19 |     2833 | 2024-04-10 | Vantage            | L   | 0.450      | -            | -                | -                | -         |    -6.63 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           18 |     2840 | 2024-04-10 | Vantage            | L   | 0.450      | -            | -                | -                | -         |    -6.89 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           17 |     3068 | 2024-04-03 | FlyQuest           | L   | 0.404      | -            | -                | -                | -         |    -0.66 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           16 |     3072 | 2024-04-03 | FlyQuest           | L   | 0.403      | -            | -                | -                | -         |    -0.66 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           15 |     3194 | 2024-03-27 | Rooster            | L   | 0.357      | -            | -                | -                | -         |    -3.73 | apocdud, foggers, kibstar, Kobe, void    |
|           14 |     3197 | 2024-03-27 | Rooster            | L   | 0.357      | -            | -                | -                | -         |    -3.84 | apocdud, foggers, kibstar, Kobe, void    |
|           13 |     3242 | 2024-03-23 | KZG                | L   | 0.331      | -            | -                | -                | -         |    -5.05 | apocdud, foggers, Kobe, rekonz, void     |
|           12 |     3244 | 2024-03-23 | Bad News Kangaroos | L   | 0.330      | -            | -                | -                | -         |    -3.87 | apocdud, foggers, Kobe, rekonz, void     |
|           11 |     3637 | 2024-03-06 | KZG                | W   | 0.217      | 0.333        | 0.006 (0.000)    | 0.113 (0.008)    | 0 (0.000) |     3.63 | apocdud, foggers, Kobe, void, yourwombat |
|           10 |     3644 | 2024-03-06 | KZG                | W   | 0.217      | 0.333        | 0.006 (0.000)    | 0.113 (0.008)    | 0 (0.000) |     3.69 | apocdud, foggers, Kobe, void, yourwombat |
|            9 |     3812 | 2024-02-27 | Canon Event        | W   | 0.164      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.47 | apocdud, damyo, foggers, Kobe, void      |
|            8 |     3814 | 2024-02-27 | Canon Event        | W   | 0.163      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     1.49 | apocdud, damyo, foggers, Kobe, void      |
|            7 |     3949 | 2024-02-21 | Vantage            | L   | 0.123      | -            | -                | -                | -         |    -2.03 | apocdud, damyo, foggers, Kobe, void      |
|            6 |     3970 | 2024-02-20 | Cringexe           | W   | 0.117      | 0.143        | -                | 0.004 (0.000)    | 0 (0.000) |     0.96 | apocdud, damyo, foggers, Kobe, void      |
|            5 |     3972 | 2024-02-20 | gfg123321          | W   | 0.117      | -            | -                | -                | 0 (0.000) |     0.65 | apocdud, damyo, foggers, Kobe, void      |
|            4 |     4016 | 2024-02-18 | FlyQuest           | L   | 0.104      | -            | -                | -                | -         |    -0.18 | apocdud, damyo, foggers, Kobe, void      |
|            3 |     4017 | 2024-02-18 | KZG                | W   | 0.103      | 0.143        | 0.006 (0.000)    | 0.113 (0.002)    | -         |     1.82 | apocdud, damyo, foggers, Kobe, void      |
|            2 |     4020 | 2024-02-17 | FlyQuest           | L   | 0.102      | -            | -                | -                | -         |    -0.17 | apocdud, damyo, foggers, Kobe, void      |
|            1 |     4043 | 2024-02-16 | LYG                | W   | 0.096      | 0.303        | 0.004 (0.000)    | 0.035 (0.001)    | -         |     1.67 | apocdud, damyo, foggers, Kobe, void      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($855.78)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.850 | $600.00        | $510.06         |
| 2024-03-23 |      0.331 | $662.00        | $218.82         |
| 2024-02-17 |      0.102 | $1,250.00      | $126.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
