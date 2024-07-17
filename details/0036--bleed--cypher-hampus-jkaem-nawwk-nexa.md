### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, hampus, jkaem, nawwk, nexa<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [36](../standings_global.md)<br />
Regional Rank: [25]( ../standings_europe.md)<br />
Final Rank Value:  1223.8<br />
<br />
Final Rank Value (1223.8) = Starting Rank Value (1258.0) + Head To Head Adjustments (-34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.583[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.267[<sup>2</sup>](#table1)
- LAN Wins: 0.307[<sup>2</sup>](#table1)

The average of these factors is 0.400<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1258.0
- 400 + ( ( 0.400 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1258.0


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
|           22 |      111 | 2024-07-15 | Aurora Young Blud | W   | 1.000      | 0.500        | -                | 0.388 (0.194)    | 0 (0.000) |     3.78 | CYPHER, hampus, jkaem, nawwk, nexa  |
|           21 |      353 | 2024-06-15 | Monte             | L   | 0.987      | -            | -                | -                | -         |   -22.51 | CYPHER, faveN, hampus, jkaem, nawwk |
|           20 |      362 | 2024-06-15 | 3DMAX             | L   | 0.986      | -            | -                | -                | -         |   -15.86 | CYPHER, faveN, hampus, jkaem, nawwk |
|           19 |      405 | 2024-06-14 | Monte             | W   | 0.979      | 0.143        | 0.099 (0.014)    | -                | 0 (0.000) |     7.52 | CYPHER, faveN, hampus, jkaem, nawwk |
|           18 |      436 | 2024-06-13 | Aurora Young Blud | W   | 0.972      | 0.435        | -                | 0.388 (0.164)    | 0 (0.000) |     2.70 | CYPHER, faveN, hampus, jkaem, nawwk |
|           17 |      462 | 2024-06-12 | B8                | W   | 0.966      | 0.143        | 0.246 (0.034)    | 1.000 (0.138)    | 0 (0.000) |    12.32 | CYPHER, faveN, hampus, jkaem, nawwk |
|           16 |      505 | 2024-06-10 | Nemiga            | L   | 0.953      | -            | -                | -                | -         |   -15.77 | CYPHER, faveN, hampus, jkaem, nawwk |
|           15 |      554 | 2024-06-09 | MOUZ NXT          | W   | 0.946      | 0.500        | 0.150 (0.071)    | 1.000 (0.473)    | 0 (0.000) |    10.53 | CYPHER, faveN, hampus, jkaem, nawwk |
|           14 |      604 | 2024-06-08 | 9INE              | W   | 0.941      | 0.500        | 0.010 (0.005)    | -                | 0 (0.000) |     2.78 | CYPHER, faveN, hampus, jkaem, nawwk |
|           13 |      658 | 2024-06-07 | Rebels            | L   | 0.934      | -            | -                | -                | -         |   -21.14 | CYPHER, faveN, hampus, jkaem, nawwk |
|           12 |      803 | 2024-06-05 | Nexus             | W   | 0.919      | 0.500        | 0.011 (0.005)    | 0.432 (0.198)    | 0 (0.000) |     1.93 | CYPHER, faveN, hampus, jkaem, nawwk |
|           11 |      891 | 2024-06-02 | The MongolZ       | L   | 0.899      | -            | -                | -                | -         |    -0.73 | CYPHER, faveN, hampus, jkaem, nawwk |
|           10 |      900 | 2024-06-02 | Aurora            | W   | 0.897      | 0.500        | 0.514 (0.231)    | 0.813 (0.365)    | 1 (0.897) |    23.64 | CYPHER, faveN, hampus, jkaem, nawwk |
|            9 |      930 | 2024-06-01 | The MongolZ       | L   | 0.892      | -            | -                | -                | -         |    -0.65 | CYPHER, faveN, hampus, jkaem, nawwk |
|            8 |      988 | 2024-05-29 | ATOX              | W   | 0.877      | 0.500        | 0.031 (0.014)    | 0.239 (0.105)    | 1 (0.877) |     5.09 | CYPHER, faveN, hampus, jkaem, nawwk |
|            7 |     1012 | 2024-05-28 | Chinggis Warriors | W   | 0.870      | -            | -                | -                | 1 (0.870) |     1.58 | CYPHER, faveN, hampus, jkaem, nawwk |
|            6 |     1201 | 2024-05-21 | Zero Tenacity     | L   | 0.820      | -            | -                | -                | -         |   -17.09 | CYPHER, faveN, hampus, jkaem, nawwk |
|            5 |     1234 | 2024-05-20 | 9 Pandas          | W   | 0.814      | 0.500        | 0.126 (0.051)    | 0.591 (0.240)    | -         |     8.57 | CYPHER, faveN, hampus, jkaem, nawwk |
|            4 |     1272 | 2024-05-19 | MOUZ NXT          | W   | 0.805      | 0.500        | 0.150 (0.060)    | 1.000 (0.402)    | -         |     8.26 | CYPHER, faveN, hampus, jkaem, nawwk |
|            3 |     1325 | 2024-05-17 | Monte             | L   | 0.793      | -            | -                | -                | -         |   -19.21 | CYPHER, faveN, hampus, jkaem, nawwk |
|            2 |     1414 | 2024-05-15 | Gaimin Gladiators | L   | 0.780      | -            | -                | -                | -         |   -16.94 | CYPHER, faveN, hampus, jkaem, nawwk |
|            1 |     1422 | 2024-05-15 | MOUZ NXT          | W   | 0.778      | 0.500        | 0.150 (0.058)    | 1.000 (0.389)    | -         |     6.94 | CYPHER, faveN, hampus, jkaem, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,209.74)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $2,000.00      | $1,987.56       |
| 2024-06-11 |      0.960 | $12,500.00     | $11,998.69      |
| 2024-06-02 |      0.899 | $25,000.00     | $22,485.13      |
| 2024-05-22 |      0.827 | $12,500.00     | $10,338.02      |
| 2024-05-18 |      0.801 | $500.00        | $400.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
