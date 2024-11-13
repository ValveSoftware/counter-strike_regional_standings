### Roster Details<br />
Team Name: BLEED<br />
Roster: CYPHER, faveN, hampus, jkaem, nawwk<br />
Global Rank: [130](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [91]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  753.0<br />
<br />
Final Rank Value (753.0) = Starting Rank Value (731.1) + Head To Head Adjustments (21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 731.1
- 400 + ( ( 0.166 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 731.1


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
|           18 |     3955 | 2024-06-15 | Monte             | L   | 0.193      | -            | -                | -                | -         |    -3.44 | CYPHER, faveN, hampus, jkaem, nawwk |
|           17 |     3964 | 2024-06-15 | 3DMAX             | L   | 0.192      | -            | -                | -                | -         |    -0.09 | CYPHER, faveN, hampus, jkaem, nawwk |
|           16 |     4007 | 2024-06-14 | Monte             | W   | 0.185      | 0.143        | 0.006 (0.000)    | 0.046 (0.001)    | 0 (0.000) |     2.56 | CYPHER, faveN, hampus, jkaem, nawwk |
|           15 |     4038 | 2024-06-13 | Aurora Young Blud | W   | 0.179      | 0.435        | 0.020 (0.002)    | 0.652 (0.051)    | 0 (0.000) |     3.70 | CYPHER, faveN, hampus, jkaem, nawwk |
|           14 |     4064 | 2024-06-12 | B8                | W   | 0.172      | 0.143        | 0.162 (0.004)    | 0.888 (0.022)    | 0 (0.000) |     5.22 | CYPHER, faveN, hampus, jkaem, nawwk |
|           13 |     4107 | 2024-06-10 | Nemiga            | L   | 0.159      | -            | -                | -                | -         |    -0.12 | CYPHER, faveN, hampus, jkaem, nawwk |
|           12 |     4156 | 2024-06-09 | MOUZ NXT          | W   | 0.152      | 0.500        | 0.021 (0.002)    | 0.255 (0.019)    | 0 (0.000) |     2.96 | CYPHER, faveN, hampus, jkaem, nawwk |
|           11 |     4206 | 2024-06-08 | 9INE              | W   | 0.147      | 0.500        | 0.056 (0.004)    | 0.789 (0.058)    | 0 (0.000) |     3.70 | CYPHER, faveN, hampus, jkaem, nawwk |
|           10 |     4260 | 2024-06-07 | Rebels            | L   | 0.140      | -            | -                | -                | -         |    -1.22 | CYPHER, faveN, hampus, jkaem, nawwk |
|            9 |     4405 | 2024-06-05 | Nexus             | W   | 0.125      | 0.500        | 0.015 (0.001)    | 0.470 (0.029)    | 0 (0.000) |     2.68 | CYPHER, faveN, hampus, jkaem, nawwk |
|            8 |     4493 | 2024-06-02 | The MongolZ       | L   | 0.106      | -            | -                | -                | -         |    -0.01 | CYPHER, faveN, hampus, jkaem, nawwk |
|            7 |     4502 | 2024-06-02 | Aurora            | W   | 0.104      | 0.500        | 0.095 (0.005)    | 0.457 (0.024)    | 1 (0.104) |     2.92 | CYPHER, faveN, hampus, jkaem, nawwk |
|            6 |     4532 | 2024-06-01 | The MongolZ       | L   | 0.098      | -            | -                | -                | -         |    -0.01 | CYPHER, faveN, hampus, jkaem, nawwk |
|            5 |     4590 | 2024-05-29 | ATOX              | W   | 0.083      | -            | -                | -                | 1 (0.083) |     1.04 | CYPHER, faveN, hampus, jkaem, nawwk |
|            4 |     4614 | 2024-05-28 | Chinggis Warriors | W   | 0.077      | 0.500        | 0.005 (0.000)    | 0.108 (0.004)    | 1 (0.077) |     1.43 | CYPHER, faveN, hampus, jkaem, nawwk |
|            3 |     4803 | 2024-05-21 | Zero Tenacity     | L   | 0.026      | -            | -                | -                | -         |    -0.15 | CYPHER, faveN, hampus, jkaem, nawwk |
|            2 |     4836 | 2024-05-20 | 9 Pandas          | W   | 0.020      | 0.500        | 0.088 (0.001)    | 0.858 (0.009)    | 0 (0.000) |     0.54 | CYPHER, faveN, hampus, jkaem, nawwk |
|            1 |     4874 | 2024-05-19 | MOUZ NXT          | W   | 0.011      | 0.500        | 0.021 (0.000)    | 0.255 (0.001)    | -         |     0.21 | CYPHER, faveN, hampus, jkaem, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,533.09)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.200 | $2,000.00      | $400.01         |
| 2024-06-11 |      0.166 | $12,500.00     | $2,076.50       |
| 2024-06-02 |      0.106 | $25,000.00     | $2,640.75       |
| 2024-05-22 |      0.033 | $12,500.00     | $415.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
