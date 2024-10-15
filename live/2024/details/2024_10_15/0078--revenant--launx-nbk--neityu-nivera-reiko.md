### Roster Details<br />
Team Name: Revenant<br />
Roster: lauNX, NBK-, Neityu, Nivera, reiko<br />
Global Rank: [78](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [56]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  911.6<br />
<br />
Final Rank Value (911.6) = Starting Rank Value (890.1) + Head To Head Adjustments (21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.240[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 890.1
- 400 + ( ( 0.252 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 890.1


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
|           51 |      945 | 2024-09-14 | SINNERS           | W   | 0.994      | 0.384        | 0.165 (0.063)    | 1.000 (0.382)    | 0 (0.000) |    23.03 | lauNX, NBK-, Neityu, Nivera, reiko  |
|           50 |     1076 | 2024-09-10 | Insilio           | L   | 0.968      | -            | -                | -                | -         |   -13.05 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           49 |     1098 | 2024-09-09 | EYEBALLERS        | L   | 0.961      | -            | -                | -                | -         |   -19.55 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           48 |     1156 | 2024-09-07 | DMS               | W   | 0.946      | 0.384        | -                | 0.557 (0.202)    | 0 (0.000) |    10.45 | 0SAMAS, lauNX, NBK-, Nivera, reiko  |
|           47 |     1173 | 2024-09-06 | JANO              | W   | 0.941      | -            | -                | -                | 0 (0.000) |     5.91 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           46 |     1229 | 2024-09-05 | Gaimin Gladiators | L   | 0.932      | -            | -                | -                | -         |   -12.53 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           45 |     1296 | 2024-09-03 | CYBERSHOKE        | L   | 0.919      | -            | -                | -                | -         |   -11.02 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           44 |     1309 | 2024-09-02 | FAVBET            | W   | 0.914      | 0.435        | 0.044 (0.017)    | 0.887 (0.352)    | 0 (0.000) |    14.12 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           43 |     1318 | 2024-09-02 | SINNERS           | L   | 0.912      | -            | -                | -                | -         |    -6.11 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           42 |     1349 | 2024-08-31 | ARCRED            | L   | 0.900      | -            | -                | -                | -         |   -16.02 | NBK-, Nivera, prosus, reiko, tiziaN |
|           41 |     1363 | 2024-08-30 | Sampi             | W   | 0.894      | 0.435        | 0.046 (0.018)    | 0.677 (0.263)    | 0 (0.000) |    13.96 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           40 |     1413 | 2024-08-29 | Permitta          | L   | 0.886      | -            | -                | -                | -         |   -15.41 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           39 |     1419 | 2024-08-29 | B8                | L   | 0.886      | -            | -                | -                | -         |    -8.32 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           38 |     1517 | 2024-08-27 | Endpoint          | W   | 0.873      | 0.435        | 0.052 (0.020)    | 0.590 (0.224)    | 0 (0.000) |    14.85 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           37 |     1639 | 2024-08-25 | B8                | L   | 0.860      | -            | -                | -                | -         |    -7.63 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           36 |     1660 | 2024-08-24 | ECSTATIC          | W   | 0.854      | -            | -                | -                | 0 (0.000) |    13.62 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           35 |     1684 | 2024-08-23 | Verdant           | W   | 0.847      | -            | -                | -                | 0 (0.000) |     9.46 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           34 |     1714 | 2024-08-22 | Alliance          | L   | 0.840      | -            | -                | -                | -         |   -18.43 | adeX, lauNX, NBK-, Nivera, reiko    |
|           33 |     1785 | 2024-08-21 | DMS               | W   | 0.833      | 0.435        | -                | 0.557 (0.201)    | 0 (0.000) |    10.50 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           32 |     1800 | 2024-08-21 | ENCE Academy      | W   | 0.832      | -            | -                | -                | 0 (0.000) |     7.26 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           31 |     1819 | 2024-08-20 | Monte Gen         | L   | 0.828      | -            | -                | -                | -         |   -14.45 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           30 |     1829 | 2024-08-20 | ex-Enterprise     | L   | 0.826      | -            | -                | -                | -         |   -15.08 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           29 |     1874 | 2024-08-18 | CYBERSHOKE        | L   | 0.814      | -            | -                | -                | -         |   -11.00 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           28 |     1920 | 2024-08-16 | Nexus             | W   | 0.801      | -            | -                | -                | -         |     7.79 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           27 |     1928 | 2024-08-16 | Sampi             | W   | 0.799      | 0.371        | 0.046 (0.014)    | 0.677 (0.200)    | -         |    10.94 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           26 |     1975 | 2024-08-14 | Aurora Young Blud | W   | 0.787      | 0.435        | -                | 0.550 (0.188)    | -         |    13.21 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           25 |     2022 | 2024-08-13 | UNiTY             | W   | 0.779      | 0.333        | 0.043 (0.011)    | -                | -         |    16.49 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           24 |     2073 | 2024-08-12 | kONO              | W   | 0.772      | 0.333        | 0.022 (0.006)    | -                | -         |    10.49 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           23 |     2091 | 2024-08-11 | UNiTY             | L   | 0.766      | -            | -                | -                | -         |    -7.50 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           22 |     2139 | 2024-08-09 | TSM               | W   | 0.753      | 0.333        | 0.062 (0.015)    | 0.788 (0.198)    | -         |    14.37 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           21 |     2200 | 2024-08-07 | ECLOT             | W   | 0.740      | 0.333        | 0.089 (0.022)    | 0.744 (0.184)    | -         |    19.01 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           20 |     2304 | 2024-08-04 | Monte Gen         | L   | 0.721      | -            | -                | -                | -         |   -10.87 | HS, lauNX, NBK-, Nivera, reiko      |
|           19 |     2642 | 2024-07-26 | DMS               | L   | 0.658      | -            | -                | -                | -         |   -11.49 | adeX, Jeebs, NBK-, Nivera, reiko    |
|           18 |     2671 | 2024-07-25 | 3DMAX             | L   | 0.653      | -            | -                | -                | -         |    -1.03 | adeX, Jeebs, NBK-, Nivera, reiko    |
|           17 |     2702 | 2024-07-24 | AMKAL             | L   | 0.647      | -            | -                | -                | -         |    -6.30 | adeX, lauNX, NBK-, Nivera, reiko    |
|           16 |     2713 | 2024-07-24 | Eternal Fire      | L   | 0.645      | -            | -                | -                | -         |    -0.10 | adeX, lauNX, NBK-, Nivera, reiko    |
|           15 |     3140 | 2024-07-12 | Verdant           | W   | 0.565      | -            | -                | -                | -         |     7.44 | adeX, lauNX, NBK-, Nivera, reiko    |
|           14 |     3200 | 2024-07-09 | Johnny Speeds     | W   | 0.546      | 0.333        | 0.115 (0.021)    | -                | -         |    12.49 | adeX, lauNX, NBK-, Nivera, reiko    |
|           13 |     3217 | 2024-07-08 | ex-Enterprise     | L   | 0.539      | -            | -                | -                | -         |    -9.03 | adeX, lauNX, NBK-, Nivera, reiko    |
|           12 |     3219 | 2024-07-08 | lajtbitexe        | W   | 0.539      | -            | -                | -                | -         |     5.70 | adeX, lauNX, NBK-, Nivera, reiko    |
|           11 |     3224 | 2024-07-07 | kONO              | W   | 0.533      | -            | -                | -                | -         |     7.01 | adeX, lauNX, NBK-, Nivera, reiko    |
|           10 |     3227 | 2024-07-06 | 777               | W   | 0.527      | -            | -                | -                | -         |     3.60 | adeX, lauNX, NBK-, Nivera, reiko    |
|            9 |     3232 | 2024-07-05 | lajtbitexe        | L   | 0.519      | -            | -                | -                | -         |   -10.85 | adeX, lauNX, NBK-, Nivera, reiko    |
|            8 |     3263 | 2024-06-27 | Johnny Speeds     | L   | 0.466      | -            | -                | -                | -         |    -4.18 | adeX, lauNX, NBK-, Nivera, reiko    |
|            7 |     3266 | 2024-06-26 | lajtbitexe        | W   | 0.459      | -            | -                | -                | -         |     4.82 | adeX, lauNX, NBK-, Nivera, reiko    |
|            6 |     3267 | 2024-06-25 | Johnny Speeds     | L   | 0.453      | -            | -                | -                | -         |    -4.13 | adeX, lauNX, NBK-, Nivera, reiko    |
|            5 |     3275 | 2024-06-23 | Heimo             | W   | 0.439      | -            | -                | -                | -         |     2.73 | adeX, lauNX, NBK-, Nivera, reiko    |
|            4 |     3298 | 2024-06-16 | CYBERSHOKE        | L   | 0.395      | -            | -                | -                | -         |    -5.30 | adeX, lauNX, NBK-, Nivera, reiko    |
|            3 |     3327 | 2024-06-15 | Verdant           | W   | 0.388      | -            | -                | -                | -         |     5.54 | adeX, lauNX, NBK-, Nivera, reiko    |
|            2 |     3384 | 2024-06-14 | Astralis Talent   | W   | 0.380      | -            | -                | -                | -         |     2.46 | adeX, lauNX, NBK-, Nivera, reiko    |
|            1 |     3412 | 2024-06-13 | Verdant           | L   | 0.374      | -            | -                | -                | -         |    -6.40 | adeX, lauNX, NBK-, Nivera, reiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,344.29)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      0.779 | $6,000.00      | $4,673.92       |
| 2024-07-09 |      0.546 | $6,000.00      | $3,273.48       |
| 2024-06-27 |      0.466 | $3,000.00      | $1,396.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
