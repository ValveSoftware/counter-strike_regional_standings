### Roster Details<br />
Team Name: UNPAID<br />
Roster: CYPHER, h4rn, jkaem, nexa, VLDN<br />
Global Rank: [55](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [40]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1069.5<br />
<br />
Final Rank Value (1069.5) = Starting Rank Value (1092.2) + Head To Head Adjustments (-22.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.525[<sup>1</sup>](#table2)
- Bounty Collected: 0.419[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 0.318[<sup>2</sup>](#table1)

The average of these factors is 0.361<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1092.2
- 400 + ( ( 0.361 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1092.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |     1208 | 2024-10-19 | Nemiga            | L   | 0.801      | -            | -                | -                | -         |    -5.65 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           38 |     1218 | 2024-10-19 | Sangal            | W   | 0.799      | 0.624        | 0.158 (0.079)    | 0.407 (0.203)    | 1 (0.799) |    20.97 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           37 |     1246 | 2024-10-18 | PARIVISION        | W   | 0.793      | 0.624        | 0.026 (0.013)    | 0.368 (0.182)    | 1 (0.793) |    11.01 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           36 |     1272 | 2024-10-17 | Solid             | W   | 0.786      | 0.624        | 0.027 (0.013)    | 0.574 (0.281)    | 1 (0.786) |     9.59 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           35 |     1299 | 2024-10-16 | fnatic            | L   | 0.780      | -            | -                | -                | -         |    -7.96 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           34 |     2128 | 2024-09-19 | devils.one        | L   | 0.600      | -            | -                | -                | -         |   -16.11 | CYPHER, jkaem, nawwk, Patti, VLDN  |
|           33 |     2178 | 2024-09-18 | Sashi             | L   | 0.591      | -            | -                | -                | -         |   -10.24 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           32 |     2192 | 2024-09-17 | Sashi             | W   | 0.587      | 0.443        | 0.049 (0.013)    | 0.735 (0.191)    | 0 (0.000) |     8.46 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           31 |     2198 | 2024-09-17 | GUN5              | W   | 0.586      | 0.443        | 0.162 (0.042)    | 1.000 (0.259)    | 0 (0.000) |     9.30 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           30 |     2206 | 2024-09-17 | Sashi             | L   | 0.585      | -            | -                | -                | -         |    -9.67 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           29 |     2266 | 2024-09-14 | Insilio           | L   | 0.567      | -            | -                | -                | -         |   -12.77 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           28 |     2311 | 2024-09-13 | Spirit Academy    | W   | 0.560      | 0.435        | 0.129 (0.031)    | 0.999 (0.243)    | 0 (0.000) |     7.54 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           27 |     2418 | 2024-09-10 | Passion UA        | W   | 0.538      | 0.384        | 0.115 (0.024)    | 1.000 (0.207)    | 0 (0.000) |    10.79 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           26 |     2473 | 2024-09-07 | B8                | L   | 0.520      | -            | -                | -                | -         |    -5.86 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           25 |     2509 | 2024-09-06 | Insilio           | W   | 0.512      | 0.435        | -                | 0.414 (0.092)    | -         |     3.97 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           24 |     2648 | 2024-09-02 | B8                | L   | 0.484      | -            | -                | -                | -         |    -5.44 | h4rn, hampus, jkaem, nexa, VLDN    |
|           23 |     2780 | 2024-08-28 | EYEBALLERS        | L   | 0.453      | -            | -                | -                | -         |   -12.11 | CYPHER, hampus, jkaem, nawwk, nexa |
|           22 |     3006 | 2024-08-23 | GamerLegion       | L   | 0.420      | -            | -                | -                | -         |    -2.24 | CYPHER, hampus, jkaem, nawwk, nexa |
|           21 |     3018 | 2024-08-23 | ECLOT             | L   | 0.419      | -            | -                | -                | -         |    -2.67 | CYPHER, hampus, jkaem, nawwk, nexa |
|           20 |     3046 | 2024-08-22 | Sangal            | L   | 0.412      | -            | -                | -                | -         |    -3.10 | CYPHER, hampus, jkaem, nawwk, nexa |
|           19 |     3098 | 2024-08-21 | Rhyno             | W   | 0.406      | 0.143        | 0.152 (0.009)    | -                | -         |     8.99 | CYPHER, hampus, jkaem, nawwk, nexa |
|           18 |     3126 | 2024-08-21 | TSM               | W   | 0.405      | -            | -                | -                | -         |     4.52 | CYPHER, hampus, jkaem, nawwk, nexa |
|           17 |     3177 | 2024-08-19 | Cloud9            | L   | 0.393      | -            | -                | -                | -         |    -6.47 | CYPHER, hampus, jkaem, nawwk, nexa |
|           16 |     3232 | 2024-08-17 | SINNERS           | L   | 0.380      | -            | -                | -                | -         |    -5.03 | CYPHER, hampus, jkaem, nawwk, nexa |
|           15 |     3281 | 2024-08-15 | B8                | L   | 0.366      | -            | -                | -                | -         |    -4.52 | CYPHER, hampus, jkaem, nawwk, nexa |
|           14 |     3578 | 2024-08-06 | Metizport         | L   | 0.306      | -            | -                | -                | -         |    -1.90 | CYPHER, hampus, jkaem, nawwk, nexa |
|           13 |     3585 | 2024-08-06 | Johnny Speeds     | L   | 0.305      | -            | -                | -                | -         |    -4.51 | CYPHER, hampus, jkaem, nawwk, nexa |
|           12 |     3592 | 2024-08-06 | HAVU              | W   | 0.305      | -            | -                | -                | -         |     0.35 | CYPHER, hampus, jkaem, nawwk, nexa |
|           11 |     3694 | 2024-08-02 | Cloud9            | L   | 0.280      | -            | -                | -                | -         |    -4.89 | CYPHER, hampus, jkaem, nawwk, nexa |
|           10 |     3705 | 2024-08-02 | 3DMAX             | L   | 0.280      | -            | -                | -                | -         |    -0.84 | CYPHER, hampus, jkaem, nawwk, nexa |
|            9 |     3790 | 2024-07-31 | AMKAL             | W   | 0.267      | -            | -                | -                | -         |     1.82 | CYPHER, hampus, jkaem, nawwk, nexa |
|            8 |     3951 | 2024-07-26 | PARIVISION        | W   | 0.233      | -            | -                | -                | 1 (0.233) |     2.14 | CYPHER, hampus, jkaem, nawwk, nexa |
|            7 |     3968 | 2024-07-26 | Aurora            | L   | 0.231      | -            | -                | -                | -         |    -5.95 | CYPHER, hampus, jkaem, nawwk, nexa |
|            6 |     4002 | 2024-07-25 | The MongolZ       | W   | 0.225      | 0.650        | 1.000 (0.146)    | 0.734 (0.107)    | 1 (0.225) |     6.99 | CYPHER, hampus, jkaem, nawwk, nexa |
|            5 |     4032 | 2024-07-24 | True Rippers      | W   | 0.219      | -            | -                | -                | 1 (0.219) |     0.40 | CYPHER, hampus, jkaem, nawwk, nexa |
|            4 |     4038 | 2024-07-24 | ENCE              | L   | 0.218      | -            | -                | -                | -         |    -2.07 | CYPHER, hampus, jkaem, nawwk, nexa |
|            3 |     4163 | 2024-07-20 | MOUZ NXT          | L   | 0.192      | -            | -                | -                | -         |    -5.26 | CYPHER, hampus, jkaem, nawwk, nexa |
|            2 |     4295 | 2024-07-17 | Nemiga            | W   | 0.174      | 0.500        | 0.455 (0.040)    | -                | -         |     4.25 | CYPHER, hampus, jkaem, nawwk, nexa |
|            1 |     4422 | 2024-07-15 | Aurora Young Blud | W   | 0.159      | 0.500        | -                | 0.927 (0.074)    | -         |     1.46 | CYPHER, hampus, jkaem, nawwk, nexa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,873.90)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.801 | $50,000.00     | $40,040.74      |
| 2024-09-24 |      0.632 | $1,000.00      | $632.33         |
| 2024-09-15 |      0.574 | $2,000.00      | $1,147.21       |
| 2024-09-08 |      0.527 | $2,000.00      | $1,053.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
