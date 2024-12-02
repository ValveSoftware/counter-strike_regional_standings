### Roster Details<br />
Team Name: UNPAID<br />
Roster: CYPHER, h4rn, jkaem, nexa, VLDN<br />
Global Rank: [48](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [37]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1149.2<br />
<br />
Final Rank Value (1149.2) = Starting Rank Value (1200.5) + Head To Head Adjustments (-51.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.532[<sup>1</sup>](#table2)
- Bounty Collected: 0.435[<sup>2</sup>](#table1)
- Opponent Network: 0.222[<sup>2</sup>](#table1)
- LAN Wins: 0.405[<sup>2</sup>](#table1)

The average of these factors is 0.399<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1200.5
- 400 + ( ( 0.399 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1200.5


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
|           39 |      901 | 2024-10-19 | Nemiga            | L   | 0.908      | -            | -                | -                | -         |    -6.21 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           38 |      911 | 2024-10-19 | Sangal            | W   | 0.906      | 0.624        | 0.178 (0.101)    | 0.459 (0.260)    | 1 (0.906) |    24.35 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           37 |      939 | 2024-10-18 | PARIVISION        | W   | 0.900      | 0.624        | 0.029 (0.017)    | 0.421 (0.236)    | 1 (0.900) |    12.39 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           36 |      965 | 2024-10-17 | Solid             | W   | 0.893      | 0.624        | 0.027 (0.015)    | 0.581 (0.324)    | 1 (0.893) |     9.78 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           35 |      992 | 2024-10-16 | fnatic            | L   | 0.888      | -            | -                | -                | -         |    -8.15 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           34 |     1821 | 2024-09-19 | devils.one        | L   | 0.707      | -            | -                | -                | -         |   -19.65 | CYPHER, jkaem, nawwk, Patti, VLDN  |
|           33 |     1871 | 2024-09-18 | Sashi             | L   | 0.698      | -            | -                | -                | -         |   -13.31 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           32 |     1885 | 2024-09-17 | Sashi             | W   | 0.694      | 0.443        | 0.056 (0.017)    | 0.667 (0.205)    | 0 (0.000) |     8.70 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           31 |     1891 | 2024-09-17 | GUN5              | W   | 0.693      | 0.443        | 0.048 (0.015)    | 1.000 (0.307)    | 0 (0.000) |     8.07 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           30 |     1899 | 2024-09-17 | Sashi             | L   | 0.692      | -            | -                | -                | -         |   -12.79 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           29 |     1959 | 2024-09-14 | Insilio           | L   | 0.674      | -            | -                | -                | -         |   -15.31 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           28 |     2004 | 2024-09-13 | Spirit Academy    | W   | 0.667      | 0.435        | 0.067 (0.019)    | 0.745 (0.216)    | 0 (0.000) |     6.13 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           27 |     2111 | 2024-09-10 | Passion UA        | W   | 0.645      | 0.384        | 0.101 (0.025)    | 1.000 (0.248)    | 0 (0.000) |    11.57 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           26 |     2166 | 2024-09-07 | B8                | L   | 0.627      | -            | -                | -                | -         |    -7.22 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           25 |     2202 | 2024-09-06 | Insilio           | W   | 0.620      | 0.435        | -                | 0.622 (0.168)    | -         |     4.49 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           24 |     2341 | 2024-09-02 | B8                | L   | 0.592      | -            | -                | -                | -         |    -6.73 | h4rn, hampus, jkaem, nexa, VLDN    |
|           23 |     2473 | 2024-08-28 | EYEBALLERS        | L   | 0.560      | -            | -                | -                | -         |   -15.70 | CYPHER, hampus, jkaem, nawwk, nexa |
|           22 |     2699 | 2024-08-23 | GamerLegion       | L   | 0.527      | -            | -                | -                | -         |    -4.57 | CYPHER, hampus, jkaem, nawwk, nexa |
|           21 |     2711 | 2024-08-23 | ECLOT             | L   | 0.526      | -            | -                | -                | -         |    -4.19 | CYPHER, hampus, jkaem, nawwk, nexa |
|           20 |     2739 | 2024-08-22 | Sangal            | L   | 0.519      | -            | -                | -                | -         |    -3.64 | CYPHER, hampus, jkaem, nawwk, nexa |
|           19 |     2791 | 2024-08-21 | Rhyno             | W   | 0.513      | 0.143        | 0.147 (0.011)    | -                | -         |    10.56 | CYPHER, hampus, jkaem, nawwk, nexa |
|           18 |     2819 | 2024-08-21 | TSM               | W   | 0.512      | -            | -                | -                | -         |     5.28 | CYPHER, hampus, jkaem, nawwk, nexa |
|           17 |     2870 | 2024-08-19 | Cloud9            | L   | 0.500      | -            | -                | -                | -         |    -8.97 | CYPHER, hampus, jkaem, nawwk, nexa |
|           16 |     2925 | 2024-08-17 | SINNERS           | L   | 0.487      | -            | -                | -                | -         |    -7.12 | CYPHER, hampus, jkaem, nawwk, nexa |
|           15 |     2974 | 2024-08-15 | B8                | L   | 0.474      | -            | -                | -                | -         |    -5.88 | CYPHER, hampus, jkaem, nawwk, nexa |
|           14 |     3271 | 2024-08-06 | Metizport         | L   | 0.413      | -            | -                | -                | -         |    -3.15 | CYPHER, hampus, jkaem, nawwk, nexa |
|           13 |     3278 | 2024-08-06 | Johnny Speeds     | L   | 0.412      | -            | -                | -                | -         |    -6.49 | CYPHER, hampus, jkaem, nawwk, nexa |
|           12 |     3285 | 2024-08-06 | HAVU              | W   | 0.412      | -            | -                | -                | -         |     0.26 | CYPHER, hampus, jkaem, nawwk, nexa |
|           11 |     3387 | 2024-08-02 | Cloud9            | L   | 0.388      | -            | -                | -                | -         |    -7.50 | CYPHER, hampus, jkaem, nawwk, nexa |
|           10 |     3398 | 2024-08-02 | 3DMAX             | L   | 0.387      | -            | -                | -                | -         |    -1.52 | CYPHER, hampus, jkaem, nawwk, nexa |
|            9 |     3483 | 2024-07-31 | AMKAL             | W   | 0.374      | -            | -                | -                | -         |     1.91 | CYPHER, hampus, jkaem, nawwk, nexa |
|            8 |     3644 | 2024-07-26 | PARIVISION        | W   | 0.340      | -            | -                | -                | 1 (0.340) |     2.78 | CYPHER, hampus, jkaem, nawwk, nexa |
|            7 |     3661 | 2024-07-26 | Aurora            | L   | 0.338      | -            | -                | -                | -         |    -6.64 | CYPHER, hampus, jkaem, nawwk, nexa |
|            6 |     3695 | 2024-07-25 | The MongolZ       | W   | 0.332      | 0.650        | 1.000 (0.216)    | 0.686 (0.148)    | 1 (0.332) |    10.18 | CYPHER, hampus, jkaem, nawwk, nexa |
|            5 |     3725 | 2024-07-24 | True Rippers      | W   | 0.326      | -            | -                | -                | 1 (0.326) |     0.39 | CYPHER, hampus, jkaem, nawwk, nexa |
|            4 |     3731 | 2024-07-24 | ENCE              | L   | 0.325      | -            | -                | -                | -         |    -3.14 | CYPHER, hampus, jkaem, nawwk, nexa |
|            3 |     3856 | 2024-07-20 | MOUZ NXT          | L   | 0.300      | -            | -                | -                | -         |    -8.51 | CYPHER, hampus, jkaem, nawwk, nexa |
|            2 |     3988 | 2024-07-17 | Nemiga            | W   | 0.281      | 0.500        | 0.490 (0.069)    | 0.784 (0.110)    | -         |     6.96 | CYPHER, hampus, jkaem, nawwk, nexa |
|            1 |     4115 | 2024-07-15 | Aurora Young Blud | W   | 0.266      | -            | -                | -                | -         |     1.22 | CYPHER, hampus, jkaem, nawwk, nexa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,773.21)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.908 | $50,000.00     | $45,403.75      |
| 2024-09-24 |      0.740 | $1,000.00      | $739.59         |
| 2024-09-15 |      0.681 | $2,000.00      | $1,361.73       |
| 2024-09-08 |      0.634 | $2,000.00      | $1,268.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
