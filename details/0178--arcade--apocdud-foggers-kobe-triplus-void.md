### Roster Details<br />
Team Name: Arcade<br />
Roster: apocdud, foggers, Kobe, TRIPLUS, void<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [18]( ../standings_asia.md)<br />
Final Rank Value:  636.5<br />
<br />
Final Rank Value (636.5) = Starting Rank Value (686.0) + Head To Head Adjustments (-49.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.0
- 400 + ( ( 0.133 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 686.0


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
|           29 |     1426 | 2024-05-15 | Bad News Kangaroos | L   | 0.778      | -            | -                | -                | -         |    -9.83 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           28 |     1429 | 2024-05-15 | Bad News Kangaroos | L   | 0.778      | -            | -                | -                | -         |   -10.51 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           27 |     1618 | 2024-05-08 | Mindfreak          | L   | 0.732      | -            | -                | -                | -         |    -7.90 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           26 |     1620 | 2024-05-08 | Mindfreak          | L   | 0.731      | -            | -                | -                | -         |    -8.38 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           25 |     1636 | 2024-05-07 | DXA                | L   | 0.725      | -            | -                | -                | -         |   -11.99 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           24 |     1638 | 2024-05-07 | DXA                | W   | 0.725      | 0.333        | 0.004 (0.001)    | 0.187 (0.045)    | 0 (0.000) |    11.02 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           23 |     2128 | 2024-04-17 | Rooster            | L   | 0.592      | -            | -                | -                | -         |    -5.14 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           22 |     2141 | 2024-04-17 | Vantage            | W   | 0.592      | 0.143        | 0.003 (0.000)    | 0.113 (0.010)    | 0 (0.000) |    10.44 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           21 |     2303 | 2024-04-10 | Vantage            | L   | 0.545      | -            | -                | -                | -         |    -7.67 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           20 |     2310 | 2024-04-10 | Vantage            | L   | 0.545      | -            | -                | -                | -         |    -8.05 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           19 |     2538 | 2024-04-03 | FlyQuest           | L   | 0.498      | -            | -                | -                | -         |    -0.42 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           18 |     2542 | 2024-04-03 | FlyQuest           | L   | 0.498      | -            | -                | -                | -         |    -0.43 | apocdud, foggers, Kobe, TRIPLUS, void    |
|           17 |     2664 | 2024-03-27 | Rooster            | L   | 0.452      | -            | -                | -                | -         |    -4.21 | apocdud, foggers, kibstar, Kobe, void    |
|           16 |     2667 | 2024-03-27 | Rooster            | L   | 0.452      | -            | -                | -                | -         |    -4.35 | apocdud, foggers, kibstar, Kobe, void    |
|           15 |     2712 | 2024-03-23 | KZG                | L   | 0.425      | -            | -                | -                | -         |    -6.77 | apocdud, foggers, Kobe, rekonz, void     |
|           14 |     2714 | 2024-03-23 | Bad News Kangaroos | L   | 0.424      | -            | -                | -                | -         |    -4.29 | apocdud, foggers, Kobe, rekonz, void     |
|           13 |     3107 | 2024-03-06 | KZG                | W   | 0.312      | 0.333        | 0.009 (0.001)    | 0.108 (0.011)    | 0 (0.000) |     5.04 | apocdud, foggers, Kobe, void, yourwombat |
|           12 |     3114 | 2024-03-06 | KZG                | W   | 0.312      | 0.333        | 0.009 (0.001)    | 0.108 (0.011)    | 0 (0.000) |     5.18 | apocdud, foggers, Kobe, void, yourwombat |
|           11 |     3282 | 2024-02-27 | Canon Event        | W   | 0.258      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.21 | apocdud, damyo, foggers, Kobe, void      |
|           10 |     3284 | 2024-02-27 | Canon Event        | W   | 0.258      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.25 | apocdud, damyo, foggers, Kobe, void      |
|            9 |     3419 | 2024-02-21 | Vantage            | L   | 0.218      | -            | -                | -                | -         |    -3.48 | apocdud, damyo, foggers, Kobe, void      |
|            8 |     3440 | 2024-02-20 | Cringexe           | W   | 0.212      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.71 | apocdud, damyo, foggers, Kobe, void      |
|            7 |     3442 | 2024-02-20 | gfg123321          | W   | 0.211      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.09 | apocdud, damyo, foggers, Kobe, void      |
|            6 |     3486 | 2024-02-18 | FlyQuest           | L   | 0.198      | -            | -                | -                | -         |    -0.18 | apocdud, damyo, foggers, Kobe, void      |
|            5 |     3487 | 2024-02-18 | KZG                | W   | 0.198      | 0.143        | 0.009 (0.000)    | 0.108 (0.003)    | 0 (0.000) |     3.49 | apocdud, damyo, foggers, Kobe, void      |
|            4 |     3490 | 2024-02-17 | FlyQuest           | L   | 0.196      | -            | -                | -                | -         |    -0.17 | apocdud, damyo, foggers, Kobe, void      |
|            3 |     3513 | 2024-02-16 | LYG                | W   | 0.190      | 0.303        | 0.005 (0.000)    | 0.050 (0.003)    | 0 (0.000) |     3.43 | apocdud, damyo, foggers, Kobe, void      |
|            2 |     3633 | 2024-02-13 | DXA                | L   | 0.165      | -            | -                | -                | -         |    -2.41 | apocdud, damyo, foggers, Kobe, SaVage    |
|            1 |     3635 | 2024-02-13 | disciples          | W   | 0.165      | -            | -                | -                | -         |     0.87 | apocdud, damyo, foggers, Kobe, SaVage    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,093.20)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.945 | $600.00        | $566.77         |
| 2024-03-23 |      0.425 | $662.00        | $281.38         |
| 2024-02-17 |      0.196 | $1,250.00      | $245.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
