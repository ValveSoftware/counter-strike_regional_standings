### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [115](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  855.3<br />
<br />
Final Rank Value (855.3) = Starting Rank Value (833.3) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.142[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 833.3
- 400 + ( ( 0.202 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 833.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1701 | 2024-05-03 | FURIA       | L   | 0.700      | -            | -                | -                | -         |    -0.41 | ADDICT, BRACE, damyo, hazr, pz      |
|           33 |     1746 | 2024-05-01 | ENCE        | L   | 0.687      | -            | -                | -                | -         |    -1.06 | ADDICT, BRACE, damyo, hazr, pz      |
|           32 |     1779 | 2024-04-30 | MOUZ        | L   | 0.679      | -            | -                | -                | -         |    -0.04 | ADDICT, BRACE, damyo, hazr, pz      |
|           31 |     2001 | 2024-04-20 | FlyQuest    | L   | 0.612      | -            | -                | -                | -         |    -1.22 | ADDICT, BRACE, damyo, hazr, pz      |
|           30 |     2005 | 2024-04-20 | Rooster     | W   | 0.611      | 0.143        | 0.017 (0.001)    | 0.275 (0.024)    | 0 (0.000) |     9.84 | ADDICT, BRACE, damyo, hazr, pz      |
|           29 |     2050 | 2024-04-19 | Mindfreak   | W   | 0.605      | 0.143        | 0.005 (0.000)    | 0.218 (0.019)    | 0 (0.000) |     7.23 | ADDICT, BRACE, damyo, hazr, pz      |
|           28 |     2053 | 2024-04-19 | Rooster     | L   | 0.604      | -            | -                | -                | -         |    -9.27 | ADDICT, BRACE, damyo, hazr, pz      |
|           27 |     2302 | 2024-04-10 | Rooster     | W   | 0.545      | 0.333        | 0.017 (0.003)    | 0.275 (0.050)    | 0 (0.000) |     8.80 | ADDICT, BRACE, damyo, hazr, pz      |
|           26 |     2312 | 2024-04-10 | Rooster     | L   | 0.545      | -            | -                | -                | -         |    -8.54 | ADDICT, BRACE, damyo, hazr, pz      |
|           25 |     2537 | 2024-04-03 | DXA         | W   | 0.498      | 0.333        | 0.004 (0.001)    | 0.187 (0.031)    | 0 (0.000) |     4.65 | ADDICT, BRACE, damyo, hazr, pz      |
|           24 |     2541 | 2024-04-03 | DXA         | W   | 0.498      | 0.333        | 0.004 (0.001)    | 0.187 (0.031)    | 0 (0.000) |     4.83 | ADDICT, BRACE, damyo, hazr, pz      |
|           23 |     2661 | 2024-03-27 | Mindfreak   | L   | 0.452      | -            | -                | -                | -         |    -9.68 | ADDICT, BRACE, damyo, hazr, pz      |
|           22 |     2668 | 2024-03-27 | Mindfreak   | W   | 0.452      | 0.333        | 0.005 (0.001)    | 0.218 (0.033)    | 0 (0.000) |     4.60 | ADDICT, BRACE, damyo, hazr, pz      |
|           21 |     2711 | 2024-03-23 | DXA         | W   | 0.425      | 0.315        | 0.004 (0.001)    | 0.187 (0.025)    | 1 (0.425) |     4.29 | ADDICT, BRACE, damyo, hazr, pz      |
|           20 |     2714 | 2024-03-23 | Arcade      | W   | 0.424      | 0.315        | 0.004 (0.001)    | 0.110 (0.015)    | 1 (0.424) |     4.29 | ADDICT, BRACE, damyo, hazr, pz      |
|           19 |     2772 | 2024-03-20 | Canon Event | W   | 0.404      | -            | -                | -                | 0 (0.000) |     1.80 | ADDICT, BRACE, damyo, hazr, pz      |
|           18 |     2773 | 2024-03-20 | Canon Event | W   | 0.404      | -            | -                | -                | -         |     1.83 | ADDICT, BRACE, damyo, hazr, pz      |
|           17 |     2843 | 2024-03-16 | Gods Reign  | L   | 0.378      | -            | -                | -                | -         |    -5.89 | ADDICT, BRACE, hazr, pz, yourwombat |
|           16 |     2864 | 2024-03-15 | GRDX        | W   | 0.371      | 0.432        | 0.004 (0.001)    | -                | 1 (0.371) |     1.99 | ADDICT, BRACE, hazr, pz, yourwombat |
|           15 |     2897 | 2024-03-14 | Aurora      | L   | 0.364      | -            | -                | -                | -         |    -0.12 | ADDICT, BRACE, hazr, pz, yourwombat |
|           14 |     3109 | 2024-03-06 | Vantage     | W   | 0.312      | 0.333        | 0.003 (0.000)    | 0.113 (0.012)    | -         |     2.91 | ADDICT, BRACE, damyo, hazr, pz      |
|           13 |     3111 | 2024-03-06 | Vantage     | W   | 0.312      | 0.333        | -                | 0.113 (0.012)    | -         |     2.98 | ADDICT, BRACE, damyo, hazr, pz      |
|           12 |     3365 | 2024-02-22 | Rooster     | L   | 0.231      | -            | -                | -                | -         |    -3.68 | ADDICT, BRACE, Hatz, hazr, pz       |
|           11 |     3384 | 2024-02-22 | Vantage     | W   | 0.225      | -            | -                | -                | -         |     2.19 | ADDICT, BRACE, Hatz, hazr, pz       |
|           10 |     3386 | 2024-02-21 | FlyQuest    | L   | 0.224      | -            | -                | -                | -         |    -0.42 | ADDICT, BRACE, Hatz, hazr, pz       |
|            9 |     3411 | 2024-02-21 | FlyQuest    | L   | 0.219      | -            | -                | -                | -         |    -0.41 | ADDICT, BRACE, Hatz, hazr, pz       |
|            8 |     3415 | 2024-02-21 | FlyQuest    | L   | 0.218      | -            | -                | -                | -         |    -0.42 | ADDICT, BRACE, Hatz, hazr, pz       |
|            7 |     3926 | 2024-01-26 | Rooster     | W   | 0.045      | -            | -                | -                | -         |     0.69 | ADDICT, Hatz, hazr, pz, Valiance    |
|            6 |     3937 | 2024-01-25 | Vantage     | W   | 0.039      | -            | -                | -                | -         |     0.37 | ADDICT, Hatz, hazr, pz, Valiance    |
|            5 |     3959 | 2024-01-24 | disciples   | W   | 0.031      | -            | -                | -                | -         |     0.08 | ADDICT, Hatz, hazr, pz, Valiance    |
|            4 |     4005 | 2024-01-22 | Rooster     | L   | 0.019      | -            | -                | -                | -         |    -0.30 | ADDICT, BRACE, Hatz, hazr, pz       |
|            3 |     4009 | 2024-01-22 | FlyQuest    | L   | 0.018      | -            | -                | -                | -         |    -0.03 | ADDICT, BRACE, Hatz, hazr, pz       |
|            2 |     4034 | 2024-01-21 | FlyQuest    | L   | 0.012      | -            | -                | -                | -         |    -0.02 | ADDICT, BRACE, Hatz, hazr, pz       |
|            1 |     4044 | 2024-01-20 | Rooster     | W   | 0.010      | -            | -                | -                | -         |     0.15 | ADDICT, BRACE, Hatz, hazr, pz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,953.96)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.945 | $1,050.00      | $991.84         |
| 2024-05-12 |      0.760 | $3,500.00      | $2,660.86       |
| 2024-03-23 |      0.425 | $3,308.00      | $1,406.07       |
| 2024-03-16 |      0.379 | $5,000.00      | $1,895.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
