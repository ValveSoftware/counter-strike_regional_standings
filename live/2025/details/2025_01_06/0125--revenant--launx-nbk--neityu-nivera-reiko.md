### Roster Details<br />
Team Name: Revenant<br />
Roster: lauNX, NBK-, Neityu, Nivera, reiko<br />
Global Rank: [125](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  797.8<br />
<br />
Final Rank Value (797.8) = Starting Rank Value (744.7) + Head To Head Adjustments (53.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.7
- 400 + ( ( 0.174 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 744.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |     2370 | 2024-09-14 | SINNERS           | W   | 0.440      | 0.384        | 0.082 (0.014)    | 0.682 (0.115)    | 0 (0.000) |    11.88 | lauNX, NBK-, Neityu, Nivera, reiko  |
|           36 |     2501 | 2024-09-10 | Insilio           | L   | 0.414      | -            | -                | -                | -         |    -5.60 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           35 |     2523 | 2024-09-09 | EYEBALLERS        | L   | 0.407      | -            | -                | -                | -         |    -6.69 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           34 |     2581 | 2024-09-07 | DMS               | W   | 0.392      | 0.384        | -                | 0.476 (0.072)    | 0 (0.000) |     4.61 | 0SAMAS, lauNX, NBK-, Nivera, reiko  |
|           33 |     2598 | 2024-09-06 | JANO              | W   | 0.387      | 0.435        | 0.034 (0.006)    | -                | 0 (0.000) |     7.15 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           32 |     2654 | 2024-09-05 | Gaimin Gladiators | L   | 0.378      | -            | -                | -                | -         |    -3.12 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           31 |     2721 | 2024-09-03 | CYBERSHOKE        | L   | 0.365      | -            | -                | -                | -         |    -4.47 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           30 |     2734 | 2024-09-02 | FAVBET            | W   | 0.361      | 0.435        | 0.066 (0.010)    | 0.896 (0.140)    | 0 (0.000) |     7.74 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           29 |     2743 | 2024-09-02 | SINNERS           | L   | 0.359      | -            | -                | -                | -         |    -1.42 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           28 |     2774 | 2024-08-31 | ARCRED            | L   | 0.346      | -            | -                | -                | -         |    -5.37 | NBK-, Nivera, prosus, reiko, tiziaN |
|           27 |     2788 | 2024-08-30 | Sampi             | W   | 0.340      | 0.435        | 0.040 (0.006)    | 0.319 (0.047)    | 0 (0.000) |     8.28 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           26 |     2838 | 2024-08-29 | los kogutos       | L   | 0.333      | -            | -                | -                | -         |    -1.29 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           25 |     2844 | 2024-08-29 | B8                | L   | 0.332      | -            | -                | -                | -         |    -1.27 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           24 |     2942 | 2024-08-27 | Endpoint          | W   | 0.319      | 0.435        | 0.035 (0.005)    | 0.542 (0.075)    | 0 (0.000) |     6.43 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           23 |     3064 | 2024-08-25 | B8                | L   | 0.306      | -            | -                | -                | -         |    -1.10 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           22 |     3085 | 2024-08-24 | ECSTATIC          | W   | 0.300      | 0.143        | 0.072 (0.003)    | 1.000 (0.043)    | 0 (0.000) |     7.09 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           21 |     3109 | 2024-08-23 | Verdant           | W   | 0.293      | -            | -                | -                | 0 (0.000) |     6.87 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           20 |     3139 | 2024-08-22 | Alliance          | L   | 0.287      | -            | -                | -                | -         |    -2.59 | adeX, lauNX, NBK-, Nivera, reiko    |
|           19 |     3210 | 2024-08-21 | DMS               | W   | 0.279      | 0.435        | -                | 0.476 (0.058)    | 0 (0.000) |     3.77 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           18 |     3225 | 2024-08-21 | ENCE Academy      | W   | 0.278      | -            | -                | -                | 0 (0.000) |     4.76 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           17 |     3244 | 2024-08-20 | Monte Gen         | L   | 0.274      | -            | -                | -                | -         |    -3.59 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           16 |     3254 | 2024-08-20 | ex-Enterprise     | L   | 0.272      | -            | -                | -                | -         |    -2.91 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           15 |     3299 | 2024-08-18 | CYBERSHOKE        | L   | 0.260      | -            | -                | -                | -         |    -3.05 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           14 |     3345 | 2024-08-16 | Nexus             | W   | 0.247      | -            | -                | -                | -         |     0.89 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           13 |     3353 | 2024-08-16 | Sampi             | W   | 0.245      | 0.371        | 0.040 (0.004)    | -                | -         |     6.03 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           12 |     3400 | 2024-08-14 | Aurora Young Blud | W   | 0.234      | 0.435        | 0.042 (0.004)    | 0.847 (0.086)    | -         |     5.57 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           11 |     3447 | 2024-08-13 | UNiTY             | W   | 0.225      | 0.333        | 0.067 (0.005)    | -                | -         |     5.48 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           10 |     3498 | 2024-08-12 | kONO              | W   | 0.218      | 0.333        | -                | 0.660 (0.048)    | -         |     5.08 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            9 |     3516 | 2024-08-11 | UNiTY             | L   | 0.212      | -            | -                | -                | -         |    -1.49 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            8 |     3564 | 2024-08-09 | TSM               | W   | 0.199      | -            | -                | -                | -         |     4.38 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            7 |     3625 | 2024-08-07 | ECLOT             | W   | 0.187      | 0.333        | 0.267 (0.017)    | 1.000 (0.062)    | -         |     5.71 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            6 |     3729 | 2024-08-04 | Monte Gen         | L   | 0.167      | -            | -                | -                | -         |    -2.02 | HS, lauNX, NBK-, Nivera, reiko      |
|            5 |     4067 | 2024-07-26 | DMS               | L   | 0.104      | -            | -                | -                | -         |    -1.81 | adeX, Jeebs, NBK-, Nivera, reiko    |
|            4 |     4096 | 2024-07-25 | 3DMAX             | L   | 0.099      | -            | -                | -                | -         |    -0.06 | adeX, Jeebs, NBK-, Nivera, reiko    |
|            3 |     4127 | 2024-07-24 | AMKAL             | L   | 0.093      | -            | -                | -                | -         |    -0.97 | adeX, lauNX, NBK-, Nivera, reiko    |
|            2 |     4138 | 2024-07-24 | Eternal Fire      | L   | 0.091      | -            | -                | -                | -         |    -0.07 | adeX, lauNX, NBK-, Nivera, reiko    |
|            1 |     4565 | 2024-07-12 | Verdant           | W   | 0.011      | -            | -                | -                | -         |     0.28 | adeX, lauNX, NBK-, Nivera, reiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,351.12)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
