### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, hampus, jkaem, nawwk, nexa<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1204.0<br />
<br />
Final Rank Value (1204.0) = Starting Rank Value (1272.5) + Head To Head Adjustments (-68.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.558[<sup>1</sup>](#table2)
- Bounty Collected: 0.462[<sup>2</sup>](#table1)
- Opponent Network: 0.290[<sup>2</sup>](#table1)
- LAN Wins: 0.414[<sup>2</sup>](#table1)

The average of these factors is 0.431<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1272.5
- 400 + ( ( 0.431 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1272.5


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
|           26 |        9 | 2024-07-24 | True Rippers      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.31 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           25 |       15 | 2024-07-24 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -10.39 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           24 |      140 | 2024-07-20 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -21.14 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           23 |      272 | 2024-07-17 | Nemiga            | W   | 1.000      | 0.500        | 0.415 (0.207)    | 0.707 (0.354)    | 0 (0.000) |    14.19 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           22 |      399 | 2024-07-15 | Aurora Young Blud | W   | 1.000      | 0.500        | -                | 0.411 (0.205)    | 0 (0.000) |     3.79 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           21 |      641 | 2024-06-15 | Monte             | L   | 0.940      | -            | -                | -                | -         |   -22.54 | CYPHER, faveN, hampus, jkaem, nawwk |
|           20 |      650 | 2024-06-15 | 3DMAX             | L   | 0.939      | -            | -                | -                | -         |   -15.95 | CYPHER, faveN, hampus, jkaem, nawwk |
|           19 |      693 | 2024-06-14 | Monte             | W   | 0.932      | 0.143        | 0.083 (0.011)    | -                | 0 (0.000) |     6.15 | CYPHER, faveN, hampus, jkaem, nawwk |
|           18 |      724 | 2024-06-13 | Aurora Young Blud | W   | 0.925      | 0.435        | -                | 0.411 (0.165)    | 0 (0.000) |     2.51 | CYPHER, faveN, hampus, jkaem, nawwk |
|           17 |      750 | 2024-06-12 | B8                | W   | 0.919      | 0.143        | 0.206 (0.027)    | -                | 0 (0.000) |    10.24 | CYPHER, faveN, hampus, jkaem, nawwk |
|           16 |      793 | 2024-06-10 | Nemiga            | L   | 0.905      | -            | -                | -                | -         |   -17.34 | CYPHER, faveN, hampus, jkaem, nawwk |
|           15 |      842 | 2024-06-09 | MOUZ NXT          | W   | 0.899      | 0.500        | 0.169 (0.076)    | 1.000 (0.449)    | 0 (0.000) |     8.57 | CYPHER, faveN, hampus, jkaem, nawwk |
|           14 |      892 | 2024-06-08 | 9INE              | W   | 0.894      | 0.500        | -                | 0.480 (0.214)    | -         |     3.04 | CYPHER, faveN, hampus, jkaem, nawwk |
|           13 |      946 | 2024-06-07 | Rebels            | L   | 0.887      | -            | -                | -                | -         |   -21.29 | CYPHER, faveN, hampus, jkaem, nawwk |
|           12 |     1091 | 2024-06-05 | Nexus             | W   | 0.872      | 0.500        | 0.018 (0.008)    | 0.480 (0.209)    | -         |     1.63 | CYPHER, faveN, hampus, jkaem, nawwk |
|           11 |     1179 | 2024-06-02 | The MongolZ       | L   | 0.852      | -            | -                | -                | -         |    -0.92 | CYPHER, faveN, hampus, jkaem, nawwk |
|           10 |     1188 | 2024-06-02 | Aurora            | W   | 0.850      | 0.500        | 0.423 (0.180)    | 0.783 (0.333)    | 1 (0.850) |    20.89 | CYPHER, faveN, hampus, jkaem, nawwk |
|            9 |     1218 | 2024-06-01 | The MongolZ       | L   | 0.845      | -            | -                | -                | -         |    -0.82 | CYPHER, faveN, hampus, jkaem, nawwk |
|            8 |     1276 | 2024-05-29 | ATOX              | W   | 0.830      | 0.500        | 0.026 (0.011)    | -                | 1 (0.830) |     3.59 | CYPHER, faveN, hampus, jkaem, nawwk |
|            7 |     1300 | 2024-05-28 | Chinggis Warriors | W   | 0.823      | -            | -                | -                | 1 (0.823) |     1.22 | CYPHER, faveN, hampus, jkaem, nawwk |
|            6 |     1489 | 2024-05-21 | Zero Tenacity     | L   | 0.773      | -            | -                | -                | -         |   -16.99 | CYPHER, faveN, hampus, jkaem, nawwk |
|            5 |     1522 | 2024-05-20 | 9 Pandas          | W   | 0.766      | 0.500        | 0.105 (0.040)    | 0.578 (0.222)    | -         |     6.33 | CYPHER, faveN, hampus, jkaem, nawwk |
|            4 |     1560 | 2024-05-19 | MOUZ NXT          | W   | 0.758      | 0.500        | 0.169 (0.064)    | 1.000 (0.379)    | -         |     6.34 | CYPHER, faveN, hampus, jkaem, nawwk |
|            3 |     1613 | 2024-05-17 | Monte             | L   | 0.746      | -            | -                | -                | -         |   -19.27 | CYPHER, faveN, hampus, jkaem, nawwk |
|            2 |     1702 | 2024-05-15 | Gaimin Gladiators | L   | 0.732      | -            | -                | -                | -         |   -17.87 | CYPHER, faveN, hampus, jkaem, nawwk |
|            1 |     1710 | 2024-05-15 | MOUZ NXT          | W   | 0.731      | 0.500        | 0.169 (0.062)    | 1.000 (0.366)    | -         |     5.17 | CYPHER, faveN, hampus, jkaem, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,730.42)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.947 | $2,000.00      | $1,893.11       |
| 2024-06-11 |      0.913 | $12,500.00     | $11,408.37      |
| 2024-06-02 |      0.852 | $25,000.00     | $21,304.50      |
| 2024-05-22 |      0.780 | $12,500.00     | $9,747.70       |
| 2024-05-18 |      0.753 | $500.00        | $376.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
