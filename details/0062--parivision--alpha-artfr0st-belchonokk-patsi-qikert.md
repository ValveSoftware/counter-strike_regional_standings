### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
Final Rank Value:  1040.8<br />
<br />
Final Rank Value (1040.8) = Starting Rank Value (987.6) + Head To Head Adjustments (53.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.282[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.6
- 400 + ( ( 0.279 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 987.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      240 | 2024-06-14 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -19.79 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           44 |      342 | 2024-06-10 | RUSH B            | W   | 0.992      | -            | -                | -                | 0 (0.000) |    12.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           43 |      347 | 2024-06-10 | 3DMAX             | L   | 0.992      | -            | -                | -                | -         |   -10.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           42 |      353 | 2024-06-10 | SINNERS           | L   | 0.991      | -            | -                | -                | -         |   -15.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           41 |      387 | 2024-06-09 | Aurora            | L   | 0.986      | -            | -                | -                | -         |    -4.47 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           40 |      394 | 2024-06-09 | 9 Pandas          | W   | 0.985      | -            | -                | -                | 0 (0.000) |    19.95 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           39 |      403 | 2024-06-09 | Monte             | W   | 0.985      | 0.143        | 0.188 (0.026)    | -                | 0 (0.000) |    21.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           38 |      408 | 2024-06-09 | SAW               | L   | 0.985      | -            | -                | -                | -         |    -7.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           37 |      618 | 2024-06-05 | Aurora            | L   | 0.960      | -            | -                | -                | -         |    -2.26 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           36 |      668 | 2024-06-04 | Monte             | W   | 0.954      | 0.500        | 0.188 (0.089)    | 0.668 (0.319)    | 0 (0.000) |    23.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           35 |     1075 | 2024-05-20 | Sangal            | L   | 0.852      | -            | -                | -                | -         |    -9.60 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           34 |     1153 | 2024-05-17 | Zero Tenacity     | W   | 0.834      | 0.500        | 0.153 (0.064)    | 1.000 (0.417)    | 0 (0.000) |    15.52 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           33 |     1184 | 2024-05-16 | Aurora            | L   | 0.828      | -            | -                | -                | -         |    -1.36 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           32 |     1202 | 2024-05-16 | Eternal Fire      | L   | 0.826      | -            | -                | -                | -         |    -0.48 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           31 |     1242 | 2024-05-15 | B8                | W   | 0.820      | 0.500        | 0.242 (0.099)    | 1.000 (0.410)    | 0 (0.000) |    18.78 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           30 |     1425 | 2024-05-09 | Endpoint          | L   | 0.780      | -            | -                | -                | -         |   -13.14 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           29 |     1584 | 2024-05-01 | Passion UA        | L   | 0.726      | -            | -                | -                | -         |   -12.52 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           28 |     1598 | 2024-05-01 | fnatic            | L   | 0.725      | -            | -                | -                | -         |    -1.29 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           27 |     1623 | 2024-04-29 | 3DMAX             | L   | 0.714      | -            | -                | -                | -         |    -4.67 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           26 |     1633 | 2024-04-29 | Zero Tenacity     | W   | 0.712      | 0.500        | 0.153 (0.055)    | 1.000 (0.356)    | 0 (0.000) |    12.73 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           25 |     1670 | 2024-04-27 | Sangal            | W   | 0.700      | 0.500        | 0.231 (0.081)    | 0.853 (0.298)    | 0 (0.000) |    14.94 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           24 |     1698 | 2024-04-26 | SINNERS           | W   | 0.693      | 0.435        | -                | 0.767 (0.231)    | 0 (0.000) |    14.08 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           23 |     1726 | 2024-04-25 | ex-Guild Eagles   | W   | 0.686      | -            | -                | -                | 0 (0.000) |     9.80 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           22 |     1748 | 2024-04-24 | MOUZ NXT          | W   | 0.679      | 0.435        | 0.152 (0.045)    | 1.000 (0.295)    | -         |    14.34 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           21 |     1797 | 2024-04-21 | Romania           | W   | 0.660      | -            | -                | -                | -         |     8.28 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           20 |     1800 | 2024-04-21 | B8                | L   | 0.659      | -            | -                | -                | -         |    -6.67 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           19 |     1857 | 2024-04-19 | Zero Tenacity     | L   | 0.647      | -            | -                | -                | -         |    -7.73 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           18 |     1956 | 2024-04-17 | HAVU              | W   | 0.634      | -            | -                | -                | -         |     4.32 | ArtFr0st, BELCHONOKK, Jerry, Patsi, Qikert |
|           17 |     1957 | 2024-04-17 | Permitta          | L   | 0.633      | -            | -                | -                | -         |    -9.32 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           16 |     2079 | 2024-04-11 | 500               | L   | 0.594      | -            | -                | -                | -         |   -14.01 | ArtFr0st, bl1x1, Jerry, Patsi, Qikert      |
|           15 |     2118 | 2024-04-10 | Aurora            | L   | 0.587      | -            | -                | -                | -         |    -0.54 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           14 |     2177 | 2024-04-09 | RUSH B            | L   | 0.581      | -            | -                | -                | -         |   -12.11 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           13 |     2349 | 2024-04-03 | MOUZ NXT          | L   | 0.541      | -            | -                | -                | -         |    -6.76 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           12 |     2360 | 2024-04-03 | Space             | W   | 0.539      | 0.500        | -                | 0.404 (0.109)    | -         |     5.22 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           11 |     2395 | 2024-04-02 | AMKAL             | L   | 0.533      | -            | -                | -                | -         |    -6.11 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|           10 |     2404 | 2024-04-02 | Insilio           | L   | 0.532      | -            | -                | -                | -         |    -9.80 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            9 |     2415 | 2024-04-01 | Metizport         | W   | 0.527      | -            | -                | -                | -         |     7.84 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            8 |     2578 | 2024-03-21 | FORZE             | W   | 0.453      | 0.500        | 0.095 (0.022)    | -                | -         |     7.18 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            7 |     2760 | 2024-03-13 | 3DMAX             | W   | 0.400      | 0.500        | 0.205 (0.041)    | 1.000 (0.200)    | -         |     9.85 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            6 |     2877 | 2024-03-08 | B8                | W   | 0.367      | 0.500        | 0.242 (0.044)    | 1.000 (0.183)    | -         |     8.44 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            5 |     2932 | 2024-03-06 | Apeks             | W   | 0.354      | -            | -                | -                | -         |     6.92 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            4 |     3045 | 2024-03-02 | Gaimin Gladiators | L   | 0.326      | -            | -                | -                | -         |    -3.08 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            3 |     3076 | 2024-02-29 | Monte             | L   | 0.312      | -            | -                | -                | -         |    -1.54 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            2 |     4058 | 2024-01-17 | Insilio           | L   | 0.028      | -            | -                | -                | -         |    -0.49 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |
|            1 |     4128 | 2024-01-16 | EYEBALLERS        | L   | 0.020      | -            | -                | -                | -         |    -0.37 | ArtFr0st, Jerry, Patsi, Qikert, X5G7V      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,783.63)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $6,500.00      | $6,416.90       |
| 2024-05-02 |      0.733 | $500.00        | $366.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
