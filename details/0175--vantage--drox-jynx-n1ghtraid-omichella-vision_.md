### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, N1ghtraid, Omichella, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  644.8<br />
<br />
Final Rank Value (644.8) = Starting Rank Value (662.7) + Head To Head Adjustments (-17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.7
- 400 + ( ( 0.130 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 662.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     1044 | 2024-06-06 | Mindfreak          | L   | 0.878      | -            | -                | -                | -         |   -10.53 | Drox, Jynx, N1ghtraid, Omichella, vision   |
|           24 |     1455 | 2024-05-22 | Rooster            | L   | 0.778      | -            | -                | -                | -         |    -6.36 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           23 |     1459 | 2024-05-22 | Rooster            | L   | 0.777      | -            | -                | -                | -         |    -6.71 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           22 |     2238 | 2024-04-22 | Mindfreak          | L   | 0.578      | -            | -                | -                | -         |    -8.15 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           21 |     2241 | 2024-04-22 | Mindfreak          | L   | 0.578      | -            | -                | -                | -         |    -8.57 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           20 |     2429 | 2024-04-17 | Arcade             | L   | 0.544      | -            | -                | -                | -         |    -9.31 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           19 |     2591 | 2024-04-10 | Arcade             | W   | 0.498      | 0.333        | 0.004 (0.001)    | 0.159 (0.026)    | 0 (0.000) |     7.30 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           18 |     2598 | 2024-04-10 | Arcade             | W   | 0.498      | 0.333        | 0.004 (0.001)    | 0.159 (0.026)    | 0 (0.000) |     7.62 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           17 |     2822 | 2024-04-03 | KZG                | W   | 0.451      | 0.333        | 0.007 (0.001)    | 0.130 (0.020)    | 0 (0.000) |     7.34 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           16 |     2823 | 2024-04-03 | KZG                | W   | 0.451      | 0.333        | 0.007 (0.001)    | 0.130 (0.020)    | 0 (0.000) |     7.63 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           15 |     2950 | 2024-03-27 | Canon Event        | W   | 0.405      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.67 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           14 |     2954 | 2024-03-27 | Canon Event        | W   | 0.404      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.78 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           13 |     3220 | 2024-03-13 | DXA                | L   | 0.311      | -            | -                | -                | -         |    -4.53 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           12 |     3225 | 2024-03-13 | DXA                | W   | 0.311      | 0.333        | 0.003 (0.000)    | 0.217 (0.022)    | 0 (0.000) |     5.38 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           11 |     3397 | 2024-03-06 | Bad News Kangaroos | L   | 0.265      | -            | -                | -                | -         |    -2.70 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           10 |     3399 | 2024-03-06 | Bad News Kangaroos | L   | 0.264      | -            | -                | -                | -         |    -2.75 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            9 |     3568 | 2024-02-27 | RKON               | W   | 0.211      | 0.333        | 0.000 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     2.04 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            8 |     3571 | 2024-02-27 | RKON               | L   | 0.211      | -            | -                | -                | -         |    -4.66 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     3672 | 2024-02-22 | Bad News Kangaroos | L   | 0.178      | -            | -                | -                | -         |    -1.88 | Drox, Omichella, SkulL, viridian, vision   |
|            6 |     3673 | 2024-02-21 | Rooster            | L   | 0.177      | -            | -                | -                | -         |    -1.81 | Drox, Omichella, SkulL, viridian, vision   |
|            5 |     3707 | 2024-02-21 | Arcade             | W   | 0.171      | 0.143        | 0.004 (0.000)    | 0.159 (0.004)    | 0 (0.000) |     2.82 | Drox, Omichella, SkulL, viridian, vision   |
|            4 |     3727 | 2024-02-20 | Mindfreak          | W   | 0.165      | 0.143        | 0.005 (0.000)    | 0.210 (0.005)    | 0 (0.000) |     2.83 | Drox, Omichella, SkulL, viridian, vision   |
|            3 |     3729 | 2024-02-20 | Blitz              | W   | 0.164      | -            | -                | -                | -         |     0.97 | Drox, Omichella, SkulL, viridian, vision   |
|            2 |     3772 | 2024-02-18 | Mindfreak          | L   | 0.151      | -            | -                | -                | -         |    -2.19 | Drox, Omichella, SkulL, viridian, vision   |
|            1 |     3773 | 2024-02-18 | LE-LUX             | W   | 0.151      | -            | -                | -                | -         |     0.89 | Drox, Omichella, SkulL, viridian, vision   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($717.91)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
