### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, hampus, jkaem, nawwk, nexa<br />
Global Rank: [30](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1216.2<br />
<br />
Final Rank Value (1216.2) = Starting Rank Value (1349.7) + Head To Head Adjustments (-133.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.517[<sup>1</sup>](#table2)
- Bounty Collected: 0.519[<sup>2</sup>](#table1)
- Opponent Network: 0.319[<sup>2</sup>](#table1)
- LAN Wins: 0.569[<sup>2</sup>](#table1)

The average of these factors is 0.481<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1349.7
- 400 + ( ( 0.481 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1349.7


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
|           35 |      278 | 2024-08-06 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -28.21 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           34 |      285 | 2024-08-06 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -16.92 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           33 |      292 | 2024-08-06 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.03 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           32 |      394 | 2024-08-02 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |   -29.80 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           31 |      405 | 2024-08-02 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -10.79 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           30 |      490 | 2024-07-31 | AMKAL             | W   | 1.000      | 0.143        | 0.115 (0.016)    | -                | 0 (0.000) |    10.59 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           29 |      651 | 2024-07-26 | PARIVISION        | W   | 1.000      | 0.650        | 0.047 (0.031)    | 0.627 (0.408)    | 1 (1.000) |     7.92 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           28 |      668 | 2024-07-26 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -9.52 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           27 |      702 | 2024-07-25 | The MongolZ       | W   | 1.000      | 0.650        | 1.000 (0.650)    | 0.738 (0.480)    | 1 (1.000) |    28.76 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           26 |      732 | 2024-07-24 | True Rippers      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.31 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           25 |      738 | 2024-07-24 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -13.27 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           24 |      863 | 2024-07-20 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -24.04 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           23 |      995 | 2024-07-17 | Nemiga            | W   | 1.000      | 0.500        | 0.365 (0.182)    | 0.799 (0.399)    | 0 (0.000) |    11.15 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           22 |     1122 | 2024-07-15 | Aurora Young Blud | W   | 0.998      | 0.500        | -                | 0.594 (0.297)    | 0 (0.000) |     3.70 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           21 |     1364 | 2024-06-15 | Monte             | L   | 0.799      | -            | -                | -                | -         |   -19.41 | CYPHER, faveN, hampus, jkaem, nawwk |
|           20 |     1373 | 2024-06-15 | 3DMAX             | L   | 0.798      | -            | -                | -                | -         |    -8.68 | CYPHER, faveN, hampus, jkaem, nawwk |
|           19 |     1416 | 2024-06-14 | Monte             | W   | 0.791      | -            | -                | -                | -         |     5.29 | CYPHER, faveN, hampus, jkaem, nawwk |
|           18 |     1447 | 2024-06-13 | Aurora Young Blud | W   | 0.785      | -            | -                | -                | -         |     2.36 | CYPHER, faveN, hampus, jkaem, nawwk |
|           17 |     1473 | 2024-06-12 | B8                | W   | 0.778      | 0.143        | 0.174 (0.019)    | -                | -         |     5.92 | CYPHER, faveN, hampus, jkaem, nawwk |
|           16 |     1516 | 2024-06-10 | Nemiga            | L   | 0.765      | -            | -                | -                | -         |   -16.75 | CYPHER, faveN, hampus, jkaem, nawwk |
|           15 |     1565 | 2024-06-09 | MOUZ NXT          | W   | 0.758      | 0.500        | 0.130 (0.049)    | 0.929 (0.352)    | -         |     5.02 | CYPHER, faveN, hampus, jkaem, nawwk |
|           14 |     1615 | 2024-06-08 | 9INE              | W   | 0.753      | 0.500        | -                | 0.557 (0.210)    | -         |     2.14 | CYPHER, faveN, hampus, jkaem, nawwk |
|           13 |     1669 | 2024-06-07 | Rebels            | L   | 0.746      | -            | -                | -                | -         |   -20.45 | CYPHER, faveN, hampus, jkaem, nawwk |
|           12 |     1814 | 2024-06-05 | Nexus             | W   | 0.731      | -            | -                | -                | -         |     0.90 | CYPHER, faveN, hampus, jkaem, nawwk |
|           11 |     1902 | 2024-06-02 | The MongolZ       | L   | 0.712      | -            | -                | -                | -         |    -1.03 | CYPHER, faveN, hampus, jkaem, nawwk |
|           10 |     1911 | 2024-06-02 | Aurora            | W   | 0.710      | 0.500        | 0.387 (0.137)    | 0.737 (0.261)    | 1 (0.710) |    16.14 | CYPHER, faveN, hampus, jkaem, nawwk |
|            9 |     1941 | 2024-06-01 | The MongolZ       | L   | 0.704      | -            | -                | -                | -         |    -0.95 | CYPHER, faveN, hampus, jkaem, nawwk |
|            8 |     1999 | 2024-05-29 | ATOX              | W   | 0.689      | -            | -                | -                | 1 (0.689) |     1.42 | CYPHER, faveN, hampus, jkaem, nawwk |
|            7 |     2023 | 2024-05-28 | Chinggis Warriors | W   | 0.683      | -            | -                | -                | 1 (0.683) |     2.39 | CYPHER, faveN, hampus, jkaem, nawwk |
|            6 |     2212 | 2024-05-21 | Zero Tenacity     | L   | 0.632      | -            | -                | -                | -         |   -16.02 | CYPHER, faveN, hampus, jkaem, nawwk |
|            5 |     2245 | 2024-05-20 | 9 Pandas          | W   | 0.626      | 0.500        | 0.075 (0.023)    | 0.717 (0.224)    | -         |     2.97 | CYPHER, faveN, hampus, jkaem, nawwk |
|            4 |     2283 | 2024-05-19 | MOUZ NXT          | W   | 0.617      | 0.500        | 0.130 (0.040)    | 0.929 (0.287)    | -         |     3.21 | CYPHER, faveN, hampus, jkaem, nawwk |
|            3 |     2336 | 2024-05-17 | Monte             | L   | 0.606      | -            | -                | -                | -         |   -15.47 | CYPHER, faveN, hampus, jkaem, nawwk |
|            2 |     2425 | 2024-05-15 | Gaimin Gladiators | L   | 0.592      | -            | -                | -                | -         |   -16.90 | CYPHER, faveN, hampus, jkaem, nawwk |
|            1 |     2433 | 2024-05-15 | MOUZ NXT          | W   | 0.591      | 0.500        | 0.130 (0.038)    | 0.929 (0.274)    | -         |     2.55 | CYPHER, faveN, hampus, jkaem, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,352.53)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.806 | $2,000.00      | $1,612.05       |
| 2024-06-11 |      0.772 | $12,500.00     | $9,651.73       |
| 2024-06-02 |      0.712 | $25,000.00     | $17,791.22      |
| 2024-05-22 |      0.639 | $12,500.00     | $7,991.06       |
| 2024-05-18 |      0.613 | $500.00        | $306.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
