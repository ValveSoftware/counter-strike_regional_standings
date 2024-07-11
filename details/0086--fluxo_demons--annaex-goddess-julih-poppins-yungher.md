### Roster Details<br />
Team Name: Fluxo Demons<br />
Roster: annaEX, goddess, julih, poppins, yungher<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [22]( ../standings_americas.md)<br />
Final Rank Value:  935.9<br />
<br />
Final Rank Value (935.9) = Starting Rank Value (912.0) + Head To Head Adjustments (23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.216[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 912.0
- 400 + ( ( 0.243 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 912.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      720 | 2024-06-02 | Imperial fe     | L   | 0.940      | -            | -                | -                | -         |    -7.20 | annaEX, goddess, julih, poppins, yungher |
|           11 |      740 | 2024-06-01 | NAVI Javelins   | W   | 0.935      | 0.524        | 0.042 (0.020)    | 0.266 (0.130)    | 1 (0.935) |    14.66 | annaEX, goddess, julih, poppins, yungher |
|           10 |      774 | 2024-05-31 | Let Her Cook    | L   | 0.928      | -            | -                | -                | -         |   -12.31 | annaEX, goddess, julih, poppins, yungher |
|            9 |      779 | 2024-05-31 | TSM Shimmer     | W   | 0.927      | 0.524        | 0.028 (0.014)    | 0.228 (0.111)    | 1 (0.927) |     8.04 | annaEX, goddess, julih, poppins, yungher |
|            8 |     1852 | 2024-04-19 | FURIA fe        | W   | 0.648      | 0.332        | 0.006 (0.001)    | 0.116 (0.025)    | 0 (0.000) |     4.96 | annaEX, goddess, julih, poppins, yungher |
|            7 |     2115 | 2024-04-10 | GENKID4M4       | W   | 0.588      | 0.332        | 0.003 (0.001)    | 0.024 (0.005)    | 0 (0.000) |     2.93 | annaEX, goddess, julih, poppins, yungher |
|            6 |     2307 | 2024-04-04 | KG fe           | W   | 0.548      | 0.332        | 0.003 (0.000)    | 0.010 (0.002)    | 0 (0.000) |     1.70 | annaEX, goddess, julih, poppins, yungher |
|            5 |     2480 | 2024-03-27 | Divina fe       | W   | 0.495      | 0.332        | 0.003 (0.001)    | 0.035 (0.006)    | 0 (0.000) |     2.95 | annaEX, goddess, julih, poppins, yungher |
|            4 |     2597 | 2024-03-20 | MIBR fe         | W   | 0.448      | 0.332        | 0.008 (0.001)    | 0.096 (0.014)    | 0 (0.000) |     3.09 | annaEX, goddess, julih, poppins, yungher |
|            3 |     2716 | 2024-03-14 | W7M fe          | W   | 0.408      | 0.332        | 0.003 (0.000)    | 0.053 (0.007)    | 0 (0.000) |     2.41 | annaEX, goddess, julih, poppins, yungher |
|            2 |     2920 | 2024-03-06 | Atrix           | W   | 0.355      | 0.332        | 0.005 (0.001)    | 0.087 (0.010)    | 0 (0.000) |     2.30 | annaEX, goddess, julih, poppins, yungher |
|            1 |     3582 | 2024-02-03 | Brasil Storm fe | W   | 0.142      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.42 | annaEX, goddess, josi, julih, yungher    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,342.12)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.941 | $13,000.00     | $12,235.64      |
| 2024-02-03 |      0.142 | $750.00        | $106.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
