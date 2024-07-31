### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, hampus, jkaem, nawwk, nexa<br />
Global Rank: [25](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1343.1<br />
<br />
Final Rank Value (1343.1) = Starting Rank Value (1424.8) + Head To Head Adjustments (-81.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.529[<sup>1</sup>](#table2)
- Bounty Collected: 0.523[<sup>2</sup>](#table1)
- Opponent Network: 0.318[<sup>2</sup>](#table1)
- LAN Wins: 0.616[<sup>2</sup>](#table1)

The average of these factors is 0.496<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1424.8
- 400 + ( ( 0.496 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1424.8


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
|           30 |        9 | 2024-07-31 | AMKAL             | W   | 1.000      | 0.143        | 0.132 (0.019)    | -                | 0 (0.000) |    10.46 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           29 |      170 | 2024-07-26 | PARIVISION        | W   | 1.000      | 0.650        | 0.018 (0.012)    | 0.452 (0.294)    | 1 (1.000) |     6.35 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           28 |      187 | 2024-07-26 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -10.10 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           27 |      221 | 2024-07-25 | The MongolZ       | W   | 1.000      | 0.650        | 1.000 (0.650)    | 0.719 (0.467)    | 1 (1.000) |    28.44 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           26 |      251 | 2024-07-24 | True Rippers      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.23 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           25 |      257 | 2024-07-24 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -12.82 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           24 |      382 | 2024-07-20 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -24.75 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           23 |      514 | 2024-07-17 | Nemiga            | W   | 1.000      | 0.500        | 0.325 (0.163)    | 0.698 (0.349)    | 0 (0.000) |     9.18 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           22 |      641 | 2024-07-15 | Aurora Young Blud | W   | 1.000      | 0.500        | -                | 0.416 (0.208)    | 0 (0.000) |     2.29 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           21 |      883 | 2024-06-15 | Monte             | L   | 0.892      | -            | -                | -                | -         |   -23.46 | CYPHER, faveN, hampus, jkaem, nawwk |
|           20 |      892 | 2024-06-15 | 3DMAX             | L   | 0.891      | -            | -                | -                | -         |   -10.89 | CYPHER, faveN, hampus, jkaem, nawwk |
|           19 |      935 | 2024-06-14 | Monte             | W   | 0.884      | -            | -                | -                | 0 (0.000) |     4.06 | CYPHER, faveN, hampus, jkaem, nawwk |
|           18 |      966 | 2024-06-13 | Aurora Young Blud | W   | 0.878      | -            | -                | -                | -         |     1.44 | CYPHER, faveN, hampus, jkaem, nawwk |
|           17 |      992 | 2024-06-12 | B8                | W   | 0.872      | 0.143        | 0.168 (0.021)    | -                | -         |     6.13 | CYPHER, faveN, hampus, jkaem, nawwk |
|           16 |     1035 | 2024-06-10 | Nemiga            | L   | 0.858      | -            | -                | -                | -         |   -20.88 | CYPHER, faveN, hampus, jkaem, nawwk |
|           15 |     1084 | 2024-06-09 | MOUZ NXT          | W   | 0.852      | 0.500        | 0.141 (0.060)    | 1.000 (0.426)    | -         |     4.76 | CYPHER, faveN, hampus, jkaem, nawwk |
|           14 |     1134 | 2024-06-08 | 9INE              | W   | 0.846      | 0.500        | -                | 0.486 (0.206)    | -         |     1.91 | CYPHER, faveN, hampus, jkaem, nawwk |
|           13 |     1188 | 2024-06-07 | Rebels            | L   | 0.840      | -            | -                | -                | -         |   -23.28 | CYPHER, faveN, hampus, jkaem, nawwk |
|           12 |     1333 | 2024-06-05 | Nexus             | W   | 0.825      | -            | -                | -                | -         |     0.74 | CYPHER, faveN, hampus, jkaem, nawwk |
|           11 |     1421 | 2024-06-02 | The MongolZ       | L   | 0.805      | -            | -                | -                | -         |    -1.39 | CYPHER, faveN, hampus, jkaem, nawwk |
|           10 |     1430 | 2024-06-02 | Aurora            | W   | 0.803      | 0.500        | 0.433 (0.174)    | 0.800 (0.321)    | 1 (0.803) |    18.03 | CYPHER, faveN, hampus, jkaem, nawwk |
|            9 |     1460 | 2024-06-01 | The MongolZ       | L   | 0.797      | -            | -                | -                | -         |    -1.27 | CYPHER, faveN, hampus, jkaem, nawwk |
|            8 |     1518 | 2024-05-29 | ATOX              | W   | 0.783      | -            | -                | -                | 1 (0.783) |     1.54 | CYPHER, faveN, hampus, jkaem, nawwk |
|            7 |     1542 | 2024-05-28 | Chinggis Warriors | W   | 0.776      | -            | -                | -                | 1 (0.776) |     0.51 | CYPHER, faveN, hampus, jkaem, nawwk |
|            6 |     1731 | 2024-05-21 | Zero Tenacity     | L   | 0.725      | -            | -                | -                | -         |   -18.98 | CYPHER, faveN, hampus, jkaem, nawwk |
|            5 |     1764 | 2024-05-20 | 9 Pandas          | W   | 0.719      | 0.500        | 0.083 (0.030)    | 0.579 (0.208)    | -         |     2.83 | CYPHER, faveN, hampus, jkaem, nawwk |
|            4 |     1802 | 2024-05-19 | MOUZ NXT          | W   | 0.710      | 0.500        | 0.141 (0.050)    | 1.000 (0.355)    | -         |     3.04 | CYPHER, faveN, hampus, jkaem, nawwk |
|            3 |     1855 | 2024-05-17 | Monte             | L   | 0.699      | -            | -                | -                | -         |   -19.64 | CYPHER, faveN, hampus, jkaem, nawwk |
|            2 |     1944 | 2024-05-15 | Gaimin Gladiators | L   | 0.685      | -            | -                | -                | -         |   -19.52 | CYPHER, faveN, hampus, jkaem, nawwk |
|            1 |     1952 | 2024-05-15 | MOUZ NXT          | W   | 0.684      | 0.500        | 0.141 (0.048)    | 1.000 (0.342)    | -         |     2.31 | CYPHER, faveN, hampus, jkaem, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,247.82)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $2,000.00      | $1,798.54       |
| 2024-06-11 |      0.865 | $12,500.00     | $10,817.28      |
| 2024-06-02 |      0.805 | $25,000.00     | $20,122.31      |
| 2024-05-22 |      0.733 | $12,500.00     | $9,156.61       |
| 2024-05-18 |      0.706 | $500.00        | $353.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
