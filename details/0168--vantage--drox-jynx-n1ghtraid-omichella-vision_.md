### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, N1ghtraid, Omichella, vision <br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [16]( ../standings_asia.md)<br />
Final Rank Value:  655.8<br />
<br />
Final Rank Value (655.8) = Starting Rank Value (678.0) + Head To Head Adjustments (-22.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.0
- 400 + ( ( 0.137 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 678.0


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
|           33 |      456 | 2024-06-06 | Mindfreak          | L   | 1.000      | -            | -                | -                | -         |    -9.78 | Drox, Jynx, N1ghtraid, Omichella, vision     |
|           32 |      869 | 2024-05-22 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -7.11 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           31 |      873 | 2024-05-22 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -7.58 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           30 |     1652 | 2024-04-22 | Mindfreak          | L   | 0.821      | -            | -                | -                | -         |    -9.75 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           29 |     1655 | 2024-04-22 | Mindfreak          | L   | 0.820      | -            | -                | -                | -         |   -10.45 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           28 |     1843 | 2024-04-17 | Arcade             | L   | 0.787      | -            | -                | -                | -         |   -13.89 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           27 |     2005 | 2024-04-10 | Arcade             | W   | 0.740      | 0.333        | 0.005 (0.001)    | 0.157 (0.039)    | 0 (0.000) |    10.32 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           26 |     2012 | 2024-04-10 | Arcade             | W   | 0.740      | 0.333        | 0.005 (0.001)    | 0.157 (0.039)    | 0 (0.000) |    11.01 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           25 |     2236 | 2024-04-03 | KZG                | W   | 0.694      | 0.333        | 0.009 (0.002)    | 0.142 (0.033)    | 0 (0.000) |    10.15 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           24 |     2237 | 2024-04-03 | KZG                | W   | 0.694      | 0.333        | 0.009 (0.002)    | 0.142 (0.033)    | 0 (0.000) |    10.80 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           23 |     2365 | 2024-03-27 | Canon Event        | W   | 0.647      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.39 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           22 |     2369 | 2024-03-27 | Canon Event        | W   | 0.647      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     5.64 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           21 |     2635 | 2024-03-13 | DXA                | L   | 0.554      | -            | -                | -                | -         |    -8.55 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           20 |     2640 | 2024-03-13 | DXA                | W   | 0.554      | 0.333        | 0.004 (0.001)    | 0.179 (0.033)    | 0 (0.000) |     9.10 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           19 |     2812 | 2024-03-06 | Bad News Kangaroos | L   | 0.507      | -            | -                | -                | -         |    -3.92 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           18 |     2814 | 2024-03-06 | Bad News Kangaroos | L   | 0.507      | -            | -                | -                | -         |    -4.06 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           17 |     2983 | 2024-02-27 | RKON               | W   | 0.454      | 0.333        | -                | 0.074 (0.011)    | 0 (0.000) |     4.59 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           16 |     2986 | 2024-02-27 | RKON               | L   | 0.453      | -            | -                | -                | -         |    -9.93 | Drox, N1ghtraid, Omichella, SkulL, vision    |
|           15 |     3087 | 2024-02-22 | Bad News Kangaroos | L   | 0.420      | -            | -                | -                | -         |    -3.44 | Drox, Omichella, SkulL, viridian, vision     |
|           14 |     3088 | 2024-02-21 | Rooster            | L   | 0.419      | -            | -                | -                | -         |    -4.17 | Drox, Omichella, SkulL, viridian, vision     |
|           13 |     3122 | 2024-02-21 | Arcade             | W   | 0.413      | 0.143        | 0.005 (0.000)    | 0.157 (0.009)    | 0 (0.000) |     6.82 | Drox, Omichella, SkulL, viridian, vision     |
|           12 |     3142 | 2024-02-20 | Mindfreak          | W   | 0.407      | 0.143        | 0.005 (0.000)    | 0.226 (0.013)    | 0 (0.000) |     7.38 | Drox, Omichella, SkulL, viridian, vision     |
|           11 |     3144 | 2024-02-20 | Blitz              | W   | 0.407      | -            | -                | -                | -         |     2.32 | Drox, Omichella, SkulL, viridian, vision     |
|           10 |     3187 | 2024-02-18 | Mindfreak          | L   | 0.394      | -            | -                | -                | -         |    -5.37 | Drox, Omichella, SkulL, viridian, vision     |
|            9 |     3188 | 2024-02-18 | LE-LUX             | W   | 0.393      | -            | -                | -                | -         |     2.25 | Drox, Omichella, SkulL, viridian, vision     |
|            8 |     3640 | 2024-01-25 | Bad News Kangaroos | L   | 0.234      | -            | -                | -                | -         |    -5.32 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     3660 | 2024-01-24 | KZG                | W   | 0.227      | 0.143        | 0.009 (0.000)    | 0.142 (0.005)    | -         |     4.09 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            6 |     3787 | 2024-01-20 | FlyQuest           | L   | 0.200      | -            | -                | -                | -         |    -0.12 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     3789 | 2024-01-20 | iM Apartments      | W   | 0.200      | -            | -                | -                | -         |     1.12 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            4 |     3848 | 2024-01-18 | Mindfreak          | L   | 0.193      | -            | -                | -                | -         |    -4.19 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     3905 | 2024-01-17 | Mindfreak          | L   | 0.186      | -            | -                | -                | -         |    -4.13 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     3953 | 2024-01-17 | FARMism            | W   | 0.180      | -            | -                | -                | -         |     1.00 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     4030 | 2024-01-15 | DXA                | L   | 0.167      | -            | -                | -                | -         |    -2.42 | KRAXYT, N1ghtraid, Omichella, SkulL, vision  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
