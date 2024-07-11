### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, N1ghtraid, Omichella, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [17]( ../standings_asia.md)<br />
Final Rank Value:  663.7<br />
<br />
Final Rank Value (663.7) = Starting Rank Value (682.1) + Head To Head Adjustments (-18.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.1
- 400 + ( ( 0.134 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 682.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      592 | 2024-06-06 | Mindfreak          | L   | 0.965      | -            | -                | -                | -         |   -10.11 | Drox, Jynx, N1ghtraid, Omichella, vision     |
|           32 |     1003 | 2024-05-22 | Rooster            | L   | 0.864      | -            | -                | -                | -         |    -6.63 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           31 |     1007 | 2024-05-22 | Rooster            | L   | 0.864      | -            | -                | -                | -         |    -7.02 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           30 |     1786 | 2024-04-22 | Mindfreak          | L   | 0.665      | -            | -                | -                | -         |    -8.30 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           29 |     1789 | 2024-04-22 | Mindfreak          | L   | 0.665      | -            | -                | -                | -         |    -8.79 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           28 |     1977 | 2024-04-17 | Arcade             | L   | 0.631      | -            | -                | -                | -         |   -11.14 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           27 |     2139 | 2024-04-10 | Arcade             | W   | 0.585      | 0.333        | 0.005 (0.001)    | 0.123 (0.024)    | 0 (0.000) |     8.22 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           26 |     2146 | 2024-04-10 | Arcade             | W   | 0.584      | 0.333        | 0.005 (0.001)    | 0.123 (0.024)    | 0 (0.000) |     8.65 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           25 |     2370 | 2024-04-03 | KZG                | W   | 0.538      | 0.333        | 0.009 (0.002)    | 0.119 (0.021)    | 0 (0.000) |     8.23 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           24 |     2371 | 2024-04-03 | KZG                | W   | 0.538      | 0.333        | 0.009 (0.002)    | 0.119 (0.021)    | 0 (0.000) |     8.63 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           23 |     2498 | 2024-03-27 | Canon Event        | W   | 0.491      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.19 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           22 |     2502 | 2024-03-27 | Canon Event        | W   | 0.491      | 0.333        | 0.001 (0.000)    | -                | 0 (0.000) |     4.34 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           21 |     2768 | 2024-03-13 | DXA                | L   | 0.398      | -            | -                | -                | -         |    -6.11 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           20 |     2773 | 2024-03-13 | DXA                | W   | 0.398      | 0.333        | 0.004 (0.001)    | 0.156 (0.021)    | 0 (0.000) |     6.57 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           19 |     2945 | 2024-03-06 | Bad News Kangaroos | L   | 0.352      | -            | -                | -                | -         |    -3.08 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           18 |     2947 | 2024-03-06 | Bad News Kangaroos | L   | 0.351      | -            | -                | -                | -         |    -3.16 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           17 |     3116 | 2024-02-27 | RKON               | W   | 0.298      | 0.333        | -                | 0.059 (0.006)    | 0 (0.000) |     2.83 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           16 |     3119 | 2024-02-27 | RKON               | L   | 0.298      | -            | -                | -                | -         |    -6.67 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           15 |     3220 | 2024-02-22 | Bad News Kangaroos | L   | 0.265      | -            | -                | -                | -         |    -2.42 | Drox, Omichella, SkulL, viridian, vision     |
|           14 |     3221 | 2024-02-21 | Rooster            | L   | 0.264      | -            | -                | -                | -         |    -2.64 | Drox, Omichella, SkulL, viridian, vision     |
|           13 |     3255 | 2024-02-21 | Arcade             | W   | 0.257      | 0.143        | 0.005 (0.000)    | 0.123 (0.005)    | 0 (0.000) |     4.13 | Drox, Omichella, SkulL, viridian, vision     |
|           12 |     3275 | 2024-02-20 | Mindfreak          | W   | 0.251      | 0.143        | 0.005 (0.000)    | 0.212 (0.008)    | 0 (0.000) |     4.46 | Drox, Omichella, SkulL, viridian, vision     |
|           11 |     3277 | 2024-02-20 | Blitz              | W   | 0.251      | -            | -                | -                | -         |     1.37 | Drox, Omichella, SkulL, viridian, vision     |
|           10 |     3320 | 2024-02-18 | Mindfreak          | L   | 0.238      | -            | -                | -                | -         |    -3.33 | Drox, Omichella, SkulL, viridian, vision     |
|            9 |     3321 | 2024-02-18 | LE-LUX             | W   | 0.238      | -            | -                | -                | -         |     1.29 | Drox, Omichella, SkulL, viridian, vision     |
|            8 |     3773 | 2024-01-25 | Bad News Kangaroos | L   | 0.078      | -            | -                | -                | -         |    -1.82 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     3793 | 2024-01-24 | KZG                | W   | 0.071      | 0.143        | 0.009 (0.000)    | 0.119 (0.001)    | -         |     1.26 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            6 |     3920 | 2024-01-20 | FlyQuest           | L   | 0.044      | -            | -                | -                | -         |    -0.04 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     3922 | 2024-01-20 | iM Apartments      | W   | 0.044      | -            | -                | -                | -         |     0.24 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            4 |     3981 | 2024-01-18 | Mindfreak          | L   | 0.037      | -            | -                | -                | -         |    -0.85 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     4038 | 2024-01-17 | Mindfreak          | L   | 0.030      | -            | -                | -                | -         |    -0.71 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     4086 | 2024-01-17 | FARMism            | W   | 0.024      | -            | -                | -                | -         |     0.13 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     4163 | 2024-01-15 | DXA                | L   | 0.011      | -            | -                | -                | -         |    -0.16 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($787.38)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
