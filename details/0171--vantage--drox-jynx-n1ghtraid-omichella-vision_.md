### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, N1ghtraid, Omichella, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [15]( ../standings_asia.md)<br />
Final Rank Value:  667.5<br />
<br />
Final Rank Value (667.5) = Starting Rank Value (685.2) + Head To Head Adjustments (-17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.2
- 400 + ( ( 0.133 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 685.2


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
|           29 |      756 | 2024-06-06 | Mindfreak          | L   | 0.925      | -            | -                | -                | -         |   -10.11 | Drox, Jynx, N1ghtraid, Omichella, vision     |
|           28 |     1167 | 2024-05-22 | Rooster            | L   | 0.825      | -            | -                | -                | -         |    -6.45 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           27 |     1171 | 2024-05-22 | Rooster            | L   | 0.825      | -            | -                | -                | -         |    -6.82 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           26 |     1950 | 2024-04-22 | Mindfreak          | L   | 0.625      | -            | -                | -                | -         |    -8.09 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           25 |     1953 | 2024-04-22 | Mindfreak          | L   | 0.625      | -            | -                | -                | -         |    -8.53 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           24 |     2141 | 2024-04-17 | Arcade             | L   | 0.592      | -            | -                | -                | -         |   -10.44 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           23 |     2303 | 2024-04-10 | Arcade             | W   | 0.545      | 0.333        | 0.004 (0.001)    | 0.110 (0.020)    | 0 (0.000) |     7.67 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           22 |     2310 | 2024-04-10 | Arcade             | W   | 0.545      | 0.333        | 0.004 (0.001)    | 0.110 (0.020)    | 0 (0.000) |     8.05 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           21 |     2534 | 2024-04-03 | KZG                | W   | 0.499      | 0.333        | 0.009 (0.001)    | 0.108 (0.018)    | 0 (0.000) |     7.71 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           20 |     2535 | 2024-04-03 | KZG                | W   | 0.498      | 0.333        | 0.009 (0.001)    | 0.108 (0.018)    | 0 (0.000) |     8.05 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           19 |     2662 | 2024-03-27 | Canon Event        | W   | 0.452      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.86 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           18 |     2666 | 2024-03-27 | Canon Event        | W   | 0.452      | 0.333        | 0.001 (0.000)    | -                | 0 (0.000) |     3.98 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           17 |     2932 | 2024-03-13 | DXA                | L   | 0.359      | -            | -                | -                | -         |    -5.42 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           16 |     2937 | 2024-03-13 | DXA                | W   | 0.358      | 0.333        | 0.004 (0.000)    | 0.187 (0.022)    | 0 (0.000) |     6.00 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           15 |     3109 | 2024-03-06 | Bad News Kangaroos | L   | 0.312      | -            | -                | -                | -         |    -2.91 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           14 |     3111 | 2024-03-06 | Bad News Kangaroos | L   | 0.312      | -            | -                | -                | -         |    -2.98 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           13 |     3280 | 2024-02-27 | RKON               | W   | 0.258      | 0.333        | -                | 0.053 (0.005)    | 0 (0.000) |     2.40 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           12 |     3283 | 2024-02-27 | RKON               | L   | 0.258      | -            | -                | -                | -         |    -5.82 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           11 |     3384 | 2024-02-22 | Bad News Kangaroos | L   | 0.225      | -            | -                | -                | -         |    -2.19 | Drox, Omichella, SkulL, viridian, vision     |
|           10 |     3385 | 2024-02-21 | Rooster            | L   | 0.224      | -            | -                | -                | -         |    -2.24 | Drox, Omichella, SkulL, viridian, vision     |
|            9 |     3419 | 2024-02-21 | Arcade             | W   | 0.218      | 0.143        | 0.004 (0.000)    | 0.110 (0.003)    | 0 (0.000) |     3.48 | Drox, Omichella, SkulL, viridian, vision     |
|            8 |     3439 | 2024-02-20 | Mindfreak          | W   | 0.212      | 0.143        | 0.005 (0.000)    | 0.218 (0.007)    | 0 (0.000) |     3.65 | Drox, Omichella, SkulL, viridian, vision     |
|            7 |     3441 | 2024-02-20 | Blitz              | W   | 0.212      | -            | -                | -                | -         |     1.13 | Drox, Omichella, SkulL, viridian, vision     |
|            6 |     3484 | 2024-02-18 | Mindfreak          | L   | 0.198      | -            | -                | -                | -         |    -2.87 | Drox, Omichella, SkulL, viridian, vision     |
|            5 |     3485 | 2024-02-18 | LE-LUX             | W   | 0.198      | -            | -                | -                | -         |     1.05 | Drox, Omichella, SkulL, viridian, vision     |
|            4 |     3937 | 2024-01-25 | Bad News Kangaroos | L   | 0.039      | -            | -                | -                | -         |    -0.37 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     3957 | 2024-01-24 | KZG                | W   | 0.031      | 0.143        | 0.009 (0.000)    | 0.108 (0.000)    | -         |     0.55 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     4084 | 2024-01-20 | FlyQuest           | L   | 0.005      | -            | -                | -                | -         |    -0.00 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     4086 | 2024-01-20 | iM Apartments      | W   | 0.004      | -            | -                | -                | -         |     0.02 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($755.69)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
